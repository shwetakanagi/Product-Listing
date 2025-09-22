
"use client";

import React from "react";

type SortOption = {
  label: string;
  value: string;
};

type Props = {
  sortBy: string;
  sortOrder: "asc" | "desc";
  onSortChange: (sortBy: string, sortOrder: "asc" | "desc") => void;
};

const SORT_OPTIONS: SortOption[] = [
  { label: "Name", value: "name" },
  { label: "Price", value: "price" },
  { label: "Popularity", value: "popularity" },
];

export default function Sorting({ sortBy, sortOrder, onSortChange }: Props) {
  const handleSortByChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    onSortChange(e.target.value, sortOrder);
  };

  const toggleSortOrder = () => {
    onSortChange(sortBy, sortOrder === "asc" ? "desc" : "asc");
  };

  return (
    <div className="flex items-center space-x-2 mb-4">
      <label htmlFor="sortBy" className="font-semibold">
        Sort By:
      </label>
      <select
        id="sortBy"
        value={sortBy}
        onChange={handleSortByChange}
        className="border rounded p-1 focus:outline-none focus:ring-2 focus:ring-blue-500"
      >
        {SORT_OPTIONS.map((opt) => (
          <option key={opt.value} value={opt.value}>
            {opt.label}
          </option>
        ))}
      </select>
      <button
        type="button"
        aria-label={`Toggle sort order (currently ${sortOrder === "asc" ? "ascending" : "descending"})`}
        className="ml-2 p-1 border rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
        onClick={toggleSortOrder}
      >
        {sortOrder === "asc" ? "↑" : "↓"}
      </button>
    </div>
  );
}
