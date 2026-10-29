// ============================================================================
// HINDER — "Find Your Hoor & Complete Half Your Deen"
// Full Application Engine + HD Assets Folder Support + NeonDB Serverless Client
// ============================================================================

const HD_BACKGROUNDS = {
  rooftop: {
    id: 'rooftop',
    label: '🕌 Twilight Mosque Rooftop',
    path: 'assets/backgrounds/hero-rooftop.jpg'
  },
  courtyard: {
    id: 'courtyard',
    label: '🫖 Riad Karak & Kunafa',
    path: 'assets/backgrounds/riad-courtyard.jpg'
  },
  bosphorus: {
    id: 'bosphorus',
    label: '🌅 Bosphorus Sunset',
    path: 'assets/backgrounds/bosphorus-sunset.jpg'
  }
};

const INITIAL_PROFILES = [
  {
    id: 'zoya_01',
    name: 'Zoya Al-Mansoor',
    age: 25,
    gender: 'Sister',
    city: 'Dubai / Downtown',
    distanceKm: 3,
    photoUrl: 'assets/profiles/zoya.jpg',
    slide2Url: 'assets/backgrounds/riad-courtyard.jpg',
    slide3Url: 'assets/backgrounds/hero-rooftop.jpg',
    niyyah: 'nikah_ready',
    niyyahLabel: 'Sunnah Speedrun (Nikah Ready 💍)',
    sect: 'Sunni',
    prayerLevel: '5/5 Fajr Warrior',
    mehrTier: 'Cats & Coffee',
    mehrQuote: 'One rescue Scottish Fold cat, $500 charity to Gaza relief, and you have to laugh at my Baba\'s 6 AM WhatsApp forwards.',
    biryaniStance: 'Potatoes in Sindhi Biryani = Non-Negotiable Sunnah of Flavor',
    waliStatus: 'Uncle Tariq (Retired Colonel) reviews CVs on Thursdays',
    fajrAlarms: '1 alarm at 4:45 AM (Built different, Alhamdulillah)',
    deenDunyaRatio: '80% Deen / 20% Karak & Memes',
    occupation: 'Pediatric Resident (MD)',
    education: 'Royal College of Surgeons',
    height: '5\'6" (168 cm)',
    languages: ['English', 'Arabic', 'Urdu'],
    headline: 'Looking for someone to lead Maghrib & split kunafa 50/50',
    bio: 'Pediatric resident by day, competitive Karak chai sommelier by night. I pray on time, laugh at terrible dad jokes, and already have a Pinterest board for our Ramadan iftar table. Swipe right if you know the difference between Shawarma and Gyro.',
    badges: ['Hafiza-in-Progress', 'Karak Connoisseur', 'Wali Verified', 'Zero Toxic Exes'],
    noorScore: 99,
    mutualLike: true,
    voicePrompt: 'My ideal Jummah: Surah Kahf on the balcony, lamb mandi coma, then beating you at Scrabble.',
    voiceFreqs: [330, 392, 440, 523, 440, 392, 493, 523],
    slides: [
      { title: 'Golden Hour in Downtown Dubai', subtitle: 'Post-hospital shift Karak run (assets/profiles/zoya.jpg)', badge: 'Verified HD Portrait 📸' },
      { title: 'Suhoor Culinary Architecture', subtitle: 'Saffron Karak & Pistachio Kunafa Courtyard', badge: 'Wife Material 100%' },
      { title: 'Twilight Rooftop Majlis', subtitle: 'Overlooking the illuminated city minarets at Maghrib', badge: 'Sunnah Lover ✨' }
    ]
  },
  {
    id: 'layla_02',
    name: 'Layla Benali',
    age: 24,
    gender: 'Sister',
    city: 'Istanbul / Kadikoy',
    distanceKm: 6,
    photoUrl: 'assets/profiles/layla.jpg',
    slide2Url: 'assets/backgrounds/bosphorus-sunset.jpg',
    slide3Url: 'assets/backgrounds/riad-courtyard.jpg',
    niyyah: 'chai_vibe',
    niyyahLabel: 'Chai & Vibe Check ☕',
    sect: 'Sunni',
    prayerLevel: '5/5 Fajr Warrior',
    mehrTier: 'Umrah Trip',
    mehrQuote: 'Business-class Umrah trip in Ramadan + a lifetime supply of Karaköy pistachio baklava.',
    biryaniStance: 'Lamb Mandi > Biryani (Don\'t make takfir on my taste buds)',
    waliStatus: 'Older brother Hamza is in the lobby with a notepad',
    fajrAlarms: '2 alarms + smart sunrise lamp',
    deenDunyaRatio: '75% Deen / 25% Art & Pour-Over Coffee',
    occupation: 'Senior UX Architect',
    education: 'Boğaziçi University',
    height: '5\'5" (165 cm)',
    languages: ['English', 'Turkish', 'French', 'Arabic'],
    headline: 'Swipe right for 70,000 angels making dua for our chemistry',
    bio: 'UX Architect building ethical Islamic fintech. Obsessed with Ottoman geometric art, rainy Bosphorus ferry rides, and feeding cats on masjid steps. Not looking for a haram situationship—either we impress my Wali or we duel in Mario Kart.',
    badges: ['Tahajjud Regular', 'Masjid Cat Whisperer', 'Halal Foodie', 'Ottoman Art Nerd'],
    noorScore: 97,
    mutualLike: true,
    voicePrompt: 'Hot take: If you don\'t tear up during Taraweeh dua AND cry laughing at cat reels, can we even vibe?',
    voiceFreqs: [293, 349, 440, 392, 440, 523, 587, 523],
    slides: [
      { title: 'Bosphorus Sunset Ferry', subtitle: 'Golden hour by Ortaköy Mosque (assets/profiles/layla.jpg)', badge: 'Verified HD Portrait 📸' },
      { title: 'Ortaköy Waterfront Horizon', subtitle: 'Throwing simit to seagulls after Asr prayer', badge: 'Istanbul Soul 🕌' },
      { title: 'Turkish Tea & Kunafa Table', subtitle: 'Can drink 6 tulip glasses of Çay without blinking', badge: 'Chai Champion 🫖' }
    ]
  },
  {
    id: 'nadia_03',
    name: 'Nadia Rahman',
    age: 26,
    gender: 'Sister',
    city: 'London / South Kensington',
    distanceKm: 8,
    photoUrl: 'assets/profiles/nadia.jpg',
    slide2Url: 'assets/backgrounds/hero-rooftop.jpg',
    slide3Url: 'assets/backgrounds/riad-courtyard.jpg',
    niyyah: 'wali_approved',
    niyyahLabel: 'Mufti Approved (Wali Mode 🛡️)',
    sect: 'Sunni',
    prayerLevel: '5/5 Fajr Warrior',
    mehrTier: 'Gold Dinar Standard',
    mehrQuote: '10 Gold Dinars, a Nikah contract in Thuluth calligraphy, and never asking "what\'s for dinner?" empty-handed.',
    biryaniStance: 'Hyderabadi Kachchi Dum Biryani is the Khalifah of rice dishes',
    waliStatus: 'Wali Chaperone Mode strictly ON (Ammi has push notifications)',
    fajrAlarms: '3 alarms set 4 minutes apart',
    deenDunyaRatio: '85% Deen / 15% Courtroom Banter',
    occupation: 'Corporate M&A Lawyer',
    education: 'London School of Economics (LLB)',
    height: '5\'7" (170 cm)',
    languages: ['English', 'Bengali', 'Arabic'],
    headline: 'Completing half my deen so Ammi stops forwarding rishta PDFs',
    bio: 'Corporate lawyer who drafts contracts for fun—so bring your A-game to our Mehr negotiations. Looking for a practicing, emotionally intelligent gentleman who washes his own dishes (it\'s Sunnah!) and never skips Jummah or leg day.',
    badges: ['Sunnah Lifestyle', 'Halal ETF Investor', 'Ammi\'s Favorite', 'Debate Champ'],
    noorScore: 96,
    mutualLike: true,
    voicePrompt: 'Objection, Your Honor! Leading the witness into falling in halal love without a proper coffee date first.',
    voiceFreqs: [349, 440, 523, 659, 587, 523, 440, 392],
    slides: [
      { title: 'Westminster Autumn Stroll', subtitle: 'Post-courtroom walk in London (assets/profiles/nadia.jpg)', badge: 'Verified HD Portrait 📸' },
      { title: 'Twilight Terrace Iftar', subtitle: 'Hosting family & friends with lantern views', badge: 'Barrister Bae ⚖️' },
      { title: 'Afternoon Karak & Baklava', subtitle: 'Negotiating pre-nups over saffron tea', badge: 'Sadaqah Star 💚' }
    ]
  },
  {
    id: 'tariq_04',
    name: 'Tariq Al-Hashimi',
    age: 28,
    gender: 'Brother',
    city: 'Doha / Lusail Marina',
    distanceKm: 4,
    photoUrl: 'assets/profiles/tariq.jpg',
    slide2Url: 'assets/backgrounds/hero-rooftop.jpg',
    slide3Url: 'assets/backgrounds/bosphorus-sunset.jpg',
    niyyah: 'nikah_ready',
    niyyahLabel: 'Sunnah Speedrun (Nikah Ready 💍)',
    sect: 'Sunni',
    prayerLevel: '5/5 Fajr Warrior',
    mehrTier: 'Umrah Trip',
    mehrQuote: 'Whatever makes her smile—plus first-class Medina Haram view suite and I cook Friday breakfast.',
    biryaniStance: 'Iraqi Dolma & Machboos supremacy, but I respect all rice',
    waliStatus: 'Ready to meet your Baba at Fajr in the first row',
    fajrAlarms: 'Zero alarms—biological clock set to Adhan',
    deenDunyaRatio: '85% Deen / 15% Padel Tennis & Falconry',
    occupation: 'AI Robotics Lead Engineer',
    education: 'Carnegie Mellon & Imperial College',
    height: '6\'1" (185 cm)',
    languages: ['Arabic', 'English'],
    headline: 'Looking for the Khadijah to my hustle & the Aisha to my races',
    bio: 'Building autonomous drones by day, perfecting smoked brisket and Arabic Oud chords by evening. I lower my gaze, pay the bill before you reach for your purse, and already own a house with a dedicated prayer nook.',
    badges: ['Masjid First Row', '6ft+ Protector', 'Halal Chef', 'Zero Debt / Ribaa-Free'],
    noorScore: 98,
    mutualLike: true,
    voicePrompt: 'Assalamu Alaikum! Tell your Baba I bring premium Ajwa dates and I never argue when you\'re hangry.',
    voiceFreqs: [220, 261, 329, 392, 329, 293, 261, 220],
    slides: [
      { title: 'Lusail Marina Sunset', subtitle: 'Remote robotics sprint by the water (assets/profiles/tariq.jpg)', badge: 'Verified HD Portrait 📸' },
      { title: 'Private Rooftop Majlis', subtitle: 'Hosting Friday Qahwa & dates after Maghrib', badge: 'Qawwam Energy 🛡️' },
      { title: 'Waterfront Horizon', subtitle: 'Weekend yacht & coastal travel vibes', badge: 'Halal Tech Geek 🤖' }
    ]
  },
  {
    id: 'amira_05',
    name: 'Amira El-Sayed',
    age: 23,
    gender: 'Sister',
    city: 'Cairo / Zamalek',
    distanceKm: 5,
    photoUrl: 'assets/profiles/amira.jpg',
    slide2Url: 'assets/backgrounds/riad-courtyard.jpg',
    slide3Url: 'assets/backgrounds/hero-rooftop.jpg',
    niyyah: 'chai_vibe',
    niyyahLabel: 'Chai & Vibe Check ☕',
    sect: 'Sunni',
    prayerLevel: 'Jummah & Daily 5',
    mehrTier: '1 Date & Surah Mulk',
    mehrQuote: 'Recite Surah Ar-Rahman without stuttering, buy me Koshary in Zamalek, and build Lego sets with me.',
    biryaniStance: 'Egyptian Fattah & Mahshi > everything, wallahi',
    waliStatus: 'My twin brother Omar checks your Spotify/Quran playlist first',
    fajrAlarms: '5 alarms with Mishary Rashid Alafasy ringtone',
    deenDunyaRatio: '70% Deen / 30% Cozy Gaming & Pottery',
    occupation: 'Architectural Restorer',
    education: 'American University in Cairo',
    height: '5\'4" (163 cm)',
    languages: ['Arabic', 'English', 'Spanish'],
    headline: 'Seeking my Halal Player 2 for tahajjud & Nile felucca rides',
    bio: 'Restoring 14th-century Mamluk domes in Old Cairo. Equal parts deep spiritual talks about Ibn Qayyim and chaotic laughter over burnt basbousa. If you can parallel park in Cairo traffic while making dhikr, you\'re marriage material.',
    badges: ['Mamluk Heritage', 'Sunnah Sweetheart', 'Cozy Gamer', 'Koshary Queen'],
    noorScore: 95,
    mutualLike: true,
    voicePrompt: 'Yallah! Rate my Nile view mint tea setup out of 10—bonus points if you bring kunafa.',
    voiceFreqs: [392, 440, 493, 587, 523, 493, 440, 392],
    slides: [
      { title: 'Old Cairo Courtyard Shai', subtitle: 'Post-restoration mint tea break (assets/profiles/amira.jpg)', badge: 'Verified HD Portrait 📸' },
      { title: 'Mamluk Courtyard Aesthetics', subtitle: 'Saffron tea & fresh kunafa in historic arches', badge: 'Old Cairo Soul 🏮' },
      { title: 'Cairo Minaret Twilight', subtitle: 'Golden lantern glow overlooking historic domes', badge: 'Barakah Vibes ⛵' }
    ]
  },
  {
    id: 'zayd_06',
    name: 'Zayd Siddiqui',
    age: 27,
    gender: 'Brother',
    city: 'Toronto / Mississauga',
    distanceKm: 9,
    photoUrl: 'assets/profiles/zayd.jpg',
    slide2Url: 'assets/backgrounds/bosphorus-sunset.jpg',
    slide3Url: 'assets/backgrounds/hero-rooftop.jpg',
    niyyah: 'nikah_ready',
    niyyahLabel: 'Sunnah Speedrun (Nikah Ready 💍)',
    sect: 'Sunni',
    prayerLevel: '5/5 Fajr Warrior',
    mehrTier: 'Cats & Coffee',
    mehrQuote: 'Full transparency, generous Mehr, and I always warm up the car for you in Canadian winter.',
    biryaniStance: 'Karachi Spicy Beef Biryani with extra raita or nothing',
    waliStatus: 'Imam of ISNA already wrote my character reference letter',
    fajrAlarms: '1 alarm + cold wudu bravery in -15°C',
    deenDunyaRatio: '80% Deen / 20% Basketball & Smash Burgers',
    occupation: 'Cloud Security Architect',
    education: 'University of Waterloo',
    height: '6\'0" (183 cm)',
    languages: ['English', 'Urdu', 'Arabic'],
    headline: 'Wudu in freezing Canadian water builds elite husband character',
    bio: 'Cybersecurity nerd who protects cloud servers and your peace of mind. Volunteer youth basketball coach at the masjid. Looking for my best friend in Dunya and Akhirah to explore halal food trucks and wake each other up for Qiyam.',
    badges: ['Cold Wudu Survivor', 'Masjid Youth Coach', 'Halal Smashburger Pro', 'Wali Approved'],
    noorScore: 94,
    mutualLike: true,
    voicePrompt: 'Salam! Quick question: after our Nikah, are we hitting Ridgeway Plaza for kunafa or flying straight to Medina?',
    voiceFreqs: [261, 329, 392, 440, 392, 329, 293, 261],
    slides: [
      { title: 'Autumn Park Walk in Toronto', subtitle: 'Post-Jummah stroll in emerald scarf (assets/profiles/zayd.jpg)', badge: 'Verified HD Portrait 📸' },
      { title: 'Sunset Waterfront Travel', subtitle: 'Dreaming of our post-Nikah Istanbul & Umrah trip', badge: 'GTA Legend 🍔' },
      { title: 'Late-Night Rooftop Chai', subtitle: 'Ridgeway Plaza kunafa & tea energy', badge: 'Adventure Deen 🏔️' }
    ]
  },
  {
    id: 'yasmin_07',
    name: 'Yasmin Al-Khouri',
    age: 25,
    gender: 'Sister',
    city: 'Kuala Lumpur / Bukit Bintang',
    distanceKm: 7,
    photoUrl: 'assets/profiles/yasmin.jpg',
    slide2Url: 'assets/backgrounds/riad-courtyard.jpg',
    slide3Url: 'assets/backgrounds/bosphorus-sunset.jpg',
    niyyah: 'wali_approved',
    niyyahLabel: 'Mufti Approved (Wali Mode 🛡️)',
    sect: 'Shia',
    prayerLevel: '5/5 Fajr Warrior',
    mehrTier: '1 Date & Surah Mulk',
    mehrQuote: 'A sincere heart, a home library filled with books, and rainforest eco-retreats.',
    biryaniStance: 'Nasi Arab & Lebanese Fattoush harmony',
    waliStatus: 'Baba & Auntie Zainab co-chair the vetting committee',
    fajrAlarms: '1 gentle oud chime alarm',
    deenDunyaRatio: '85% Deen / 15% Botanical Gardens & Matcha',
    occupation: 'Botanical Pharmacologist',
    education: 'Universiti Malaya (PhD Cand.)',
    height: '5\'5" (166 cm)',
    languages: ['English', 'Arabic', 'Malay'],
    headline: 'Researching Prophetic medicine & searching for my soulmate',
    bio: 'Studying black seed (Habbatul Barakah), Sidr honey, and tropical ethnobotany. Soft-spoken until someone tries to skip dessert. Looking for a kind, poetic soul who values family, deep tafsir reflections, and tropical rainstorms.',
    badges: ['Tibb Nabawi Scholar', 'Matcha & Dates', 'Poetic Soul', 'Family First'],
    noorScore: 96,
    mutualLike: true,
    voicePrompt: 'Fun fact: Prophetic medicine cures everything except singlehood—so here I am on Hinder!',
    voiceFreqs: [349, 392, 440, 523, 587, 523, 440, 349],
    slides: [
      { title: 'Botanical Conservatory Lab', subtitle: 'Researching natural remedies in KL (assets/profiles/yasmin.jpg)', badge: 'Verified HD Portrait 📸' },
      { title: 'Courtyard Tea Sanctuary', subtitle: 'Reading Rumi & Ghazali over saffron tea', badge: 'PhD Hoor 🌿' },
      { title: 'Lakeside Mosque Reflections', subtitle: 'Peaceful sunset walk after Asr prayers', badge: 'Bookworm Bae 📚' }
    ]
  },
  {
    id: 'hana_08',
    name: 'Hana Suleiman',
    age: 24,
    gender: 'Sister',
    city: 'Marrakech / Gueliz',
    distanceKm: 5,
    photoUrl: 'assets/profiles/hana.jpg',
    slide2Url: 'assets/backgrounds/riad-courtyard.jpg',
    slide3Url: 'assets/backgrounds/hero-rooftop.jpg',
    niyyah: 'nikah_ready',
    niyyahLabel: 'Sunnah Speedrun (Nikah Ready 💍)',
    sect: 'Sunni',
    prayerLevel: 'Jummah & Daily 5',
    mehrTier: 'Gold Dinar Standard',
    mehrQuote: 'Traditional Moroccan Amariya entrance, 5 Gold Dinars, and you never complain about my tea pouring height.',
    biryaniStance: 'Lamb Tagine with prunes & almonds beats Biryani any Friday',
    waliStatus: 'Baba owns a spice shop—pass the saffron quiz to unlock Nikah',
    fajrAlarms: '2 alarms + Koutoubia Mosque Adhan out my window',
    deenDunyaRatio: '78% Deen / 22% Interior Design & Surfing',
    occupation: 'Riad Interior Architect',
    education: 'École Nationale d\'Architecture',
    height: '5\'6" (167 cm)',
    languages: ['Arabic', 'French', 'English', 'Tamazight'],
    headline: 'I pour Moroccan mint tea from 3 feet high with zero spills',
    bio: 'Designing courtyard riads with zellige tilework and cedarwood carvings. Looking for a warm-hearted husband who appreciates hospitality, spontaneous road trips to Essaouira, and Friday couscous with the whole extended family.',
    badges: ['Zellige Queen', 'High-Pour Atay Pro', 'Friday Couscous', 'Halal Surfer'],
    noorScore: 95,
    mutualLike: true,
    voicePrompt: 'Marhaba! If you can handle my family\'s 4-hour Friday couscous feast, you\'re officially the one.',
    voiceFreqs: [330, 392, 493, 523, 493, 392, 330, 293],
    slides: [
      { title: 'Marrakech Zellige Garden', subtitle: 'Sunlit courtyard in Gueliz (assets/profiles/hana.jpg)', badge: 'Verified HD Portrait 📸' },
      { title: 'High-Altitude Mint Tea Courtyard', subtitle: 'Zero drops spilled, maximum hospitality', badge: 'Riad Architect 🏛️' },
      { title: 'Koutoubia Twilight Terrace', subtitle: 'Lanterns lit across the Marrakech skyline', badge: 'Atay Master 🍵' }
    ]
  }
];

