
'use client';

import React, { useState } from "react";
import Image from "next/image";
import type { Product } from "@/data/products";

type Props = {
  product: Product;
};

export default function ProductCard({ product }: Props) {
  const [selectedColor, setSelectedColor] = useState(product.colors[0]);

  return (
    <div className="border rounded shadow-sm p-4">
      <div className="relative w-full h-64 mb-2">
        {/* HOT Badge */}
        {product.isHot && (
          <div className="absolute top-2 left-2 bg-red-600 text-white text-xs font-bold px-2 py-1 rounded-full z-10 shadow">
            🔥 HOT
          </div>
        )}

        {/* ✅ Optimized Image */}
        <Image
          src={product.imageUrls[selectedColor]}
          alt={`${product.name} in ${selectedColor}`}
          fill
          className="object-cover rounded"
          sizes="(max-width: 768px) 100vw, 33vw"
          priority
        />
      </div>

      {/* Product Name */}
      <h2 className="text-lg font-semibold">{product.name}</h2>

      {/* ⭐️ Rating */}
      <div className="flex items-center space-x-1 mt-2">
        {Array.from({ length: 5 }).map((_, i) => (
          <svg
            key={i}
            className={`w-5 h-5 ${
              i < Math.round(product.ratingValue) ? "text-yellow-400" : "text-gray-300"
            }`}
            fill="currentColor"
            viewBox="0 0 20 20"
          >
            <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.286 3.967a1 1 0 00.95.69h4.175c.969 0 1.371 1.24.588 1.81l-3.38 2.455a1 1 0 00-.364 1.118l1.286 3.967c.3.921-.755 1.688-1.54 1.118l-3.38-2.455a1 1 0 00-1.175 0l-3.38 2.455c-.784.57-1.838-.197-1.539-1.118l1.285-3.967a1 1 0 00-.364-1.118L2.05 9.394c-.783-.57-.38-1.81.588-1.81h4.175a1 1 0 00.951-.69l1.285-3.967z" />
          </svg>
        ))}
        <span className="text-sm text-gray-600">({product.ratingCount})</span>
      </div>

      {/* 🎨 Color Swatches */}
      <div className="flex space-x-2 mt-2">
        {product.colors.map((color) => (
          <button
            key={color}
            onClick={() => setSelectedColor(color)}
            className={`w-6 h-6 rounded-full border ${
              selectedColor === color ? "ring-2 ring-blue-500" : ""
            }`}
            style={{ backgroundColor: color }}
            aria-label={color}
          ></button>
        ))}
      </div>
    </div>
  );
}
