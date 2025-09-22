
import React from "react";
import Link from "next/link";

export default function Navbar() {
  return (
    <nav className="w-full bg-white shadow px-6 py-4 flex justify-between items-center">
      <Link href="/" className="text-xl font-bold text-gray-800">
        E-Comm
      </Link>
      <ul className="flex space-x-4">
        <li>
          <Link href="/products" className="text-gray-600 hover:text-gray-900">
            Products
          </Link>
        </li>
        <li>
          <Link href="#" className="text-gray-600 hover:text-gray-900">
            About
          </Link>
        </li>
        <li>
          <Link href="#" className="text-gray-600 hover:text-gray-900">
            Contact
          </Link>
        </li>
      </ul>
    </nav>
  );
}
