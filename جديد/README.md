# Al-Shabandar Clinic — Aesthetics, Botox, Filler & Laser

A premium, fully responsive, bilingual (English/Arabic RTL) website for **Al-Shabandar Clinic for Aesthetics, Botox, Filler, and Laser** (عيادة الشابندر للتجميل والبوتوكس والفلر والليزر). Built with Next.js, Tailwind CSS, and Framer Motion for a luxurious medical-spa experience.

## ✨ Features

- **Luxury Design System** — Champagne Gold & Rose Gold accents, Pearl White backgrounds, Deep Charcoal/Plum typography.
- **Dual-Language (EN/AR)** — Full RTL support with a one-click language toggle (Tajawal for Arabic, Playfair Display + Inter for English).
- **Premium Pre-loader** — Elegant pulsing logo with a shimmering loading bar.
- **Immersive Hero** — Animated background overlay, floating orbs, shimmer headline, and an animated "Book Appointment" CTA.
- **Interactive Services Grid** — Hover scale-up, image zoom, soft glow shadows, and micro-interactions.
- **Before/After Gallery** — Draggable comparison slider (mouse + touch) with thumbnail navigation.
- **About Section** — Floating stat cards, feature grid, and an animated stats bar.
- **Smart Booking System** — Multi-step form (Service → Date/Time → Details) that sends requests via **WhatsApp API** or **Email**.
- **Testimonials Carousel** — Auto-playing, pause-on-hover, with animated transitions.
- **Footer** — Contact details, embedded Google Map, opening hours, and Instagram/TikTok/WhatsApp socials.
- **Micro-Interactions** — Scroll progress bar, scroll-triggered reveal animations, floating WhatsApp button, and back-to-top.
- **SEO Optimized** — Metadata, OpenGraph, robots, sitemap, and PWA manifest.

## 🛠 Tech Stack

| Layer | Technology |
|-------|-----------|
| Framework | Next.js 14 (App Router) |
| Styling | Tailwind CSS 3 |
| Animations | Framer Motion 11 |
| Fonts | Playfair Display, Inter, Tajawal (next/font) |
| Language | JavaScript (JSX) |

## 🚀 Getting Started

### Prerequisites
- **Node.js 18.17+** (download from https://nodejs.org)
- npm (comes with Node.js)

### Installation

```bash
# 1. Install dependencies
npm install

# 2. Start the development server
npm run dev

# 3. Open http://localhost:3000 in your browser
```

### Build for Production

```bash
npm run build
npm start
```

## 📁 Project Structure

```
├── src/
│   ├── app/
│   │   ├── globals.css       # Design system & utilities
│   │   ├── layout.js         # Root layout, fonts, SEO metadata
│   │   ├── page.js           # Main page assembling all sections
│   │   ├── manifest.js       # PWA manifest
│   │   ├── robots.js         # SEO robots
│   │   └── sitemap.js        # SEO sitemap
│   ├── components/
│   │   ├── Loader.js         # Premium pre-loading screen
│   │   ├── Navbar.js         # Sticky nav + language toggle
│   │   ├── Hero.js           # Immersive hero with animated CTA
│   │   ├── Services.js       # Interactive services grid
│   │   ├── Gallery.js        # Before/After comparison slider
│   │   ├── About.js          # Clinic intro + stats
│   │   ├── Booking.js        # Multi-step booking (WhatsApp/Email)
│   │   ├── Testimonials.js   # Auto-playing carousel
│   │   ├── Footer.js         # Contact, map, hours, socials
│   │   ├── FloatingActions.js# WhatsApp + scroll-to-top + progress
│   │   └── Reveal.js         # Scroll-reveal animation wrapper
│   └── lib/
│       ├── content.js        # All clinic data (edit here)
│       └── LanguageContext.js# Bilingual EN/AR context
├── public/
│   └── icon.svg              # Favicon / PWA icon
├── tailwind.config.js        # Luxury color palette & animations
└── next.config.mjs           # Next.js config
```

## ✏️ Customization

All clinic information (contact details, services, gallery, testimonials, hours, socials) is centralized in **`src/lib/content.js`**. Update the values there and the entire site updates automatically.

### Key things to update:
- **Phone / WhatsApp**: `clinic.phone` and `clinic.whatsapp`
- **Email**: `clinic.email`
- **Address & Map**: `clinic.address` and `clinic.mapEmbed`
- **Social links**: `clinic.socials.instagram` and `clinic.socials.tiktok`
- **Services**: `services` array
- **Gallery images**: `gallery` array (replace Unsplash URLs with real photos)
- **Testimonials**: `testimonials` array

## 📱 Booking Integration

The booking form builds a formatted message and opens:
- **WhatsApp**: `https://wa.me/{whatsapp}?text={message}` in a new tab
- **Email**: `mailto:{email}?subject={subject}&body={message}`

No backend required — requests go directly to the clinic's WhatsApp or email.

## 🌐 Bilingual Support

Click the **EN / ع** toggle in the navbar to switch languages. Arabic activates full RTL layout with the Tajawal font automatically.

## 📄 License

© Al-Shabandar Clinic. All rights reserved.