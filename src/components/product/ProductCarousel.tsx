import { useRef } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import type { Product } from "../../types";
import ProductCard from "./ProductCard";

interface ProductCarouselProps {
  products: Product[];
  onQuickView?: (product: Product) => void;
}

export default function ProductCarousel({ products, onQuickView }: ProductCarouselProps) {
  const scrollerRef = useRef<HTMLDivElement>(null);

  const scroll = (dir: 1 | -1) => {
    scrollerRef.current?.scrollBy({ left: dir * 320, behavior: "smooth" });
  };

  return (
    <div className="relative">
      <button
        onClick={() => scroll(-1)}
        aria-label="Scroll left"
        className="absolute -left-3 top-[38%] z-10 hidden h-10 w-10 -translate-y-1/2 items-center justify-center rounded-full bg-white shadow-card sm:flex"
      >
        <ChevronLeft size={18} />
      </button>
      <div ref={scrollerRef} className="no-scrollbar flex gap-4 overflow-x-auto scroll-smooth pb-2 sm:gap-6">
        {products.map((p) => (
          <div key={p.id} className="w-[46%] flex-none sm:w-[27%] lg:w-[22%]">
            <ProductCard product={p} onQuickView={onQuickView} />
          </div>
        ))}
      </div>
      <button
        onClick={() => scroll(1)}
        aria-label="Scroll right"
        className="absolute -right-3 top-[38%] z-10 hidden h-10 w-10 -translate-y-1/2 items-center justify-center rounded-full bg-white shadow-card sm:flex"
      >
        <ChevronRight size={18} />
      </button>
    </div>
  );
}
