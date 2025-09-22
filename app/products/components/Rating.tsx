
"use client";

import React from "react";

type Props = {
  value: number;
  count: number;
};

export default function Rating({ value, count }: Props) {
  const fullStars = Math.floor(value);
  const halfStar = value - fullStars >= 0.5;
  const emptyStars = 5 - fullStars - (halfStar ? 1 : 0);

  return (
    <div className="flex items-center space-x-1 text-yellow-400">
      {Array.from({ length: fullStars }, (_, i) => (
        <span key={"full_" + i}>★</span>
      ))}
      {halfStar && <span>☆</span>}
      {Array.from({ length: emptyStars }, (_, i) => (
        <span key={"empty_" + i}>☆</span>
      ))}
      <span className="ml-1 text-gray-500 text-sm">({count})</span>
    </div>
  );
}
