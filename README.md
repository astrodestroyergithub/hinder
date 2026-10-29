# Hinder — Find Your Hoor (HD Edition • Netlify + NeonDB)

**Hinder** is a responsive Islamic matchmaking web application modeled on Tinder, featuring **full HD background & portrait photography**, an extensible **`assets/` folder** for custom profile images, and **NeonDB Serverless PostgreSQL** integration.

## Folder Structure & Where to Put Your Images (`assets/`)

```text
hinder-netlify/
├── favicon.svg                        # Root custom Flame + Crescent + Rub el Hizb SVG Favicon
├── index.html                         # Main responsive web app entry point
├── styles.css                         # Full-viewport HD background stage & responsive styles
├── app.js                             # Swipe physics, Assets Manager & NeonDB client
├── netlify.toml                       # Netlify configuration & /api/* redirects
├── package.json                       # @neondatabase/serverless dependency
├── assets/
│   ├── README-ASSETS.md               # Guide for adding or replacing images
│   ├── backgrounds/                   # Full-HD 16:9 Ambient App Backgrounds
│   │   ├── hero-rooftop.jpg           # Twilight Mosque Domes & Rooftop Majlis
│   │   ├── riad-courtyard.jpg         # Moroccan Riad Courtyard with Saffron Karak & Kunafa
│   │   └── bosphorus-sunset.jpg       # Istanbul Bosphorus Sunset & Waterfront Mosque
│   └── profiles/                      # Full-HD 3:4 Candidate Profile Portraits
│       ├── zoya.jpg                   # Zoya Al-Mansoor (25, Dubai)
│       ├── layla.jpg                  # Layla Benali (24, Istanbul)
│       ├── nadia.jpg                  # Nadia Rahman (26, London)
│       ├── tariq.jpg                  # Tariq Al-Hashimi (28, Doha)
│       ├── amira.jpg                  # Amira El-Sayed (23, Cairo)
│       ├── zayd.jpg                   # Zayd Siddiqui (27, Toronto)
│       ├── yasmin.jpg                 # Yasmin Al-Khouri (25, Kuala Lumpur)
│       └── hana.jpg                   # Hana Suleiman (24, Marrakech)
├── db/
│   └── schema.sql                     # NeonDB PostgreSQL schema & seed data
└── netlify/
    └── functions/
        └── api.js                     # Serverless function connecting to NeonDB
```

### How to Add or Replace Profile Images:
1. **Zero-Code Replacement**: Drop your own `.jpg` photos into `assets/profiles/` using the existing filenames (`zoya.jpg`, `layla.jpg`, `nadia.jpg`, `tariq.jpg`, `amira.jpg`, `zayd.jpg`, `yasmin.jpg`, `hana.jpg`).
2. **Adding New Custom Filenames**: Place any new photo inside `assets/profiles/` (e.g., `assets/profiles/new_hoor.jpg`) and either link it in the in-app **🖼️ `assets/` Folder & HD Photo Manager** panel or update `photoUrl` in `INITIAL_PROFILES` inside `app.js`.
