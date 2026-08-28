import { testimonials } from "../../data/content";
import SectionHeading from "../ui/SectionHeading";
import Rating from "../ui/Rating";
import HorizontalScroller from "../ui/HorizontalScroller";

export default function Testimonials() {
  return (
    <section className="bg-sky/30 py-14 sm:py-20">
      <div className="container-page">
        <SectionHeading align="center" eyebrow="Parent Voices" title="What Parents Are Saying" />
        <HorizontalScroller>
          {testimonials.map((t) => (
            <div key={t.id} className="flex w-[75%] flex-none flex-col gap-3 rounded-2xl bg-white p-6 sm:w-[45%] lg:w-1/4">
              <Rating value={t.rating} size={14} />
              <p className="text-sm leading-relaxed text-ink-soft">&ldquo;{t.body}&rdquo;</p>
              <div className="mt-auto pt-2">
                <p className="text-sm font-semibold text-ink">{t.author}</p>
                <p className="text-xs text-ink-soft">{t.location}</p>
              </div>
            </div>
          ))}
        </HorizontalScroller>
      </div>
    </section>
  );
}
