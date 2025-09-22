import React from "react";

type Props = {
  categories: string[];
  selectedCategory: string | null;
  onCategorySelect: (category: string) => void;
};

export default function CategoryFilter({
  categories,
  selectedCategory,
  onCategorySelect,
}: Props) {
  return (
    <div>
      <label className="block font-semibold mb-1">Category</label>
      <select
        className="w-full border rounded p-2"
        value={selectedCategory ?? ""}
        onChange={(e) => onCategorySelect(e.target.value)}
      >
        <option value="">All</option>
        {categories.map((cat) => (
          <option key={cat} value={cat}>
            {cat}
          </option>
        ))}
      </select>
    </div>
  );
}
