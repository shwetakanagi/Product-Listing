import React from "react";

type Props = {
  colors: string[];
  selectedColor: string | null;
  onColorSelect: (color: string) => void;
};

export default function ColorFilter({
  colors,
  selectedColor,
  onColorSelect,
}: Props) {
  return (
    <div>
      <label className="block font-semibold mb-1">Color</label>
      <select
        className="w-full border rounded p-2"
        value={selectedColor ?? ""}
        onChange={(e) => onColorSelect(e.target.value)}
      >
        <option value="">All</option>
        {colors.map((color) => (
          <option key={color} value={color}>
            {color.charAt(0).toUpperCase() + color.slice(1)}
          </option>
        ))}
      </select>
    </div>
  );
}
