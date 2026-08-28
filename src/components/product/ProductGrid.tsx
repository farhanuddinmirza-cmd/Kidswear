import type { Product } from "../../types";
import ProductCard from "./ProductCard";
import { ProductCardSkeleton } from "../ui/Spinner";

interface ProductGridProps {
  products: Product[];
  onQuickView?: (product: Product) => void;
  loading?: boolean;
  columns?: string;
}

export default function ProductGrid({
  products,
  onQuickView,
  loading,
  columns = "grid-cols-2 sm:grid-cols-3 lg:grid-cols-4",
}: ProductGridProps) {
  if (loading) {
    return (
      <div className={`grid ${columns} gap-x-4 gap-y-8 sm:gap-x-6`}>
        {Array.from({ length: 8 }).map((_, i) => (
          <ProductCardSkeleton key={i} />
        ))}
      </div>
    );
  }

  return (
    <div className={`grid ${columns} gap-x-4 gap-y-8 sm:gap-x-6`}>
      {products.map((p) => (
        <ProductCard key={p.id} product={p} onQuickView={onQuickView} />
      ))}
    </div>
  );
}
