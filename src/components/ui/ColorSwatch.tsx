import type { ColorOption } from "../../types";
import { cn } from "../../lib/utils";

interface ColorSwatchProps {
  color: ColorOption;
  selected?: boolean;
  onClick?: () => void;
  size?: "sm" | "md";
}

export default function ColorSwatch({ color, selected, onClick, size = "md" }: ColorSwatchProps) {
  return (
    <button
      type="button"
      onClick={onClick}
      title={color.name}
      aria-label={color.name}
      aria-pressed={selected}
      className={cn(
        "rounded-full ring-offset-2 transition-shadow",
        size === "sm" ? "h-4 w-4" : "h-7 w-7",
        selected ? "ring-2 ring-ink" : "ring-1 ring-line hover:ring-ink-soft"
      )}
      style={{ backgroundColor: color.hex }}
    />
  );
}
