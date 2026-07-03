# CodeQuesters V2 - Complete Website Setup & Development Guide
## Building from Scratch with Modern Architecture

---

## 🎯 Project Overview

**Project Name:** CodeQuesters Website V2  
**Tech Stack:** Next.js 15 + Tailwind CSS + shadcn/ui + Framer Motion  
**Theme:** Light Mode Only  
**Design Language:** AI House / Stripe / Linear inspired  
**Launch Target:** 5 Days  
**Repository:** `codequesters-v2`

---

## 📋 Phase 0: Pre-Development Checklist

Before writing any code:

### Asset Collection (CRITICAL)
```
Create Google Drive folder: "CodeQuesters-V2-Assets"

Collect & organize:
├── Photography
│   ├── Hackathon Events (10+ photos)
│   ├── Workshop Sessions (10+ photos)
│   ├── Team Members (5+ photos)
│   ├── Speaker Photos (5+ photos)
│   ├── Winner Celebrations (5+ photos)
│   └── Community Moments (10+ photos)
├── Partner Logos (all high-res)
│   ├── DEVEL
│   ├── GreatHire
│   ├── GradSkills
│   ├── ICS
│   └── Others
├── Testimonial Headshots (circular, 200x200px each)
│   ├── 15+ builder photos
│   └── Names + roles
└── Graphics (if needed)
    ├── Icons
    └── Illustrations
```

**Why This Matters:**
- Photography drives trust and relatability
- Real photos > stock images > illustrations
- Each photo should tell a story of community

### Content Audit
```
Gather all existing content:
- Event descriptions
- Builder testimonials (full quotes)
- Partner descriptions
- Statistics (exact numbers)
- Team bios
- Blog posts/articles
```

---

## 🚀 Step 1: Project Setup

### 1.1 Create Next.js Project

```bash
# Create new Next.js 15 project with TypeScript
npx create-next-app@latest codequesters-v2 --typescript --tailwind --eslint

# Choose these options:
# ✔ TypeScript? Yes
# ✔ ESLint? Yes
# ✔ Tailwind CSS? Yes
# ✔ src/ directory? Yes
# ✔ App Router? Yes
# ✔ Turbopack? Yes (for faster dev)
# ✔ No to import alias (we'll set custom paths)

cd codequesters-v2
```

### 1.2 Project Structure

```bash
# Create folder structure
mkdir -p src/components/navbar
mkdir -p src/components/footer
mkdir -p src/components/hero
mkdir -p src/components/sections
mkdir -p src/components/shared
mkdir -p src/data
mkdir -p src/assets/images
mkdir -p src/assets/logos
mkdir -p src/lib
mkdir -p src/styles
mkdir -p public/images
```

### 1.3 Install Additional Dependencies

```bash
npm install \
  framer-motion \
  lucide-react \
  clsx \
  tailwind-merge \
  next-image-export-optimizer

# Install shadcn/ui
npx shadcn-ui@latest init

# Choose these options for shadcn:
# ✔ New York style
# ✔ Default (no custom base colors yet)
# ✔ CSS variables? Yes
```

### 1.4 TypeScript Configuration

**Update `tsconfig.json`:**

```json
{
  "compilerOptions": {
    "paths": {
      "@/*": ["./src/*"],
      "@components/*": ["./src/components/*"],
      "@sections/*": ["./src/components/sections/*"],
      "@shared/*": ["./src/components/shared/*"],
      "@data/*": ["./src/data/*"],
      "@lib/*": ["./src/lib/*"],
      "@assets/*": ["./src/assets/*"],
      "@types/*": ["./src/types/*"]
    }
  }
}
```

---

## 🎨 Step 2: Design System Setup

### 2.1 Global CSS Variables

**Create `src/app/globals.css`:**

