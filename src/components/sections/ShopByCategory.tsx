import { Link } from "react-router-dom";
import { categories } from "../../data/taxonomy";
import SectionHeading from "../ui/SectionHeading";

export default function ShopByCategory() {
  return (
    <section className="bg-ivory-dark/50 py-14 sm:py-20">
      <div className="container-page">
        <SectionHeading eyebrow="Explore" title="Shop by Category" description="Curated edits across every stage and every occasion." />
        <div className="grid grid-cols-2 gap-4 sm:grid-cols-3 lg:grid-cols-6">
          {categories.map((cat) => (
            <Link key={cat.slug} to={`/category/${cat.slug}`} className="group flex flex-col gap-3">
              <div className="aspect-[4/5] overflow-hidden rounded-xl bg-ivory">
                <img
                  src={cat.image}
                  alt={cat.label}
                  className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
                />
              </div>
              <div>
                <p className="text-sm font-semibold text-ink">{cat.label}</p>
                <p className="text-xs text-ink-soft">{cat.description}</p>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