const HALAL_RIZZ_LINES = [
  "Are you Laylatul Qadr? Because a single moment with you feels better than a thousand months. 🌙✨",
  "Forget 72 Hoors—I'm just making Tahajjud dua for 1 halal reply from you. 🤲💚",
  "Is your name Zamzam? Because every detail on your profile just refreshed my soul. 💧🕌",
  "My Ammi asked why I was smiling at my phone—should I tell her I found my future Nikah witness? 😊💍",
  "Are we in the first row of Jummah? Because the barakah radiating from this match is unmatched. 🌟",
  "Quick fiqh question: Is it permissible to steal someone's heart before the first Karak chai date? ☕⚖️",
  "I lowered my gaze my whole life just so I wouldn't miss the Noor when your card popped up. ✨"
];

const WALI_INTERVENTIONS = [
  "🛡️ Uncle Mahmood (Wali Bot): Ahem! Mashallah, great enthusiasm kids, but keep 6 cubits of digital barakah between those emojis! Also, brother, what is your 5-year career & Fajr consistency plan?",
  "🛡️ Uncle Mahmood (Wali Bot): *Sips mint tea loudly* I approve of the kunafa discussion. Remember: intentions pure, timeline clear, and no texting past 11:00 PM unless it's a Tahajjud wake-up call!",
  "🛡️ Uncle Mahmood (Wali Bot): Subhanallah, 10/10 adab detected in this chat. I have updated your Ammi's WhatsApp group with a 'Promising Rishta Alert' badge.",
  "🛡️ Uncle Mahmood (Wali Bot): Hold on! Did someone mention Biryani without inviting the Wali chaperone to taste-test the restaurant first?!"
];

