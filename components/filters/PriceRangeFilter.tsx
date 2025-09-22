import React from "react";

type Props = {
  minPrice: number;
  maxPrice: number;
  selectedPriceRange: [number, number];
  onPriceRangeChange: (range: [number, number]) => void;
};

export default function PriceRangeFilter({
  minPrice,
  maxPrice,
  selectedPriceRange,
  onPriceRangeChange,
}: Props) {
  const [min, max] = selectedPriceRange;

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement>,
    index: 0 | 1
  ) => {
    const value = Number(e.target.value);
    const newRange: [number, number] = [...selectedPriceRange] as [number, number];

    if (index === 0) {
      newRange[0] = Math.min(value, newRange[1]);
    } else {
      newRange[1] = Math.max(value, newRange[0]);
    }

    onPriceRangeChange(newRange);
  };

  return (
    <div>
      <label className="block font-semibold mb-1">Price Range</label>
      <div className="flex items-center space-x-2">
        <input
          type="number"
          min={minPrice}
          max={max}
          value={min}
          onChange={(e) => handleChange(e, 0)}
          className="w-1/2 border rounded p-1"
        />
        <span> - </span>
        <input
          type="number"
          min={min}
          max={maxPrice}
          value={max}
          onChange={(e) => handleChange(e, 1)}
          className="w-1/2 border rounded p-1"
        />
      </div>
    </div>
  );
}
