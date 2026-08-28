import { newArrivals } from "../../data/products";
import SectionHeading from "../ui/SectionHeading";
import ProductCarousel from "../product/ProductCarousel";
import type { Product } from "../../types";

export default function NewArrivals({ onQuickView }: { onQuickView: (p: Product) => void }) {
  return (
    <section className="container-page py-14 sm:py-20">
      <SectionHeading
        eyebrow="Just In"
        title="New Arrivals"
        description="Fresh prints and silhouettes, dropped this week."
        ctaLabel="View All"
        ctaTo="/new-arrivals"
      />
      <ProductCarousel products={newArrivals} onQuickView={onQuickView} />
    </section>
  );
}
