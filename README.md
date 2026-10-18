# Ujjwal Clinic — Premium Healthcare Website
**Location:** Teacher's Colony, Barnahal, District Mainpuri, Uttar Pradesh, India  
**Contact:** +91 78301 95336  
**Intended Public URL:** [https://ujjwalclinic.vercel.app](https://ujjwalclinic.vercel.app) *(Subject to Vercel domain availability & project configuration)*

---

## 1. Project Overview

A modern, trustworthy, mobile-first website for **Ujjwal Clinic**, located in Barnahal, District Mainpuri, Uttar Pradesh. Built to provide patients across Barnahal, Mainpuri, and neighboring rural areas with seamless access to verified medical consultation details, doctor profiles, and direct contact options.

### Consulting Doctors
- **Dr. Bimlesh Babu** — General Physician
- **Dr. Shivam** — Proctologist

---

## 2. Key Features

- **Bilingual Interface (Hindi & English):** Instant language switching with persistent client-side preference and synced `lang` HTML attribute for screen readers.
- **Strict Clinical Integrity:** Contains only verified clinic details. Never invents doctor degrees, experience, ratings, facilities, or operating hours.
- **Consultation Schedule Transparency:** Clearly states that the clinic operates with no weekly day off, and guides patients to call ahead (+91 78301 95336) to confirm specific doctor hours.
- **Direct Contact Pathways:**
  - One-tap phone calling (`tel:+917830195336`)
  - Official WhatsApp messaging link (`https://wa.me/917830195336`)
  - Verified Google Maps search directions link for Teacher's Colony, Barnahal
- **Appointment Enquiry Workflow:**
  - Client-side validation for 10-digit Indian mobile numbers (starts with 6, 7, 8, 9).
  - Explicitly labeled as an appointment **request**, not a guaranteed booking.
  - Generates a formatted WhatsApp prefill message for instant dispatch, avoiding unconfigured fake backends or insecure client-side data leakage.
- **Design System & Typography:**
  - Custom Vanilla CSS with bespoke healthcare palette: Primary Navy (`#12345A`), Deep Navy (`#0B1F3A`), Soft Blue (`#F3F7FC`), and Muted Blue (`#6C91B8`).
  - Native Devanagari font support for Hindi text (`Noto Sans Devanagari`) and modern geometric sans-serif for English (`Plus Jakarta Sans`).
  - Custom SVG Clinic Logo and abstract medical motifs (no fake doctor stock photography).
- **SEO & Technical Excellence:**
  - App Router routes for `/`, `/doctors`, `/services`, `/appointment`, `/contact`, and `/privacy`.
  - Dynamic `sitemap.xml` and `robots.txt` generation.
  - Complete JSON-LD schema (`MedicalClinic` with verified physicians and address).
  - Web App Manifest (`manifest.webmanifest`) and SVG vector favicon.
  - WCAG 2.2 AA accessibility practices: 44px+ touch targets, visible focus indicators, screen reader landmarks, skip link, and `prefers-reduced-motion` compliance.

---

## 3. Technology Stack

- **Framework:** Next.js 14 (App Router)
- **Language:** TypeScript
- **Styling:** Vanilla CSS (`src/app/globals.css` with CSS Custom Properties and modular components)
- **Icons:** Lucide React
- **Deployment Platform:** Vercel

---

## 4. Local Development

### Prerequisites
- Node.js `v18.17+` or `v20+`
- npm `v9+` or `v10+`

### Installation
```bash
# Clone or navigate to the repository
cd "e:\Ujjwal clinic"

# Install dependencies
npm install
```

### Running Locally
```bash
npm run dev
```
Open [http://localhost:3000](http://localhost:3000) in your browser.

---

## 5. Production Build & Validation

To test the production build locally:
```bash
# Typecheck and create production build
npm run build

# Start the production server
npm run start
```

---

## 6. Deploying to Vercel

The project is optimized for 1-click deployment on [Vercel](https://vercel.com):

### Option A: Using the Vercel Web Dashboard (Recommended)
1. Push this repository to GitHub, GitLab, or Bitbucket.
2. Log in to [Vercel](https://vercel.com) and click **"Add New Project"**.
3. Import the repository.
4. Framework preset will automatically be detected as **Next.js**.
5. No custom environment variables or build overrides are required.
6. Click **Deploy**.
7. In the project settings, navigate to **Domains** and assign `ujjwalclinic.vercel.app` (or custom domain).

### Option B: Using Vercel CLI
```bash
# Install Vercel CLI globally
npm i -g vercel

# Deploy directly from terminal
vercel
```

---

## 7. Structure & Routes

```
src/
├── app/
│   ├── appointment/
│   │   └── page.tsx      # /appointment (Server component with SEO metadata)
│   ├── contact/
│   │   └── page.tsx      # /contact (Server component with SEO metadata)
│   ├── doctors/
│   │   └── page.tsx      # /doctors (Server component with SEO metadata)
│   ├── privacy/
│   │   └── page.tsx      # /privacy (Data transparency notice)
│   ├── services/
│   │   └── page.tsx      # /services (Server component with SEO metadata)
│   ├── globals.css       # Core vanilla CSS design tokens & components
│   ├── layout.tsx        # Root layout with fonts, nav, footer, JSON-LD
│   ├── manifest.ts       # Web app manifest generator
│   ├── page.tsx          # / (Home page with SEO metadata)
│   ├── robots.ts         # Robots.txt generator
│   └── sitemap.ts        # Sitemap.xml generator
├── components/
│   ├── views/            # Client view implementations with language hooks
│   │   ├── AppointmentView.tsx
│   │   ├── ContactView.tsx
│   │   ├── DoctorsView.tsx
│   │   ├── HomeView.tsx
│   │   ├── PrivacyView.tsx
│   │   └── ServicesView.tsx
│   ├── AppointmentForm.tsx # Accessible request form with WhatsApp dispatch
│   ├── ClinicLogo.tsx    # Bespoke SVG logo and icon
│   ├── DoctorCard.tsx    # Doctor cards with abstract medical emblems
│   ├── Footer.tsx        # Accessible footer with quick links & timings
│   ├── HeroIllustration.tsx # Refined vector geometric motif
│   ├── Navbar.tsx        # Responsive sticky header & mobile drawer
│   └── StructuredData.tsx # Schema.org MedicalClinic JSON-LD
├── context/
│   └── LanguageContext.tsx # Bilingual state with localStorage persistence
├── lib/
│   └── translations.ts   # English and Hindi clinical translations
└── types/
    └── index.ts          # Shared TypeScript interfaces
```

---

## 8. License & Verified Information Notice

All clinic details (name, address in Teacher's Colony, Barnahal, contact phone `+91 78301 95336`, and doctor specialties) reflect verified information. Consultation timings and doctor schedules should always be re-confirmed directly with clinic staff before in-person visits.
