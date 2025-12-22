# DPB Solution - Standard Folder Structure

## 📁 Project Organization

This project follows a **standard monorepo structure** with clear separation between frontend, backend, and shared resources.

```
dbp-solution-web/
│
├── src/                          # Main source code (Next.js App)
│   ├── app/                      # Next.js 14 App Router
│   │   ├── (frontend-routes)/   # Public-facing pages
│   │   │   ├── page.tsx         # Home page
│   │   │   ├── about/           # About page
│   │   │   ├── services/        # Services page
│   │   │   ├── solutions/       # Solutions page
│   │   │   ├── careers/         # Careers page
│   │   │   ├── contact/         # Contact page
│   │   │   ├── policies/        # Policies page
│   │   │   ├── privacy/         # Privacy policy page
│   │   │   └── terms/           # Terms & conditions page
│   │   │
│   │   ├── admin/               # **BACKEND: Admin Panel**
│   │   │   ├── login/           # Admin authentication
│   │   │   ├── dashboard/       # Admin dashboard
│   │   │   ├── team/            # Team management
│   │   │   ├── careers/         # Job openings management
│   │   │   ├── testimonials/    # Client testimonials management
│   │   │   ├── stats/           # Statistics management
│   │   │   ├── home/            # Home content management
│   │   │   └── about/           # About content management
│   │   │
│   │   └── api/                 # **BACKEND: API Routes**
│   │       ├── auth/            # NextAuth.js authentication
│   │       └── admin/           # Admin API endpoints
│   │           ├── team/        # Team CRUD API
│   │           ├── careers/     # Careers CRUD API
│   │           ├── testimonials/# Testimonials CRUD API
│   │           ├── stats/       # Stats CRUD API
│   │           ├── home/        # Home content API
│   │           └── about/       # About content API
│   │
│   ├── components/              # **FRONTEND: React Components**
│   │   ├── layout/              # Layout components
│   │   │   ├── Header.tsx       # Site header
│   │   │   ├── Footer.tsx       # Site footer
│   │   │   └── index.ts         # Layout exports
│   │   │
│   │   ├── features/            # Feature-specific components
│   │   │   ├── home/            # Home page components
│   │   │   ├── about/           # About page components
│   │   │   ├── services/        # Services page components
│   │   │   └── contact/         # Contact form components
│   │   │
│   │   ├── common/              # Shared/reusable components
│   │   │   ├── ServiceCard.tsx
│   │   │   ├── TestimonialCard.tsx
│   │   │   └── ThemeProvider.tsx
│   │   │
│   │   └── ui/                  # shadcn/ui components
│   │       ├── button.tsx
│   │       ├── input.tsx
│   │       ├── card.tsx
│   │       ├── toast.tsx
│   │       └── ...
│   │
│   ├── lib/                     # **SHARED: Utility Libraries**
│   │   ├── utils.ts             # Helper functions
│   │   └── animations.ts        # Animation utilities
│   │
│   ├── config/                  # **SHARED: Configuration**
│   │   ├── site.ts              # Site configuration
│   │   └── content.ts           # Content configuration
│   │
│   ├── constants/               # **SHARED: Constants & Data**
│   │   ├── home.ts              # Home page data
│   │   ├── about.ts             # About page data
│   │   ├── services.ts          # Services data
│   │   ├── careers.ts           # Careers data
│   │   ├── contact.ts           # Contact data
│   │   ├── privacy.ts           # Privacy policy data
│   │   └── terms.ts             # Terms & conditions data
│   │
│   └── types/                   # **SHARED: TypeScript Types**
│       └── index.ts             # Type definitions
│
├── prisma/                      # **BACKEND: Database**
│   ├── schema.prisma            # Database schema
│   ├── seed.ts                  # Database seeding
│   └── dev.db                   # SQLite database (development)
│
├── public/                      # **FRONTEND: Static Assets**
│   ├── images/                  # Images
│   │   ├── logo.jpeg            # Company logo
│   │   └── ...
│   └── details/                 # Static detail files
│
├── scripts/                     # **BACKEND: Utility Scripts**
│   ├── create-admin.ts          # Admin user creation
│   └── create-admin.js          # Admin user creation (JS)
│
├── .env                         # Environment variables (private)
├── .env.example                 # Environment variables template
├── .gitignore                   # Git ignore rules
├── components.json              # shadcn/ui configuration
├── eslint.config.mjs            # ESLint configuration
├── next.config.ts               # Next.js configuration
├── package.json                 # Dependencies & scripts
├── postcss.config.mjs           # PostCSS configuration
├── tailwind.config.ts           # Tailwind CSS configuration
└── tsconfig.json                # TypeScript configuration

```

