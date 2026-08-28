import type { ReactNode } from "react";
import { X } from "lucide-react";
import { cn } from "../../lib/utils";

interface DrawerProps {
  open: boolean;
  onClose: () => void;
  title?: string;
  side?: "left" | "right" | "bottom";
  children: ReactNode;
  widthClass?: string;
}

export default function Drawer({ open, onClose, title, side = "right", children, widthClass = "max-w-md" }: DrawerProps) {
  if (!open) return null;

  const positionClasses =
    side === "right"
      ? cn("right-0 top-0 h-full w-full", widthClass, "animate-[slideInRight_0.25s_ease]")
      : side === "left"
      ? cn("left-0 top-0 h-full w-full", widthClass)
      : "bottom-0 left-0 right-0 max-h-[85vh] rounded-t-2xl";

  return (
    <div className="fixed inset-0 z-50">
      <div className="absolute inset-0 bg-ink/40 animate-fade-in" onClick={onClose} />
      <div className={cn("absolute flex flex-col bg-ivory shadow-card", positionClasses)}>
        {title && (
          <div className="flex items-center justify-between border-b border-line px-5 py-4">
            <h2 className="font-serif text-lg text-ink">{title}</h2>
            <button onClick={onClose} aria-label="Close" className="rounded-full p-1.5 hover:bg-ivory-dark">
              <X size={18} />
            </button>
          </div>
        )}
        <div className="flex-1 overflow-y-auto">{children}</div>
      </div>
    </div>
  );
}
