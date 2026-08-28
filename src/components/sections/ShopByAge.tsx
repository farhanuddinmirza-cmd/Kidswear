import { Link } from "react-router-dom";
import { ageGroups } from "../../data/taxonomy";
import SectionHeading from "../ui/SectionHeading";

export default function ShopByAge() {
  return (
    <section className="container-page py-14 sm:py-20">
      <SectionHeading eyebrow="Growing Up" title="Shop by Age" description="From first onesies to first day of school, find their perfect fit." />
      <div className="no-scrollbar -mx-1 flex gap-4 overflow-x-auto px-1 sm:grid sm:grid-cols-3 sm:overflow-visible lg:grid-cols-6">
        {ageGroups.map((age) => (
          <Link
            key={age.slug}
            to={`/shop-by-age/${age.slug}`}
            className="group flex w-32 shrink-0 flex-col items-center gap-3 text-center sm:w-auto"
          >
            <div className="aspect-square w-32 overflow-hidden rounded-full bg-ivory-dark sm:w-full">
              <img
                src={age.image}
                alt={age.label}
                className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-110"
              />
            </div>
            <div>
              <p className="text-sm font-semibold text-ink">{age.label}</p>
              <p className="text-xs text-ink-soft">{age.blurb}</p>
            </div>
          </Link>
        ))}
      </div>
    </section>
  );
}
