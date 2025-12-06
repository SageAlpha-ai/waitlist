# Sagealpha.ai - Waitlist Landing Page

A modern, production-ready landing page with waitlist signup, built with Next.js 14, Tailwind CSS, and Prisma.

## 🚀 Features

- **Modern Landing Page** - Hero, About, Product, and Pricing sections
- **Simple Waitlist Signup** - Name + Phone Number, single step
- **Responsive Design** - Mobile-first, works on all devices
- **PostgreSQL Database** - Prisma ORM for data persistence
- **Production Ready** - Optimized for Azure deployment

## 📋 Tech Stack

- **Framework:** Next.js 14 (App Router)
- **Language:** TypeScript
- **Styling:** Tailwind CSS
- **UI Components:** shadcn/ui
- **Forms:** react-hook-form + Zod validation
- **Database:** PostgreSQL with Prisma ORM
- **Deployment:** Azure optimized

## 🛠️ Setup Instructions

### Prerequisites

- Node.js 18+ installed
- PostgreSQL database (local or Azure Database for PostgreSQL)
- npm, yarn, or pnpm

### 1. Install Dependencies

```bash
npm install
# or
yarn install
# or
pnpm install
```

### 2. Environment Variables

Create a `.env` file in the root directory:

```env
# Database Connection
DATABASE_URL="postgresql://postgres:password@localhost:5432/sagealpha_waitlist?schema=public"

# For Azure Database for PostgreSQL (production):
# DATABASE_URL="postgresql://user:password@your-server.postgres.database.azure.com:5432/sagealpha_waitlist?schema=public&sslmode=require"
```

### 3. Database Setup

```bash
# Generate Prisma client
npm run db:generate

# Push schema to database (for development)
npm run db:push

# Or run migrations (for production)
npm run db:migrate
```

### 4. Run Development Server

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) to see the app.

## 📱 Testing the Waitlist Flow

1. Navigate to `/waitlist`
2. Enter your name and phone number
3. Click "Join Waitlist"
4. See the success confirmation screen

## 🗃️ Database Schema

### WaitlistUser
| Field | Type | Description |
|-------|------|-------------|
| id | Int | Auto-increment primary key |
| name | String | User's full name |
| phoneNumber | String | Unique phone number |
| createdAt | DateTime | Registration timestamp |

## 📡 API Endpoints

### POST /api/waitlist

Request:
```json
{
  "name": "John Doe",
  "phoneNumber": "+919876543210"
}
```

Success Response (201):
```json
{
  "success": true
}
```

Error Response (400):
```json
{
  "success": false,
  "error": "This number is already on the waitlist."
}
```

## ☁️ Azure Deployment

### Recommended Azure Services

1. **Azure App Service** - Host the Next.js application
2. **Azure Database for PostgreSQL** - Production database

### Deployment Steps

1. Create Azure resources (App Service, PostgreSQL)
2. Set environment variables in Azure App Service Configuration
3. Deploy using Azure CLI, GitHub Actions, or Azure DevOps

```bash
# Build for production
npm run build

# Start production server
npm run start
```

## 📁 Project Structure

```
├── app/
│   ├── api/
│   │   └── waitlist/route.ts
│   ├── waitlist/page.tsx
│   ├── globals.css
│   ├── layout.tsx
│   └── page.tsx
├── components/
│   ├── sections/
│   │   ├── about.tsx
│   │   ├── pricing.tsx
│   │   └── product.tsx
│   ├── ui/
│   │   ├── button.tsx
│   │   ├── card.tsx
│   │   ├── input.tsx
│   │   ├── label.tsx
│   │   ├── toast.tsx
│   │   ├── toaster.tsx
│   │   └── use-toast.ts
│   ├── waitlist/
│   │   └── waitlist-form.tsx
│   ├── footer.tsx
│   ├── hero.tsx
│   └── navbar.tsx
├── lib/
│   ├── prisma.ts
│   ├── utils.ts
│   └── validators.ts
├── prisma/
│   └── schema.prisma
├── package.json
├── tailwind.config.ts
└── tsconfig.json
```

## 📝 License

MIT License - Feel free to use this for your projects!

---

Built with ❤️ by the Sagealpha.ai team
