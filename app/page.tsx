

import Link from "next/link";

export default function HomePage() {
  return (
    <main className="flex flex-col items-center justify-center min-h-screen py-20 text-center">
      <h1 className="text-4xl font-bold mb-4">Welcome to MyStore</h1>
      <Link
        href="/products"
        className="text-blue-600 underline text-lg hover:text-blue-800 transition-colors"
      >
        View Products
      </Link>
    </main>
  );
}