```css
@tailwind base;
@tailwind components;
@tailwind utilities;

@layer base {
  :root {
    /* Brand Colors */
    --color-primary: #00C853;
    --color-primary-light: #E8F5E9;
    --color-primary-dark: #00AA42;
    
    /* Background */
    --color-background: #FFFFFF;
    --color-background-secondary: #F8FAFC;
    --color-background-tertiary: #F1F5F9;
    
    /* Text */
    --color-text-primary: #111827;
    --color-text-secondary: #6B7280;
    --color-text-tertiary: #9CA3AF;
    
    /* Borders */
    --color-border: #E5E7EB;
    --color-border-light: #F3F4F6;
    
    /* Accents */
    --color-accent: #2563EB;
    --color-accent-light: #DBEAFE;
    
    /* Status Colors */
    --color-success: #00C853;
    --color-warning: #FFA500;
    --color-error: #DC2626;
    
    /* Spacing */
    --spacing-xs: 0.25rem;
    --spacing-sm: 0.5rem;
    --spacing-md: 1rem;
    --spacing-lg: 1.5rem;
    --spacing-xl: 2rem;
    --spacing-2xl: 3rem;
    --spacing-3xl: 4rem;
    --spacing-4xl: 5rem;
    --spacing-5xl: 6rem;
    
    /* Typography */
    --font-family: 'Inter', -apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif;
    --font-size-xs: 0.75rem;
    --font-size-sm: 0.875rem;
    --font-size-base: 1rem;
    --font-size-lg: 1.125rem;
    --font-size-xl: 1.25rem;
    --font-size-2xl: 1.5rem;
    --font-size-3xl: 1.875rem;
    --font-size-4xl: 2.25rem;
    --font-size-5xl: 3rem;
    --font-size-6xl: 3.75rem;
    
    /* Border Radius */
    --radius-sm: 0.375rem;
    --radius-md: 0.5rem;
    --radius-lg: 0.75rem;
    --radius-xl: 1rem;
    --radius-2xl: 1.5rem;
    
    /* Shadows */
    --shadow-sm: 0 1px 2px 0 rgba(0, 0, 0, 0.05);
    --shadow-md: 0 4px 6px -1px rgba(0, 0, 0, 0.1);
    --shadow-lg: 0 10px 15px -3px rgba(0, 0, 0, 0.1);
    --shadow-xl: 0 20px 25px -5px rgba(0, 0, 0, 0.1);
  }
  
  /* Typography Base */
  body {
    @apply font-inter bg-white text-text-primary;
    font-family: var(--font-family);
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
  }
  
  /* Heading Styles */
  h1 {
    @apply text-5xl md:text-6xl font-bold leading-tight;
  }
  
  h2 {
    @apply text-4xl md:text-5xl font-bold leading-tight;
  }
  
  h3 {
    @apply text-3xl md:text-4xl font-bold leading-tight;
  }
  
  h4 {
    @apply text-2xl md:text-3xl font-semibold leading-tight;
  }
  
  h5 {
    @apply text-xl md:text-2xl font-semibold leading-tight;
  }
  
  h6 {
    @apply text-lg font-semibold leading-tight;
  }
  
  p {
    @apply text-base md:text-lg text-text-secondary leading-relaxed;
  }
}

/* Component Utilities */
@layer components {
  .container-max {
    @apply max-w-7xl mx-auto px-4 md:px-8;
  }
  
  .container-lg {
    @apply max-w-6xl mx-auto px-4 md:px-8;
  }
  
  .container-md {
    @apply max-w-4xl mx-auto px-4 md:px-8;
  }
  
  .btn-primary {
    @apply px-6 py-3 bg-primary text-white font-semibold rounded-lg hover:bg-primary-dark transition-colors duration-200 inline-flex items-center gap-2;
  }
  
  .btn-secondary {
    @apply px-6 py-3 bg-background-secondary text-primary font-semibold rounded-lg border-2 border-primary hover:bg-primary-light transition-colors duration-200 inline-flex items-center gap-2;
  }
  
  .btn-outline {
    @apply px-6 py-3 bg-transparent text-text-primary font-semibold rounded-lg border-2 border-text-primary hover:bg-background-secondary transition-colors duration-200 inline-flex items-center gap-2;
  }
  
  .section-spacing {
    @apply py-16 md:py-24 lg:py-32;
  }
  
  .section-bg-alt {
    @apply bg-background-secondary;
  }
  
  .card-base {
    @apply bg-white rounded-xl border border-border shadow-sm hover:shadow-md transition-shadow duration-300;
  }
  
  .badge {
    @apply inline-flex items-center gap-1 px-3 py-1 rounded-full text-sm font-medium bg-primary-light text-primary;
  }
}

/* Smooth Animations */
@layer utilities {
  .animate-fade-in {
    animation: fadeIn 0.6s ease-in-out;
  }
  
  .animate-fade-up {
    animation: fadeUp 0.6s ease-out;
  }
  
  @keyframes fadeIn {
    from {
      opacity: 0;
    }
    to {
      opacity: 1;
    }
  }
  
  @keyframes fadeUp {
    from {
      opacity: 0;
      transform: translateY(20px);
    }
    to {
      opacity: 1;
      transform: translateY(0);
    }
  }
}
```

