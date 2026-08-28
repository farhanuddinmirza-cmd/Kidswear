import { createContext, useContext, type ReactNode } from "react";
import type { Address, Order } from "../types";
import { useLocalStorage } from "../hooks/useLocalStorage";
import { useCart } from "./CartContext";

interface OrdersContextValue {
  orders: Order[];
  placeOrder: (address: Address) => Order;
  getOrder: (id: string) => Order | undefined;
}

const OrdersContext = createContext<OrdersContextValue | undefined>(undefined);

const STATUS_SEQUENCE: Order["status"][] = ["Placed", "Packed", "Shipped", "Out for Delivery", "Delivered"];

export function OrdersProvider({ children }: { children: ReactNode }) {
  const [orders, setOrders] = useLocalStorage<Order[]>("ta-orders", []);
  const { lines, subtotal, clearCart } = useCart();

  const placeOrder = (address: Address): Order => {
    const id = `TA${Date.now().toString().slice(-8)}`;
    const eta = new Date(Date.now() + 5 * 24 * 60 * 60 * 1000).toLocaleDateString("en-IN", {
      day: "numeric",
      month: "short",
    });
    const statusIndex = Math.floor(Math.random() * (STATUS_SEQUENCE.length - 2));

    const order: Order = {
      id,
      date: new Date().toISOString(),
      status: STATUS_SEQUENCE[statusIndex],
      items: lines.map((l) => ({
        productId: l.productId,
        size: l.size,
        color: l.color,
        quantity: l.quantity,
        price: l.product.discountPrice ?? l.product.price,
      })),
      total: subtotal >= 1499 ? subtotal : subtotal + 79,
      address,
      eta,
    };

    setOrders((prev) => [order, ...prev]);
    clearCart();
    return order;
  };

  const getOrder = (id: string) => orders.find((o) => o.id === id);

  return <OrdersContext.Provider value={{ orders, placeOrder, getOrder }}>{children}</OrdersContext.Provider>;
}

export function useOrders() {
  const ctx = useContext(OrdersContext);
  if (!ctx) throw new Error("useOrders must be used within OrdersProvider");
  return ctx;
}

export const ORDER_STATUS_SEQUENCE = STATUS_SEQUENCE;
