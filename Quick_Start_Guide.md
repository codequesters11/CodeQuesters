# CodeQuesters V2 - Quick Start Guide
## For Developers - Get Up & Running in 10 Minutes

---

## ⚡ Quick Setup (10 minutes)

```bash
# 1. Clone or create new project
npx create-next-app@latest codequesters-v2 --typescript --tailwind

# 2. Install dependencies
npm install framer-motion lucide-react next-image-export-optimizer

# 3. Initialize shadcn/ui
npx shadcn-ui@latest init

# 4. Copy the configuration from the Setup Guide

# 5. Start development server
npm run dev

# Visit http://localhost:3000
```

---

## 📁 Folder Structure (Copy-Paste Ready)

```bash
mkdir -p src/components/navbar
mkdir -p src/components/footer
mkdir -p src/components/sections
mkdir -p src/components/shared
mkdir -p src/data
mkdir -p src/assets/images
mkdir -p src/assets/logos
mkdir -p src/lib
mkdir -p public/images
mkdir -p public/logos
```

---

## 🎨 Colors (Copy-Paste)

**In `src/app/globals.css`:**

```css
:root {
  --color-primary: #00C853;
  --color-primary-light: #E8F5E9;
  --color-primary-dark: #00AA42;
  --color-background: #FFFFFF;
  --color-background-secondary: #F8FAFC;
  --color-text-primary: #111827;
  --color-text-secondary: #6B7280;
  --color-border: #E5E7EB;
  --color-accent: #2563EB;
}
```

---

## 🏗️ Component Templates

### Button Component (Copy-Paste)

```tsx
interface ButtonProps {
  variant?: 'primary' | 'secondary' | 'outline'
  size?: 'sm' | 'md' | 'lg'
  children: React.ReactNode
  [key: string]: any
}

export function Button({ 
  variant = 'primary', 
  size = 'md', 
  children, 
  ...props 
}: ButtonProps) {
  const baseStyles = 'font-semibold rounded-lg transition-colors duration-200'
  
  const variants = {
    primary: 'bg-primary text-white hover:bg-primary-dark',
    secondary: 'bg-background-secondary text-primary border-2 border-primary hover:bg-primary-light',
    outline: 'bg-transparent border-2 border-text-primary text-text-primary hover:bg-background-secondary',
  }
  
  const sizes = {
    sm: 'px-4 py-2 text-sm',
    md: 'px-6 py-3 text-base',
    lg: 'px-8 py-4 text-lg',
  }

  return (
    <button className={`${baseStyles} ${variants[variant]} ${sizes[size]}`} {...props}>
      {children}
    </button>
  )
}
```

### Card Component (Copy-Paste)

```tsx
interface CardProps {
  children: React.ReactNode
  className?: string
}

export function Card({ children, className = '' }: CardProps) {
  return (
    <div className={`bg-white rounded-xl border border-border shadow-sm hover:shadow-md transition-shadow p-6 ${className}`}>
      {children}
    </div>
  )
}
```

---

## 📄 Essential Files to Create

### 1. `tsconfig.json` paths

```json
{
  "compilerOptions": {
    "paths": {
      "@/*": ["./src/*"],
      "@components/*": ["./src/components/*"],
      "@sections/*": ["./src/components/sections/*"],
      "@data/*": ["./src/data/*"]
    }
  }
}
```

### 2. `src/data/stats.ts`

```typescript
export const communityStats = [
  { number: '3,685+', label: 'Active Builders', description: 'Learning and growing' },
  { number: '74+', label: 'Partner Organizations', description: 'Companies collaborating' },
  { number: '2', label: 'Hackathons', description: 'Bringing builders together' },
  { number: '50+', label: 'Testimonials', description: 'Real stories of growth' }
]

export const features = [
  { icon: '🎓', title: 'Learn & Grow', description: 'Workshops from industry experts' },
  { icon: '🤝', title: 'Collaborate', description: 'Find teammates and build together' },
  { icon: '🚀', title: 'Launch & Succeed', description: 'Get real opportunities' },
  { icon: '🏆', title: 'Compete', description: 'Hackathons with real prizes' }
]

export const partners = [
  { name: 'DEVEL', logo: '/logos/devel.svg' },
  { name: 'GreatHire', logo: '/logos/greathire.svg' },
  { name: 'GradSkills', logo: '/logos/gradskills.svg' },
  { name: 'ICS', logo: '/logos/ics.svg' }
]
```

---

## 🎯 Page Development Order

### Day 1: Homepage
```
Sections to build:
1. Navbar
2. Hero
3. Stats
4. Trusted By
5. What We Do
6. CTA
7. Footer
```

