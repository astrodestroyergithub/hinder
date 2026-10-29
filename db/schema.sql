-- ============================================================================
-- HINDER ("Find Your Hoor") — NeonDB Serverless PostgreSQL Schema & Seed Data
-- Compatible with Neon Postgres (https://neon.tech) & @neondatabase/serverless
-- ============================================================================

CREATE EXTENSION IF NOT EXISTS "pgcrypto";

-- 1. Users / Candidate Profiles Table
CREATE TABLE IF NOT EXISTS hinder_users (
    id VARCHAR(64) PRIMARY KEY,
    display_name VARCHAR(120) NOT NULL,
    age INTEGER NOT NULL CHECK (age >= 18 AND age <= 99),
    gender VARCHAR(24) NOT NULL,
    city VARCHAR(120) NOT NULL,
    distance_km INTEGER NOT NULL DEFAULT 5,
    headline VARCHAR(240) NOT NULL,
    bio TEXT NOT NULL,
    niyyah_mode VARCHAR(64) NOT NULL, -- 'nikah_ready', 'chai_vibe', 'wali_approved'
    sect VARCHAR(64) NOT NULL,
    prayer_level VARCHAR(80) NOT NULL,
    mehr_tier VARCHAR(80) NOT NULL,
    mehr_quote TEXT NOT NULL,
    biryani_stance VARCHAR(160) NOT NULL,
    wali_status VARCHAR(160) NOT NULL,
    fajr_alarms VARCHAR(120) NOT NULL,
    deen_dunya_ratio VARCHAR(64) NOT NULL,
    occupation VARCHAR(140) NOT NULL,
    education VARCHAR(140) NOT NULL,
    height VARCHAR(32) NOT NULL,
    languages TEXT[] NOT NULL DEFAULT '{}',
    badges TEXT[] NOT NULL DEFAULT '{}',
    Mutual_like BOOLEAN NOT NULL DEFAULT TRUE,
    noor_score INTEGER NOT NULL DEFAULT 95,
    created_at TIMESTAMPTZ NOT NULL DEFAULT NOW()
);

-- 2. Swipes Table (Right Like, Left Pass, Super Noor, Rewind)
CREATE TABLE IF NOT EXISTS hinder_swipes (
    id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
    swiper_id VARCHAR(64) NOT NULL,
    target_id VARCHAR(64) NOT NULL REFERENCES hinder_users(id) ON DELETE CASCADE,
    direction VARCHAR(24) NOT NULL CHECK (direction IN ('right', 'left', 'super_noor')),
    niyyah_context VARCHAR(64) DEFAULT 'all',
    created_at TIMESTAMPTZ NOT NULL DEFAULT NOW(),
    UNIQUE(swiper_id, target_id)
);

-- 3. Matches Table
CREATE TABLE IF NOT EXISTS hinder_matches (
    id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
    user_a VARCHAR(64) NOT NULL,
    user_b VARCHAR(64) NOT NULL REFERENCES hinder_users(id) ON DELETE CASCADE,
    match_type VARCHAR(24) NOT NULL DEFAULT 'halal_match',
    wali_chaperone_active BOOLEAN NOT NULL DEFAULT TRUE,
    nikah_contract_status VARCHAR(48) NOT NULL DEFAULT 'pending_chai',
    created_at TIMESTAMPTZ NOT NULL DEFAULT NOW(),
    UNIQUE(user_a, user_b)
);

-- 4. Messages Table (Supports Wali Chaperone Bot Interventions)
CREATE TABLE IF NOT EXISTS hinder_messages (
    id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
    match_profile_id VARCHAR(64) NOT NULL REFERENCES hinder_users(id) ON DELETE CASCADE,
    sender_role VARCHAR(24) NOT NULL CHECK (sender_role IN ('me', 'them', 'wali_bot', 'system')),
    sender_name VARCHAR(120) NOT NULL,
    body TEXT NOT NULL,
    created_at TIMESTAMPTZ NOT NULL DEFAULT NOW()
);

-- Indexes for fast discovery & chat queries on NeonDB
CREATE INDEX IF NOT EXISTS idx_hinder_users_niyyah ON hinder_users(niyyah_mode);
CREATE INDEX IF NOT EXISTS idx_hinder_swipes_swiper ON hinder_swipes(swiper_id);
CREATE INDEX IF NOT EXISTS idx_hinder_messages_match ON hinder_messages(match_profile_id, created_at);

-- Seed Initial Hoor & Habibi Profiles
INSERT INTO hinder_users (
    id, display_name, age, gender, city, distance_km, headline, bio,
    niyyah_mode, sect, prayer_level, mehr_tier, mehr_quote,
    biryani_stance, wali_status, fajr_alarms, deen_dunya_ratio,
    occupation, education, height, languages, badges, mutual_like, noor_score
) VALUES
(
    'zoya_01', 'Zoya Al-Mansoor', 25, 'Sister', 'Dubai / Downtown', 3,
    'Looking for someone to lead Maghrib & split kunafa 50/50',
    'Pediatric resident by day, competitive Karak chai sommelier by night. I pray on time, laugh at terrible dad jokes, and already have a Pinterest board for our Ramadan iftar table. Swipe right if you know the difference between Shawarma and Gyro.',
    'nikah_ready', 'Sunni', '5/5 Fajr Warrior', 'Cats & Coffee',
    'One rescue Scottish Fold cat, $500 charity to Gaza relief, and you have to laugh at my Baba''s 6 AM WhatsApp forwards.',
    'Potatoes in Sindhi Biryani = Non-Negotiable Sunnah of Flavor',
    'Uncle Tariq (Retired Colonel) reviews CVs on Thursdays',
    '1 alarm at 4:45 AM (Built different, Alhamdulillah)',
    '80% Deen / 20% Late-Night Memes',
    'Pediatric Resident (MD)', 'Royal College of Surgeons', '5''6" (168 cm)',
    ARRAY['English', 'Arabic', 'Urdu'],
    ARRAY['Hafiza-in-Progress', 'Karak Connoisseur', 'Wali Verified', 'Zero Toxic Exes'],
    TRUE, 99
),
(
    'layla_02', 'Layla Benali', 24, 'Sister', 'Istanbul / Kadikoy', 6,
    'Swipe right for 70,000 angels making dua for our chemistry',
    'UX Architect building ethical fintech. Obsessed with Ottoman architecture, rainy Bosphorus ferry rides, and cats on masjid carpets. Not looking for a haram situationship—either we sign the Nikah or we battle in Mario Kart.',
    'chai_vibe', 'Sunni', '5/5 Fajr Warrior', 'Umrah Trip',
    'Business-class Umrah trip in Ramadan + a lifetime supply of pistachio baklava.',
    'Lamb Mandi > Biryani (Don''t make takfir on my taste buds)',
    'My older brother Hamza is in the lobby with a notepad',
    '2 alarms + smart sunrise lamp',
    '75% Deen / 25% Specialty Pour-Over Coffee',
    'Senior Product Designer', 'Bogazici University', '5''5" (165 cm)',
    ARRAY['English', 'Turkish', 'French', 'Arabic'],
    ARRAY['Tahajjud Regular', 'Masjid Cat Whisperer', 'Halal Foodie'],
    TRUE, 97
),
(
    'nadia_03', 'Nadia Rahman', 26, 'Sister', 'London / Kensington', 8,
    'Completing half my deen so my Ammi stops forwarding rishta PDFs',
    'Corporate lawyer who argues for fun—so choose your mehr negotiation strategy wisely. Looking for a practicing, emotionally intelligent king who washes his own dishes (Sunnah!) and never skips leg day or Jummah.',
    'wali_approved', 'Sunni', 'Jummah & Daily 5', 'Gold Dinar Standard',
    '10 Gold Dinars, a pre-nup written in calligraphy, and never asking "what''s for dinner?" without bringing takeout.',
    'Hyderabadi Dum Biryani is the undisputed Khalifah of rice dishes',
    'Wali Chaperone Mode strictly ON (Ammi has notifications enabled)',
    '3 alarms set 4 minutes apart',
    '85% Deen / 15% Courtroom Drama',
    'M&A Associate Lawyer', 'LSE Law', '5''7" (170 cm)',
    ARRAY['English', 'Bengali', 'Arabic'],
    ARRAY['Sunnah Lifestyle', 'Halal Investor', 'Ammi''s Favorite'],
    TRUE, 96
)
ON CONFLICT (id) DO NOTHING;