### 2.2 Tailwind Configuration

**Update `tailwind.config.ts`:**

```typescript
import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        primary: 'var(--color-primary)',
        'primary-light': 'var(--color-primary-light)',
        'primary-dark': 'var(--color-primary-dark)',
        'background': 'var(--color-background)',
        'background-secondary': 'var(--color-background-secondary)',
        'background-tertiary': 'var(--color-background-tertiary)',
        'text-primary': 'var(--color-text-primary)',
        'text-secondary': 'var(--color-text-secondary)',
        'text-tertiary': 'var(--color-text-tertiary)',
        'border': 'var(--color-border)',
        'border-light': 'var(--color-border-light)',
        'accent': 'var(--color-accent)',
        'accent-light': 'var(--color-accent-light)',
      },
      fontFamily: {
        inter: ['var(--font-family)'],
      },
      fontSize: {
        xs: 'var(--font-size-xs)',
        sm: 'var(--font-size-sm)',
        base: 'var(--font-size-base)',
        lg: 'var(--font-size-lg)',
        xl: 'var(--font-size-xl)',
        '2xl': 'var(--font-size-2xl)',
        '3xl': 'var(--font-size-3xl)',
        '4xl': 'var(--font-size-4xl)',
        '5xl': 'var(--font-size-5xl)',
        '6xl': 'var(--font-size-6xl)',
      },
      borderRadius: {
        sm: 'var(--radius-sm)',
        md: 'var(--radius-md)',
        lg: 'var(--radius-lg)',
        xl: 'var(--radius-xl)',
        '2xl': 'var(--radius-2xl)',
      },
      boxShadow: {
        sm: 'var(--shadow-sm)',
        md: 'var(--shadow-md)',
        lg: 'var(--shadow-lg)',
        xl: 'var(--shadow-xl)',
      },
      spacing: {
        xs: 'var(--spacing-xs)',
        sm: 'var(--spacing-sm)',
        md: 'var(--spacing-md)',
        lg: 'var(--spacing-lg)',
        xl: 'var(--spacing-xl)',
        '2xl': 'var(--spacing-2xl)',
        '3xl': 'var(--spacing-3xl)',
        '4xl': 'var(--spacing-4xl)',
        '5xl': 'var(--spacing-5xl)',
      },
    },
  },
  plugins: [],
}
export default config
```

---

## 🏗️ Step 3: Create Core Components

### 3.1 Shared Layout Component

**Create `src/components/shared/Layout.tsx`:**

```typescript
import React from 'react'
import Navbar from '@components/navbar/Navbar'
import Footer from '@components/footer/Footer'

interface LayoutProps {
  children: React.ReactNode
  hideNavbar?: boolean
  hideFooter?: boolean
}

export default function Layout({ 
  children, 
  hideNavbar = false, 
  hideFooter = false 
}: LayoutProps) {
  return (
    <div className="min-h-screen flex flex-col bg-white">
      {!hideNavbar && <Navbar />}
      <main className="flex-grow">
        {children}
      </main>
      {!hideFooter && <Footer />}
    </div>
  )
}
```

### 3.2 Navbar Component

**Create `src/components/navbar/Navbar.tsx`:**