## 🏗️ Architecture Overview

### **Frontend** (Public Website)
- **Location**: `src/app/*` (except `/admin` and `/api`)
- **Purpose**: User-facing pages and components
- **Technology**: Next.js 14 App Router, React, Tailwind CSS
- **Components**: `src/components/`

### **Backend** (Admin Panel + API)
- **Admin Panel**: `src/app/admin/*`
- **API Routes**: `src/app/api/*`
- **Database**: Prisma ORM with SQLite (dev) / PostgreSQL (prod)
- **Authentication**: NextAuth.js with JWT sessions
- **Scripts**: `scripts/` directory

### **Shared Resources**
- **Utilities**: `src/lib/`
- **Configuration**: `src/config/`
- **Constants**: `src/constants/`
- **Types**: `src/types/`

## 📦 Key Directories Explained

### `/src/app` - Application Routes
Next.js 14 App Router structure. Each folder represents a route.
- File-based routing
- `page.tsx` = route page
- `layout.tsx` = shared layout
- `loading.tsx` = loading state
- `error.tsx` = error handling

### `/src/components` - React Components
Organized by purpose:
- **layout/** - Site-wide layout components
- **features/** - Page-specific feature components
- **common/** - Reusable shared components
- **ui/** - shadcn/ui component library

### `/src/app/api` - API Routes
RESTful API endpoints for CRUD operations:
- Authentication endpoints
- Admin management APIs
- Database operations

### `/prisma` - Database Layer
- **schema.prisma** - Database models and relations
- **seed.ts** - Initial data seeding
- **dev.db** - SQLite database file (gitignored)

### `/public` - Static Files
Static assets served directly:
- Images, fonts, icons
- Files accessible at root URL (e.g., `/images/logo.jpeg`)

## 🔐 Security Structure

### Protected Routes
- `/admin/*` - Requires authentication
- Middleware: `src/middleware.ts` (if needed)

### API Authentication
- NextAuth.js handles sessions
- JWT tokens stored in HTTP-only cookies
- API routes check session before operations

## 🚀 Development Workflow

### Frontend Development
```bash
# Work in: src/app, src/components
npm run dev
# Visit: http://localhost:3000
```

### Backend Development
```bash
# Work in: src/app/api, prisma
npx prisma studio  # Database GUI
# API available at: http://localhost:3000/api/*
```

### Admin Panel
```bash
# Work in: src/app/admin
# Login: http://localhost:3000/admin/login
# Email: info@dpbsolution.com
# Password: Admin@123
```

## 📝 File Naming Conventions

- **Components**: PascalCase - `Header.tsx`, `ServiceCard.tsx`
- **Pages**: lowercase - `page.tsx`, `layout.tsx`
- **Utilities**: camelCase - `utils.ts`, `animations.ts`
- **Constants**: camelCase - `home.ts`, `services.ts`
- **Types**: camelCase - `index.ts`

## 🎯 Benefits of This Structure

✅ **Clear Separation**: Frontend vs Backend vs Shared
✅ **Scalable**: Easy to add new features
✅ **Maintainable**: Organized by feature and purpose
✅ **Standard**: Follows Next.js best practices
✅ **Type-Safe**: Full TypeScript support
✅ **Modular**: Reusable components and utilities

---

**DPB Solution Pvt. Ltd.** - Telecommunications Excellence