### Day 2: About Page
```
Sections:
1. Hero/Header
2. Mission Statement
3. Principles (3 cards)
4. Impact Numbers
5. Team/Leadership
```

### Day 3: Events Page
```
Sections:
1. Hero
2. Featured Event (large card)
3. Upcoming Events (grid)
4. Past Events (grid)
5. FAQ
```

### Day 4: Stories & Community
```
Stories Page:
1. Hero
2. Featured Story
3. Stories Grid
4. Filter Tags
5. CTA

Community Page:
1. Hero
2. Ways to Join
3. Social Links
4. Newsletter Signup
```

### Day 5: Polish & Deploy
```
- SEO optimization
- Form functionality
- Analytics setup
- Deploy to Vercel
- Domain configuration
```

---

## 🚀 Common Commands

```bash
# Development
npm run dev                    # Start dev server

# Building
npm run build                  # Build for production
npm run start                  # Run production build

# Code Quality
npm run lint                   # Run ESLint
npx tsc --noEmit             # Type check

# Database/Content
npx contentlayer build        # (if using contentlayer)

# Clean
rm -rf .next node_modules     # Hard reset
npm install                   # Reinstall deps
```

---

## 📦 Import Cheat Sheet

```typescript
// Framer Motion
import { motion } from 'framer-motion'
import type { Variants } from 'framer-motion'

// Lucide Icons
import { ArrowRight, Menu, X, Github } from 'lucide-react'

// Next.js
import Image from 'next/image'
import Link from 'next/link'
import { useRouter } from 'next/navigation'

// Custom Imports
import Layout from '@components/shared/Layout'
import Button from '@components/shared/Button'
import { communityStats } from '@data/stats'
```

---

## 🎬 Animation Patterns (Copy-Paste)

### Fade In on Scroll

```tsx
<motion.div
  initial={{ opacity: 0 }}
  whileInView={{ opacity: 1 }}
  viewport={{ once: true }}
  transition={{ duration: 0.8 }}
>
  Content here
</motion.div>
```

### Slide Up on Scroll

```tsx
<motion.div
  initial={{ opacity: 0, y: 30 }}
  whileInView={{ opacity: 1, y: 0 }}
  viewport={{ once: true }}
  transition={{ duration: 0.8 }}
>
  Content here
</motion.div>
```

### Stagger Children

```tsx
<motion.div
  variants={{
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.2 }
    }
  }}
  initial="hidden"
  whileInView="visible"
  viewport={{ once: true }}
>
  {items.map((item) => (
    <motion.div key={item.id} variants={itemVariants}>
      {item}
    </motion.div>
  ))}
</motion.div>
```

### Hover Effects

```tsx
<motion.div
  whileHover={{ y: -4, boxShadow: '0 10px 20px rgba(0,0,0,0.1)' }}
  transition={{ duration: 0.3 }}
>
  Hoverable content
</motion.div>
```

---

## 🎨 Common Tailwind Classes

```jsx
{/* Spacing */}
<div className="p-6 md:p-8">         {/* Padding */}
<div className="mt-8 mb-4">          {/* Margin */}
<div className="gap-4 md:gap-8">      {/* Gap in grid/flex */}

{/* Text */}
<h1 className="text-4xl md:text-6xl font-bold">
<p className="text-text-secondary text-lg leading-relaxed">

{/* Layout */}
<div className="flex items-center gap-4">
<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">

{/* Colors */}
<button className="bg-primary text-white hover:bg-primary-dark">
<div className="bg-background-secondary border border-border">

{/* Responsive */}
<div className="hidden md:flex lg:grid">
<div className="px-4 md:px-8">     {/* Padding adjusts per screen */}

{/* Effects */}
<div className="shadow-md hover:shadow-lg transition-shadow duration-300">
<div className="opacity-50 hover:opacity-100">
```

---

## ✅ File Checklist

Before committing code:

- [ ] No console.log() statements
- [ ] No unused imports
- [ ] TypeScript errors fixed
- [ ] Responsive at all breakpoints
- [ ] Images optimized
- [ ] No hardcoded strings (use data files)
- [ ] Accessibility: alt text on images
- [ ] Component naming consistent
- [ ] Props properly typed

---

## 🐛 Quick Troubleshooting

### Build Fails
```bash
# Clear Next.js cache
rm -rf .next

# Rebuild
npm run build
```

### Styles Not Applying
```bash
# Check if globals.css is imported in page.tsx
# Check if Tailwind class names are correct
# Clear cache: rm -rf .next
```

