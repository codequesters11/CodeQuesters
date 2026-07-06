# CodeQuesters Website Design System Guide
## For Antigravity IDE Development

---

## 📋 Executive Summary

This guide provides comprehensive design specifications for the CodeQuesters website redesign. Our goal is to create a professional, clean, community-focused platform that showcases builder growth and ecosystem impact while maintaining warmth and accessibility across both light and dark modes.

**Key Design Philosophy:**
- Professional yet approachable
- Data-driven (showcase impact metrics prominently)
- Community-centered (highlight real builders)
- Clean and minimal (no unnecessary elements)
- Accessible (WCAG AA compliant)

---

## 🎨 Color Palette

### Primary Brand Colors
```
#10b981 - Brand Green (primary action, accents, highlights)
#ffffff - Pure White (cards, text backgrounds)
#0f1419 - Dark Background (primary page background)
```

### Accent & Status Colors
```
#3b82f6 - Highlight Blue (secondary emphasis)
#f59e0b - Warm Amber (warning/attention)
#8b5cf6 - Community Purple (community-related elements)
#ef4444 - Error Red (errors, alerts)
#10b981 - Success Green (confirmations, achievements)
```

### Neutral Scale (for dark mode)
```
#1a2332 - Surface Secondary (cards, elevated elements)
#374151 - Border Strong (emphasize dividers)
#6b7280 - Text Secondary (supporting text)
#9ca3af - Text Tertiary (hints, muted text)
#e5e7eb - Text Primary (main content)
```

### Dark Mode Guidelines
- Page background: #0f1419
- Card/Surface background: #1a2332
- Border color (default): #374151
- Primary text: #e5e7eb
- Secondary text: #9ca3af
- Accent remains #10b981 (works in both modes)

### Light Mode Guidelines (if supporting light theme)
- Page background: #ffffff
- Card background: #f9fafb
- Border color: #e5e7eb
- Primary text: #1f2937
- Secondary text: #6b7280
- Accent remains #10b981

---

## 🔤 Typography System

### Font Stack
**Primary:** System fonts (sans-serif)
- Recommended: Inter, Poppins, or system default sans-serif
- Fallback: -apple-system, BlinkMacSystemFont, "Segoe UI", sans-serif

### Type Scale
```
H1 (Hero):        48px, weight 600, line-height 1.2
H2 (Section):     28-32px, weight 600, line-height 1.3
H3 (Subsection):  20-24px, weight 600, line-height 1.4
H4 (Card Title):  16-18px, weight 600, line-height 1.4
Body (Main):      16px, weight 400, line-height 1.6
Body (Small):     14px, weight 400, line-height 1.6
Label/Caption:    12-13px, weight 400, line-height 1.5
Tag/Badge:        12px, weight 500, line-height 1.4
```

### Font Weight Rules
- **Only use 2 weights:** 400 (regular) and 500 (bold/semi-bold)
- Never use 600 or 700 (too heavy for screen)
- Headers: weight 600
- Body: weight 400
- Emphasis: weight 500

### Text Styling Rules
- **Sentence case everywhere** (not Title Case)
- No ALL CAPS except for labels like "FEATURED", "NEW"
- Proper nouns only (CodeQuesters, IIIT, etc.)
- Contractions allowed ("can't", "you're")
- No mid-sentence bold

---

## 🧩 Component Guidelines

### Buttons

#### Primary Button
```
Background: #10b981
Text: #ffffff (weight 500)
Padding: 12px (vertical) × 32px (horizontal)
Border-radius: 6px
Border: none
Hover: brightness(115%)
Active: scale(0.98)
Focus: 2px outline, #10b981
```

#### Secondary Button
```
Background: transparent
Text: #10b981 (weight 500)
Border: 2px solid #10b981
Padding: 10px (vertical) × 30px (horizontal)
Border-radius: 6px
Hover: background: rgba(16, 185, 129, 0.1)
```

#### Ghost Button
```
Background: transparent
Text: #9ca3af
Border: 1px solid #374151
Padding: 10px × 20px
Border-radius: 6px
Hover: background: #1a2332
```

