
import type { Product } from "../data/products";

export type Filters = {
  category: string | null;
  color: string | null;
  brand: string | null;
  priceRange: [number, number]; // [minPrice, maxPrice]
};

export function filterProducts(
  products: Product[],
  filters: Filters
): Product[] {
  return products.filter((product) => {
    const matchesCategory = filters.category
      ? product.category === filters.category
      : true;
    const matchesColor = filters.color
      ? product.colors.includes(filters.color)
      : true;
    const matchesBrand = filters.brand
      ? product.brand === filters.brand
      : true;
    const matchesPrice =
      product.discountPrice >= filters.priceRange[0] &&
      product.discountPrice <= filters.priceRange[1];

    return matchesCategory && matchesColor && matchesBrand && matchesPrice;
  });
}
