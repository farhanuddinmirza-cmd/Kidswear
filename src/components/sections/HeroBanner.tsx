import { Link } from "react-router-dom";
import Button from "../ui/Button";
import { realPhoto } from "../../lib/images";

export default function HeroBanner() {
  return (
    <section className="relative overflow-hidden bg-blush">
      <div className="container-page grid grid-cols-1 items-center gap-8 py-10 sm:py-14 lg:grid-cols-2 lg:gap-12 lg:py-0">
        <div className="order-2 flex flex-col items-start gap-5 lg:order-1">
          <span className="rounded-full bg-white/70 px-4 py-1.5 text-xs font-semibold uppercase tracking-widest text-terracotta">
            Autumn–Winter Edit
          </span>
          <h1 className="max-w-lg font-serif text-4xl leading-[1.1] text-ink sm:text-5xl lg:text-6xl">
            Dressed for wonder, built for play
          </h1>
          <p className="max-w-md text-base leading-relaxed text-ink-soft">
            Thoughtfully crafted clothing for newborns to fourteen-year-olds — soft on skin,
            strong on style, and made for every little adventure in between.
          </p>
          <div className="mt-2 flex flex-wrap items-center gap-4">
            <Link to="/new-arrivals">
              <Button variant="primary" size="lg">
                Shop Now
              </Button>
            </Link>
            <Link to="/shop-by-age">
              <Button variant="outline" size="lg" className="!border-ink/30">
                Shop by Age
              </Button>
            </Link>
          </div>
        </div>
        <div className="order-1 lg:order-2">
          <div className="relative mx-auto aspect-[4/5] w-full max-w-md overflow-hidden rounded-2xl lg:aspect-[3/4] lg:max-w-none lg:rounded-none">
            <img
              src={realPhoto("1784439199357-8da7b7a2afbf", 1400)}
              alt="Children wearing Pip & Panda's new season collection"
              className="h-full w-full object-cover"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
