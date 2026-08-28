import { Link } from "react-router-dom";
import { Mail, Phone, MapPin } from "lucide-react";
import { InstagramIcon, FacebookIcon, YoutubeIcon } from "../ui/SocialIcons";
import { useState } from "react";
import { useToast } from "../../context/ToastContext";

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
  const [email, setEmail] = useState("");
  const { showToast } = useToast();

  const handleSubscribe = (e: React.FormEvent) => {
    e.preventDefault();
    if (!email.trim()) return;
    showToast("Thanks for subscribing! Watch your inbox for 10% off.");
    setEmail("");
  };

  return (
    <footer className="border-t border-line bg-ivory-dark/60">
      <div className="container-page py-14">
        <div className="grid grid-cols-1 gap-10 sm:grid-cols-2 lg:grid-cols-5">
          <div className="lg:col-span-2">
            <span className="font-serif text-2xl text-ink">Pip & Panda</span>
            <p className="mt-3 max-w-xs text-sm leading-relaxed text-ink-soft">
              Premium, thoughtfully made kidswear for newborn to 14 years — designed for comfort,
              built for little adventures.
            </p>
            <div className="mt-5 flex flex-col gap-2 text-sm text-ink-soft">
              <span className="flex items-center gap-2">
                <Phone size={15} /> +91 98765 43210
              </span>
              <span className="flex items-center gap-2">
                <Mail size={15} /> care@pipandpanda.in
              </span>
              <span className="flex items-center gap-2">
                <MapPin size={15} /> Mumbai, Maharashtra, India
              </span>
            </div>
            <div className="mt-5 flex items-center gap-3">
              <a href="#" aria-label="Instagram" className="flex h-9 w-9 items-center justify-center rounded-full bg-white text-ink hover:text-terracotta">
                <InstagramIcon size={16} />
              </a>
              <a href="#" aria-label="Facebook" className="flex h-9 w-9 items-center justify-center rounded-full bg-white text-ink hover:text-terracotta">
                <FacebookIcon size={16} />
              </a>
              <a href="#" aria-label="YouTube" className="flex h-9 w-9 items-center justify-center rounded-full bg-white text-ink hover:text-terracotta">
                <YoutubeIcon size={16} />
              </a>
            </div>
          </div>

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

          <div>
            <h3 className="text-sm font-semibold text-ink">Stay in the Loop</h3>
            <p className="mt-3 text-sm text-ink-soft">Get 10% off your first order plus early access to new drops.</p>
            <form onSubmit={handleSubscribe} className="mt-3 flex flex-col gap-2">
              <input
                type="email"
                required
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="Your email address"
                className="rounded-full border border-line bg-white px-4 py-2.5 text-sm placeholder:text-ink-soft/50 focus:border-terracotta"
              />
              <button
                type="submit"
                className="rounded-full bg-ink px-4 py-2.5 text-sm font-medium text-ivory hover:bg-terracotta"
              >
                Subscribe
              </button>
            </form>
          </div>
        </div>

        <div className="mt-12 flex flex-col items-center justify-between gap-3 border-t border-line pt-6 text-xs text-ink-soft sm:flex-row">
          <p>© {new Date().getFullYear()} Pip & Panda. All rights reserved.</p>
          <p>Prices are in INR and inclusive of all taxes.</p>
        </div>
      </div>
    </footer>
  );
}
