import { bestsellers } from "../../data/products";
import SectionHeading from "../ui/SectionHeading";
import ProductGrid from "../product/ProductGrid";
import type { Product } from "../../types";

export default function BestSellers({ onQuickView }: { onQuickView: (p: Product) => void }) {
  return (
    <section className="bg-ivory-dark/50 py-14 sm:py-20">
      <div className="container-page">
        <SectionHeading
          eyebrow="Loved by Parents"
          title="Best Sellers"
          description="The pieces our little customers reach for again and again."
          ctaLabel="Shop Best Sellers"
          ctaTo="/best-sellers"
        />
        <ProductGrid products={bestsellers.slice(0, 8)} onQuickView={onQuickView} />
      </div>
    </section>
  );
}
