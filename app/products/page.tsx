
"use client";

import React, { useState, useMemo, useEffect } from "react";
import { products as allProducts } from "../../data/products";
import { filterProducts, Filters } from "../../utils/filters";
import { sortFunctions } from "../../utils/sorting";

import FilterPanel from "@/components/filters/FilterPanel";
import ProductGrid from "./components/ProductGrid";
import Sorting from "./components/Sorting";
import Pagination from "./components/Pagination";
import HeroSection from "./components/HeroSection"; 

const PRODUCTS_PER_PAGE = 8;

export default function ProductsPage() {
  const [filters, setFilters] = useState<Filters>({
    category: null,
    color: null,
    brand: null,
    priceRange: [0, 1000], // initial price range
  });
  const [sortBy, setSortBy] = useState<keyof typeof sortFunctions>("name");
  const [sortOrder, setSortOrder] = useState<"asc" | "desc">("asc");
  const [currentPage, setCurrentPage] = useState(1);

  const categories = useMemo(
    () => Array.from(new Set(allProducts.map((p) => p.category))),
    []
  );
  const colors = useMemo(
    () => Array.from(new Set(allProducts.flatMap((p) => p.colors))),
    []
  );
  const brands = useMemo(
    () => Array.from(new Set(allProducts.map((p) => p.brand))),
    []
  );

  const prices = allProducts.map((p) => p.discountPrice ?? p.price);
  const minPrice = Math.min(...prices);
  const maxPrice = Math.max(...prices);

  const filtered = useMemo(
    () => filterProducts(allProducts, filters),
    [filters]
  );

  const sorted = useMemo(() => {
    const arr = [...filtered].sort(sortFunctions[sortBy]);
    return sortOrder === "desc" ? arr.reverse() : arr;
  }, [filtered, sortBy, sortOrder]);

  const totalPages = Math.ceil(sorted.length / PRODUCTS_PER_PAGE);
  const paginated = useMemo(() => {
    const start = (currentPage - 1) * PRODUCTS_PER_PAGE;
    return sorted.slice(start, start + PRODUCTS_PER_PAGE);
  }, [sorted, currentPage]);

  useEffect(() => {
    setCurrentPage(1);
  }, [filters, sortBy, sortOrder]);

  const handleFilterChange = (newFilters: Filters) => {
    setFilters(newFilters);
  };

  const handleSortChange = (
    newSortBy: keyof typeof sortFunctions,
    newSortOrder: "asc" | "desc"
  ) => {
    setSortBy(newSortBy);
    setSortOrder(newSortOrder);
  };

  return (
    <div className="max-w-7xl mx-auto px-4 py-8">
      {/* HERO SECTION */}
      <HeroSection />

      {/* Main Layout: Sidebar + Products */}
      <div className="flex flex-col md:flex-row gap-6 mt-8">
        <aside className="md:w-1/4">
          <FilterPanel
            categories={categories}
            colors={colors}
            brands={brands}
            selectedCategory={filters.category}
            selectedColor={filters.color}
            selectedBrand={filters.brand}
            selectedPriceRange={filters.priceRange}
            minPrice={minPrice}
            maxPrice={maxPrice}
            onFilterChange={handleFilterChange}
          />
        </aside>

        <div className="flex-grow">
          <div className="flex justify-between items-center mb-6">
            <h1 className="text-2xl font-bold">All Products</h1>
            <Sorting
              sortBy={sortBy}
              sortOrder={sortOrder}
              onSortChange={handleSortChange}
            />
          </div>

          <ProductGrid products={paginated} />

          <Pagination
            currentPage={currentPage}
            totalPages={totalPages}
            onPageChange={setCurrentPage}
          />
        </div>
      </div>
    </div>
  );
}
