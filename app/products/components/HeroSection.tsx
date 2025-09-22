
'use client';

import React from "react";
import Image from "next/image";
import Link from "next/link";

const HeroSection = () => {
  return (
    <div className="w-full bg-sky-400 rounded-lg overflow-hidden mb-10 shadow-lg">
      <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center justify-between px-6 py-10">
        
        {/* Text Section */}
        <div className="text-center md:text-left md:w-1/2 mb-6 md:mb-0">
          <h2 className="text-4xl font-bold text-white mb-4">
            Adidas Men Running <br />
            Sneakers
          </h2>
          <p className="text-white text-sm mb-4">
            Performance and design. Token right to the edge.
          </p>

          {/* 👉 "Shop Now" as a link */}
          <Link
            href="/products"
            className="text-white underline hover:text-white/80 text-sm font-bold"
          >
            SHOP NOW →
          </Link>
        </div>

        {/* Image Section */}
        <div className="relative w-full md:w-[300px] h-64">
          <Image
            src="/downl.png"
            alt="New Arrivals - Shoes"
            fill
            className="object-contain"
            priority
          />
        </div>
      </div>
    </div>
  );
};

export default HeroSection;
