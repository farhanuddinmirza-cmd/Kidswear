import { useState } from "react";
import { Link } from "react-router-dom";
import { ChevronDown } from "lucide-react";
import { cn } from "../../lib/utils";

const columns = [
  {
    title: "Customer Support",
    links: [
      { label: "Contact Us", to: "/contact" },
      { label: "FAQs", to: "/faqs" },
      { label: "Track Your Order", to: "/orders/track" },
      { label: "Size Guide", to: "/faqs" },
    ],
  },
  {
    title: "Policies",
    links: [
      { label: "Shipping Policy", to: "/shipping-returns" },
      { label: "Returns & Exchanges", to: "/shipping-returns" },
      { label: "Privacy Policy", to: "/privacy-policy" },
      { label: "Terms of Service", to: "/terms" },
    ],
  },
  {
    title: "Company",
    links: [
      { label: "About Us", to: "/about" },
      { label: "Gifting", to: "/occasion/gifting" },
      { label: "Sale", to: "/sale" },
      { label: "New Arrivals", to: "/new-arrivals" },
    ],
  },
];

function FooterColumn({ title, links }: (typeof columns)[number]) {
  const [open, setOpen] = useState(false);

  return (
    <div className="border-b border-line py-4">
      <button onClick={() => setOpen((o) => !o)} aria-expanded={open} className="flex w-full items-center justify-between text-sm font-bold uppercase tracking-wide text-ink">
        {title}
        <ChevronDown size={16} className={cn("transition-transform duration-200", open && "rotate-180")} />
      </button>
      <ul className={cn("flex flex-col gap-2 overflow-hidden transition-all", open ? "mt-3 max-h-96" : "max-h-0")}>
        {links.map((l) => (
          <li key={l.label}>
            <Link to={l.to} className="text-sm text-ink-soft hover:text-terracotta">
              {l.label}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default function Footer() {
  return (
    <footer className="border-t border-line bg-ivory-dark/60">
      <div className="container-page py-4">
        <div className="mx-auto max-w-2xl">
          {columns.map((col) => (
            <FooterColumn key={col.title} {...col} />
          ))}
        </div>

        <div className="mt-4 border-t border-line pt-6 text-center text-xs text-ink-soft">
          <p>© 2026 Pip & Panda. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}
