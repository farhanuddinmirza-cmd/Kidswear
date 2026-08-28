import { formatINR, discountPercent } from "../../lib/utils";
import { cn } from "../../lib/utils";

interface PriceTagProps {
  price: number;
  discountPrice?: number;
  size?: "sm" | "md" | "lg";
  className?: string;
}

const sizeClasses: Record<string, { current: string; original: string }> = {
  sm: { current: "text-sm", original: "text-xs" },
  md: { current: "text-base", original: "text-sm" },
  lg: { current: "text-2xl", original: "text-base" },
};

export default function PriceTag({ price, discountPrice, size = "md", className }: PriceTagProps) {
  const pct = discountPercent(price, discountPrice);
  const cls = sizeClasses[size];

  return (
    <div className={cn("flex flex-wrap items-baseline gap-2", className)}>
      <span className={cn("font-semibold text-ink", cls.current)}>
        {formatINR(discountPrice ?? price)}
      </span>
      {pct > 0 && (
        <>
          <span className={cn("text-ink-soft/60 line-through", cls.original)}>{formatINR(price)}</span>
          <span className="text-xs font-semibold text-sale">{pct}% OFF</span>
        </>
      )}
    </div>
  );
}