```typescript
'use client'

import Link from 'next/link'
import { useState } from 'react'
import { Menu, X } from 'lucide-react'

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false)

  const navLinks = [
    { label: 'Home', href: '/' },
    { label: 'About', href: '/about' },
    { label: 'Events', href: '/events' },
    { label: 'Community', href: '/community' },
    { label: 'Stories', href: '/stories' },
  ]

  return (
    <nav className="sticky top-0 z-50 bg-white border-b border-border">
      <div className="container-max py-4">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <Link href="/" className="flex items-center gap-2">
            <div className="w-8 h-8 bg-gradient-to-br from-primary to-primary-dark rounded-lg flex items-center justify-center">
              <span className="text-white font-bold text-lg">C</span>
            </div>
            <span className="font-bold text-xl text-text-primary hidden sm:block">
              CodeQuesters
            </span>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center gap-8">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="text-text-secondary hover:text-primary transition-colors font-medium"
              >
                {link.label}
              </Link>
            ))}
          </div>

          {/* CTA Button */}
          <button className="btn-primary text-sm hidden sm:inline-flex">
            Join Community
          </button>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="md:hidden p-2"
          >
            {isOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Menu */}
        {isOpen && (
          <div className="md:hidden pt-4 pb-4 border-t border-border mt-4">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="block py-2 text-text-secondary hover:text-primary transition-colors"
              >
                {link.label}
              </Link>
            ))}
            <button className="btn-primary w-full mt-4 text-sm">
              Join Community
            </button>
          </div>
        )}
      </div>
    </nav>
  )
}
```

### 3.3 Footer Component

**Create `src/components/footer/Footer.tsx`:**

```typescript
import Link from 'next/link'
import { Mail, MessageCircle, Github, Linkedin } from 'lucide-react'

export default function Footer() {
  const currentYear = new Date().getFullYear()

  return (
    <footer className="bg-background-secondary border-t border-border">
      <div className="container-max py-16">
        {/* Footer Grid */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-12">
          {/* Company Info */}
          <div>
            <h3 className="font-bold text-lg mb-4">CodeQuesters</h3>
            <p className="text-text-secondary text-sm leading-relaxed">
              Building the next generation of builders through real-world opportunities, collaboration, and execution.
            </p>
          </div>

          {/* Product */}
          <div>
            <h4 className="font-semibold mb-4 text-text-primary">Product</h4>
            <ul className="space-y-3 text-sm">
              <li><Link href="/" className="text-text-secondary hover:text-primary transition-colors">Home</Link></li>
              <li><Link href="/about" className="text-text-secondary hover:text-primary transition-colors">About</Link></li>
              <li><Link href="/events" className="text-text-secondary hover:text-primary transition-colors">Events</Link></li>
            </ul>
          </div>

          {/* Community */}
          <div>
            <h4 className="font-semibold mb-4 text-text-primary">Community</h4>
            <ul className="space-y-3 text-sm">
              <li><Link href="/community" className="text-text-secondary hover:text-primary transition-colors">Join Us</Link></li>
              <li><Link href="/stories" className="text-text-secondary hover:text-primary transition-colors">Stories</Link></li>
              <li><Link href="/hall-of-fame" className="text-text-secondary hover:text-primary transition-colors">Hall of Fame</Link></li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="font-semibold mb-4 text-text-primary">Connect</h4>
            <div className="space-y-3">
              <a href="mailto:hello@codequesters.dev" className="flex items-center gap-2 text-text-secondary hover:text-primary transition-colors text-sm">
                <Mail size={16} />
                hello@codequesters.dev
              </a>
              <a href="https://whatsapp.com" className="flex items-center gap-2 text-text-secondary hover:text-primary transition-colors text-sm">
                <MessageCircle size={16} />
                WhatsApp Community
              </a>
            </div>
          </div>
        </div>

        {/* Divider */}
        <div className="border-t border-border pt-8">
          {/* Bottom Section */}
          <div className="flex flex-col md:flex-row items-center justify-between gap-4">
            <p className="text-text-tertiary text-sm">
              © {currentYear} CodeQuesters. All rights reserved. Made with ❤️ in India
            </p>
            <div className="flex items-center gap-4">
              <a href="#" className="text-text-tertiary hover:text-primary transition-colors">
                <Github size={18} />
              </a>
              <a href="#" className="text-text-tertiary hover:text-primary transition-colors">
                <Linkedin size={18} />
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}
```

### 3.4 Data Management

**Create `src/data/stats.ts`:**

