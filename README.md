# Snowy Cafe POS System

A modern Point of Sale system for ice cream shops built with Next.js, Prisma, and PostgreSQL.

## Features

- **Inventory Management**: Add, edit, and manage ice cream products
- **Point of Sale**: Process customer orders with a user-friendly interface
- **Admin Dashboard**: View sales statistics and recent orders
- **Real-time Stock Updates**: Automatic inventory tracking
- **Philippine Peso Support**: All amounts displayed in PHP

## Tech Stack

- **Frontend**: Next.js 16, React 19, Tailwind CSS
- **Backend**: Next.js API Routes
- **Database**: PostgreSQL with Prisma ORM
- **Deployment**: Vercel + Neon Database

## Getting Started

### Prerequisites

- Node.js 18+
- PostgreSQL database (local or Neon)

### Local Development

1. Clone the repository:

```bash
git clone <repository-url>
cd snowy-cafe-pos
```

2. Install dependencies:

```bash
npm install
```

3. Set up environment variables:

```bash
cp .env.example .env.local
```

4. Update `.env.local` with your database URL:

```env
DATABASE_URL="postgresql://username:password@localhost:5432/snowycafe"
```

5. Run database migrations:

```bash
npx prisma migrate dev
```

6. Start the development server:

```bash
npm run dev
```

7. Open [http://localhost:3000](http://localhost:3000) in your browser.

## Deployment to Vercel

### 1. Set up Neon Database

1. Go to [Neon Console](https://console.neon.tech/)
2. Create a new project
3. Copy the connection string

### 2. Deploy to Vercel

1. Push your code to GitHub
2. Connect your repository to Vercel
3. Add environment variable in Vercel:
   - `DATABASE_URL`: Your Neon database connection string
4. Deploy!

### 3. Run Database Migrations

After deployment, run the database migrations:

```bash
npx prisma migrate deploy
```

## Database Schema

The system includes three main models:

- **Product**: Ice cream products with name, price, category, and stock
- **Order**: Customer orders with totals and status
- **OrderItem**: Individual items within orders

## API Endpoints

- `GET /api/products` - Fetch all products
- `POST /api/products` - Create new product
- `PUT /api/products/[id]` - Update product
- `DELETE /api/products/[id]` - Delete product
- `GET /api/orders` - Fetch all orders
- `POST /api/orders` - Create new order

## Pages

- `/` - Home page with navigation
- `/inventory` - Product management
- `/pos` - Point of sale interface
- `/admin` - Dashboard with statistics

## Contributing

1. Fork the repository
2. Create a feature branch
3. Make your changes
4. Submit a pull request

## License

MIT License
