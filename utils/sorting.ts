
import type { Product } from "../data/products";

export const sortByName = (a: Product, b: Product) =>
  a.name.localeCompare(b.name);

export const sortByPrice = (a: Product, b: Product) =>
  a.discountPrice - b.discountPrice;

export const sortByPopularity = (a: Product, b: Product) =>
  b.ratingCount - a.ratingCount;

export const sortFunctions: Record<string, (a: Product, b: Product) => number> = {
  name: sortByName,
  price: sortByPrice,
  popularity: sortByPopularity,
};