```typescript
export const communityStats = [
  {
    number: '3,685+',
    label: 'Active Builders',
    description: 'Learning and growing together'
  },
  {
    number: '74+',
    label: 'Partner Organizations',
    description: 'Companies & platforms we collaborate with'
  },
  {
    number: '2',
    label: 'Epic Hackathons',
    description: 'Bringing builders together'
  },
  {
    number: '50+',
    label: 'Builder Testimonials',
    description: 'Real stories of real growth'
  }
]

export const features = [
  {
    icon: '🎓',
    title: 'Learn & Grow',
    description: 'Workshops from industry experts covering web dev, AI/ML, design, and more.'
  },
  {
    icon: '🤝',
    title: 'Collaborate',
    description: 'Find teammates, build projects together, and create something amazing.'
  },
  {
    icon: '🚀',
    title: 'Launch & Succeed',
    description: 'Get real opportunities: internships, freelance gigs, and startup connections.'
  },
  {
    icon: '🏆',
    title: 'Compete',
    description: 'Hackathons and competitions with real prizes and recognition.'
  }
]

export const partners = [
  { name: 'DEVEL', logo: '/logos/devel.svg' },
  { name: 'GreatHire', logo: '/logos/greathire.svg' },
  { name: 'GradSkills', logo: '/logos/gradskills.svg' },
  { name: 'ICS', logo: '/logos/ics.svg' },
]
```

**Create `src/data/stories.ts`:**

```typescript
export const builderStories = [
  {
    id: 1,
    name: 'Laksh Kumar',
    role: 'Hackathon Winner → Startup Founder',
    story: 'Went from zero to hero in 6 months. Won CodeQuest, got internship, now building my startup with 2 co-founders I met here.',
    quote: '"CodeQuesters helped me realize my potential. The mentorship and community support changed my career trajectory."',
    image: '/images/stories/laksh.jpg',
    achievement: 'Founded startup after CodeQuest 2024',
    category: 'Founder'
  },
  {
    id: 2,
    name: 'Omkar Rane',
    role: 'Co-founder, TechStartup Inc',
    story: 'Met co-founder at CodeQuesters workshop. Built MVP during hackathon. Now raising Series A.',
    quote: '"The network here is invaluable. We found product-market fit with customers we met through the community."',
    image: '/images/stories/omkar.jpg',
    achievement: 'Raising Series A funding',
    category: 'Founder'
  },
  {
    id: 3,
    name: 'Priyanka Singh',
    role: 'Community Lead → Mentor',
    story: 'Went from attendee to mentor to community lead. Now helping 100+ builders monthly.',
    quote: '"Giving back to the community gives me more joy than any achievement. This is where I found my purpose."',
    image: '/images/stories/priyanka.jpg',
    achievement: 'Mentoring 100+ builders',
    category: 'Mentor'
  },
]
```

---

## 🎯 Step 4: Build Homepage Sections

### 4.1 Hero Section

**Create `src/components/sections/Hero.tsx`:**

