import { useMemo, useState } from "react";
import type { Product } from "../types";

export type SortOption = "popularity" | "newest" | "price-asc" | "price-desc" | "discount";

export interface FilterState {
  ageGroups: string[];
  genders: string[];
  categories: string[];
  sizes: string[];
  colors: string[];
  fabrics: string[];
  occasions: string[];
  maxPrice: number;
  inStockOnly: boolean;
}

export const emptyFilters: FilterState = {
  ageGroups: [],
  genders: [],
  categories: [],
  sizes: [],
  colors: [],
  fabrics: [],
  occasions: [],
  maxPrice: 6000,
  inStockOnly: false,
};

export function useProductFilters(base: Product[]) {
  const [filters, setFilters] = useState<FilterState>(emptyFilters);
  const [sort, setSort] = useState<SortOption>("popularity");

  const toggleValue = (key: keyof FilterState, value: string) => {
    setFilters((prev) => {
      const current = prev[key] as string[];
      const next = current.includes(value) ? current.filter((v) => v !== value) : [...current, value];
      return { ...prev, [key]: next };
    });
  };

  const setMaxPrice = (value: number) => setFilters((prev) => ({ ...prev, maxPrice: value }));
  const setInStockOnly = (value: boolean) => setFilters((prev) => ({ ...prev, inStockOnly: value }));
  const resetFilters = () => setFilters(emptyFilters);

  const activeCount =
    filters.ageGroups.length +
    filters.genders.length +
    filters.categories.length +
    filters.sizes.length +
    filters.colors.length +
    filters.fabrics.length +
    filters.occasions.length +
    (filters.maxPrice < emptyFilters.maxPrice ? 1 : 0) +
    (filters.inStockOnly ? 1 : 0);

  const filtered = useMemo(() => {
    let result = base.filter((p) => {
      if (filters.ageGroups.length && !p.ageGroups.some((a) => filters.ageGroups.includes(a))) return false;
      if (filters.genders.length && !filters.genders.includes(p.gender)) return false;
      if (filters.categories.length && !filters.categories.includes(p.category)) return false;
      if (filters.sizes.length && !p.sizes.some((s) => filters.sizes.includes(s))) return false;
      if (filters.colors.length && !p.colors.some((c) => filters.colors.includes(c.name))) return false;
      if (filters.fabrics.length && !filters.fabrics.includes(p.fabric)) return false;
      if (filters.occasions.length && !p.occasions.some((o) => filters.occasions.includes(o))) return false;
      if ((p.discountPrice ?? p.price) > filters.maxPrice) return false;
      if (filters.inStockOnly && !p.inStock) return false;
      return true;
    });

    switch (sort) {
      case "newest":
        result = [...result].sort((a, b) => Number(b.isNew) - Number(a.isNew));
        break;
      case "price-asc":
        result = [...result].sort((a, b) => (a.discountPrice ?? a.price) - (b.discountPrice ?? b.price));
        break;
      case "price-desc":
        result = [...result].sort((a, b) => (b.discountPrice ?? b.price) - (a.discountPrice ?? a.price));
        break;
      case "discount":
        result = [...result].sort((a, b) => {
          const da = a.discountPrice ? a.price - a.discountPrice : 0;
          const db = b.discountPrice ? b.price - b.discountPrice : 0;
          return db - da;
        });
        break;
      default:
        result = [...result].sort((a, b) => b.reviewCount - a.reviewCount);
    }

    return result;
  }, [base, filters, sort]);

  return { filters, toggleValue, setMaxPrice, setInStockOnly, resetFilters, activeCount, sort, setSort, filtered };
}
