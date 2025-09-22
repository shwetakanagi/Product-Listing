import React from "react";

type Props = {
  brands: string[];
  selectedBrand: string | null;
  onBrandChange: (brand: string) => void;
};

export default function BrandFilter({
  brands,
  selectedBrand,
  onBrandChange,
}: Props) {
  return (
    <div>
      <label className="block font-semibold mb-1">Brand</label>
      <select
        className="w-full border rounded p-2"
        value={selectedBrand ?? ""}
        onChange={(e) => onBrandChange(e.target.value)}
      >
        <option value="">All</option>
        {brands.map((brand) => (
          <option key={brand} value={brand}>
            {brand}
          </option>
        ))}
      </select>
    </div>
  );
}