```typescript
'use client'

import Image from 'next/image'
import { motion } from 'framer-motion'
import { ArrowRight, Play } from 'lucide-react'

export default function Hero() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.1,
      },
    },
  }

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.8, ease: 'easeOut' },
    },
  }

  return (
    <section className="section-spacing pt-20 md:pt-32 bg-gradient-to-b from-white to-background-secondary">
      <div className="container-max">
        <motion.div
          className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center"
          variants={containerVariants}
          initial="hidden"
          animate="visible"
        >
          {/* Left: Text Content */}
          <div>
            <motion.div variants={itemVariants}>
              <span className="badge text-primary-dark">
                ✨ Welcome to CodeQuesters
              </span>
            </motion.div>

            <motion.h1
              variants={itemVariants}
              className="text-5xl md:text-6xl lg:text-7xl font-bold leading-tight mt-6 mb-6"
            >
              Building the Next Generation of{' '}
              <span className="text-primary">Builders</span>
            </motion.h1>

            <motion.p
              variants={itemVariants}
              className="text-lg md:text-xl text-text-secondary mb-8 max-w-lg"
            >
              CodeQuesters helps students learn, build, compete, and grow through hackathons, workshops, community, open source, and real-world opportunities.
            </motion.p>

            <motion.div
              variants={itemVariants}
              className="flex flex-col sm:flex-row gap-4"
            >
              <button className="btn-primary">
                Join Community
                <ArrowRight size={18} />
              </button>
              <button className="btn-secondary flex items-center justify-center gap-2">
                <Play size={18} />
                Watch Demo
              </button>
            </motion.div>

            {/* Stats Row */}
            <motion.div
              variants={itemVariants}
              className="grid grid-cols-3 gap-6 mt-16 pt-12 border-t border-border"
            >
              <div>
                <div className="text-3xl md:text-4xl font-bold text-primary">3.6K+</div>
                <p className="text-sm text-text-secondary mt-1">Active Builders</p>
              </div>
              <div>
                <div className="text-3xl md:text-4xl font-bold text-primary">74+</div>
                <p className="text-sm text-text-secondary mt-1">Partners</p>
              </div>
              <div>
                <div className="text-3xl md:text-4xl font-bold text-primary">50+</div>
                <p className="text-sm text-text-secondary mt-1">Testimonials</p>
              </div>
            </motion.div>
          </div>

          {/* Right: Image Grid (Photo Collage) */}
          <motion.div
            variants={itemVariants}
            className="relative h-full min-h-96 lg:min-h-full"
          >
            {/* Photo Grid Layout - Adjust based on your images */}
            <div className="grid grid-cols-2 gap-4 h-full">
              {/* Large image - top left */}
              <div className="col-span-1 row-span-2 rounded-xl overflow-hidden bg-background-secondary">
                <div className="w-full h-full bg-gradient-to-br from-primary-light to-accent-light flex items-center justify-center">
                  <span className="text-4xl">📸</span>
                </div>
              </div>

              {/* Top right images */}
              <div className="space-y-4">
                <div className="rounded-xl overflow-hidden bg-background-secondary h-32">
                  <div className="w-full h-full bg-gradient-to-br from-primary to-primary-dark flex items-center justify-center">
                    <span className="text-4xl">🎓</span>
                  </div>
                </div>
                <div className="rounded-xl overflow-hidden bg-background-secondary h-32">
                  <div className="w-full h-full bg-gradient-to-br from-accent to-accent-light flex items-center justify-center">
                    <span className="text-4xl">🏆</span>
                  </div>
                </div>
              </div>

              {/* Bottom right */}
              <div className="rounded-xl overflow-hidden bg-background-secondary">
                <div className="w-full h-full bg-gradient-to-br from-primary-light to-primary flex items-center justify-center min-h-32">
                  <span className="text-4xl">🤝</span>
                </div>
              </div>
            </div>

            {/* Floating Badge */}
            <motion.div
              className="absolute -bottom-4 -right-4 bg-white rounded-xl shadow-lg p-4 border border-border"
              animate={{ y: [0, -10, 0] }}
              transition={{ duration: 3, repeat: Infinity }}
            >
              <p className="font-semibold text-sm text-text-primary">
                Join 3,685+ Builders
              </p>
            </motion.div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}
```

### 4.2 Impact Stats Section

**Create `src/components/sections/Stats.tsx`:**

```typescript
'use client'

import { motion } from 'framer-motion'
import { communityStats } from '@data/stats'

export default function Stats() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  }

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6 },
    },
  }

  return (
    <section className="section-spacing bg-white">
      <div className="container-max">
        <motion.div
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-100px' }}
        >
          {communityStats.map((stat, index) => (
            <motion.div
              key={index}
              variants={itemVariants}
              className="p-8 rounded-xl bg-background-secondary border-2 border-primary hover:shadow-lg transition-shadow"
            >
              <div className="text-4xl md:text-5xl font-bold text-primary mb-2">
                {stat.number}
              </div>
              <h3 className="text-lg font-semibold text-text-primary mb-2">
                {stat.label}
              </h3>
              <p className="text-text-secondary text-sm">
                {stat.description}
              </p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}
```

### 4.3 Trusted By Section

**Create `src/components/sections/TrustedBy.tsx`:**

```typescript
'use client'

import { motion } from 'framer-motion'
import { partners } from '@data/stats'

export default function TrustedBy() {
  return (
    <section className="section-spacing bg-background-secondary">
      <div className="container-max">
        <motion.div
          className="text-center mb-12"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <p className="text-sm font-semibold text-primary uppercase tracking-wide mb-4">
            Trusted by Industry Leaders
          </p>
          <h2 className="text-3xl md:text-4xl font-bold text-text-primary">
            Partners & Collaborators
          </h2>
        </motion.div>

        <motion.div
          className="grid grid-cols-2 md:grid-cols-4 gap-8 items-center"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
        >
          {partners.map((partner, index) => (
            <motion.div
              key={index}
              className="h-24 bg-white rounded-lg border border-border flex items-center justify-center hover:shadow-md transition-shadow cursor-pointer group"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              whileHover={{ y: -4 }}
            >
              <div className="text-center px-4">
                <p className="font-semibold text-text-primary group-hover:text-primary transition-colors">
                  {partner.name}
                </p>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}
```

