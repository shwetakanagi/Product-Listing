
"use client";

import React from "react";
import CategoryFilter from "./CategoryFilter";
import ColorFilter from "./ColorFilter";
import BrandFilter from "./BrandFilter";
import PriceRangeFilter from "./PriceRangeFilter";
import type { Filters } from "@/utils/filters";

type Props = {
  categories: string[];
  colors: string[];
  brands: string[];
  selectedCategory: string | null;
  selectedColor: string | null;
  selectedBrand: string | null;
  selectedPriceRange: [number, number];
  minPrice: number;
  maxPrice: number;
  onFilterChange: (filters: Filters) => void;
};

export default function FilterPanel({
  categories,
  colors,
  brands,
  selectedCategory,
  selectedColor,
  selectedBrand,
  selectedPriceRange,
  minPrice,
  maxPrice,
  onFilterChange,
}: Props) {
  return (
    <div className="p-4 border rounded shadow-sm space-y-6">
      {/* Category Filter */}
      <CategoryFilter
        categories={categories}
        selectedCategory={selectedCategory}
        onCategorySelect={(cat) =>
          onFilterChange({
            category: selectedCategory === cat ? null : cat,
            color: selectedColor,
            brand: selectedBrand,
            priceRange: selectedPriceRange,
          })
        }
      />

      {/* Color Filter */}
      <ColorFilter
        colors={colors}
        selectedColor={selectedColor}
        onColorSelect={(col) =>
          onFilterChange({
            category: selectedCategory,
            color: selectedColor === col ? null : col,
            brand: selectedBrand,
            priceRange: selectedPriceRange,
          })
        }
      />

      {/* Brand Filter */}
      <BrandFilter
        brands={brands}
        selectedBrand={selectedBrand}
        onBrandChange={(brand) =>
          onFilterChange({
            category: selectedCategory,
            color: selectedColor,
            brand: selectedBrand === brand ? null : brand,
            priceRange: selectedPriceRange,
          })
        }
      />

      {/* Price Range Filter */}
      <PriceRangeFilter
        minPrice={minPrice}
        maxPrice={maxPrice}
        selectedPriceRange={selectedPriceRange}
        onPriceRangeChange={(range) =>
          onFilterChange({
            category: selectedCategory,
            color: selectedColor,
            brand: selectedBrand,
            priceRange: range,
          })
        }
      />
    </div>
  );
}
