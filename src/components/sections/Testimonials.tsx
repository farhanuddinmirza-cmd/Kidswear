import { testimonials } from "../../data/content";
import SectionHeading from "../ui/SectionHeading";
import Rating from "../ui/Rating";

export default function Testimonials() {
  return (
    <section className="bg-sky/30 py-14 sm:py-20">
      <div className="container-page">
        <SectionHeading align="center" eyebrow="Parent Voices" title="What Parents Are Saying" />
        <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {testimonials.map((t) => (
            <div key={t.id} className="flex flex-col gap-3 rounded-2xl bg-white p-6">
              <Rating value={t.rating} size={14} />
              <p className="text-sm leading-relaxed text-ink-soft">&ldquo;{t.body}&rdquo;</p>
              <div className="mt-auto pt-2">
                <p className="text-sm font-semibold text-ink">{t.author}</p>
                <p className="text-xs text-ink-soft">{t.location}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