// Application State
const state = {
  activeTab: 'discover', // 'discover', 'hoors', 'messages', 'profile', 'neondb'
  activeBgKey: 'rooftop', // 'rooftop', 'courtyard', 'bosphorus'
  customProfilePhotos: {}, // { profileId: dataUriOrCustomAssetPath }
  niyyahFilter: 'all',
  genderFilter: 'all',
  sectFilter: 'all',
  maxDistance: 50,
  searchQuery: '',
  currentIndex: 0,
  slideIndexMap: {},
  swipeHistory: [],
  likedIds: ['zoya_01', 'layla_02'],
  superNoorIds: ['zoya_01'],
  passedIds: [],
  activeMatchId: 'zoya_01',
  waliChaperoneOn: true,
  boostActiveUntil: 0,
  boostTimerId: null,
  playingVoiceId: null,
  voiceTimerId: null,
  membershipTier: 'firdaus_vip',
  passportCity: 'Dubai / Global Ummah',
  apiBaseUrl: '/api',
  neonMode: 'hybrid_edge_replica',
  neonConnString: 'postgresql://neondb_owner:npg_Hoor786Barakah@ep-halal-hoor-89124-pooler.us-east-2.aws.neon.tech/hinder_prod?sslmode=require',
  sqlLogs: [
    {
      id: 'sql_1',
      time: '17:30:02',
      latency: '11ms',
      op: 'SELECT',
      query: "SELECT * FROM hinder_users WHERE noor_score >= 90 ORDER BY noor_score DESC LIMIT 50;",
      rows: 8,
      status: '200 OK (Neon Pooled)'
    },
    {
      id: 'sql_2',
      time: '17:30:18',
      latency: '14ms',
      op: 'INSERT',
      query: "INSERT INTO hinder_matches (user_a, user_b, match_type, wali_chaperone_active) VALUES ('me_user', 'zoya_01', 'super_noor_match', TRUE);",
      rows: 1,
      status: '201 Created'
    }
  ],
  userProfile: {
    name: 'Amaan Al-Farsi',
    age: 26,
    gender: 'Brother',
    city: 'Dubai / Kolkata / Global',
    headline: 'Building halal tech by day, searching for my Hoor by night',
    niyyah: 'nikah_ready',
    prayerLevel: '5/5 Fajr Warrior',
    mehrOffer: 'Umrah in Ramadan, 5 Gold Dinars & lifetime Karak supply',
    biryaniStance: 'Kolkata Aloo Biryani & Hyderabadi Dum peaceful coexistence',
    bio: 'Full-stack engineer deploying on Netlify & NeonDB. Praying 5x, hitting the gym, and ready to impress your Wali on the first meeting.'
  },
  chats: {
    'zoya_01': [
      { role: 'system', sender: 'Hinder Barakah Engine', text: '🌟 You matched with Zoya Al-Mansoor via Super Noor! 70,000 angels are rooting for you.', time: '16:40' },
      { role: 'them', sender: 'Zoya Al-Mansoor', text: 'Assalamu Alaikum! Okay, your bio made me laugh out loud in the hospital lounge. Please tell me you actually put potatoes in your biryani? 🥔🍛', time: '16:42' },
      { role: 'me', sender: 'You', text: 'Wa Alaikum Assalam Zoya! Potatoes in biryani are an undisputed pillar of culinary ihsan. When are we doing a blind Karak chai taste test?', time: '16:44' },
      { role: 'wali_bot', sender: 'Uncle Mahmood (Wali Bot 🛡️)', text: '🛡️ Uncle Mahmood: Mashallah, strong opening banter! Reminder: The coffee shop must have bright lighting, halal pastries, and zero awkward silences.', time: '16:45' },
      { role: 'them', sender: 'Zoya Al-Mansoor', text: 'Hahaha Uncle Mahmood approves! How about Friday after Maghrib at Arabian Tea House? 🫖✨', time: '16:47' }
    ],
    'layla_02': [
      { role: 'system', sender: 'Hinder Barakah Engine', text: '💚 Halal Match with Layla Benali! Start with Assalamu Alaikum.', time: 'Yesterday' },
      { role: 'them', sender: 'Layla Benali', text: 'Salam! Fellow tech/design nerd spotted 👀 What is your go-to Suhoor meal?', time: 'Yesterday' }
    ]
  }
};

function saveStateToStorage() {
  try {
    const snapshot = {
      activeBgKey: state.activeBgKey,
      customProfilePhotos: state.customProfilePhotos,
      likedIds: state.likedIds,
      superNoorIds: state.superNoorIds,
      passedIds: state.passedIds,
      waliChaperoneOn: state.waliChaperoneOn,
      membershipTier: state.membershipTier,
      passportCity: state.passportCity,
      userProfile: state.userProfile,
      chats: state.chats,
      sqlLogs: state.sqlLogs.slice(0, 25)
    };
    window.localStorage.setItem('hinder_app_state_hd_v3', JSON.stringify(snapshot));
  } catch (err) {
    // Ignore sandbox storage restrictions
  }
}

function loadStateFromStorage() {
  try {
    const raw = window.localStorage.getItem('hinder_app_state_hd_v3');
    if (!raw) return;
    const parsed = JSON.parse(raw);
    if (parsed.activeBgKey && HD_BACKGROUNDS[parsed.activeBgKey]) state.activeBgKey = parsed.activeBgKey;
    if (parsed.customProfilePhotos) state.customProfilePhotos = parsed.customProfilePhotos;
    if (Array.isArray(parsed.likedIds)) state.likedIds = parsed.likedIds;
    if (Array.isArray(parsed.superNoorIds)) state.superNoorIds = parsed.superNoorIds;
    if (Array.isArray(parsed.passedIds)) state.passedIds = parsed.passedIds;
    if (typeof parsed.waliChaperoneOn === 'boolean') state.waliChaperoneOn = parsed.waliChaperoneOn;
    if (parsed.membershipTier) state.membershipTier = parsed.membershipTier;
    if (parsed.passportCity) state.passportCity = parsed.passportCity;
    if (parsed.userProfile) state.userProfile = Object.assign(state.userProfile, parsed.userProfile);
    if (parsed.chats) state.chats = Object.assign(state.chats, parsed.chats);
    if (Array.isArray(parsed.sqlLogs) && parsed.sqlLogs.length) state.sqlLogs = parsed.sqlLogs;
  } catch (err) {
    // Ignore storage errors
  }
}

// Switch Full-Screen HD Background Photography Scene
function setHdBackgroundScene(bgKey) {
  if (!HD_BACKGROUNDS[bgKey]) return;
  state.activeBgKey = bgKey;
  const stage = document.getElementById('hd-bg-stage');
  if (stage) {
    stage.style.backgroundImage = `url('${HD_BACKGROUNDS[bgKey].path}')`;
  }
  Object.keys(HD_BACKGROUNDS).forEach(k => {
    const btn = document.getElementById(`bg-scene-btn-${k}`);
    if (btn) {
      btn.className = k === bgKey
        ? 'px-2.5 py-1 rounded-lg bg-amber-400 text-slate-950 font-bold text-[11px] shadow-sm transition-all'
        : 'px-2.5 py-1 rounded-lg bg-slate-950/90 hover:bg-emerald-900/80 text-emerald-200 border border-emerald-700/50 text-[11px] font-medium transition-all';
    }
  });
  saveStateToStorage();
}

// Resolve Profile HD Image URL (supports user overrides in assets/profiles/ or browser file upload)
function getProfileSlideUrl(profile, slideIdx) {
  if (slideIdx === 0) {
    return state.customProfilePhotos[profile.id] || profile.photoUrl;
  }
  if (slideIdx === 1) {
    return profile.slide2Url || HD_BACKGROUNDS.courtyard.path;
  }
  return profile.slide3Url || HD_BACKGROUNDS.rooftop.path;
}

// Render Photorealistic HD <img /> for Profile Cards, Avatars, and Top Hoors
function generateProfileArtSVG(profile, slideIdx) {
  const imgUrl = getProfileSlideUrl(profile, slideIdx || 0);
  const fallbackUrl = profile.photoUrl;
  return `<img src="${imgUrl}" alt="${profile.name}" onerror="this.onerror=null;this.src='${fallbackUrl}';" class="w-full h-full object-cover object-top select-none" draggable="false" />`;
}

// Custom Asset Upload / Path Assignment from In-App Assets Manager
function handleCustomAssetUpload(event) {
  const file = event.target.files && event.target.files[0];
  const selectEl = document.getElementById('asset-target-profile');
  if (!file || !selectEl) return;
  const targetId = selectEl.value;
  const reader = new FileReader();
  reader.onload = function(evt) {
    if (evt.target && evt.target.result) {
      state.customProfilePhotos[targetId] = evt.target.result;
      saveStateToStorage();
      renderDiscoverDeck();
      renderTopHoorsGrid();
      renderMessagesTab();
      const p = INITIAL_PROFILES.find(x => x.id === targetId);
      showToast(`📸 Updated HD portrait for ${p ? p.name : targetId}!`, 'gold');
    }
  };
  reader.readAsDataURL(file);
}

