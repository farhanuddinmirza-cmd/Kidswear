import { useState } from "react";
import { ZoomIn } from "lucide-react";
import { cn } from "../../lib/utils";

export default function ProductGallery({ images, name }: { images: string[]; name: string }) {
  const [active, setActive] = useState(0);
  const [zoomed, setZoomed] = useState(false);
  const [zoomOrigin, setZoomOrigin] = useState("50% 50%");

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    const rect = e.currentTarget.getBoundingClientRect();
    const x = ((e.clientX - rect.left) / rect.width) * 100;
    const y = ((e.clientY - rect.top) / rect.height) * 100;
    setZoomOrigin(`${x}% ${y}%`);
  };

  return (
    <div className="flex flex-col-reverse gap-3 sm:flex-row">
      <div className="flex shrink-0 gap-2 sm:flex-col">
        {images.map((img, i) => (
          <button
            key={i}
            onClick={() => setActive(i)}
            className={cn(
              "aspect-[4/5] w-16 shrink-0 overflow-hidden rounded-lg border-2 sm:w-16",
              active === i ? "border-ink" : "border-transparent opacity-70 hover:opacity-100"
            )}
          >
            <img src={img} alt={`${name} thumbnail ${i + 1}`} className="h-full w-full object-cover" />
          </button>
        ))}
      </div>

      <div
        className="relative flex-1 cursor-zoom-in overflow-hidden rounded-2xl bg-ivory-dark"
        onMouseEnter={() => setZoomed(true)}
        onMouseLeave={() => setZoomed(false)}
        onMouseMove={handleMouseMove}
      >
        <img
          src={images[active]}
          alt={name}
          className="aspect-[4/5] w-full object-cover transition-transform duration-200"
          style={zoomed ? { transform: "scale(1.8)", transformOrigin: zoomOrigin } : undefined}
        />
        <div className="absolute bottom-3 right-3 hidden items-center gap-1 rounded-full bg-white/90 px-3 py-1.5 text-xs text-ink-soft sm:flex">
          <ZoomIn size={13} /> Hover to zoom
        </div>
      </div>
    </div>
  );
}
