import { useState, type ReactNode } from "react";
import { ChevronDown } from "lucide-react";
import { cn } from "../../lib/utils";

interface AccordionItemProps {
  title: string;
  children: ReactNode;
  defaultOpen?: boolean;
}

export function AccordionItem({ title, children, defaultOpen = false }: AccordionItemProps) {
  const [open, setOpen] = useState(defaultOpen);

  return (
    <div className="border-b border-line">
      <button
        onClick={() => setOpen((o) => !o)}
        aria-expanded={open}
        className="flex w-full items-center justify-between py-4 text-left text-sm font-medium text-ink"
      >
        {title}
        <ChevronDown size={16} className={cn("transition-transform duration-200", open && "rotate-180")} />
      </button>
      {open && <div className="pb-4 text-sm leading-relaxed text-ink-soft animate-fade-in">{children}</div>}
    </div>
  );
}

export default function Accordion({ children }: { children: ReactNode }) {
  return <div className="divide-y divide-line">{children}</div>;
}
