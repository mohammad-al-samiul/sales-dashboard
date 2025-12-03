## Sales Dashboard

A simple one-page sales analytics dashboard built with **Next.js App Router**, **React 19**, **@tanstack/react-query**, and **Recharts**.

The dashboard consumes the provided Sales Analytics API:

- `POST /getAuthorize` – obtain an authorization token (valid for 2 hours).
- `GET /sales` – fetch sales analytics with filters, sorting, and cursor-based pagination.

### Features

- **Date range filter** (start and end date).
- **Additional filters:** minimum price, customer email, phone number.
- **Server-side token fetch** using Next.js server components.
- **Time-series line chart** of `TotalSales` over time with Recharts.
- **Sales table** (up to 50 items per page) with:
  - Sorting by **date** and **price** (asc/desc).
  - Cursor-based pagination using **before/after** tokens.
- **Caching & instant back navigation** via React Query.
- **Responsive layout** optimized for desktop, tablet, and mobile.

### Tech Stack

- Next.js 16 (App Router, React Server Components).
- React 19.
- @tanstack/react-query 5 for data fetching and caching.
- Recharts for charting.
- Tailwind CSS v4 (utility classes) with a minimal custom design.

## Getting Started (Local Development)

Install dependencies (if not already installed):

```bash
npm install
```

Run the dev server:

```bash
npm run dev
```

Open `http://localhost:3000` in your browser.

The main dashboard is implemented in `src/app/page.js` and `src/components/SalesDashboard.js`.

## Deployment (Vercel)

1. Push this project to a **public GitHub repository**.
2. Go to Vercel and choose **“New Project”**.
3. Import your GitHub repo.
4. Use the default Next.js settings:
   - Framework: Next.js
   - Build command: `npm run build`
   - Output directory: `.next`
5. Click **Deploy**.

Once deployed, you will get a live URL like `https://your-project-name.vercel.app` that you can submit together with the GitHub repo link.