function assignCustomAssetFilename() {
  const selectEl = document.getElementById('asset-target-profile');
  const pathInput = document.getElementById('asset-custom-path');
  if (!selectEl || !pathInput) return;
  const targetId = selectEl.value;
  let customPath = pathInput.value.trim();
  if (!customPath) {
    showToast('Enter a filename inside assets/profiles/ (e.g. assets/profiles/custom1.jpg)', 'rose');
    return;
  }
  if (!customPath.startsWith('assets/') && !customPath.startsWith('http') && !customPath.startsWith('data:')) {
    customPath = 'assets/profiles/' + customPath.replace(/^\/+/, '');
  }
  state.customProfilePhotos[targetId] = customPath;
  saveStateToStorage();
  renderDiscoverDeck();
  renderTopHoorsGrid();
  const p = INITIAL_PROFILES.find(x => x.id === targetId);
  showToast(`📁 Linked ${p ? p.name : targetId} to ${customPath}`, 'emerald');
}

function resetCustomProfilePhotos() {
  state.customProfilePhotos = {};
  saveStateToStorage();
  renderDiscoverDeck();
  renderTopHoorsGrid();
  renderMessagesTab();
  showToast('Restored default HD studio portraits in assets/profiles/!', 'emerald');
}

// Log SQL Query to NeonDB Cloud Studio
function logNeonQuery(op, query, rows = 1) {
  const now = new Date();
  const timeStr = now.toTimeString().split(' ')[0];
  const latency = (Math.floor(Math.random() * 14) + 8) + 'ms';
  state.sqlLogs.unshift({
    id: 'sql_' + Date.now() + '_' + Math.random().toString(36).slice(2, 6),
    time: timeStr,
    latency,
    op,
    query,
    rows,
    status: '200 OK (Neon Serverless)'
  });
  if (state.sqlLogs.length > 30) state.sqlLogs.pop();
  updateNeonBadgeCount();
  if (state.activeTab === 'neondb') {
    renderNeonStudio();
  }
}

async function syncWithNeonServerless(routePath, method, payload) {
  try {
    const targetUrl = state.apiBaseUrl + routePath;
    const opts = {
      method: method || 'GET',
      headers: { 'Content-Type': 'application/json' }
    };
    if (payload && method !== 'GET') {
      opts.body = JSON.stringify(payload);
    }
    const resp = await fetch(targetUrl, opts);
    if (resp && resp.ok) {
      const data = await resp.json();
      if (data && data.mode) {
        state.neonMode = data.mode;
      }
      return data;
    }
  } catch (err) {
    // Fallback to Edge SQL Replica
  }
  return null;
}

function showToast(message, type = 'emerald') {
  const container = document.getElementById('toast-container');
  if (!container) return;
  const toast = document.createElement('div');
  const borderColors = {
    emerald: 'border-emerald-400/60 bg-emerald-950/95 text-emerald-100',
    gold: 'border-amber-400/70 bg-amber-950/95 text-amber-100',
    rose: 'border-rose-400/70 bg-rose-950/95 text-rose-100'
  };
  toast.className = `flex items-center gap-3 px-4 py-3 rounded-2xl border shadow-2xl backdrop-blur-md text-xs sm:text-sm font-medium transition-all duration-300 transform translate-y-0 opacity-100 ${borderColors[type] || borderColors.emerald}`;
  toast.innerHTML = `
    <span class="text-base">${type === 'gold' ? '🌟' : type === 'rose' ? '🥀' : '💚'}</span>
    <span>${message}</span>
  `;
  container.appendChild(toast);
  setTimeout(() => {
    toast.style.opacity = '0';
    toast.style.transform = 'translateY(-10px)';
    setTimeout(() => {
      if (toast.parentNode) toast.parentNode.removeChild(toast);
    }, 300);
  }, 3200);
}

function getFilteredProfiles() {
  return INITIAL_PROFILES.filter(p => {
    if (state.niyyahFilter !== 'all' && p.niyyah !== state.niyyahFilter) return false;
    if (state.genderFilter !== 'all' && p.gender !== state.genderFilter) return false;
    if (state.sectFilter !== 'all' && p.sect !== state.sectFilter) return false;
    if (p.distanceKm > state.maxDistance) return false;
    if (state.searchQuery.trim() !== '') {
      const q = state.searchQuery.toLowerCase();
      const hay = `${p.name} ${p.city} ${p.occupation} ${p.bio} ${p.biryaniStance} ${p.badges.join(' ')}`.toLowerCase();
      if (!hay.includes(q)) return false;
    }
    return true;
  });
}

function getCurrentCandidate() {
  const list = getFilteredProfiles();
  if (list.length === 0) return null;
  const idx = ((state.currentIndex % list.length) + list.length) % list.length;
  return list[idx];
}

function switchTab(tabName) {
  state.activeTab = tabName;
  const tabs = ['discover', 'hoors', 'messages', 'profile', 'neondb'];
  tabs.forEach(t => {
    const viewEl = document.getElementById(`view-${t}`);
    const navBtn = document.getElementById(`nav-btn-${t}`);
    const mobBtn = document.getElementById(`mob-btn-${t}`);
    if (viewEl) {
      if (t === tabName) {
        viewEl.classList.remove('hidden');
      } else {
        viewEl.classList.add('hidden');
      }
    }
    if (navBtn) {
      if (t === tabName) {
        navBtn.className = 'flex items-center gap-2 px-3.5 py-2 rounded-xl text-xs sm:text-sm font-semibold bg-gradient-to-r from-emerald-600 to-teal-600 text-white shadow-lg shadow-emerald-900/50 transition-all';
      } else {
        navBtn.className = 'flex items-center gap-2 px-3.5 py-2 rounded-xl text-xs sm:text-sm font-medium text-emerald-200/80 hover:text-white hover:bg-emerald-900/40 transition-all';
      }
    }
    if (mobBtn) {
      if (t === tabName) {
        mobBtn.className = 'flex flex-col items-center justify-center py-1.5 px-3 rounded-xl text-amber-300 bg-emerald-900/60 font-semibold text-[11px] transition-all';
      } else {
        mobBtn.className = 'flex flex-col items-center justify-center py-1.5 px-3 rounded-xl text-emerald-300/70 hover:text-white font-medium text-[11px] transition-all';
      }
    }
  });

  if (tabName === 'discover') renderDiscoverDeck();
  if (tabName === 'hoors') renderTopHoorsGrid();
  if (tabName === 'messages') renderMessagesTab();
  if (tabName === 'profile') renderProfileTab();
  if (tabName === 'neondb') renderNeonStudio();
}

function setNiyyahFilter(mode) {
  state.niyyahFilter = mode;
  state.currentIndex = 0;
  const modes = ['all', 'nikah_ready', 'chai_vibe', 'wali_approved'];
  modes.forEach(m => {
    const btn = document.getElementById(`niyyah-btn-${m}`);
    if (btn) {
      if (m === mode) {
        btn.className = 'px-3 py-1.5 rounded-full text-xs font-semibold bg-gradient-to-r from-amber-400 to-rose-500 text-slate-950 shadow-md transition-all';
      } else {
        btn.className = 'px-3 py-1.5 rounded-full text-xs font-medium bg-emerald-950/80 text-emerald-200 border border-emerald-700/50 hover:border-amber-400/50 transition-all';
      }
    }
  });
  logNeonQuery(
    'SELECT',
    mode === 'all'
      ? "SELECT * FROM hinder_users WHERE distance_km <= " + state.maxDistance + " ORDER BY noor_score DESC;"
      : "SELECT * FROM hinder_users WHERE niyyah_mode = '" + mode + "' AND distance_km <= " + state.maxDistance + " ORDER BY noor_score DESC;",
    getFilteredProfiles().length
  );
  renderDiscoverDeck();
}

function applyDeckFilters() {
  const genderEl = document.getElementById('filter-gender');
  const sectEl = document.getElementById('filter-sect');
  const distEl = document.getElementById('filter-distance');
  const searchEl = document.getElementById('filter-search');

  if (genderEl) state.genderFilter = genderEl.value;
  if (sectEl) state.sectFilter = sectEl.value;
  if (distEl) {
    state.maxDistance = parseInt(distEl.value, 10) || 50;
    const distLabel = document.getElementById('filter-distance-label');
    if (distLabel) distLabel.textContent = state.maxDistance + ' km';
  }
  if (searchEl) state.searchQuery = searchEl.value;

  state.currentIndex = 0;
  renderDiscoverDeck();
}

function resetDeckFilters() {
  state.niyyahFilter = 'all';
  state.genderFilter = 'all';
  state.sectFilter = 'all';
  state.maxDistance = 50;
  state.searchQuery = '';
  state.currentIndex = 0;

  const genderEl = document.getElementById('filter-gender');
  const sectEl = document.getElementById('filter-sect');
  const distEl = document.getElementById('filter-distance');
  const searchEl = document.getElementById('filter-search');
  const distLabel = document.getElementById('filter-distance-label');

  if (genderEl) genderEl.value = 'all';
  if (sectEl) sectEl.value = 'all';
  if (distEl) distEl.value = '50';
  if (searchEl) searchEl.value = '';
  if (distLabel) distLabel.textContent = '50 km';

  setNiyyahFilter('all');
  showToast('Discovery filters reset to All Ummah!', 'emerald');
}

function cycleCardSlide(profileId, delta) {
  const current = state.slideIndexMap[profileId] || 0;
  const next = (current + delta + 3) % 3;
  state.slideIndexMap[profileId] = next;
  renderDiscoverDeck();
}

function toggleVoiceIntro(profileId) {
  const profile = INITIAL_PROFILES.find(p => p.id === profileId) || getCurrentCandidate();
  if (!profile) return;

  if (state.playingVoiceId === profile.id) {
    state.playingVoiceId = null;
    if (state.voiceTimerId) clearTimeout(state.voiceTimerId);
    renderDiscoverDeck();
    return;
  }

  state.playingVoiceId = profile.id;
  renderDiscoverDeck();

  try {
    const AudioCtx = window.AudioContext || window.webkitAudioContext;
    if (AudioCtx) {
      const ctx = new AudioCtx();
      const notes = profile.voiceFreqs || [330, 392, 440, 523, 440, 392];
      notes.forEach((freq, idx) => {
        const osc = ctx.createOscillator();
        const gain = ctx.createGain();
        osc.type = 'sine';
        osc.frequency.setValueAtTime(freq, ctx.currentTime + idx * 0.22);
        gain.gain.setValueAtTime(0.08, ctx.currentTime + idx * 0.22);
        gain.gain.exponentialRampToValueAtTime(0.001, ctx.currentTime + (idx + 1) * 0.21);
        osc.connect(gain);
        gain.connect(ctx.destination);
        osc.start(ctx.currentTime + idx * 0.22);
        osc.stop(ctx.currentTime + (idx + 1) * 0.22);
      });
    }
  } catch (e) {
    // Ignore audio context block
  }

  showToast(`🔊 Playing Sawt Intro: "${profile.voicePrompt}"`, 'gold');
  if (state.voiceTimerId) clearTimeout(state.voiceTimerId);
  state.voiceTimerId = setTimeout(() => {
    state.playingVoiceId = null;
    renderDiscoverDeck();
  }, 2000);
}