### 4.4 What We Do Section

**Create `src/components/sections/WhatWeDo.tsx`:**

```typescript
'use client'

import { motion } from 'framer-motion'
import { features } from '@data/stats'

export default function WhatWeDo() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
      },
    },
  }

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6 },
    },
  }

  return (
    <section className="section-spacing bg-white">
      <div className="container-max">
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <h2 className="text-4xl md:text-5xl font-bold text-text-primary mb-6">
            Everything You Need to Succeed
          </h2>
          <p className="text-lg text-text-secondary max-w-2xl mx-auto">
            From learning and collaboration to launching your ideas, we provide all the tools, mentorship, and community support you need.
          </p>
        </motion.div>

        <motion.div
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-100px' }}
        >
          {features.map((feature, index) => (
            <motion.div
              key={index}
              variants={itemVariants}
              className="group p-8 rounded-xl bg-background-secondary border border-border hover:border-primary hover:shadow-lg transition-all duration-300"
            >
              <div className="text-5xl mb-4">{feature.icon}</div>
              <h3 className="text-xl font-bold text-text-primary mb-3 group-hover:text-primary transition-colors">
                {feature.title}
              </h3>
              <p className="text-text-secondary text-sm leading-relaxed">
                {feature.description}
              </p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}
```

### 4.5 CTA Section

**Create `src/components/sections/CTA.tsx`:**

```typescript
'use client'

import { motion } from 'framer-motion'
import { ArrowRight } from 'lucide-react'

export default function CTA() {
  return (
    <section className="section-spacing bg-gradient-to-r from-primary to-primary-dark relative overflow-hidden">
      {/* Background gradient blobs */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-white/10 rounded-full blur-3xl" />
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-white/10 rounded-full blur-3xl" />

      <div className="container-max relative z-10">
        <motion.div
          className="text-center max-w-3xl mx-auto"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
            Join the Community Today
          </h2>
          <p className="text-lg text-white/90 mb-8">
            Be part of a movement. Learn with thousands. Build something legendary.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="px-8 py-4 bg-white text-primary font-bold rounded-lg hover:bg-background-tertiary transition-colors inline-flex items-center justify-center gap-2">
              Get Started Free
              <ArrowRight size={20} />
            </button>
            <button className="px-8 py-4 bg-white/20 text-white font-bold rounded-lg border-2 border-white hover:bg-white/30 transition-colors">
              Learn More
            </button>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
```

---

## 📄 Step 5: Create Homepage

**Update `src/app/page.tsx`:**

```typescript
import Layout from '@components/shared/Layout'
import Hero from '@components/sections/Hero'
import Stats from '@components/sections/Stats'
import TrustedBy from '@components/sections/TrustedBy'
import WhatWeDo from '@components/sections/WhatWeDo'
import CTA from '@components/sections/CTA'

export const metadata = {
  title: 'CodeQuesters - Building the Next Generation of Builders',
  description: 'Join a community of 3,685+ builders learning, competing, and growing together through hackathons, workshops, and real-world opportunities.',
}

export default function Home() {
  return (
    <Layout>
      <Hero />
      <Stats />
      <TrustedBy />
      <WhatWeDo />
      <CTA />
    </Layout>
  )
}
```

---

## 🎬 Asset Management Guide

### Image Organization

```
public/
├── images/
│   ├── hero/
│   │   ├── hackathon-1.jpg
│   │   ├── workshop-1.jpg
│   │   ├── community-1.jpg
│   │   └── winner-1.jpg
│   ├── events/
│   │   ├── codequest-2024.jpg
│   │   ├── workshop-react.jpg
│   │   └── networking-night.jpg
│   ├── stories/
│   │   ├── laksh.jpg
│   │   ├── omkar.jpg
│   │   └── priyanka.jpg
│   └── partners/
│       ├── partner-1.png
│       └── partner-2.png
└── logos/
    ├── devel.svg
    ├── greathire.svg
    └── gradskills.svg
```

