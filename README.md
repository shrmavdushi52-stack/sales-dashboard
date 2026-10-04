# Sales Dashboard

A sales dashboard built with Next.js 15, TypeScript, Tailwind CSS and Recharts, structured with atomic design.

## What I built
- A `/dashboard` page that shows monthly sales for 2022, 2023 and 2024
- Year selector, chart type switcher (bar, line, pie) and a custom minimum-sales filter
- Summary cards for total sales, months shown and best month
- Mock data shaped like a Kaggle monthly retail sales dataset (`src/data/sales.ts`)

## Tech stack
Next.js 15 (App Router), TypeScript, Tailwind CSS, Recharts

## Project structure (atomic design)
```
src/
  app/dashboard/page.tsx        # dashboard page
  components/
    atoms/                      # Button, StatCard
    molecules/                  # ButtonGroup, ThresholdInput
    organisms/                  # SalesChart, SalesDashboard
    templates/                  # DashboardTemplate
  data/sales.ts                 # mock sales data
```

## Setup
```bash
git clone https://github.com/shrmavdushi52-stack/sales-dashboard.git
cd sales-dashboard
npm install
npm run dev
```
Open http://localhost:3000, which redirects to `/dashboard`.

## Possible next steps
- Replace the mock data with real data from an API
- Import a real Kaggle sales CSV