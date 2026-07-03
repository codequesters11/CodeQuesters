# CodeQuesters V2 — Premium Builder Ecosystem Platform

A modern, premium builder ecosystem web application built to help engineering students move beyond theory, start code execution, participate in sprints, and discover career opportunities.

This platform showcases community activity, builder milestones, events, partnerships, and transformation stories using a strictly light-theme, minimal, and high-performance Next.js layout.

---

## 🚀 Tech Stack

- **Core**: Next.js (App Router, static rendering)
- **Styling**: Tailwind CSS (Tailwind `@theme` extensions)
- **Animations**: Framer Motion (staggered transitions, smooth hover transforms)
- **Icons**: Lucide React (inline SVGs for social nodes)
- **Tooling**: TypeScript, ESLint

---

## 📁 Project Architecture

The codebase is organized as follows:

```text
src/
├── app/                  # Route entrypoints (App Router)
│   ├── layout.tsx        # Global HTML wrapper
│   ├── page.tsx          # Homepage (11 sections mounted)
│   ├── about/            # Page 2: About (12 sections)
│   ├── events/           # Page 3: Events (12 sections with FAQ accordion)
│   ├── community/        # Page 4: Community (12 sections with feed simulator)
│   ├── builders/         # Page 5: Unified Builders (18 sections, dynamic directory preview)
│   ├── partners/         # Page 7: Partners (14 sections, SVG line node hero)
│   └── contact/          # Page 8: Contact (12 sections, validation form hub)
├── components/           # UI Elements
│   ├── navbar/           # Sticky backdrop-blur Header Navigation
│   ├── footer/           # Multi-column Footer
│   ├── sections/         # Individual homepage block sections
│   └── shared/           # Global Layout shell components
├── data/                 # Statistics, stories mock datasets
├── lib/                  # Utilities (Tailwind merge helpers)
└── types/                # TypeScript interfaces
```

---

## ⚡ Getting Started

### 1. Installation
Install all developer and project dependencies:
```bash
npm install
```

### 2. Local Development
Start the local development server:
```bash
npm run dev
```
Open [http://localhost:3000](http://localhost:3000) with your browser to inspect the application.

### 3. Production Build
Compile and generate optimized static pages:
```bash
npm run build
```
This runs TypeScript compiler checks, ESLint formatting checks, and outputs statically pre-rendered optimized routes.

---

## 🎨 Design Philosophy & Principles

1. **Sentence Case Everywhere**: All headings, buttons, and badges follow sentence-case capitalization constraints (e.g. `Featured event`, `Become a partner`), except for capitalized badges (e.g. `NEW`, `FEATURED`).
2. **Light Theme Default**: Globals and tokens set white background variables as default, completely excluding preferences overrides.
3. **No Stock Graphics/Placeholders**: Visual mockups are rendered using gradient card collages, interactive feed simulators, and connected SVG network maps.
4. **Unique Page Heroes**: Every route features a dedicated hero layout style (Ecosystem network, Conversation space, Builder Wall mosaic) keeping the design fresh.
5. **Aesthetics & Spacing**: Generous margins, soft border outlines (`border-border`), and micro-animations for interactions.
