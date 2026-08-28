import { Link } from "react-router-dom";
import { occasions } from "../../data/taxonomy";
import SectionHeading from "../ui/SectionHeading";

export default function ShopByOccasion() {
  return (
    <section className="container-page py-14 sm:py-20">
      <SectionHeading eyebrow="Every Celebration" title="Shop by Occasion" description="Because every milestone deserves the right outfit." />
      <div className="no-scrollbar -mx-1 flex gap-4 overflow-x-auto px-1 sm:grid sm:grid-cols-5 sm:overflow-visible">
        {occasions.map((occ) => (
          <Link key={occ.slug} to={`/occasion/${occ.slug}`} className="group relative w-40 shrink-0 sm:w-auto">
            <div className="aspect-[3/4] overflow-hidden rounded-xl bg-butter/40">
              <img
                src={occ.image}
                alt={occ.label}
                className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
              />
            </div>
            <div className="absolute inset-x-0 bottom-0 rounded-b-xl bg-gradient-to-t from-ink/70 to-transparent p-3">
              <p className="text-sm font-semibold text-ivory">{occ.label}</p>
            </div>
          </Link>
        ))}
      </div>
    </section>
  );
}
