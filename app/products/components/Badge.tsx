
"use client";

import React from "react";

type Props = {
  label: string;
};

export default function Badge({ label }: Props) {
  return (
    <span className="bg-red-500 text-white text-xs font-bold px-2 py-1 rounded">
      {label}
    </span>
  );
}
