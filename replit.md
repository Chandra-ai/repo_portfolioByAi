# Portfolio Website - Java Developer

## Overview

This is a professional portfolio website for Chandrasekhar Moharana, a Java developer from Mumbai, India. The application is built as a full-stack web application showcasing skills, projects, and providing a contact form for potential clients or employers.

## System Architecture

### Frontend Architecture
- **Framework**: React 18 with TypeScript
- **Routing**: Wouter for client-side routing
- **Styling**: Tailwind CSS with shadcn/ui component library
- **State Management**: TanStack Query (React Query) for server state
- **Form Handling**: React Hook Form with Zod validation
- **Build Tool**: Vite for development and production builds

### Backend Architecture
- **Runtime**: Node.js with Express.js
- **Language**: TypeScript with ES modules
- **Database ORM**: Drizzle ORM
- **Database**: PostgreSQL (configured for Neon serverless)
- **Validation**: Zod schemas for request/response validation
- **Session Management**: Express session with PostgreSQL store

### Key Components

#### Frontend Components
- **Navigation**: Sticky navigation with smooth scrolling
- **Hero Section**: Introduction with call-to-action buttons
- **About Section**: Personal details and downloadable resume
- **Skills Section**: Technical skills with visual progress indicators
- **Projects Section**: Portfolio projects showcase
- **Contact Form**: Interactive contact form with validation
- **Footer**: Social links and contact information

#### Backend Services
- **Contact API**: Handles contact form submissions
- **Storage Layer**: Abstracted storage interface with in-memory fallback
- **Route Registration**: Centralized API route management
- **Error Handling**: Comprehensive error handling middleware

#### Database Schema
- **Users Table**: User authentication (id, username, password)
- **Contact Messages Table**: Contact form submissions (id, name, email, subject, message, created_at)

## Data Flow

1. **Contact Form Submission**:
   - User fills contact form → Form validation (client-side) → API request → Server validation → Database storage → Success/error response

2. **Page Navigation**:
   - User clicks navigation → Smooth scroll to section → Update active navigation state

3. **Development Mode**:
   - Vite dev server serves React app → Express API handles backend requests → Hot module replacement for development

## External Dependencies

### Core Dependencies
- **UI Components**: Radix UI primitives with shadcn/ui styling
- **Database**: Neon Postgres serverless database
- **Development**: Replit integration with runtime error overlay
- **Fonts**: Google Fonts (Inter family)

### Development Tools
- **TypeScript**: Full type safety across frontend and backend
- **ESLint/Prettier**: Code quality and formatting
- **Drizzle Kit**: Database migrations and schema management

## Deployment Strategy

### Production Build
- **Frontend**: Vite builds optimized static assets to `dist/public`
- **Backend**: ESBuild bundles server code to `dist/index.js`
- **Database**: Drizzle migrations applied via `db:push` command

### Environment Configuration
- **Development**: `npm run dev` - Concurrent frontend/backend development
- **Production**: `npm run build` followed by `npm run start`
- **Database**: Environment variable `DATABASE_URL` required for Postgres connection

### Replit Configuration
- **Modules**: Node.js 20, Web, PostgreSQL 16
- **Ports**: Internal port 5000 mapped to external port 80
- **Auto-scaling**: Configured for Replit's autoscale deployment target

## Changelog

Changelog:
- June 25, 2025. Initial setup

## User Preferences

Preferred communication style: Simple, everyday language.