### Images Not Showing
```
Check:
1. File is in public/ folder
2. Path starts with /
3. File name matches exactly (case-sensitive)
```

### Animations Not Working
```
Check:
1. framer-motion is installed (npm install framer-motion)
2. motion components imported correctly
3. initial/animate/whileInView props present
```

---

## 🌐 Environment Variables

**Create `.env.local`:**

```
NEXT_PUBLIC_SITE_URL=http://localhost:3000
NEXT_PUBLIC_GA_ID=your_google_analytics_id
```

---

## 📱 Testing Responsive Design

```bash
# Test at different screen sizes:
- Mobile: 375px (iPhone)
- Tablet: 768px (iPad)
- Desktop: 1024px (MacBook)

# Use Chrome DevTools: F12 → Toggle device toolbar (Ctrl+Shift+M)
```

---

## 🚀 Deployment to Vercel

```bash
# Install Vercel CLI
npm install -g vercel

# Deploy
vercel

# Follow prompts to connect GitHub repo
# Automatic deploys on git push
```

---

## 📊 Performance Checklist

```
Lighthouse Score Target: > 90

Check:
- [ ] Images optimized (< 100KB each)
- [ ] No unused JavaScript
- [ ] Font files optimized
- [ ] CSS is minified
- [ ] Code splitting working
- [ ] Caching headers set
- [ ] CDN configured
```

---

## 📚 Quick Reference Links

- **Next.js Docs:** https://nextjs.org/docs
- **Tailwind CSS:** https://tailwindcss.com/docs
- **Framer Motion:** https://www.framer.com/motion/
- **Lucide Icons:** https://lucide.dev
- **TypeScript:** https://www.typescriptlang.org/docs/

---

## 🎯 Today's Tasks

If starting development today:

```
[ ] 9:00 - 9:15  : Setup project & dependencies
[ ] 9:15 - 9:30  : Create folder structure
[ ] 9:30 - 9:45  : Setup colors & globals.css
[ ] 9:45 - 10:00 : Create Navbar component
[ ] 10:00 - 11:00: Create Footer component
[ ] 11:00 - 12:00: Create Hero section
[ ] 12:00 - 1:00 : Lunch break
[ ] 1:00 - 2:00  : Create Stats section
[ ] 2:00 - 3:00  : Create Featured Event section
[ ] 3:00 - 4:00  : Create What We Do section
[ ] 4:00 - 5:00  : Create CTA section & integrate
```

**End of Day:** Fully functional homepage ✅

---

## 💡 Pro Tips

1. **Naming:** Use descriptive names
   ```tsx
   ✅ FeaturedEventCard.tsx
   ❌ Card.tsx
   ```

2. **Component Size:** Keep components < 200 lines
   ```tsx
   ✅ Split into smaller components
   ❌ Giant 500-line component
   ```

3. **Props:** Always type props
   ```tsx
   ✅ interface HeroProps { title: string }
   ❌ const Hero = (props: any) => {}
   ```

4. **Comments:** Add them for complex logic
   ```tsx
   ✅ // Calculate total builders from all events
   ❌ // x = y + z
   ```

5. **Git Commits:** Commit frequently
   ```bash
   ✅ git commit -m "Add Hero section"
   ❌ git commit -m "Update website"
   ```

---

## 🎬 Example Component (Full)

```tsx
'use client'

import { motion } from 'framer-motion'
import { ArrowRight } from 'lucide-react'

interface FeatureProps {
  icon: string
  title: string
  description: string
}

function FeatureCard({ icon, title, description }: FeatureProps) {
  return (
    <motion.div
      className="p-6 bg-white rounded-xl border border-border hover:border-primary transition-colors"
      whileHover={{ y: -4 }}
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
    >
      <div className="text-4xl mb-4">{icon}</div>
      <h3 className="text-xl font-bold text-text-primary mb-2">{title}</h3>
      <p className="text-text-secondary">{description}</p>
    </motion.div>
  )
}

export default function Features() {
  const features = [
    { icon: '🎓', title: 'Learn', description: 'Expert-led workshops' },
    { icon: '🤝', title: 'Collaborate', description: 'Find your team' },
    { icon: '🚀', title: 'Launch', description: 'Get real opportunities' },
  ]

  return (
    <section className="py-20 px-4">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-5xl font-bold mb-12">What We Offer</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {features.map((feature, i) => (
            <FeatureCard key={i} {...feature} />
          ))}
        </div>
      </div>
    </section>
  )
}
```

---

**You're ready to build! Start with `npm run dev` and let's go! 🚀**

Need help? Refer to the full Setup Guide or component templates above.
