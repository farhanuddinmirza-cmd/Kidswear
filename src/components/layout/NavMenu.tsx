import { Link } from "react-router-dom";
import { mainNav, categories, ageGroups } from "../../data/taxonomy";

const megaMenus: Record<string, { label: string; to: string }[]> = {
  Baby: categories
    .filter((c) => ["Baby", "Nightwear", "Accessories"].includes(c.label))
    .map((c) => ({ label: c.label, to: `/category/${c.slug}` })),
  Girls: [
    { label: "All Girls", to: "/category/girls" },
    { label: "Occasion Wear", to: "/category/occasion-wear" },
    { label: "Nightwear", to: "/category/nightwear" },
    { label: "Accessories", to: "/category/accessories" },
  ],
  Boys: [
    { label: "All Boys", to: "/category/boys" },
    { label: "Occasion Wear", to: "/category/occasion-wear" },
    { label: "Nightwear", to: "/category/nightwear" },
    { label: "Accessories", to: "/category/accessories" },
  ],
  "Shop by Age": ageGroups.map((a) => ({ label: a.label, to: `/shop-by-age/${a.slug}` })),
};

export default function NavMenu() {
  return (
    <nav className="hidden border-b border-line bg-ivory lg:block">
      <div className="container-page">
        <ul className="flex items-center justify-center gap-8 py-3.5">
          {mainNav.map((item) => {
            const submenu = megaMenus[item.label];
            return (
              <li key={item.label} className="group relative">
                <Link
                  to={item.to}
                  className={`text-xs font-semibold uppercase tracking-wide transition-colors hover:text-terracotta ${
                    item.label === "Sale" ? "text-sale" : "text-ink"
                  }`}
                >
                  {item.label}
                </Link>
                {submenu && (
                  <div className="invisible absolute left-1/2 top-full z-30 w-56 -translate-x-1/2 pt-3 opacity-0 transition-all duration-150 group-hover:visible group-hover:opacity-100">
                    <div className="flex flex-col gap-1 rounded-xl border border-line bg-white p-3 shadow-card">
                      {submenu.map((s) => (
                        <Link
                          key={s.label}
                          to={s.to}
                          className="rounded-lg px-3 py-2 text-sm text-ink-soft hover:bg-ivory-dark hover:text-ink"
                        >
                          {s.label}
                        </Link>
                      ))}
                    </div>
                  </div>
                )}
              </li>
            );
          })}
        </ul>
      </div>
    </nav>
  );
}
