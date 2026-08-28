import { createContext, useContext, useMemo, type ReactNode } from "react";
import type { CartItem, Product } from "../types";
import { useLocalStorage } from "../hooks/useLocalStorage";
import { getProductById } from "../data/products";
import { useToast } from "./ToastContext";

interface CartLine extends CartItem {
  product: Product;
}

interface CartContextValue {
  items: CartItem[];
  lines: CartLine[];
  addItem: (product: Product, size: string, color: string, quantity?: number) => void;
  removeItem: (productId: string, size: string, color: string) => void;
  updateQuantity: (productId: string, size: string, color: string, quantity: number) => void;
  clearCart: () => void;
  subtotal: number;
  totalCount: number;
}

const CartContext = createContext<CartContextValue | undefined>(undefined);

export function CartProvider({ children }: { children: ReactNode }) {
  const [items, setItems] = useLocalStorage<CartItem[]>("ta-cart", []);
  const { showToast } = useToast();

  const addItem = (product: Product, size: string, color: string, quantity = 1) => {
    setItems((prev) => {
      const idx = prev.findIndex(
        (i) => i.productId === product.id && i.size === size && i.color === color
      );
      if (idx > -1) {
        const next = [...prev];
        next[idx] = { ...next[idx], quantity: next[idx].quantity + quantity };
        return next;
      }
      return [...prev, { productId: product.id, size, color, quantity }];
    });
    showToast(`Added "${product.name}" to your bag`);
  };

  const removeItem = (productId: string, size: string, color: string) => {
    setItems((prev) => prev.filter((i) => !(i.productId === productId && i.size === size && i.color === color)));
  };

  const updateQuantity = (productId: string, size: string, color: string, quantity: number) => {
    setItems((prev) =>
      prev.map((i) =>
        i.productId === productId && i.size === size && i.color === color
          ? { ...i, quantity: Math.max(1, quantity) }
          : i
      )
    );
  };

  const clearCart = () => setItems([]);

  const lines: CartLine[] = useMemo(
    () =>
      items
        .map((i) => {
          const product = getProductById(i.productId);
          return product ? { ...i, product } : null;
        })
        .filter((l): l is CartLine => l !== null),
    [items]
  );

  const subtotal = useMemo(
    () => lines.reduce((sum, l) => sum + (l.product.discountPrice ?? l.product.price) * l.quantity, 0),
    [lines]
  );

  const totalCount = useMemo(() => items.reduce((sum, i) => sum + i.quantity, 0), [items]);

  return (
    <CartContext.Provider
      value={{ items, lines, addItem, removeItem, updateQuantity, clearCart, subtotal, totalCount }}
    >
      {children}
    </CartContext.Provider>
  );
}

export function useCart() {
  const ctx = useContext(CartContext);
  if (!ctx) throw new Error("useCart must be used within CartProvider");
  return ctx;
}
