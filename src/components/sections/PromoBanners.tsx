import { Link } from "react-router-dom";
import { promoBanners } from "../../data/content";

export default function PromoBanners() {
  return (
    <section className="container-page py-14 sm:py-20">
      <div className="grid grid-cols-1 gap-5 sm:grid-cols-3">
        {promoBanners.map((banner) => (
          <Link
            key={banner.id}
            to={banner.to}
            className="group relative flex aspect-[3/2] items-end overflow-hidden rounded-2xl bg-sage"
          >
            <img
              src={banner.image}
              alt={banner.title}
              className="absolute inset-0 h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-ink/70 via-ink/10 to-transparent" />
            <div className="relative flex flex-col gap-1 p-6 text-ivory">
              <h3 className="font-serif text-2xl">{banner.title}</h3>
              <p className="text-sm text-ivory/85">{banner.subtitle}</p>
              <span className="mt-2 inline-block w-fit border-b border-ivory text-xs font-semibold uppercase tracking-wide">
                {banner.cta}
              </span>
            </div>
          </Link>
        ))}
      </div>
    </section>
  );
}