### Card Components

#### Standard Card
```
Background: #1a2332
Border: 1px solid #374151
Border-radius: 8px
Padding: 24px (inside content)
Box-shadow: none (flat design)
Hover: border-color: #10b981 (optional subtle effect)
```

#### Featured Card
```
[Same as standard]
Border: 2px solid #10b981
Includes: Featured badge (top-left or top-right)
```

#### Impact Stat Card
```
Background: #0f1419 or #1a2332
Border-left: 4px solid #10b981 (or accent color)
Padding: 24px
Left align number (32px bold #10b981)
Small label below (14px, #9ca3af)
Optional: Smaller description text
```

### Form Elements

#### Text Input
```
Background: #1a2332
Border: 1px solid #374151
Border-radius: 4px
Padding: 10px 12px
Color: #e5e7eb
Font-size: 14px
Placeholder: #6b7280
Focus: border-color #10b981, 1px solid
Height: 40px minimum
```

#### Textarea
```
[Same as input]
Resize: vertical only
Min-height: 100px
Font-family: inherit
```

#### Select/Dropdown
```
[Same styling as input]
Icons: Use Tabler icons (arrow-down)
```

#### Checkbox/Radio
```
Size: 18px × 18px
Border: 1px solid #374151
Checked: background #10b981, border #10b981
Focus: 2px outline
Cursor: pointer
Margin: 4px
```

### Tags/Badges

#### Category Tag
```
Background: #0f1419
Border: 1px solid #374151
Text: #9ca3af (12px)
Padding: 4px 8px
Border-radius: 4px
```

#### Status Badge
```
Background: varies by status
  Success: #10b981
  Warning: #f59e0b
  Error: #ef4444
  Info: #3b82f6
Text: white
Padding: 4px 12px
Border-radius: 4px
Font-size: 12px
Font-weight: 600
```

### Navigation

#### Navbar
```
Background: #1a2332
Border-bottom: 1px solid #374151
Height: 64px minimum
Padding: 16px 24px
Logo: 18px, weight 600, color #10b981
Nav items: 14px, spacing 24px
Active nav: color #10b981, font-weight 600
```

---

## 📐 Spacing & Layout

### Spacing Scale
```
Base unit: 8px
xs: 4px
sm: 8px
md: 12px
lg: 16px
xl: 24px
2xl: 32px
3xl: 48px
```

### Container Widths
```
Mobile: 320-767px (full width, 16px padding)
Tablet: 768-1024px (full width, 24px padding)
Desktop: 1025px+ (max-width 1200px, centered)
```

### Section Spacing
```
Vertical: 48px between major sections
Horizontal padding: 24px (mobile), 32px (desktop)
Card gaps: 24px
Grid gaps: 24px
```

### Button Spacing
```
Button gap: 12px
Button to content: 24px
Button width: auto (min-width 120px)
Full-width buttons: only in forms/modals
```

---

## 🎯 Page Structure & Sections

### Homepage

**1. Navigation Bar**
- Fixed or sticky top
- Logo + navigation links + CTA button
- Dark background, clean styling

**2. Hero Section**
- Large headline (48px)
- Supporting tagline
- Two CTAs (primary + secondary)
- No background image (use gradient if needed)
- Padding: 60px top/bottom

