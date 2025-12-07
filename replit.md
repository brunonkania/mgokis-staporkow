# Miejsko-Gminny Ośrodek Kultury w Stąporkowie

## Overview

This is a modern, artistic website for the Cultural Center in Stąporków, Poland. The project showcases cultural events, activities, workshops, and classes offered by the center. Built with React and styled using Tailwind CSS with Framer Motion animations, the site emphasizes an elegant, theatrical aesthetic while maintaining excellent usability and accessibility.

The application currently uses mock data for events and activities, designed to be easily replaced with a real API backend. The site features parallax effects, glassmorphism navigation, scroll-reveal animations, and interactive hover effects to create an engaging user experience that reflects the artistic nature of a cultural institution.

## User Preferences

Preferred communication style: Simple, everyday language.

## System Architecture

### Frontend Architecture

**Framework**: React 18 with TypeScript, built using Vite for fast development and optimized production builds.

**Routing**: Wouter for lightweight client-side routing. Currently implements a simple structure with a home page and 404 fallback.

**UI Component Library**: Shadcn/ui components (Radix UI primitives) styled with Tailwind CSS. The design system uses the "new-york" style variant with custom theming for a cultural/theatrical aesthetic.

**Animation Library**: Framer Motion for scroll-based animations, parallax effects, and interactive transitions. Key animations include:
- Parallax hero background that moves on scroll
- Scroll-reveal animations for sections (fade-in from bottom)
- Hover effects on cards (scale, shadow elevation)
- Dropdown menu animations with glassmorphism

**State Management**: TanStack Query (React Query) for server state management and API data fetching. Configured with custom query functions and conservative refetch policies.

**Styling Approach**: 
- Tailwind CSS with custom configuration extending the base theme
- Dark mode by default with custom CSS variables for theming
- Typography: Serif fonts for headings (theatrical elegance), sans-serif for body text
- Glassmorphism effects using backdrop-blur and semi-transparent backgrounds
- Responsive design with mobile-first approach

**Key Design Patterns**:
- Component composition with clear separation between presentational and container components
- Custom hooks for reusable logic (toast notifications, mobile detection)
- Framer Motion viewport observers for scroll-triggered animations
- Centralized mock data structure for easy API migration

### Backend Architecture

**Server Framework**: Express.js with TypeScript running on Node.js.

**Build Process**: Custom build script using esbuild for server bundling and Vite for client bundling. The build process:
- Bundles frequently-used dependencies to reduce syscalls and improve cold start times
- Separates client and server builds
- Optimizes for production deployment

**Development Environment**: 
- Vite dev server with HMR (Hot Module Replacement)
- Custom middleware mode integration with Express
- Development-only plugins for error overlays and debugging tools

**Static File Serving**: Express serves the built client application from the `dist/public` directory with SPA fallback routing.

**API Structure**: Placeholder route registration system in `server/routes.ts` ready for REST API endpoints with `/api` prefix convention.

**Session Management**: Infrastructure prepared for session-based authentication using express-session with PostgreSQL session store (connect-pg-simple).

### Data Storage Solutions

**Database ORM**: Drizzle ORM configured for PostgreSQL with:
- Schema definition in TypeScript (`shared/schema.ts`)
- Migration system using drizzle-kit
- Zod integration for runtime validation

**Current Schema**: Minimal user authentication schema (users table with username/password). Ready to be extended with:
- Events table
- Activities/Classes table
- News/Articles table
- Staff information table

**Storage Interface**: Abstracted storage layer with in-memory implementation (`MemStorage`) for development. The interface pattern allows easy swapping to database-backed storage without changing application code.

**Mock Data**: Comprehensive mock data structure (`client/src/lib/mockData.ts`) providing:
- Event listings with categories, dates, images
- Activity/class information with schedules and age groups
- Navigation structure
- Contact information
- Image asset references

### External Dependencies

**UI Component Libraries**:
- Radix UI primitives (accordion, dialog, dropdown, navigation, etc.)
- Lucide React for icons
- Embla Carousel for carousel functionality
- cmdk for command palette pattern

**Form Handling**:
- React Hook Form for form state management
- @hookform/resolvers for validation integration
- Zod for schema validation

**Date Handling**: date-fns for date formatting and manipulation

**Database & ORM**:
- PostgreSQL as the target database (via DATABASE_URL environment variable)
- Drizzle ORM for type-safe database queries
- pg (node-postgres) driver

**Session & Authentication**:
- express-session for session management
- connect-pg-simple for PostgreSQL session storage
- Infrastructure prepared for passport.js integration

**Development Tools**:
- TypeScript for type safety
- ESLint and type checking
- Replit-specific development plugins (error modal, cartographer, dev banner)

**Build & Deployment**:
- Vite for frontend bundling
- esbuild for backend bundling
- PostCSS with Tailwind CSS for styling

**Typography**: Google Fonts integration with custom font families (Architects Daughter, DM Sans, Fira Code, Geist Mono)

### Design System

**Theme Configuration**: Custom Tailwind theme with:
- Dark mode as default
- Custom color palette for cultural aesthetic (primary red accent at hsl(348 83% 47%))
- Glassmorphism variables for navbar and UI elements
- Custom border radius values
- Shadow system for depth and elevation

**Component Patterns**:
- Card-based layouts for events and activities
- Grid systems responsive across breakpoints (1/2/3 columns)
- Fixed glassmorphic navigation with split layout (logo centered)
- Hero section with parallax background image
- Footer with multi-column layout for information architecture

**Accessibility Considerations**:
- Semantic HTML structure
- ARIA labels and roles
- Keyboard navigation support
- Focus management in interactive components
- Screen reader friendly component structure