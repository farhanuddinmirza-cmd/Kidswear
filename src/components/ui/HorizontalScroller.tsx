import { useRef, type ReactNode } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";

export default function HorizontalScroller({ children }: { children: ReactNode }) {
  const scrollerRef = useRef<HTMLDivElement>(null);

  const scroll = (dir: 1 | -1) => {
    scrollerRef.current?.scrollBy({ left: dir * 300, behavior: "smooth" });
  };

  return (
    <div className="relative">
      <button
        onClick={() => scroll(-1)}
        aria-label="Scroll left"
        className="absolute -left-3 top-1/2 z-10 flex h-9 w-9 -translate-y-1/2 items-center justify-center rounded-full bg-white shadow-card sm:-left-4 sm:h-10 sm:w-10"
      >
        <ChevronLeft size={18} />
      </button>
      <div ref={scrollerRef} className="no-scrollbar flex gap-4 overflow-x-auto scroll-smooth px-1 pb-2 sm:gap-6">
        {children}
      </div>
      <button
        onClick={() => scroll(1)}
        aria-label="Scroll right"
        className="absolute -right-3 top-1/2 z-10 flex h-9 w-9 -translate-y-1/2 items-center justify-center rounded-full bg-white shadow-card sm:-right-4 sm:h-10 sm:w-10"
      >
        <ChevronRight size={18} />
      </button>
    </div>
  );
}