function renderDiscoverDeck() {
  const container = document.getElementById('deck-card-slot');
  const statsBar = document.getElementById('deck-stats-bar');
  if (!container) return;

  const filtered = getFilteredProfiles();
  if (statsBar) {
    statsBar.textContent = `${filtered.length} HD Profiles Nearby • ${state.likedIds.length} Matches • Passport: ${state.passportCity}`;
  }

  if (filtered.length === 0) {
    container.innerHTML = `
      <div class="w-full max-w-md mx-auto bg-emerald-950/85 border border-emerald-700/50 rounded-3xl p-8 text-center shadow-2xl backdrop-blur-md">
        <div class="text-5xl mb-3">🕌</div>
        <h3 class="text-xl font-bold text-white mb-2">Sabr, Habibi! No Candidates Match Filter</h3>
        <p class="text-sm text-emerald-200/80 mb-5">Even the Angels couldn't find a match with those ultra-strict filters. Widen your distance or reset Niyyah mode!</p>
        <button type="button" onclick="resetDeckFilters()" class="px-5 py-2.5 rounded-xl bg-gradient-to-r from-amber-400 to-rose-500 text-slate-950 font-bold text-sm shadow-lg hover:brightness-110 transition-all">
          Reset Filters & Make Dua
        </button>
      </div>
    `;
    return;
  }

  const candidate = getCurrentCandidate();
  const slideIdx = state.slideIndexMap[candidate.id] || 0;
  const slideInfo = candidate.slides[slideIdx] || candidate.slides[0];
  const isPlaying = state.playingVoiceId === candidate.id;
  const isAlreadySuper = state.superNoorIds.includes(candidate.id);

  container.innerHTML = `
    <div id="active-swipe-card" class="swipe-card relative w-full max-w-md mx-auto bg-slate-950/90 border border-emerald-600/50 rounded-3xl overflow-hidden shadow-2xl backdrop-blur-xl">
      <!-- Swipe Stamps -->
      <div id="stamp-halal" class="swipe-stamp opacity-0 absolute top-10 left-6 z-30 border-4 border-emerald-400 text-emerald-300 bg-emerald-950/85 px-4 py-1.5 rounded-xl font-black text-2xl tracking-wider -rotate-12">
        HALAL 💚
      </div>
      <div id="stamp-pass" class="swipe-stamp opacity-0 absolute top-10 right-6 z-30 border-4 border-rose-500 text-rose-400 bg-rose-950/85 px-4 py-1.5 rounded-xl font-black text-2xl tracking-wider rotate-12">
        NEXT 🥀
      </div>
      <div id="stamp-noor" class="swipe-stamp opacity-0 absolute top-24 left-1/2 -translate-x-1/2 z-30 border-4 border-amber-400 text-amber-300 bg-amber-950/90 px-5 py-1.5 rounded-xl font-black text-2xl tracking-wider">
        SUPER NOOR 🌟
      </div>

      <!-- HD Photography Slide Area -->
      <div class="relative h-[400px] sm:h-[440px] w-full overflow-hidden select-none bg-slate-900">
        ${generateProfileArtSVG(candidate, slideIdx)}

        <!-- Top Slide Progress Indicators -->
        <div class="absolute top-3 inset-x-4 z-20 flex gap-1.5">
          ${[0, 1, 2].map(idx => `
            <button type="button" onclick="cycleCardSlide('${candidate.id}', ${idx - slideIdx})" aria-label="Slide ${idx + 1}" class="h-1.5 flex-1 rounded-full transition-all ${idx === slideIdx ? 'bg-amber-400 shadow-sm' : 'bg-white/35 hover:bg-white/60'}"></button>
          `).join('')}
        </div>

        <!-- Left / Right Invisible Tap Zones for Slide Cycling -->
        <button type="button" onclick="cycleCardSlide('${candidate.id}', -1)" aria-label="Previous photo" class="absolute inset-y-10 left-0 w-1/4 z-10 flex items-center justify-start pl-2 opacity-0 hover:opacity-100 transition-opacity">
          <span class="w-9 h-9 rounded-full bg-black/60 text-white flex items-center justify-center text-base font-bold">‹</span>
        </button>
        <button type="button" onclick="cycleCardSlide('${candidate.id}', 1)" aria-label="Next photo" class="absolute inset-y-10 right-0 w-1/4 z-10 flex items-center justify-end pr-2 opacity-0 hover:opacity-100 transition-opacity">
          <span class="w-9 h-9 rounded-full bg-black/60 text-white flex items-center justify-center text-base font-bold">›</span>
        </button>

        <!-- Top Floating Badges -->
        <div class="absolute top-7 left-4 right-4 z-20 flex items-center justify-between pointer-events-none">
          <span class="px-3 py-1 rounded-full text-xs font-bold bg-slate-950/80 text-emerald-300 border border-emerald-500/40 backdrop-blur-md">
            ${candidate.niyyahLabel}
          </span>
          <span class="px-3 py-1 rounded-full text-xs font-extrabold bg-amber-400 text-slate-950 shadow-lg">
            ${candidate.noorScore}% Noor Match
          </span>
        </div>

        <!-- Bottom Gradient Overlay with Name, Age, City & Slide Caption -->
        <div class="absolute inset-x-0 bottom-0 bg-gradient-to-t from-slate-950 via-slate-950/85 to-transparent pt-20 pb-4 px-5">
          <div class="flex items-center justify-between gap-2 mb-1">
            <div class="flex items-center gap-2 flex-wrap">
              <h2 class="text-2xl sm:text-3xl font-extrabold text-white tracking-tight">${candidate.name}, ${candidate.age}</h2>
              <span class="inline-flex items-center justify-center w-6 h-6 rounded-full bg-emerald-500 text-slate-950 text-xs font-black" title="Wali & HD Photo Verified">✓</span>
              ${isAlreadySuper ? '<span class="px-2 py-0.5 rounded-full text-[11px] font-bold bg-amber-400 text-slate-950">🌟 Super Noor Sent</span>' : ''}
            </div>
            <span class="text-xs font-semibold text-emerald-300 bg-emerald-950/80 px-2.5 py-1 rounded-lg border border-emerald-600/40 shrink-0">
              📍 ${candidate.distanceKm} km
            </span>
          </div>
          <p class="text-xs sm:text-sm text-emerald-200 font-medium">${candidate.occupation} • ${candidate.city} • ${candidate.height}</p>
          <div class="mt-2 inline-flex items-center gap-2 px-2.5 py-1 rounded-lg bg-black/55 border border-white/15 backdrop-blur-md text-[11px] text-amber-200">
            <span>${slideInfo.badge}</span>
            <span class="text-white/40">•</span>
            <span class="truncate">${slideInfo.title}: ${slideInfo.subtitle}</span>
          </div>
        </div>
      </div>

      <!-- Detailed Bio, Voice Note Synth & Islamic Compatibility Telemetry -->
      <div class="p-5 space-y-4">
        <div class="p-3 rounded-2xl bg-gradient-to-r from-emerald-950/90 to-slate-900 border border-emerald-700/40">
          <p class="text-xs uppercase tracking-wider text-amber-400 font-bold mb-0.5">✨ Niyyah Headline</p>
          <p class="text-sm font-semibold text-white">"${candidate.headline}"</p>
        </div>

        <!-- Interactive Sawt Voice Bio Player -->
        <div class="flex items-center justify-between gap-3 p-3 rounded-2xl bg-slate-900/90 border border-amber-500/30">
          <button type="button" onclick="toggleVoiceIntro('${candidate.id}')" class="w-10 h-10 rounded-xl bg-gradient-to-br from-amber-400 to-rose-500 text-slate-950 font-black flex items-center justify-center shrink-0 shadow-md hover:scale-105 transition-transform">
            ${isPlaying ? '⏸' : '▶'}
          </button>
          <div class="flex-1 min-w-0">
            <div class="flex items-center justify-between text-[11px] text-amber-300 font-semibold mb-1">
              <span>🎙️ Sawt Voice Vibe Check (0:14)</span>
              <span>${isPlaying ? 'Playing Halal Audio...' : 'Tap to Listen'}</span>
            </div>
            <p class="text-xs text-slate-300 truncate">"${candidate.voicePrompt}"</p>
          </div>
          <div class="flex items-end gap-0.5 h-6 shrink-0">
            ${[1, 2, 3, 4, 5, 6].map(bar => `
              <span class="w-1 rounded-full bg-amber-400 ${isPlaying ? 'wave-bar-active' : ''}" style="height: ${8 + (bar % 3) * 5}px; animation-delay: ${bar * 0.1}s"></span>
            `).join('')}
          </div>
        </div>

        <p class="text-xs sm:text-sm text-slate-200 leading-relaxed">${candidate.bio}</p>

        <!-- 4-Grid Deen & Dunya Compatibility Matrix -->
        <div class="grid grid-cols-1 sm:grid-cols-2 gap-2.5 text-xs">
          <div class="p-2.5 rounded-xl bg-emerald-950/50 border border-emerald-800/50">
            <span class="text-emerald-400 font-bold block mb-0.5">🕌 Salah & Fajr Alarms</span>
            <span class="text-slate-100 font-medium">${candidate.prayerLevel} • ${candidate.fajrAlarms}</span>
          </div>
          <div class="p-2.5 rounded-xl bg-emerald-950/50 border border-emerald-800/50">
            <span class="text-amber-400 font-bold block mb-0.5">💍 Mehr Expectation (${candidate.mehrTier})</span>
            <span class="text-slate-100 font-medium">${candidate.mehrQuote}</span>
          </div>
          <div class="p-2.5 rounded-xl bg-emerald-950/50 border border-emerald-800/50">
            <span class="text-rose-400 font-bold block mb-0.5">🍛 Biryani Fiqh Stance</span>
            <span class="text-slate-100 font-medium">${candidate.biryaniStance}</span>
          </div>
          <div class="p-2.5 rounded-xl bg-emerald-950/50 border border-emerald-800/50">
            <span class="text-teal-300 font-bold block mb-0.5">🛡️ Wali & Chaperone Status</span>
            <span class="text-slate-100 font-medium">${candidate.waliStatus}</span>
          </div>
        </div>

        <div class="flex flex-wrap gap-1.5 pt-1">
          ${candidate.badges.map(b => `
            <span class="px-2.5 py-1 rounded-full text-[11px] font-semibold bg-emerald-900/60 text-emerald-200 border border-emerald-600/40">
              ✨ ${b}
            </span>
          `).join('')}
          ${candidate.languages.map(lang => `
            <span class="px-2.5 py-1 rounded-full text-[11px] font-medium bg-slate-800 text-slate-300">
              🗣️ ${lang}
            </span>
          `).join('')}
        </div>
      </div>
    </div>
  `;

  attachCardDragPhysics();
}

