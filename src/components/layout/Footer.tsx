import { Link } from "react-router-dom";

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

export default function Footer() {
  return (
    <footer className="border-t border-line bg-ivory-dark/60">
      <div className="container-page py-12">
        <div className="grid grid-cols-1 gap-8 sm:grid-cols-3">
          {columns.map((col) => (
            <div key={col.title}>
              <h3 className="text-sm font-semibold text-ink">{col.title}</h3>
              <ul className="mt-3 flex flex-col gap-2">
                {col.links.map((l) => (
                  <li key={l.label}>
                    <Link to={l.to} className="text-sm text-ink-soft hover:text-terracotta">
                      {l.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="mt-10 border-t border-line pt-6 text-center text-xs text-ink-soft">
          <p>© 2026 Pip & Panda. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}
