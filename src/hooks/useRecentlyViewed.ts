import { useEffect, useMemo } from "react";
import { useLocalStorage } from "./useLocalStorage";
import { getProductById } from "../data/products";
import type { Product } from "../types";

const MAX_ITEMS = 8;

export function useRecentlyViewed(currentProductId?: string) {
  const [ids, setIds] = useLocalStorage<string[]>("ta-recently-viewed", []);

  useEffect(() => {
    if (!currentProductId) return;
    setIds((prev) => [currentProductId, ...prev.filter((id) => id !== currentProductId)].slice(0, MAX_ITEMS));
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [currentProductId]);

  const products: Product[] = useMemo(
    () => ids.map((id) => getProductById(id)).filter((p): p is Product => !!p),
    [ids]
  );

  return products;
}