### Image Optimization Tips

1. **Hero Images:** Use real, high-quality photos (2000x1200px minimum)
2. **Partner Logos:** Use SVG where possible (crisp & light)
3. **Testimonial Photos:** Circle crop to 200x200px, high resolution
4. **Compression:** Use TinyPNG or ImageOptim before uploading
5. **Format:** JPG for photos, PNG/SVG for logos and graphics

---

## 🚀 Development Roadmap

### Day 1: Foundation & Homepage
- [x] Project setup complete
- [ ] Component library built
- [ ] Homepage sections implemented
- [ ] Navbar & Footer functional
- [ ] Responsive mobile/tablet/desktop

### Day 2: Additional Pages
- [ ] About page
- [ ] Events listing page
- [ ] Basic styling complete

### Day 3: Community & Stories
- [ ] Stories/testimonials page
- [ ] Hall of Fame
- [ ] Community page (forms, links)

### Day 4: Polish & Optimization
- [ ] SEO optimization
- [ ] Performance improvements
- [ ] Form integrations
- [ ] Analytics setup

### Day 5: Launch
- [ ] Final testing
- [ ] Deploy to Vercel
- [ ] Domain setup
- [ ] Go live!

---

## 🧪 Development Commands

```bash
# Start development server
npm run dev

# Build for production
npm run build

# Run production build locally
npm start

# Lint and fix code
npm run lint

# Type check
npx tsc --noEmit
```

---

## 📱 Responsive Design Breakpoints

```css
Mobile:    < 640px   (sm)
Tablet:    640-1024px  (md-lg)
Desktop:   > 1024px   (lg-2xl)
```

Use Tailwind's responsive prefixes:
- `md:` for 768px and up
- `lg:` for 1024px and up

---

## 🎨 Component Usage Examples

### Button

```tsx
<button className="btn-primary">Click me</button>
<button className="btn-secondary">Secondary</button>
<button className="btn-outline">Outline</button>
```

### Badge

```tsx
<span className="badge">Featured</span>
```

### Card

```tsx
<div className="card-base p-6">
  <h3 className="font-bold">Card Title</h3>
  <p className="text-text-secondary">Card content</p>
</div>
```

---

## ✅ Pre-Launch Checklist

- [ ] All pages accessible and responsive
- [ ] All images optimized and loading
- [ ] Navigation working across all pages
- [ ] Forms functional (contact, signup, etc.)
- [ ] No console errors
- [ ] Mobile experience tested
- [ ] Meta tags (title, description) set
- [ ] Analytics code added
- [ ] Deployed to Vercel
- [ ] Domain connected
- [ ] SSL certificate active
- [ ] Lighthouse score > 90

---

## 📞 Troubleshooting

### Images Not Showing
```
Check:
1. File path is correct in public/ folder
2. Image path starts with /
3. Image format is supported
4. File size is reasonable
```

### Styling Not Applied
```
Check:
1. CSS class names match Tailwind
2. Global CSS is imported
3. Tailwind config is correct
4. Clear .next cache: rm -rf .next
```

### Responsive Not Working
```
Check:
1. Viewport meta tag in <head>
2. Tailwind responsive prefixes used correctly
3. Mobile layout tested at actual breakpoints
```

---

## 📚 Useful Resources

- [Next.js Docs](https://nextjs.org/docs)
- [Tailwind CSS Docs](https://tailwindcss.com/docs)
- [shadcn/ui Components](https://ui.shadcn.com)
- [Framer Motion](https://www.framer.com/motion/)
- [Lucide Icons](https://lucide.dev)

---

## 🎯 Success Metrics

After launch, track:

1. **Performance**
   - Lighthouse score
   - Page load time
   - Core Web Vitals

2. **Engagement**
   - Time on site
   - Pages per session
   - Bounce rate

3. **Conversions**
   - Join Community clicks
   - Email signups
   - Event registrations

---

**Document Version:** 1.0  
**Last Updated:** 2025  
**Status:** Ready for Development

For questions, refer to the component code or consult the Next.js & Tailwind documentation.

Good luck building! 🚀
