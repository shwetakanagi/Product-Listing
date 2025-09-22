# 🛍️ Ecommerce Product Listing App

An e-commerce product listing app built with **Next.js 13/14 App Router**, **TypeScript**, and **Tailwind CSS**. It includes filtering, sorting, pagination, and a responsive layout.

---

## 🚀 Features

- ✅ **Hero Banner** with CTA
- ✅ **Responsive Product Grid**
- ✅ **Product Card** with:
  - Dynamic image color swatches
  - Star rating
  - "Hot" badges
- ✅ **Advanced Filters**:
  - Brand
  - Color
  - Price Range
  - Category
- ✅ **Sorting** by price, rating, etc.
- ✅ **Pagination**
- ✅ **Clean UI with Tailwind CSS**
- ✅ **File-based routing (App Router)**
- ✅ **Reusable components**

---

## 🛠️ Tech Stack

- **Next.js 13/14** (App Router)
- **React 18**
- **TypeScript**
- **Tailwind CSS**
- **Static Data (JSON)**

---

## 📁 Folder Structure

ecommerce-listing/
├── app/
│ ├── layout.tsx
│ ├── page.tsx
│ ├── components/
│ │ ├── HeroSection.tsx
│ │ └── Footer.tsx
│ └── products/
│ ├── page.tsx
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
├── components/
├── data/
│ └── products.ts
├── public/
│ ├── placeholder.png
│ ├── downl.png
│ └── images/
├── utils/
│ ├── filters.ts
│ └── sorting.ts
├── styles/
│ └── globals.css
├── tailwind.config.js
├── tsconfig.json
└── next.config.js

yaml
Copy code

---

## 📦 Getting Started

### 1. Clone the Repository

```bash
git clone https://github.com/your-username/ecommerce-listing.git
cd ecommerce-listing
