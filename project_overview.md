# CodeQuesters V2 — Project Technical Overview

This document provides a detailed overview of the CodeQuesters V2 web application. It describes the user interface structure, frontend animations, backend state logic, and recommended areas of future development.

---

## 1. Core Architecture & Tech Stack

The application is built as a modern, high-performance, single-page-centric web portal using **Next.js (App Router)** and **React 19**.

| Layer | Technology | Key Details |
| :--- | :--- | :--- |
| **Framework** | Next.js 16.2.10 | Utilizes the Next.js App Router (`src/app`) for clean, modular folder routing. |
| **Language** | TypeScript / JS | Strict type-safety across all components and props. |
| **Styling** | Tailwind CSS v4 | Uses PostCSS and the new v4 `@import "tailwindcss"` with `@theme` configurations directly in CSS. |
| **Animations** | Framer Motion 12.4.2 | Handles microinteractions, scroll fade-ups, infinite loops, and spring overlays. |
| **Icons** | Lucide React | Provides all UI icons across forms, buttons, and layouts. |
| **Fonts** | Google Fonts API | Integrated inside `layout.tsx` for optimal loading and layout-shift prevention. |

---

## 2. UI Design System & Styling

The website is styled using a modern, clean light theme inspired by premium landing pages (Apple, Linear, Framer, and Luma) alongside CodeQuesters' green branding colors.

### A. Typography
- **Inter (Sans-Serif)**: Configured in `layout.tsx` and set as the default site-wide `--font-sans` in `globals.css` for optimal readability, navigation items, cards, input text, and body paragraphs.
- **Instrument Serif (Italic & Regular)**: Configured as a display font (`--font-instrument-serif`) used strictly in decorative cinematic elements (such as homepage heroes and philosophy headings).

### B. Colors & Branding
- **Primary Brand Green**: `#10b981` (emerald green) used for active indicators, gradients, and main hover states.
- **Primary Green Dark**: `#059669` / `#0a894f` (solid accents for filled buttons).
- **Backgrounds**: Pure white (`#ffffff`) and light bone gray (`#FAFBF9`) combined with soft shadows.
- **Glassmorphic Elements**:
  - Border radius: `32px`
  - Background: `rgba(255,255,255,0.72)`
  - Blur: `backdrop-filter: blur(30px)`
  - Border: `1px solid rgba(255,255,255,0.8)`
  - Shadow: `0 30px 80px rgba(0,0,0,0.08)` (very low opacity, high spread)

---

## 3. Page Structure & Features

The site layout is highly modular and organized into subdirectories within `src/app/`:

### A. Pages
- **Home (`/`)**: Features the cinematic video hero, stats panel, trusted logos ticker, community highlights, events grid, stories, and builder testimonials.
- **About (`/about`)**: Implements the dark cinematic hero, story text column, and Philosophy section (Mission × Vision).
- **Contact (`/contact`)**: Premium 3-column layout:
  - **Left (30%)**: Bold headline and description using Inter sans-serif font.
  - **Center (25%)**: Background video of a glossy black chrome robot with cyan/purple reflections. It floats vertically (`translateY(-8px)`) on a slow infinite loop and overlaps behind the form.
  - **Right (45%)**: Glassmorphic form card containing tab switcher, input groups with left icons, and spring entrance animations.
  - **Footer Strip**: Location, Follow Us social buttons, and CodeQuesters tagline aligned horizontally in a floating white-glass bar.

---

## 4. Key Interactive Logic & Animations

### A. Desktop Video Scrubbing & Mobile Autoplay
The contact page uses a custom React hook that tracks cursor movement to update video playback:
- **Desktop Mouse Scrubbing**: Listens to the window `mousemove` event. Computes the delta of the cursor's horizontal movement `deltaX` relative to the screen width and updates `video.currentTime = targetTime` to dynamically scrub the 3D robot head as the mouse moves.
- **Mobile Autoplay**: Since scrubbing is disabled on viewports `< 1024px`, the hook triggers normal autoplay and loop play (`video.autoplay = true; video.play();`).

### B. Bulletproof Typewriter Hook
Prevents React 18 strict mode double-mounting glitches:
- Instead of appending character-by-character to the state (which causes duplications when double-mounted), it slices the target text directly: `setDisplayed(() => text.slice(0, index + 1))`. This ensures the printed text is always a correct substring.

---

## 5. Backend Architecture & Current Flow

The application currently operates as a **statically generated client-side app**:
- **Form State**: Form fields are managed via React `useState`. Upon submission, fields are validated locally and an inquiry success overlay is triggered.
- **Email Redirection**: Form actions construct dynamic mailto links (e.g. `mailto:contact@codequesters.dev?subject=...`) to route users to their default mail client with automated subjects based on selected categories.
- **Routing**: Client-side single-page transitions are handled by Next.js `Link` structures.

---

## 6. Roadmap: What Can Be Done

To transition this from a premium frontend landing site to a fully functional enterprise web platform, the following backend and frontend enhancements can be implemented:

### A. Backend & Database Integration
1. **Serverless API Routes (`src/app/api/contact`)**:
   - Replaces client-side mailto redirections.
   - Collects form payloads and sends them to a database.
2. **Database Integration (MongoDB / PostgreSQL)**:
   - Connect the contact form and community join requests to a database using an ORM like **Prisma** or **Mongoose**.
3. **Automatic Email SMTP Delivery (Nodemailer / Resend)**:
   - Integrate **Resend** or **Nodemailer** in the API route to trigger instant HTML confirmation emails to the sender, and notifications to CodeQuesters coordinators.

### B. Headless CMS Integration (Sanity / Strapi)
1. **Dynamic Events & Testimonials**:
   - Currently, events, highlights, and partner logos are hardcoded in `src/data/`.
   - Integrating a headless CMS like **Sanity.io** or **Strapi** allows organizers to post new bootcamps, workshops, and partners directly from a dashboard.

### C. Authentication & Profiles (NextAuth)
1. **User Sign Up**:
   - Add **NextAuth.js** to allow students and mentors to create accounts using GitHub or Google OAuth.
   - Allows users to apply for hackathons, submit projects, and track achievements directly on the site.