**3. Impact Stats Grid**
- 4 metrics in responsive grid
- Large numbers (32px) + small labels
- Left border accent (4px color)
- Use different colors (#10b981, #3b82f6, #f59e0b, #8b5cf6)
- Padding: 48px top/bottom

**4. Partners Section**
- "Trusted by" heading
- Logo grid (grayscale, centered)
- Grid columns: auto-fit minmax(140px, 1fr)
- Padding: 48px

**5. Call-to-Action Section**
- Gradient background (green theme)
- Central headline + supporting text
- Single or two buttons
- Padding: 48px

**6. Footer**
- 4-column layout (Company, Program, Community, Legal)
- Copyright text
- Social links (optional)
- Background: #1a2332
- Border-top: 1px solid #374151

### About Page

**1. Page Header**
- Small label ("ABOUT US")
- Large headline with accent color
- Optional supporting text

**2. Mission Section**
- Text content
- Padding: 48px top/bottom
- Max-width: 800px

**3. Principles Section**
- 3 principle cards
- Icon (emoji) + title + description
- Grid: auto-fit minmax(280px, 1fr)
- Padding: 48px

**4. Impact Numbers Section**
- Same format as homepage
- Highlight 2-3 key metrics
- Add optional description text below number

**5. Success Stories Teaser**
- 3 builder cards with circular photos
- Name + title + quote
- "View All Stories" CTA
- Grid: repeat(3, 1fr)

**6. Partners Section**
- Same as homepage
- Title variation: "Built by These Amazing Organizations"

**7. CTA Section**
- Invitation to join/get involved
- Gradient background

### Events Page

**1. Page Header**
- Label, headline, supporting text

**2. Upcoming Events Section**
- Clear heading
- Event cards in grid (3 per row desktop, 1 mobile)
- Featured event: 2px border #10b981
- Regular events: 1px border #374151
- Card content:
  - Event image/gradient header
  - Category badge
  - Title (18-20px)
  - Description (14px)
  - Metadata (date, location, attendees)
  - CTA button

**3. Past Events Section**
- Grid of past event cards (2x2 or 3x3)
- Image/gradient + date + title + brief stats
- Smaller than upcoming cards
- View count or description

**4. FAQ Section**
- Q&A cards
- Expandable or static (static recommended)
- 4-6 common questions

**5. Newsletter CTA**
- Email input + subscribe button
- Gradient background

### Stories Page

**1. Page Header**
- Label, headline, subtitle

**2. Featured Story**
- Two-column layout (photo + content)
- Large photo (gradient placeholder)
- 32px headline
- 14px category tag
- Body text + quote styling
- Stat boxes highlighting metrics
- "Read Full Story" CTA

**3. Stories Grid**
- 3 columns desktop, 2 tablet, 1 mobile
- Each card: image + circular photo + name + role + quote + tags
- Grid: auto-fit minmax(300px, 1fr)

**4. Filter Tags**
- Category filters (Internship, Startup, Freelance, etc.)
- Active filter: #10b981 background
- Inactive: transparent, border

**5. CTA Section**
- "Share Your Story" call-to-action

### Contact Page

**1. Multiple Contact Methods**
- Email section
- WhatsApp community link
- Discord/social links
- Contact form

**2. Contact Form**
- Fields: Name, Email, Organization, Message
- Submit button
- Optional: Category select (Judge, Sponsor, Collaboration, etc.)

**3. Footer**
- Location: Based in India
- Social links
- Quick links

---

## 🎬 Responsive Design Rules

### Mobile-First Approach
```
Base: 320px width
Padding: 16px horizontal
Full-width cards and buttons
Single-column layouts
Touch targets: 44px minimum
```

### Tablet (768px+)
```
Padding: 24px horizontal
2-column grids where appropriate
Medium-sized cards
Slightly larger text
```

### Desktop (1025px+)
```
Max-width container: 1200px
Padding: 32px horizontal
3-4 column grids
Full-size components
```

### Responsive Grid Formula
```
CSS: grid-template-columns: repeat(auto-fit, minmax(200px, 1fr))
Adjust minmax value per use case:
  - Card grids: minmax(280px, 1fr)
  - Partner logos: minmax(140px, 1fr)
  - Impact stats: minmax(200px, 1fr)
```

---

## ♿ Accessibility Requirements

### Color Contrast
- Primary text on dark bg: #e5e7eb on #0f1419 (passes WCAG AAA)
- Links: #10b981 on dark (passes WCAG AA)
- All color-dependent info has alternative visual cues

### Focus States
- All interactive elements: 2px outline (#10b981)
- Outline offset: 2px
- Never remove focus outlines

### Keyboard Navigation
- All buttons/links clickable via Tab
- Form inputs proper labeling
- Logical tab order
- No keyboard traps

### Screen Reader
- Semantic HTML (headings, nav, main, footer)
- Alt text on all images (or aria-hidden if decorative)
- Form labels associated with inputs
- Descriptive link text (not "click here")

### Motion
- Respect `prefers-reduced-motion`
- Keep animations under 200ms
- No auto-playing videos/gifs

---

## 🎨 Visual Details

### Borders
```
Default: 1px solid #374151
Emphasis: 1px solid #10b981 (or 2px on featured items)
Strong: used for dividers between sections
Never: multiple border styles on same element
```

### Border Radius
```
Small: 4px (inputs, badges)
Medium: 6px (buttons)
Large: 8px (cards)
Extra Large: 12px (large hero cards)
Full circle: 50% (avatars, 80x80px)
```

### Shadows
```
Flat design: No shadows
Exception: hover state can use subtle shadow if needed
Approach: Use borders instead of shadows for depth
```

### Hover & Active States
```
Buttons: 
  - Hover: brightness(115%) or subtle bg change
  - Active: scale(0.98)
  - Transition: 200ms ease
Cards:
  - Hover: border-color changes to #10b981 (optional)
Links:
  - Hover: text-decoration underline
  - Color: remains #10b981
```

### Transitions
```
Duration: 200ms default
Easing: ease-in-out for most transitions
Exclude: transforms on hover (keep snappy)
Never: multiple sequential transitions (batch updates)
```

---

## 📱 Component States Reference

### Button States
```
Normal → Hover → Active → Disabled
- Color changes
- Scale changes on active (0.98)
- Opacity for disabled (0.5)
- Never: remove click targets when disabled
```

### Card Hover
```
Default: 1px border #374151
Hover: 1px border #10b981 (optional for interactive cards)
Focus: same as hover
Transition: border-color 200ms ease
```

### Form Input States
```
Empty: placeholder text #6b7280
Focus: border #10b981, outline none
Error: border #ef4444, error text below
Filled: value #e5e7eb
Disabled: opacity 0.5, cursor not-allowed
```

---

## 🔄 Dark Mode Implementation

### CSS Variables Approach (Recommended)
```css
:root {
  --bg-primary: #0f1419;
  --bg-secondary: #1a2332;
  --text-primary: #e5e7eb;
  --text-secondary: #9ca3af;
  --accent: #10b981;
  --border: #374151;
}

@media (prefers-color-scheme: light) {
  :root {
    --bg-primary: #ffffff;
    --bg-secondary: #f9fafb;
    --text-primary: #1f2937;
    --text-secondary: #6b7280;
    --accent: #10b981;
    --border: #e5e7eb;
  }
}
```

### Dark Mode First
- Design starts dark (primary mode)
- Light mode added as enhancement
- Test both modes thoroughly
- Ensure all colors have light mode equivalents

---

## 📋 Design Checklist for Implementation

### Typography
- [ ] Font family loaded and fallbacks set
- [ ] All heading sizes implemented
- [ ] Line-heights match spec (1.6 for body, 1.2-1.4 for headings)
- [ ] Only 2 font weights used (400, 600)
- [ ] Sentence case applied throughout

### Colors
- [ ] Color palette defined in CSS variables
- [ ] Hover states implemented for all interactive elements
- [ ] Dark mode colors tested
- [ ] Light mode colors tested (if applicable)
- [ ] Contrast checked (WCAG AA minimum)

### Spacing
- [ ] Container widths correct (max 1200px on desktop)
- [ ] Section padding: 48px top/bottom
- [ ] Card padding: 24px
- [ ] Grid gaps: 24px
- [ ] Responsive padding on mobile

### Components
- [ ] Buttons (primary, secondary, ghost)
- [ ] Cards (standard, featured, impact stat)
- [ ] Form inputs with all states
- [ ] Navigation responsive
- [ ] Footer responsive

### Pages
- [ ] Homepage complete with all sections
- [ ] About page with principles and impact
- [ ] Events page with event cards
- [ ] Stories page with grid and featured story
- [ ] Contact page functional

### Accessibility
- [ ] Focus outlines visible on all interactive elements
- [ ] Color contrast checked
- [ ] Keyboard navigation works
- [ ] Alt text on all meaningful images
- [ ] Semantic HTML used
- [ ] Form labels associated

### Responsive
- [ ] Mobile view (320px) tested
- [ ] Tablet view (768px) tested
- [ ] Desktop view (1025px+) tested
- [ ] Touch targets 44px+ on mobile
- [ ] No horizontal scroll on mobile

### Polish
- [ ] Hover states smooth
- [ ] Transitions 200ms
- [ ] No layout shifts
- [ ] Loading states considered
- [ ] Empty states handled

---

## 🚀 Build Recommendations

### File Structure
```
components/
  ├── Header/
  ├── Footer/
  ├── Button/
  ├── Card/
  ├── Form/
  └── ... other components

pages/
  ├── home/
  ├── about/
  ├── events/
  ├── stories/
  └── contact/

styles/
  ├── variables.css (colors, spacing, fonts)
  ├── reset.css
  ├── global.css
  └── animations.css
```

### CSS Organization
```
1. Variables (colors, spacing, typography)
2. Reset/Normalize
3. Global base styles
4. Layout (grid, flexbox)
5. Components (buttons, cards, forms)
6. Pages (specific overrides)
7. Media queries
8. Animations/Transitions
```

### Performance Tips
- Minimize layout shifts
- Use CSS Grid for layouts (faster than flex)
- Batch DOM updates
- Lazy load images below fold
- Compress images (PNG for UI, WebP where possible)
- Font loading: system fonts preferred (no load time)

### Browser Support
- Chrome, Firefox, Safari (latest 2 versions)
- Edge (latest)
- Mobile browsers (iOS Safari, Chrome Mobile)
- Graceful degradation for older browsers

---

## 📞 Implementation Support

### Design Decision Framework
When unsure about a design choice:
1. Does it follow the brand colors? (#10b981, #1a2332, #e5e7eb)
2. Is spacing on the grid? (multiples of 8px or 4px minimum)
3. Does it pass accessibility? (contrast, focus, keyboard nav)
4. Is it consistent? (matches other similar components)
5. Is it simple? (follow minimal design philosophy)

If yes to all → implement
If no to any → refer back to this guide or ask designer

### Common Questions

**Q: Can I use drop shadows?**
A: No, we're using flat design. Use borders instead.

**Q: What font should I use?**
A: System fonts (Inter, Poppins) or browser defaults. No external font files unless unavoidable.

**Q: Can I add animations?**
A: Subtle transitions (200ms) for hover states only. No auto-play animations.

**Q: How should I handle loading states?**
A: Show loading spinner or skeleton states. Keep buttons disabled with cursor:wait.

**Q: What about error messages?**
A: Use #ef4444 border on input, show error text below (12px, #ef4444), clear message about how to fix.

---

## 📸 Visual Reference Images

The following mockups show the complete implementation:
1. Homepage with hero, stats, partners, CTA
2. About page with mission, principles, impact, stories
3. Events page with upcoming and past events
4. Stories page with featured story and grid
5. Contact page with form and methods

All mockups are provided as separate design files.

---

## 🎓 Next Steps

1. **Review this guide** with the development team
2. **Confirm color variables** are set correctly
3. **Build component library** first (buttons, cards, forms)
4. **Implement pages** in order: Home → About → Events → Stories → Contact
5. **Test responsiveness** at each breakpoint
6. **Audit accessibility** before launch
7. **Get final approval** before deployment

---

## 📝 Version History

**v1.0** - Initial Design System
- Complete color palette
- Typography specifications
- Component guidelines
- Page structures
- Responsive design rules
- Accessibility requirements

---

**Document prepared for:** CodeQuesters
**Design system version:** 1.0
**Last updated:** 2025
**Built for:** Antigravity IDE

For questions or clarifications, refer to the visual mockups provided or reach out to the design team.