function attachCardDragPhysics() {
  const card = document.getElementById('active-swipe-card');
  if (!card) return;

  let startX = 0;
  let startY = 0;
  let currentX = 0;
  let currentY = 0;
  let isDragging = false;

  const stampHalal = document.getElementById('stamp-halal');
  const stampPass = document.getElementById('stamp-pass');
  const stampNoor = document.getElementById('stamp-noor');

  function onPointerDown(e) {
    if (e.target.closest('button')) return;
    isDragging = true;
    startX = e.type.includes('mouse') ? e.clientX : e.touches[0].clientX;
    startY = e.type.includes('mouse') ? e.clientY : e.touches[0].clientY;
    card.classList.add('dragging');
  }

  function onPointerMove(e) {
    if (!isDragging) return;
    const clientX = e.type.includes('mouse') ? e.clientX : e.touches[0].clientX;
    const clientY = e.type.includes('mouse') ? e.clientY : e.touches[0].clientY;
    currentX = clientX - startX;
    currentY = clientY - startY;

    const rotate = currentX * 0.06;
    card.style.transform = `translate3d(${currentX}px, ${currentY * 0.35}px, 0) rotate(${rotate}deg)`;

    if (stampHalal) stampHalal.style.opacity = currentX > 35 ? Math.min(1, (currentX - 35) / 80).toString() : '0';
    if (stampPass) stampPass.style.opacity = currentX < -35 ? Math.min(1, (-currentX - 35) / 80).toString() : '0';
    if (stampNoor) stampNoor.style.opacity = currentY < -45 && Math.abs(currentX) < 60 ? Math.min(1, (-currentY - 45) / 70).toString() : '0';
  }

  function onPointerUp() {
    if (!isDragging) return;
    isDragging = false;
    card.classList.remove('dragging');

    if (currentX > 95) {
      handleSwipeAction('right');
    } else if (currentX < -95) {
      handleSwipeAction('left');
    } else if (currentY < -95) {
      handleSwipeAction('super_noor');
    } else {
      card.style.transform = '';
      if (stampHalal) stampHalal.style.opacity = '0';
      if (stampPass) stampPass.style.opacity = '0';
      if (stampNoor) stampNoor.style.opacity = '0';
    }
    currentX = 0;
    currentY = 0;
  }

  card.addEventListener('mousedown', onPointerDown);
  window.addEventListener('mousemove', onPointerMove);
  window.addEventListener('mouseup', onPointerUp);

  card.addEventListener('touchstart', onPointerDown, { passive: true });
  card.addEventListener('touchmove', onPointerMove, { passive: true });
  card.addEventListener('touchend', onPointerUp);
}

function handleSwipeAction(direction) {
  const candidate = getCurrentCandidate();
  if (!candidate) return;

  const card = document.getElementById('active-swipe-card');
  if (card) {
    if (direction === 'right') card.classList.add('fly-right');
    if (direction === 'left') card.classList.add('fly-left');
    if (direction === 'super_noor') card.classList.add('fly-up');
  }

  state.swipeHistory.push({
    profileId: candidate.id,
    prevIndex: state.currentIndex,
    direction
  });

  logNeonQuery(
    'INSERT',
    `INSERT INTO hinder_swipes (swiper_id, target_id, direction, niyyah_context) VALUES ('me_user', '${candidate.id}', '${direction}', '${state.niyyahFilter}') ON CONFLICT (swiper_id, target_id) DO UPDATE SET direction = '${direction}';`,
    1
  );
  syncWithNeonServerless('/swipes', 'POST', {
    swiperId: 'me_user',
    targetId: candidate.id,
    direction,
    niyyahContext: state.niyyahFilter
  });

  setTimeout(() => {
    if (direction === 'left') {
      if (!state.passedIds.includes(candidate.id)) state.passedIds.push(candidate.id);
      showToast(`Mashallah, Next! Passed on ${candidate.name} with full respect.`, 'rose');
    } else if (direction === 'right' || direction === 'super_noor') {
      if (!state.likedIds.includes(candidate.id)) state.likedIds.push(candidate.id);
      if (direction === 'super_noor' && !state.superNoorIds.includes(candidate.id)) {
        state.superNoorIds.push(candidate.id);
      }
      if (!state.chats[candidate.id]) {
        state.chats[candidate.id] = [
          {
            role: 'system',
            sender: 'Hinder Barakah Engine',
            text: direction === 'super_noor'
              ? `🌟 Super Noor Match with ${candidate.name}! Your profile beamed straight to the top of their prayer list.`
              : `💚 Mubarak! Halal Match with ${candidate.name}. Keep it respectful and Sunnah-compliant!`,
            time: 'Just now'
          },
          {
            role: 'them',
            sender: candidate.name,
            text: `Assalamu Alaikum! 👋 Saw we matched on Hinder. Crucial icebreaker: ${candidate.biryaniStance}—agree or disagree?`,
            time: 'Just now'
          }
        ];
      }
      state.activeMatchId = candidate.id;
      openMatchModal(candidate, direction === 'super_noor');
    }

    state.currentIndex += 1;
    saveStateToStorage();
    updateMatchBadges();
    renderDiscoverDeck();
  }, 260);
}

function handleRewindSwipe() {
  if (state.swipeHistory.length === 0) {
    showToast('Nothing to rewind! Your slate is already as clean as post-Hajj.', 'gold');
    return;
  }
  const last = state.swipeHistory.pop();
  state.currentIndex = last.prevIndex;
  const restored = INITIAL_PROFILES.find(p => p.id === last.profileId);
  logNeonQuery(
    'DELETE',
    `DELETE FROM hinder_swipes WHERE swiper_id = 'me_user' AND target_id = '${last.profileId}';`,
    1
  );
  renderDiscoverDeck();
  showToast(`⏪ Tawbah Rewind! Brought back ${restored ? restored.name : 'previous profile'}.`, 'gold');
}

function triggerBarakahBoost() {
  state.boostActiveUntil = Date.now() + 30 * 60 * 1000;
  logNeonQuery(
    'INSERT',
    "INSERT INTO boost_sessions (user_id, multiplier, expires_at) VALUES ('me_user', '10x_JUMMAH_NOOR', NOW() + INTERVAL '30 minutes');",
    1
  );
  showToast('⚡ Jummah Barakah Boost Activated! 10x profile visibility for 30 minutes.', 'gold');

  const badge = document.getElementById('boost-status-pill');
  if (badge) {
    badge.classList.remove('hidden');
  }
  if (state.boostTimerId) clearInterval(state.boostTimerId);
  state.boostTimerId = setInterval(() => {
    const rem = Math.max(0, Math.floor((state.boostActiveUntil - Date.now()) / 1000));
    const timerSpan = document.getElementById('boost-timer-text');
    if (timerSpan) {
      const m = String(Math.floor(rem / 60)).padStart(2, '0');
      const s = String(rem % 60).padStart(2, '0');
      timerSpan.textContent = `${m}:${s}`;
    }
    if (rem <= 0) {
      clearInterval(state.boostTimerId);
      if (badge) badge.classList.add('hidden');
    }
  }, 1000);
}

function openMatchModal(candidate, isSuperNoor) {
  const modal = document.getElementById('match-modal');
  const content = document.getElementById('match-modal-body');
  if (!modal || !content) return;

  content.innerHTML = `
    <div class="text-center space-y-4">
      <div class="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-amber-400/20 border border-amber-400/50 text-amber-300 text-xs font-extrabold uppercase tracking-widest">
        ${isSuperNoor ? '🌟 Super Noor Destiny Unlocked' : '💚 Alhamdulillah • Mutual Halal Match'}
      </div>
      <h2 class="text-3xl sm:text-4xl font-black text-transparent bg-clip-text bg-gradient-to-r from-amber-300 via-rose-400 to-emerald-300">
        Mubarak! It's a Halal Match!
      </h2>
      <p class="text-xs sm:text-sm text-emerald-200/90 max-w-sm mx-auto">
        You and <strong class="text-white">${candidate.name}</strong> both swiped with pure Niyyah. The angels in the 4th Heaven just high-fived!
      </p>

      <!-- Dual HD Portrait Display -->
      <div class="flex items-center justify-center gap-4 py-3">
        <div class="w-24 h-24 sm:w-28 sm:h-28 rounded-3xl overflow-hidden border-4 border-emerald-400 shadow-xl">
          ${generateProfileArtSVG(INITIAL_PROFILES[3], 0)}
        </div>
        <div class="w-12 h-12 rounded-2xl bg-gradient-to-br from-rose-500 to-amber-500 text-slate-950 font-black text-xl flex items-center justify-center shadow-lg">
          💍
        </div>
        <div class="w-24 h-24 sm:w-28 sm:h-28 rounded-3xl overflow-hidden border-4 border-amber-400 shadow-xl">
          ${generateProfileArtSVG(candidate, 0)}
        </div>
      </div>

      <div class="p-3 rounded-2xl bg-emerald-950/80 border border-emerald-700/50 text-xs text-emerald-200">
        <span class="font-bold text-amber-300">Mehr Preview:</span> "${candidate.mehrQuote}"
      </div>

      <div class="flex flex-col sm:flex-row gap-3 pt-2">
        <button type="button" onclick="closeMatchModalAndChat('${candidate.id}')" class="flex-1 py-3 px-5 rounded-2xl bg-gradient-to-r from-emerald-500 to-teal-500 text-slate-950 font-extrabold text-sm shadow-lg hover:brightness-110 transition-all">
          💬 Send Assalamu Alaikum
        </button>
        <button type="button" onclick="closeMatchModal()" class="py-3 px-5 rounded-2xl bg-slate-800 hover:bg-slate-700 text-slate-200 font-semibold text-sm transition-all">
          Keep Swiping Deck
        </button>
      </div>
    </div>
  `;
  modal.classList.remove('hidden');
}

function closeMatchModal() {
  const modal = document.getElementById('match-modal');
  if (modal) modal.classList.add('hidden');
}

function closeMatchModalAndChat(profileId) {
  closeMatchModal();
  state.activeMatchId = profileId;
  switchTab('messages');
}

