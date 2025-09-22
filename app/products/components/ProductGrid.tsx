
"use client";

import React from "react";
import type { Product } from "@/data/products";
import ProductCard from "./ProductCard";
type Props = {
  products: Product[];
};

export default function ProductGrid({ products }: Props) {
  if (products.length === 0) {
    return (
      <div className="text-center py-12">
        <p className="text-gray-600">No products found.</p>
      </div>
    );
  }

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
      {products.map((pr) => (
        <ProductCard key={pr.id} product={pr} />
      ))}
    </div>
  );
}
