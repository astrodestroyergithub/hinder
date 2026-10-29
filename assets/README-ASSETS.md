# Hinder HD Image Assets Directory Guide

All profile photos and HD background scenes are loaded from this `assets/` folder.

## 1. Where to Put Profile Images (`assets/profiles/`)
Drop or replace any `.jpg`, `.jpeg`, `.png`, or `.webp` image inside `assets/profiles/`:

- `assets/profiles/zoya.jpg`   -> Zoya Al-Mansoor (25, Dubai)
- `assets/profiles/layla.jpg`  -> Layla Benali (24, Istanbul)
- `assets/profiles/nadia.jpg`  -> Nadia Rahman (26, London)
- `assets/profiles/tariq.jpg`  -> Tariq Al-Hashimi (28, Doha)
- `assets/profiles/amira.jpg`  -> Amira El-Sayed (23, Cairo)
- `assets/profiles/zayd.jpg`   -> Zayd Siddiqui (27, Toronto)
- `assets/profiles/yasmin.jpg` -> Yasmin Al-Khouri (25, Kuala Lumpur)
- `assets/profiles/hana.jpg`   -> Hana Suleiman (24, Marrakech)

### Adding a New Custom Profile Photo:
1. Place your image file inside `assets/profiles/` (for example: `assets/profiles/my_photo.jpg`).
2. Either overwrite one of the 8 filenames above (zero code changes needed!) OR update the `photoUrl` property in `app.js` inside `INITIAL_PROFILES` (or use the in-app **HD Assets Manager** drawer to upload/assign a local file directly in the browser).

## 2. HD Background Images (`assets/backgrounds/`)
- `assets/backgrounds/hero-rooftop.jpg`     -> Twilight Mosque & Lantern Rooftop Lounge (Default HD App Background)
- `assets/backgrounds/riad-courtyard.jpg`   -> Moroccan Riad Courtyard with Saffron Karak Tea & Pistachio Kunafa
- `assets/backgrounds/bosphorus-sunset.jpg` -> Istanbul Bosphorus Sunset & Waterfront Mosque