function renderTopHoorsGrid() {
  const grid = document.getElementById('top-hoors-grid');
  if (!grid) return;

  const categories = [
    { id: 'zoya_01', award: '🏆 Most Likely to Impress Your Ammi', tag: '99% Deen & Kunafa Match' },
    { id: 'layla_02', award: '🌙 Tahajjud & Turkish Tea Bae', tag: '97% Creative Soulmate' },
    { id: 'nadia_03', award: '⚖️ Halal Power Couple Pick', tag: '96% Intellectual Match' },
    { id: 'tariq_04', award: '🛡️ Masjid First-Row Qawwam Pick', tag: '98% Protector & Chef' },
    { id: 'amira_05', award: '🏺 Sunnah Sweetheart & Cozy Gamer', tag: '95% Barakah Vibes' },
    { id: 'hana_08', award: '🍵 High-Pour Mint Tea Architect', tag: '95% Hospitality Queen' }
  ];

  grid.innerHTML = categories.map(item => {
    const p = INITIAL_PROFILES.find(x => x.id === item.id);
    if (!p) return '';
    const isMatched = state.likedIds.includes(p.id);
    return `
      <div class="bg-slate-950/90 border border-emerald-700/40 rounded-3xl overflow-hidden shadow-xl flex flex-col justify-between hover:border-amber-400/60 transition-all backdrop-blur-lg">
        <div>
          <div class="relative h-64 w-full overflow-hidden bg-slate-900">
            ${generateProfileArtSVG(p, 0)}
            <div class="absolute top-3 left-3 right-3 flex justify-between items-center">
              <span class="px-3 py-1 rounded-full text-[11px] font-bold bg-amber-400 text-slate-950 shadow-md">
                ${item.award}
              </span>
            </div>
            <div class="absolute inset-x-0 bottom-0 bg-gradient-to-t from-slate-950 via-slate-950/80 to-transparent p-4">
              <h3 class="text-lg font-extrabold text-white">${p.name}, ${p.age}</h3>
              <p class="text-xs text-emerald-300 font-medium">${p.occupation} • ${p.city}</p>
            </div>
          </div>
          <div class="p-4 space-y-2">
            <div class="flex items-center justify-between text-xs">
              <span class="font-bold text-amber-300">${item.tag}</span>
              <code class="text-[10px] text-emerald-400 bg-emerald-950/80 px-2 py-0.5 rounded">${p.photoUrl}</code>
            </div>
            <p class="text-xs text-slate-300 line-clamp-2">"${p.headline}"</p>
            <div class="p-2 rounded-xl bg-emerald-950/60 border border-emerald-800/50 text-[11px] text-emerald-200">
              <strong>Mehr:</strong> ${p.mehrTier} • <strong>Salah:</strong> ${p.prayerLevel}
            </div>
          </div>
        </div>
        <div class="p-4 pt-0 flex gap-2">
          <button type="button" onclick="instantMatchFromPicks('${p.id}')" class="flex-1 py-2.5 px-3 rounded-xl font-bold text-xs ${isMatched ? 'bg-emerald-800/70 text-emerald-200' : 'bg-gradient-to-r from-amber-400 to-rose-500 text-slate-950'} shadow-md hover:brightness-110 transition-all">
            ${isMatched ? '💬 Open Halal Chat' : '🌟 Send Super Noor'}
          </button>
        </div>
      </div>
    `;
  }).join('');
}

function instantMatchFromPicks(profileId) {
  const p = INITIAL_PROFILES.find(x => x.id === profileId);
  if (!p) return;
  if (!state.likedIds.includes(profileId)) {
    state.likedIds.push(profileId);
    state.superNoorIds.push(profileId);
    state.chats[profileId] = [
      {
        role: 'system',
        sender: 'Hinder Jannah+ Curated Match',
        text: `🌟 Instant Super Noor connection with ${p.name} from Top Hoors of the Day!`,
        time: 'Just now'
      },
      {
        role: 'them',
        sender: p.name,
        text: `Assalamu Alaikum! Honored to get your Super Noor star 🌟 How is your week going?`,
        time: 'Just now'
      }
    ];
    logNeonQuery(
      'INSERT',
      `INSERT INTO hinder_matches (user_a, user_b, match_type) VALUES ('me_user', '${profileId}', 'top_hoor_instant');`,
      1
    );
    saveStateToStorage();
    updateMatchBadges();
  }
  state.activeMatchId = profileId;
  switchTab('messages');
}

function renderMessagesTab() {
  const listEl = document.getElementById('matches-sidebar-list');
  const headerEl = document.getElementById('chat-active-header');
  const threadEl = document.getElementById('chat-messages-thread');
  const waliToggleBtn = document.getElementById('wali-toggle-btn');

  if (!listEl || !headerEl || !threadEl) return;

  const matchedProfiles = INITIAL_PROFILES.filter(p => state.likedIds.includes(p.id));
  if (matchedProfiles.length === 0) {
    matchedProfiles.push(INITIAL_PROFILES[0]);
  }
  if (!state.likedIds.includes(state.activeMatchId)) {
    state.activeMatchId = matchedProfiles[0].id;
  }

  listEl.innerHTML = matchedProfiles.map(p => {
    const msgs = state.chats[p.id] || [];
    const lastMsg = msgs.length > 0 ? msgs[msgs.length - 1].text : 'Tap to send Salaam!';
    const isActive = p.id === state.activeMatchId;
    return `
      <button type="button" onclick="selectChatMatch('${p.id}')" class="w-full text-left p-3 rounded-2xl flex items-center gap-3 transition-all ${isActive ? 'bg-emerald-800/60 border border-amber-400/50 shadow-md' : 'bg-slate-900/60 hover:bg-emerald-950/60 border border-emerald-900/40'}">
        <div class="w-12 h-12 rounded-2xl overflow-hidden shrink-0 border border-emerald-500/50">
          ${generateProfileArtSVG(p, 0)}
        </div>
        <div class="flex-1 min-w-0">
          <div class="flex items-center justify-between">
            <span class="font-bold text-sm text-white truncate">${p.name}</span>
            <span class="text-[10px] text-amber-300 font-semibold">${p.noorScore}% Noor</span>
          </div>
          <p class="text-xs text-emerald-200/75 truncate mt-0.5">${lastMsg}</p>
        </div>
      </button>
    `;
  }).join('');

  const activeProfile = INITIAL_PROFILES.find(p => p.id === state.activeMatchId) || matchedProfiles[0];
  if (waliToggleBtn) {
    waliToggleBtn.textContent = state.waliChaperoneOn ? '🛡️ Wali Chaperone: ON' : '🛡️ Wali Chaperone: OFF';
    waliToggleBtn.className = state.waliChaperoneOn
      ? 'px-3 py-1.5 rounded-xl text-xs font-bold bg-amber-400 text-slate-950 shadow-sm transition-all'
      : 'px-3 py-1.5 rounded-xl text-xs font-semibold bg-slate-800 text-slate-300 border border-slate-700 transition-all';
  }

  headerEl.innerHTML = `
    <div class="flex items-center gap-3">
      <div class="w-11 h-11 rounded-2xl overflow-hidden border border-amber-400/60 shrink-0">
        ${generateProfileArtSVG(activeProfile, 0)}
      </div>
      <div>
        <div class="flex items-center gap-2">
          <h3 class="font-extrabold text-white text-sm sm:text-base">${activeProfile.name}, ${activeProfile.age}</h3>
          <span class="px-2 py-0.5 rounded-full text-[10px] font-bold bg-emerald-500/20 text-emerald-300 border border-emerald-500/40">
            ${activeProfile.niyyahLabel}
          </span>
        </div>
        <p class="text-xs text-emerald-300/80">${activeProfile.waliStatus}</p>
      </div>
    </div>
  `;

  const messages = state.chats[activeProfile.id] || [];
  threadEl.innerHTML = messages.map(m => {
    if (m.role === 'system') {
      return `
        <div class="text-center my-2">
          <span class="inline-block px-3 py-1 rounded-full bg-emerald-950/90 border border-emerald-700/50 text-[11px] text-amber-300 font-medium">
            ${m.text}
          </span>
        </div>
      `;
    }
    if (m.role === 'wali_bot') {
      return `
        <div class="my-2 p-3 rounded-2xl bg-amber-950/60 border border-amber-500/50 text-amber-100 text-xs flex items-start gap-2.5 shadow-md">
          <span class="text-lg">👳‍♂️</span>
          <div class="flex-1">
            <div class="font-bold text-amber-300 text-[11px] mb-0.5">${m.sender} • Automated Chaperone</div>
            <p>${m.text}</p>
          </div>
        </div>
      `;
    }
    const isMe = m.role === 'me';
    return `
      <div class="flex flex-col ${isMe ? 'items-end' : 'items-start'} my-1.5">
        <div class="max-w-[82%] sm:max-w-[72%] px-4 py-2.5 rounded-2xl text-xs sm:text-sm ${isMe ? 'bg-gradient-to-r from-emerald-600 to-teal-600 text-white rounded-br-none shadow-md' : 'bg-slate-800/95 text-slate-100 border border-emerald-800/50 rounded-bl-none'}">
          <p>${m.text}</p>
        </div>
        <span class="text-[10px] text-slate-400 mt-1 px-1">${m.sender} • ${m.time}</span>
      </div>
    `;
  }).join('');

  threadEl.scrollTop = threadEl.scrollHeight;
}

function selectChatMatch(profileId) {
  state.activeMatchId = profileId;
  renderMessagesTab();
}

function toggleWaliChaperone() {
  state.waliChaperoneOn = !state.waliChaperoneOn;
  const activeId = state.activeMatchId;
  if (!state.chats[activeId]) state.chats[activeId] = [];
  state.chats[activeId].push({
    role: 'system',
    sender: 'Hinder Barakah Engine',
    text: state.waliChaperoneOn
      ? '🛡️ Wali Chaperone Mode enabled: Uncle Mahmood has entered the chat with mint tea.'
      : '🛡️ Wali Chaperone Mode paused: Trusting your Taqwa & Adab!',
    time: 'Just now'
  });
  logNeonQuery(
    'UPDATE',
    `UPDATE hinder_matches SET wali_chaperone_active = ${state.waliChaperoneOn ? 'TRUE' : 'FALSE'} WHERE user_b = '${activeId}';`,
    1
  );
  saveStateToStorage();
  renderMessagesTab();
}

function insertSunnahRizz() {
  const input = document.getElementById('chat-message-input');
  if (!input) return;
  const randomLine = HALAL_RIZZ_LINES[Math.floor(Math.random() * HALAL_RIZZ_LINES.length)];
  input.value = randomLine;
  input.focus();
  showToast('✨ Loaded Halal Sunnah Rizz into message box!', 'gold');
}

function sendKunafaProposalCard() {
  const activeProfile = INITIAL_PROFILES.find(p => p.id === state.activeMatchId) || INITIAL_PROFILES[0];
  const text = `🍮💍 [OFFICIAL HALAL COURTSHIP PROPOSAL]: Assalamu Alaikum ${activeProfile.name}! I hereby invite you (and your Wali if desired) for Pistachio Kunafa & Karak Chai this Jummah at 6:30 PM. Mehr terms: "${activeProfile.mehrTier}" accepted in principle!`;
  appendAndSendChatMessage(text);
}

function sendChatMessageFromForm(event) {
  if (event) event.preventDefault();
  const input = document.getElementById('chat-message-input');
  if (!input) return;
  const body = input.value.trim();
  if (!body) return;
  input.value = '';
  appendAndSendChatMessage(body);
}

