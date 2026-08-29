import { createContext, useContext, useMemo, type ReactNode } from "react";
import type { Product } from "../types";
import { useLocalStorage } from "../hooks/useLocalStorage";
import { getProductById } from "../data/products";
import { useToast } from "./ToastContext";

interface WishlistContextValue {
  productIds: string[];
  products: Product[];
  isWishlisted: (productId: string) => boolean;
  toggleWishlist: (product: Product) => void;
}

const WishlistContext = createContext<WishlistContextValue | undefined>(undefined);

export function WishlistProvider({ children }: { children: ReactNode }) {
  const [productIds, setProductIds] = useLocalStorage<string[]>("ta-wishlist", []);
  const { showToast } = useToast();

  const isWishlisted = (productId: string) => productIds.includes(productId);

  const toggleWishlist = (product: Product) => {
    setProductIds((prev) => {
      if (prev.includes(product.id)) {
        showToast("Removed from Wishlist");
        return prev.filter((id) => id !== product.id);
      }
      showToast("Added to Wishlist");
      return [...prev, product.id];
    });
  };

  const products = useMemo(
    () => productIds.map((id) => getProductById(id)).filter((p): p is Product => !!p),
    [productIds]
  );

  return (
    <WishlistContext.Provider value={{ productIds, products, isWishlisted, toggleWishlist }}>
      {children}
    </WishlistContext.Provider>
  );
}

export function useWishlist() {
  const ctx = useContext(WishlistContext);
  if (!ctx) throw new Error("useWishlist must be used within WishlistProvider");
  return ctx;
}
