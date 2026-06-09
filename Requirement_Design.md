# WH Guide Australia - Complete Requirements Definition & System Design Document

# 1. Project Overview

## Project Name

WH Guide Australia

## Purpose

Create a comprehensive platform for Japanese working holiday makers in Australia.

The platform should centralize all essential information related to:

* Visa application
* Pre-departure preparation
* Arrival procedures
* Housing
* Jobs
* Farm work
* Second/Third visa
* Tax
* Superannuation
* ABN
* Uber Eats / Gig work
* Cars / Transportation
* Community communication
* Real-life experiences
* Safety and scam prevention

The website should become:

* An SEO-driven content platform
* A community platform
* A long-term information hub
* A monetized media platform

---

# 2. Core Concept

The platform must answer:

> "What should I do next during my working holiday journey?"

The platform should guide users step-by-step from:

1. Before departure
2. Arrival in Australia
3. Finding housing
4. Finding work
5. Farm work
6. Tax and legal procedures
7. Extending visa
8. Long-term life in Australia

The platform should prioritize:

* Real experiences
* Up-to-date information
* Beginner-friendly explanations
* Mobile-first UX
* Community interaction

---

# 3. Technical Stack

## Frontend

* Next.js (App Router)
* TypeScript
* Tailwind CSS

## Backend

* Supabase

## Database

* PostgreSQL (Supabase)

## Authentication

* Supabase Auth
* Email/password login
* Google OAuth login

## Hosting

* Vercel

## Storage

* Supabase Storage

## SEO

* Next.js Metadata API
* Sitemap generation
* robots.txt
* Open Graph support
* Structured data

---

# 4. Development Principles

## Architecture Principles

* Mobile-first
* SEO-first
* Component-based
* Reusable UI
* Secure by default
* RLS-first design
* Scalable architecture
* AI-agent-friendly code structure

## Coding Rules

* Use TypeScript strictly
* Use functional components
* Separate business logic into `/lib`
* Separate types into `/types`
* Avoid duplicated logic
* Use server components where possible
* Use client components only when necessary

---

# 5. Main Features

# 5.1 Article System

## Description

Provide structured guides and tutorials.

## Features

* Category-based article organization
* Rich text article display
* Step-by-step guide blocks
* Image support
* Related articles
* Last updated display
* SEO metadata
* Table of contents
* Share buttons
* Warning / Notice blocks
* Internal linking

## Article Categories

### Visa

* Working Holiday Visa
* Second Visa
* Third Visa
* Specified Work
* Bridging Visa

### Pre-departure

* Passport
* Insurance
* Flight tickets
* International driver's license
* Japanese procedures before departure
* Packing list
* Medication

### Arrival

* TFN
* MyGov
* SIM card
* Bank account
* Address registration

### Tax / Finance

* TFN
* ABN
* Sole Trader
* Tax Return
* Superannuation
* Payslip
* Fair Work
* Minimum wage

### Jobs

* Resume
* Cover letter
* Job sites
* Walk-in applications
* Interview English
* RSA / White Card

### Farm Work

* Picking
* Packing
* Bunching
* Crop guides
* Work difficulty
* Scam prevention
* Second visa eligibility

### Gig Work

* Uber Eats
* DoorDash
* Menulog
* Delivery insurance
* Tax handling
* Gig worker ABN

### Housing

* Flatmates
* Facebook Marketplace
* Bond
* Scam prevention
* Inspection

### Cars

* Car purchase
* Long-term rental
* Rego
* Insurance
* Roadworthy Certificate
* State license rules

### Life

* Grocery stores
* Japanese food
* Cooking
* Hospitals
* Pharmacies
* Safety
* Natural disasters

### Area Guides

* Brisbane
* Sydney
* Melbourne
* Cairns
* Gatton
* Bundaberg
* Stanthorpe
* Shepparton
* Mildura

---

# 5.2 Community Forum System

## Features

* User registration required for posting
* Guests can only read
* Category-based forums
* Post creation
* Post editing
* Post deletion
* Comment creation
* Comment deletion
* Like system
* Report system
* User moderation
* Ban system
* Post hiding
* Search
* Pagination

## Forum Categories

* Housing
* Jobs
* Farm Jobs
* Cars
* Visa
* Second Visa
* Gig Work
* Tax
* Daily Life
* Buy & Sell
* Travel
* General Chat

---

# 5.3 User Request & Feedback System

## Purpose

Allow users to:

* Request new articles
* Report outdated information
* Share experiences
* Ask questions
* Suggest improvements

## Features

* Submit feedback
* Link request to article
* Admin review
* Status management

## Feedback Types

* correction
* article_request
* experience
* question
* other

## Status Types

* pending
* in_progress
* resolved
* rejected

---

# 5.4 User Management

## Roles

* guest
* user
* moderator
* admin

## User Status

* active
* suspended
* banned

## Features

* Registration
* Login
* Google login
* Profile editing
* Avatar upload
* Bio
* Admin moderation
* Ban management

---

# 5.5 Moderation System

## Features

* Report posts
* Report comments
* Hide content
* Ban users
* Suspend users
* Admin moderation panel

---

# 5.6 Advertisement System

## Initial Monetization

* Google AdSense

## Future Monetization

* Affiliate links
* Sponsored content
* Partner companies

## Ad Locations

* Homepage
* Article body
* Sidebar
* Article footer
* Forum footer

---

# 6. Non-Functional Requirements

# Performance

* Lighthouse score >= 80
* Optimized images
* Static generation where possible
* Lazy loading

# Security

* Supabase RLS enabled
* Authentication required for posting
* XSS prevention
* CSRF protection
* Secure API routes

# SEO