function appendAndSendChatMessage(body) {
  const activeId = state.activeMatchId;
  const activeProfile = INITIAL_PROFILES.find(p => p.id === activeId) || INITIAL_PROFILES[0];
  if (!state.chats[activeId]) state.chats[activeId] = [];

  state.chats[activeId].push({
    role: 'me',
    sender: 'You',
    text: body,
    time: 'Just now'
  });

  const safeSqlBody = body.replace(/'/g, "''");
  logNeonQuery(
    'INSERT',
    `INSERT INTO hinder_messages (match_profile_id, sender_role, sender_name, body) VALUES ('${activeId}', 'me', 'You', '${safeSqlBody}');`,
    1
  );
  syncWithNeonServerless('/messages', 'POST', {
    matchProfileId: activeId,
    senderRole: 'me',
    senderName: 'You',
    body
  });

  renderMessagesTab();

  setTimeout(() => {
    const replies = [
      `Mashallah, that actually made me smile! 😊 Tell me more—what's your go-to Jummah routine?`,
      `10/10 Halal Rizz approved! 🌟 Even my Wali nodded in approval reading that.`,
      `Wallahi you're raising the bar on Hinder! Are you team Karak Chai or Moroccan Mint Tea? 🫖`,
      `Alhamdulillah, finally someone on this app who knows how to hold a proper conversation! 💚`
    ];
    state.chats[activeId].push({
      role: 'them',
      sender: activeProfile.name,
      text: replies[Math.floor(Math.random() * replies.length)],
      time: 'Just now'
    });

    if (state.waliChaperoneOn) {
      const waliLine = WALI_INTERVENTIONS[Math.floor(Math.random() * WALI_INTERVENTIONS.length)];
      state.chats[activeId].push({
        role: 'wali_bot',
        sender: 'Uncle Mahmood (Wali Bot 🛡️)',
        text: waliLine,
        time: 'Just now'
      });
    }

    saveStateToStorage();
    if (state.activeTab === 'messages') renderMessagesTab();
  }, 650);
}

function renderProfileTab() {
  const u = state.userProfile;
  const nameIn = document.getElementById('prof-name');
  const ageIn = document.getElementById('prof-age');
  const cityIn = document.getElementById('prof-city');
  const headlineIn = document.getElementById('prof-headline');
  const mehrIn = document.getElementById('prof-mehr');
  const biryaniIn = document.getElementById('prof-biryani');
  const bioIn = document.getElementById('prof-bio');

  if (nameIn) nameIn.value = u.name;
  if (ageIn) ageIn.value = u.age;
  if (cityIn) cityIn.value = u.city;
  if (headlineIn) headlineIn.value = u.headline;
  if (mehrIn) mehrIn.value = u.mehrOffer;
  if (biryaniIn) biryaniIn.value = u.biryaniStance;
  if (bioIn) bioIn.value = u.bio;

  const tiers = ['mumin_free', 'sabr_gold', 'firdaus_vip'];
  tiers.forEach(t => {
    const card = document.getElementById(`tier-card-${t}`);
    if (card) {
      if (t === state.membershipTier) {
        card.className = 'p-4 rounded-2xl bg-gradient-to-br from-emerald-900/90 to-slate-900 border-2 border-amber-400 shadow-xl transition-all cursor-pointer';
      } else {
        card.className = 'p-4 rounded-2xl bg-slate-900/70 border border-emerald-800/50 hover:border-emerald-500/50 transition-all cursor-pointer';
      }
    }
  });
}

function saveUserProfileForm(event) {
  if (event) event.preventDefault();
  const u = state.userProfile;
  const nameIn = document.getElementById('prof-name');
  const ageIn = document.getElementById('prof-age');
  const cityIn = document.getElementById('prof-city');
  const headlineIn = document.getElementById('prof-headline');
  const mehrIn = document.getElementById('prof-mehr');
  const biryaniIn = document.getElementById('prof-biryani');
  const bioIn = document.getElementById('prof-bio');

  if (nameIn) u.name = nameIn.value.trim() || u.name;
  if (ageIn) u.age = parseInt(ageIn.value, 10) || u.age;
  if (cityIn) u.city = cityIn.value.trim() || u.city;
  if (headlineIn) u.headline = headlineIn.value.trim() || u.headline;
  if (mehrIn) u.mehrOffer = mehrIn.value.trim() || u.mehrOffer;
  if (biryaniIn) u.biryaniStance = biryaniIn.value.trim() || u.biryaniStance;
  if (bioIn) u.bio = bioIn.value.trim() || u.bio;

  logNeonQuery(
    'UPDATE',
    `UPDATE hinder_users SET display_name = '${u.name.replace(/'/g, "''")}', age = ${u.age}, city = '${u.city.replace(/'/g, "''")}', mehr_quote = '${u.mehrOffer.replace(/'/g, "''")}' WHERE id = 'me_user';`,
    1
  );
  saveStateToStorage();
  showToast('💚 Your Sunnah Profile has been saved & synced to NeonDB!', 'emerald');
}

function selectMembershipTier(tier) {
  state.membershipTier = tier;
  const labels = {
    mumin_free: 'Mu\'min Basic Tier',
    sabr_gold: 'Hinder Gold (Sabr Edition)',
    firdaus_vip: 'Hinder Firdaus VIP (Unlimited Noor)'
  };
  logNeonQuery(
    'UPDATE',
    `UPDATE hinder_subscriptions SET plan_tier = '${tier}', updated_at = NOW() WHERE user_id = 'me_user';`,
    1
  );
  saveStateToStorage();
  renderProfileTab();
  showToast(`🌟 Switched membership to ${labels[tier] || tier}!`, 'gold');
}

function changePassportCity(city) {
  state.passportCity = city;
  saveStateToStorage();
  renderDiscoverDeck();
  showToast(`✈️ Ummah Passport teleported to ${city}!`, 'gold');
}

function renderNeonStudio() {
  const connInput = document.getElementById('neon-conn-input');
  const logsContainer = document.getElementById('neon-sql-logs');
  const rowStats = document.getElementById('neon-row-stats');

  if (connInput && !connInput.value) {
    connInput.value = state.neonConnString;
  }

  if (rowStats) {
    const totalMessages = Object.values(state.chats).reduce((acc, arr) => acc + arr.length, 0);
    rowStats.innerHTML = `
      <div class="p-3 rounded-2xl bg-emerald-950/60 border border-emerald-700/40">
        <span class="text-[11px] text-emerald-300 font-semibold block">hinder_users</span>
        <span class="text-xl font-black text-white">${INITIAL_PROFILES.length + 1} rows</span>
      </div>
      <div class="p-3 rounded-2xl bg-emerald-950/60 border border-emerald-700/40">
        <span class="text-[11px] text-amber-300 font-semibold block">hinder_swipes</span>
        <span class="text-xl font-black text-white">${state.swipeHistory.length + 4} rows</span>
      </div>
      <div class="p-3 rounded-2xl bg-emerald-950/60 border border-emerald-700/40">
        <span class="text-[11px] text-rose-300 font-semibold block">hinder_matches</span>
        <span class="text-xl font-black text-white">${state.likedIds.length} rows</span>
      </div>
      <div class="p-3 rounded-2xl bg-emerald-950/60 border border-emerald-700/40">
        <span class="text-[11px] text-teal-300 font-semibold block">hinder_messages</span>
        <span class="text-xl font-black text-white">${totalMessages} rows</span>
      </div>
    `;
  }

  if (logsContainer) {
    logsContainer.innerHTML = state.sqlLogs.map(item => `
      <div class="p-3 rounded-xl bg-slate-950 border border-emerald-800/50 font-mono text-xs space-y-1">
        <div class="flex items-center justify-between text-[11px]">
          <span class="px-2 py-0.5 rounded bg-emerald-900/80 text-emerald-300 font-bold">${item.op}</span>
          <span class="text-amber-300">${item.latency} • ${item.status} • ${item.time}</span>
        </div>
        <div class="text-slate-200 break-all">${item.query}</div>
      </div>
    `).join('');
  }
}

function testNeonConnection() {
  const connInput = document.getElementById('neon-conn-input');
  if (connInput && connInput.value.trim()) {
    state.neonConnString = connInput.value.trim();
  }
  logNeonQuery(
    'SELECT',
    'SELECT version(), current_database(), pg_First_Row_Barakah() FROM pg_stat_activity LIMIT 1;',
    1
  );
  syncWithNeonServerless('/health', 'GET');
  renderNeonStudio();
  showToast('⚡ NeonDB Serverless Pooler verified! TLS 1.3 connection active (9ms).', 'emerald');
}

function copySqlSchemaToClipboard() {
  const snippet = document.getElementById('neon-schema-code');
  const text = snippet ? snippet.textContent : 'CREATE TABLE hinder_users (...);';
  try {
    if (navigator.clipboard && navigator.clipboard.writeText) {
      navigator.clipboard.writeText(text);
    } else {
      const ta = document.createElement('textarea');
      ta.value = text;
      document.body.appendChild(ta);
      ta.select();
      document.execCommand('copy');
      document.body.removeChild(ta);
    }
    showToast('📋 Copied NeonDB PostgreSQL Schema to clipboard!', 'gold');
  } catch (e) {
    showToast('📋 Schema ready in db/schema.sql inside your zip archive!', 'gold');
  }
}

function updateMatchBadges() {
  const badge1 = document.getElementById('nav-match-count');
  const badge2 = document.getElementById('mob-match-count');
  if (badge1) badge1.textContent = String(state.likedIds.length);
  if (badge2) badge2.textContent = String(state.likedIds.length);
}

function updateNeonBadgeCount() {
  const badge = document.getElementById('nav-sql-count');
  if (badge) badge.textContent = String(state.sqlLogs.length);
}

window.addEventListener('keydown', (e) => {
  if (state.activeTab !== 'discover') return;
  const tag = (e.target && e.target.tagName) ? e.target.tagName.toLowerCase() : '';
  if (tag === 'input' || tag === 'textarea' || tag === 'select') return;

  if (e.key === 'ArrowRight') {
    e.preventDefault();
    handleSwipeAction('right');
  } else if (e.key === 'ArrowLeft') {
    e.preventDefault();
    handleSwipeAction('left');
  } else if (e.key === 'ArrowUp') {
    e.preventDefault();
    handleSwipeAction('super_noor');
  } else if (e.key.toLowerCase() === 'z') {
    e.preventDefault();
    handleRewindSwipe();
  } else if (e.key.toLowerCase() === 'b') {
    e.preventDefault();
    triggerBarakahBoost();
  }
});

window.addEventListener('DOMContentLoaded', () => {
  loadStateFromStorage();
  setHdBackgroundScene(state.activeBgKey || 'rooftop');
  updateMatchBadges();
  updateNeonBadgeCount();
  renderDiscoverDeck();
  renderTopHoorsGrid();
  renderMessagesTab();
  renderProfileTab();
  renderNeonStudio();
});
