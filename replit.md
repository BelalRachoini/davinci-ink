# Overview

This is a tattoo studio website for "Da Vinci Ink" built as a full-stack application. The project showcases tattoo artwork, provides consultation booking functionality, and integrates with Instagram for displaying portfolio content. The application features a dark, luxury-themed design with gold accents that reflects the studio's premium branding.

# User Preferences

Preferred communication style: Simple, everyday language.

# System Architecture

## Frontend Architecture
- **Framework**: React 18 with TypeScript for type safety and modern component patterns
- **Routing**: Wouter for lightweight client-side routing
- **UI Components**: Shadcn/ui component library built on Radix UI primitives for accessibility and consistency
- **Styling**: Tailwind CSS with custom luxury color scheme (gold accents on dark backgrounds)
- **State Management**: TanStack Query (React Query) for server state management and caching
- **Form Handling**: React Hook Form with Zod validation for type-safe form processing
- **Build Tool**: Vite for fast development and optimized production builds

## Backend Architecture
- **Runtime**: Node.js with Express.js framework for REST API endpoints
- **Language**: TypeScript for full-stack type safety
- **Development**: TSX for TypeScript execution without compilation step
- **API Structure**: RESTful design with `/api` prefix for all backend routes
- **Storage Interface**: Abstracted storage layer with in-memory implementation (MemStorage) for development

## Data Storage Solutions
- **Database**: PostgreSQL configured with Drizzle ORM for type-safe database operations
- **Migration System**: Drizzle Kit for database schema management and migrations
- **Connection**: Neon Database serverless PostgreSQL for cloud deployment
- **Schema**: Centralized schema definitions in shared directory for consistent types across frontend and backend

## Authentication and Authorization
- **Session Management**: PostgreSQL-backed sessions using connect-pg-simple
- **User Schema**: Basic user model with username/password authentication ready for implementation

## External Dependencies
- **Database**: Neon Database (@neondatabase/serverless) for serverless PostgreSQL hosting
- **UI Framework**: Radix UI primitives for accessible, unstyled components
- **Styling**: Tailwind CSS with PostCSS for utility-first styling
- **Form Validation**: Zod for runtime type checking and validation
- **Icons**: Lucide React for consistent iconography
- **Date Handling**: date-fns for lightweight date manipulation
- **Instagram Integration**: Placeholder structure for Instagram Basic Display API (requires implementation)
- **Development Tools**: Replit-specific plugins for enhanced development experience

## Design Patterns
- **Monorepo Structure**: Client, server, and shared code in organized directories
- **Shared Types**: Common TypeScript interfaces and schemas in shared directory
- **Component Composition**: Modular UI components following Radix UI patterns
- **Error Handling**: Centralized error handling middleware in Express
- **Environment Configuration**: Environment-based configuration for database and development settings