* Dynamic metadata
* Sitemap
* robots.txt
* Open Graph
* JSON-LD structured data

# Accessibility

* Semantic HTML
* Keyboard navigation
* Responsive design

# Scalability

* Modular architecture
* Feature isolation
* Expandable database schema

---

# 7. Database Design

# profiles

```sql
create table profiles (
  id uuid primary key references auth.users(id) on delete cascade,
  display_name text not null,
  avatar_url text,
  bio text,
  role text not null default 'user',
  status text not null default 'active',
  created_at timestamp with time zone default now(),
  updated_at timestamp with time zone default now()
);
```

# articles

```sql
create table articles (
  id uuid primary key default gen_random_uuid(),
  title text not null,
  slug text unique not null,
  category text not null,
  description text,
  content text not null,
  thumbnail_url text,
  published boolean default false,
  created_at timestamp with time zone default now(),
  updated_at timestamp with time zone default now()
);
```

# forum_categories

```sql
create table forum_categories (
  id uuid primary key default gen_random_uuid(),
  name text not null,
  slug text unique not null,
  description text,
  sort_order integer default 0,
  created_at timestamp with time zone default now()
);
```

# forum_posts

```sql
create table forum_posts (
  id uuid primary key default gen_random_uuid(),
  category_id uuid references forum_categories(id),
  user_id uuid references profiles(id),
  title text not null,
  body text not null,
  is_hidden boolean default false,
  created_at timestamp with time zone default now(),
  updated_at timestamp with time zone default now()
);
```

# forum_comments

```sql
create table forum_comments (
  id uuid primary key default gen_random_uuid(),
  post_id uuid references forum_posts(id) on delete cascade,
  user_id uuid references profiles(id),
  body text not null,
  is_hidden boolean default false,
  created_at timestamp with time zone default now(),
  updated_at timestamp with time zone default now()
);
```

# reports

```sql
create table reports (
  id uuid primary key default gen_random_uuid(),
  reporter_id uuid references profiles(id),
  target_type text not null,
  target_id uuid not null,
  reason text not null,
  status text not null default 'pending',
  created_at timestamp with time zone default now(),
  resolved_at timestamp with time zone
);
```

# feedback_requests

```sql
create table feedback_requests (
  id uuid primary key default gen_random_uuid(),
  user_id uuid references profiles(id),
  type text not null,
  page_url text,
  title text not null,
  body text not null,
  status text not null default 'pending',
  admin_note text,
  created_at timestamp with time zone default now(),
  updated_at timestamp with time zone default now()
);
```

# likes

```sql
create table likes (
  id uuid primary key default gen_random_uuid(),
  user_id uuid references profiles(id),
  post_id uuid references forum_posts(id) on delete cascade,
  created_at timestamp with time zone default now()
);
```

---

# 8. RLS Policies

## profiles

* Public read
* User can update own profile
* Admin can update role/status

## forum_posts

* Public read
* Active authenticated users can create
* Author can edit own posts
* Admin/moderator can hide

## forum_comments

* Public read
* Active authenticated users can create
* Author can edit/delete own comments
* Admin/moderator can hide

## reports

* Authenticated users can create
* Only admin/moderator can read

## feedback_requests

* Authenticated users can create
* Only admin/moderator can read/update

---

# 9. Routing Structure

```txt
/
 /visa
 /preparation
 /arrival
 /tfn
 /abn
 /super
 /tax-return
 /jobs
 /farm
 /second-visa
 /uber-eats
 /doordash
 /housing
 /cars
 /food
 /community
 /community/categories/[slug]
 /community/posts/[id]
 /profile
 /login
 /register
 /request
 /admin
 /admin/reports
 /admin/requests
```

---

# 10. Component Structure

```txt
/components
  /layout
  /articles
  /forum
  /auth
  /ads
  /admin
  /feedback
  /common
```

---

# 11. UI/UX Design

## Theme

* Friendly
* Clean
* Trustworthy
* Beginner-friendly

## Colors

* White base
* Blue primary
* Green accent
* Red warning

## Layout

* Mobile-first
* Spacious padding
* Readable typography
* Sticky navigation

---

# 12. Homepage Sections

1. Hero section
2. Beginner roadmap
3. Popular articles
4. Latest updates
5. Latest community posts
6. Area guides
7. Gig work section
8. Farm work section
9. Advertisement section

---

# 13. MVP Scope

# Phase 1

* Homepage
* Article system
* Auth system
* Forum system
* Feedback system
* Basic moderation
* SEO setup
* Ad placeholders

# Phase 2

* Admin dashboard
* Advanced moderation
* Image uploads
* Search
* Notifications

# Phase 3

* Affiliate system
* Farm database
* Housing listings
* Car marketplace
* Discord integration

---

# 14. AI Agent Instructions

Implement the platform using:

* Next.js App Router
* TypeScript
* Tailwind CSS
* Supabase

Requirements:

* Use modular architecture
* Use reusable components
* Use server components where possible
* Implement Supabase RLS securely
* Build mobile-first responsive UI
* Optimize SEO
* Separate logic into `/lib`
* Separate types into `/types`
* Use clean folder structure
* Create scalable database schema
* Add loading states
* Add error handling
* Add empty states
* Use optimistic UI where appropriate
* Build reusable form components
* Add validation to all forms
* Use React Hook Form + Zod

---

# 15. Completion Criteria

The MVP is complete when:

* Users can register/login
* Articles are viewable
* Articles are SEO optimized
* Forum posting works
* Comment system works
* Reports work
* Feedback requests work
* Admin can moderate
* Ban system works
* Responsive UI works
* Ad placeholders exist
* Lighthouse performance >= 80
* RLS policies are enabled
* Mobile UX is stable
