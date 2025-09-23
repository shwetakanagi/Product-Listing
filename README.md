# 🛍️ Ecommerce Product Listing App

A modern and responsive ecommerce product listing app built with **Next.js (App Router)**, **TypeScript**, and **Tailwind CSS**. Features dynamic filtering, sorting, and pagination — perfect as a frontend prototype or base for a full-stack ecommerce site.

---

## 🚀 Features

- ✅ **Hero Banner** with CTA
- ✅ **Responsive Product Grid**
- ✅ **Product Card** with:
  - Dynamic image color swatches
  - Star rating
  - "🔥 Hot" badge
- ✅ **Advanced Filters**:
  - Brand
  - Color
  - Price Range
  - Category
- ✅ **Sorting** by price, rating, etc.
- ✅ **Pagination** (static for now)
- ✅ **Reusable UI components**
- ✅ **Mobile-first, Tailwind CSS design**
- ✅ **Clean and maintainable folder structure**

---

## 🛠️ Tech Stack

- [Next.js 13/14 – App Router](https://nextjs.org/docs/app)
- [React 18](https://react.dev/)
- [TypeScript](https://www.typescriptlang.org/)
- [Tailwind CSS](https://tailwindcss.com/)
- [Vercel](https://vercel.com/) for deployment
- Static data (no backend)

---

## 📁 Project Structure

ecommerce-listing/
├── app/
│ ├── layout.tsx // Root layout
│ ├── page.tsx // Home page
│ ├── components/
│ │ ├── HeroSection.tsx
│ │ └── Footer.tsx
│ └── products/
│ ├── page.tsx // Main product listing page
│ └── components/
│ ├── ProductCard.tsx
│ ├── ProductGrid.tsx
│ ├── Pagination.tsx
│ ├── Sorting.tsx
│ ├── CategoryFilter.tsx
│ ├── ColorFilter.tsx
│ ├── BrandFilter.tsx
│ ├── PriceRangeFilter.tsx
│ └── FilterPanel.tsx
│
├── components/ // Optional shared components
├── data/
│ └── products.ts // Static product list
│
├── public/
│ ├── placeholder.png
│ ├── downl.png
│ └── images/ // Product images per color
│
├── styles/
│ └── globals.css
│
├── utils/
│ ├── filters.ts
│ └── sorting.ts
│
├── tsconfig.json
├── tailwind.config.js
└── next.config.js




---

## 📦 Getting Started

### 1. Clone the repository

```bash
git clone https://github.com/your-username/ecommerce-listing.git
cd ecommerce-listing
2. Install dependencies
npm install
3. Run the development server
npm run dev
Open http://localhost:3000 to view it in the browser.

🚢 Deployment (Vercel)
Push your project to GitHub

Go to Vercel Dashboard

Click "Add New Project"

Import your GitHub repo

Set Framework Preset to Next.js

Deploy

If you use external image URLs (e.g. from mytheresa.com), add them in next.config.js:
images: {
  domains: ['www.mytheresa.com'],
}
⚙️ Customization
Add products inside data/products.ts

Add product images in public/images/

Update brand/category/color lists in your filters

Customize styles via Tailwind CSS

📌 ESLint Tips
If you're using raw <img> tags or want to suppress linting errors:

// next.config.js
eslint: {
  ignoreDuringBuilds: true,
},
Or disable specific rules in .eslintrc.js:





