/**
 * Hinder — Netlify Serverless Function with NeonDB (@neondatabase/serverless)
 * Endpoint base: /.netlify/functions/api (redirected from /api/* via netlify.toml)
 */
const { neon } = require('@neondatabase/serverless');

const CORS_HEADERS = {
  'Access-Control-Allow-Origin': '*',
  'Access-Control-Allow-Headers': 'Content-Type, Authorization',
  'Access-Control-Allow-Methods': 'GET, POST, PUT, DELETE, OPTIONS',
  'Content-Type': 'application/json'
};

exports.handler = async (event) => {
  if (event.httpMethod === 'OPTIONS') {
    return { statusCode: 204, headers: CORS_HEADERS, body: '' };
  }

  const dbUrl = process.env.DATABASE_URL || process.env.NEON_DATABASE_URL;
  const path = event.path.replace('/.netlify/functions/api', '').replace('/api', '') || '/health';

  // Graceful diagnostic response if DATABASE_URL is not yet configured in Netlify Environment Variables
  if (!dbUrl) {
    return {
      statusCode: 200,
      headers: CORS_HEADERS,
      body: JSON.stringify({
        ok: true,
        mode: 'hybrid_edge_replica',
        message: 'Set DATABASE_URL in Netlify Site Settings -> Environment Variables to activate live NeonDB PostgreSQL queries.',
        endpoint: path,
        timestamp: new Date().toISOString()
      })
    };
  }

  try {
    const sql = neon(dbUrl);

    // 1. Health & Connection Latency Check
    if (path === '/health' && event.httpMethod === 'GET') {
      const start = Date.now();
      const versionRows = await sql`SELECT version(), current_database(), NOW() as server_time`;
      const latencyMs = Date.now() - start;
      return {
        statusCode: 200,
        headers: CORS_HEADERS,
        body: JSON.stringify({
          ok: true,
          mode: 'neondb_serverless_postgres',
          latencyMs,
          database: versionRows[0]?.current_database || 'neondb',
          serverTime: versionRows[0]?.server_time
        })
      };
    }

    // 2. Fetch Candidate Profiles
    if (path === '/profiles' && event.httpMethod === 'GET') {
      const params = event.queryStringParameters || {};
      const niyyah = params.niyyah || 'all';
      const rows = niyyah === 'all'
        ? await sql`SELECT * FROM hinder_users ORDER BY noor_score DESC LIMIT 50`
        : await sql`SELECT * FROM hinder_users WHERE niyyah_mode = ${niyyah} ORDER BY noor_score DESC LIMIT 50`;
      return {
        statusCode: 200,
        headers: CORS_HEADERS,
        body: JSON.stringify({ ok: true, profiles: rows })
      };
    }

    // 3. Record Swipe (Right / Left / Super Noor) & Auto-Match
    if (path === '/swipes' && event.httpMethod === 'POST') {
      const payload = JSON.parse(event.body || '{}');
      const { swiperId = 'current_user', targetId, direction, niyyahContext = 'all' } = payload;

      await sql`
        INSERT INTO hinder_swipes (swiper_id, target_id, direction, niyyah_context)
        VALUES (${swiperId}, ${targetId}, ${direction}, ${niyyahContext})
        ON CONFLICT (swiper_id, target_id)
        DO UPDATE SET direction = EXCLUDED.direction, created_at = NOW()
      `;

      let matchCreated = false;
      if (direction === 'right' || direction === 'super_noor') {
        const targetRows = await sql`SELECT mutual_like, display_name FROM hinder_users WHERE id = ${targetId}`;
        if (targetRows.length > 0 && targetRows[0].mutual_like) {
          matchCreated = true;
          await sql`
            INSERT INTO hinder_matches (user_a, user_b, match_type)
            VALUES (${swiperId}, ${targetId}, ${direction === 'super_noor' ? 'super_noor_match' : 'halal_match'})
            ON CONFLICT (user_a, user_b) DO NOTHING
          `;
        }
      }

      return {
        statusCode: 200,
        headers: CORS_HEADERS,
        body: JSON.stringify({ ok: true, targetId, direction, matchCreated })
      };
    }

    // 4. Persist Chat Message or Wali Chaperone Intervention
    if (path === '/messages' && event.httpMethod === 'POST') {
      const payload = JSON.parse(event.body || '{}');
      const { matchProfileId, senderRole = 'me', senderName = 'You', body } = payload;
      const inserted = await sql`
        INSERT INTO hinder_messages (match_profile_id, sender_role, sender_name, body)
        VALUES (${matchProfileId}, ${senderRole}, ${senderName}, ${body})
        RETURNING id, created_at
      `;
      return {
        statusCode: 200,
        headers: CORS_HEADERS,
        body: JSON.stringify({ ok: true, message: inserted[0] })
      };
    }

    return {
      statusCode: 404,
      headers: CORS_HEADERS,
      body: JSON.stringify({ ok: false, error: `Unknown API route: ${path}` })
    };
  } catch (error) {
    return {
      statusCode: 500,
      headers: CORS_HEADERS,
      body: JSON.stringify({ ok: false, error: error.message })
    };
  }
};
