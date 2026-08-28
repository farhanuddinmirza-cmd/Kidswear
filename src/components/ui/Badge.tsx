import { cn } from "../../lib/utils";

interface BadgeProps {
  children: React.ReactNode;
  variant?: "new" | "bestseller" | "sale" | "neutral" | "outofstock";
  className?: string;
}

const variants: Record<string, string> = {
  new: "bg-sky text-ink",
  bestseller: "bg-butter text-ink",
  sale: "bg-sale text-ivory",
  neutral: "bg-ivory-dark text-ink-soft",
  outofstock: "bg-ink-soft/10 text-ink-soft",
};

export default function Badge({ children, variant = "neutral", className }: BadgeProps) {
  return (
    <span
      className={cn(
        "inline-flex items-center rounded-full px-2.5 py-1 text-[10px] font-semibold uppercase tracking-wider",
        variants[variant],
        className
      )}
    >
      {children}
    </span>
  );
}
