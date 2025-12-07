# Design Guidelines: Cultural Center Website

## Design Approach
**Reference-Based**: Draw inspiration from modern cultural institution websites with artistic flair (e.g., Barbican Centre, MoMA, Tate Modern) - combining artistic expression with clean usability.

## Core Design Principles
1. **Artistic but Clear**: Balance creative visual effects with intuitive navigation
2. **Cultural Elegance**: Theatrical/cultural aesthetic with modern web techniques
3. **Smooth Interactions**: Subtle, refined animations that enhance rather than distract
4. **Accessibility**: Maintain readability and usability despite visual effects

## Typography
- **Headings**: Modern serif for elegance (e.g., Playfair Display, Cormorant)
- **Body**: Clean sans-serif for readability (e.g., Inter, Source Sans Pro)
- **Hierarchy**: 
  - Hero title: text-5xl to text-7xl, font-bold
  - Section headers: text-3xl to text-4xl, font-semibold
  - Card titles: text-xl, font-medium
  - Body: text-base to text-lg

## Layout System
**Spacing**: Use Tailwind units of 4, 8, 12, 16, 20, 24 (p-4, mb-8, gap-12, etc.)
- Consistent section padding: py-16 to py-24 on desktop, py-12 on mobile
- Card spacing: gap-6 to gap-8 in grids
- Content max-width: max-w-7xl for sections

## Navigation Structure
**Glassmorphism Fixed Navbar**:
- Split navigation with centered logo
- **Left group**: Główna | O nas↓ | Biblioteka publiczna↓ | Artystyczna przestrzeń↓
- **Center**: Large logo (prominent, 2-3x other elements)
- **Right group**: Inne formy działalności↓ | Aktualności↓ | Kadra | Kontakt↓
- Visual treatment: backdrop-blur-lg, bg-white/80, shadow-lg, sticky top-0, z-50
- Dropdown menus: Subtle slide-down animation, glassmorphism effect

## Component Library

### Hero Section
- Full viewport height (min-h-screen)
- **Parallax background image**: Cultural/theatrical atmosphere
- Centered content with large welcoming heading and "Repertuar" CTA button
- Semi-transparent overlay for text readability

### Event Cards (Grid Layout)
- Responsive grid: grid-cols-1 md:grid-cols-2 lg:grid-cols-3
- Each card: Image top, date badge, title, brief description
- **Hover effect**: scale-105, shadow elevation increase, subtle accent border glow
- Image aspect ratio: aspect-video or aspect-[4/3]

### Activity/Classes Tiles
- Grid or masonry layout showcasing interest groups
- Visual variety: mix image-heavy and icon-based tiles
- Colorful accent overlays representing different activity types

### Footer
- Multi-column layout: Contact info | Quick links | Map placeholder | Social media
- Social icons: Lucide React icons in circular containers
- Subtle background treatment separate from main content

## Visual Effects Implementation

### Glassmorphism (Navbar only)
- backdrop-filter: blur(12px)
- background: rgba(255, 255, 255, 0.8)
- border: 1px solid rgba(255, 255, 255, 0.18)

### Parallax (Hero Section)
- Framer Motion with scroll-linked transform
- Background moves slower than foreground (0.5x speed)

### Scroll Reveal Animations
- **All sections**: Fade-in + slide-up (translate-y-10 to translate-y-0)
- Framer Motion variants: initial: {opacity: 0, y: 40}, animate: {opacity: 1, y: 0}
- Stagger children in grids: staggerChildren: 0.1
- Trigger: when section enters viewport (whileInView)

### Hover Effects
- Cards: transition-transform duration-300, hover:scale-105, hover:shadow-2xl
- Buttons: Subtle glow, slight scale increase
- Links: Underline animation or color shift

## Images

### Required Images:
1. **Hero Background**: Large theatrical/cultural space image (concert hall, theater interior, or cultural event) - Full width, high quality
2. **Event Cards** (3-6 images): Various cultural events - concerts, theater performances, workshops
3. **Activity Tiles** (4-8 images): Classes and interest groups in action - art classes, music lessons, dance groups
4. **Logo**: "logo.png" - Cultural center branding (centered in navbar)

### Image Treatment:
- Hero: Dark overlay (bg-black/40) for text contrast
- Cards: Maintain vibrant colors, no heavy filters
- Hover: Slight brightness increase or subtle zoom

## Responsive Behavior
- **Desktop**: Full split navigation, 3-column event grid, parallax active
- **Tablet**: Condensed nav with hamburger option, 2-column grid, reduced parallax
- **Mobile**: Hamburger menu, single column, minimal animations for performance

## Constraints
- No distracting animations - keep all motion subtle and purposeful
- Performance: Optimize images, lazy load below fold
- Accessibility: Maintain WCAG contrast ratios despite glassmorphism effects
- Cultural authenticity: Design should reflect Polish cultural institution dignity