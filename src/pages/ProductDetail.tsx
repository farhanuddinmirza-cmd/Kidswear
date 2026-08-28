import { useMemo, useState } from "react";
import { useParams, Link } from "react-router-dom";
import { Heart, ShieldCheck, Sparkles, Truck, RotateCcw } from "lucide-react";
import { getProductBySlug, getRelatedProducts, getCompleteTheLook } from "../data/products";
import Breadcrumb from "../components/ui/Breadcrumb";
import ProductGallery from "../components/product/ProductGallery";
import PriceTag from "../components/ui/PriceTag";
import Rating from "../components/ui/Rating";
import ColorSwatch from "../components/ui/ColorSwatch";
import Button from "../components/ui/Button";
import Accordion, { AccordionItem } from "../components/ui/Accordion";
import PincodeCheck from "../components/product/PincodeCheck";
import SizeGuideModal from "../components/product/SizeGuideModal";
import ProductCarousel from "../components/product/ProductCarousel";
import QuickViewModal from "../components/product/QuickViewModal";
import SectionHeading from "../components/ui/SectionHeading";
import { useCart } from "../context/CartContext";
import { useWishlist } from "../context/WishlistContext";
import { useRecentlyViewed } from "../hooks/useRecentlyViewed";
import { useToast } from "../context/ToastContext";
import { categories } from "../data/taxonomy";
import type { Product } from "../types";
import NotFound from "./NotFound";

export default function ProductDetail() {
  const { slug } = useParams();
  const product = getProductBySlug(slug ?? "");

  if (!product) return <NotFound />;

  return <ProductDetailContent product={product} />;
}

function ProductDetailContent({ product }: { product: Product }) {
  const [color, setColor] = useState(product.colors[0]?.name ?? "");
  const [size, setSize] = useState<string | null>(null);
  const [sizeGuideOpen, setSizeGuideOpen] = useState(false);
  const [quickViewProduct, setQuickViewProduct] = useState<Product | null>(null);
  const { addItem } = useCart();
  const { isWishlisted, toggleWishlist } = useWishlist();
  const { showToast } = useToast();
  const recentlyViewed = useRecentlyViewed(product.id).filter((p) => p.id !== product.id);
  const related = useMemo(() => getRelatedProducts(product), [product]);
  const completeLook = useMemo(() => getCompleteTheLook(product), [product]);
  const categorySlug = categories.find((c) => c.label === product.category)?.slug ?? "";

  const handleAddToBag = () => {
    if (!size) {
      showToast("Please select a size");
      return;
    }
    addItem(product, size, color, 1);
  };

  const handleBuyNow = () => {
    if (!size) {
      showToast("Please select a size");
      return;
    }
    addItem(product, size, color, 1);
    window.location.href = "/checkout";
  };

  return (
    <div className="container-page py-6">
      <Breadcrumb items={[{ label: product.category, to: `/category/${categorySlug}` }, { label: product.name }]} />

      <div className="mt-5 grid grid-cols-1 gap-10 md:grid-cols-2 md:gap-8 lg:gap-14">
        <ProductGallery images={product.images} name={product.name} />

        <div className="flex flex-col gap-5">
          <div>
            <p className="text-xs font-semibold uppercase tracking-wide text-terracotta">{product.category}</p>
            <h1 className="mt-1 font-serif text-3xl text-ink sm:text-4xl">{product.name}</h1>
            <div className="mt-2 flex items-center gap-3">
              <Rating value={product.rating} showValue count={product.reviewCount} />
            </div>
          </div>

          <PriceTag price={product.price} discountPrice={product.discountPrice} size="lg" />

          <div>
            <p className="mb-2 text-xs font-semibold uppercase tracking-wide text-ink">
              Colour: <span className="font-normal text-ink-soft">{color}</span>
            </p>
            <div className="flex gap-2">
              {product.colors.map((c) => (
                <ColorSwatch key={c.name} color={c} selected={color === c.name} onClick={() => setColor(c.name)} />
              ))}
            </div>
          </div>

          <div>
            <div className="mb-2 flex items-center justify-between">
              <p className="text-xs font-semibold uppercase tracking-wide text-ink">
                Age / Size {size && <span className="font-normal text-ink-soft">— {size}</span>}
              </p>
              <button onClick={() => setSizeGuideOpen(true)} className="text-xs font-medium text-terracotta underline underline-offset-2">
                Size Guide
              </button>
            </div>
            <div className="flex flex-wrap gap-2">
              {product.sizes.map((s) => (
                <button
                  key={s}
                  onClick={() => setSize(s)}
                  className={`rounded-lg border px-3.5 py-2 text-xs font-medium transition-colors ${
                    size === s ? "border-ink bg-ink text-ivory" : "border-line text-ink-soft hover:border-ink"
                  }`}
                >
                  {s}
                </button>
              ))}
            </div>
            <p className="mt-2 text-xs text-ink-soft">Suitable for: {product.ageGroups.join(", ")}</p>
          </div>

          <div className="flex items-center gap-3">
            <Button variant="primary" size="lg" fullWidth disabled={!product.inStock} onClick={handleAddToBag}>
              {product.inStock ? "Add to Bag" : "Out of Stock"}
            </Button>
            <button
              onClick={() => toggleWishlist(product)}
              aria-label="Toggle wishlist"
              className="flex h-[52px] w-[52px] shrink-0 items-center justify-center rounded-full border border-line"
            >
              <Heart size={20} className={isWishlisted(product.id) ? "fill-terracotta text-terracotta" : "text-ink"} />
            </button>
          </div>
          <Button variant="outline" size="lg" fullWidth disabled={!product.inStock} onClick={handleBuyNow}>
            Buy Now
          </Button>

          <div className="rounded-xl border border-line p-4">
            <PincodeCheck />
          </div>

          <div className="grid grid-cols-1 gap-3 rounded-xl bg-sage/30 p-4 sm:grid-cols-2">
            {product.benefits.map((b) => (
              <div key={b} className="flex items-center gap-2 text-xs text-ink-soft">
                <Sparkles size={14} className="shrink-0 text-terracotta" /> {b}
              </div>
            ))}
          </div>

          <Accordion>
            <AccordionItem title="Product Description" defaultOpen>
              <p>{product.description}</p>
            </AccordionItem>
            <AccordionItem title="Fabric & Care">
              <p className="mb-2 font-medium text-ink">Fabric: {product.fabric}</p>
              <ul className="list-inside list-disc space-y-1">
                {product.careInstructions.map((c) => (
                  <li key={c}>{c}</li>
                ))}
              </ul>
            </AccordionItem>
            <AccordionItem title="Fit Information">
              <p>{product.fit}</p>
            </AccordionItem>
            <AccordionItem title="Delivery & Returns">
              <div className="flex flex-col gap-2">
                <span className="flex items-center gap-2">
                  <Truck size={15} className="text-terracotta" /> Free delivery on prepaid orders above ₹1,499
                </span>
                <span className="flex items-center gap-2">
                  <RotateCcw size={15} className="text-terracotta" /> 15-day easy returns & exchanges
                </span>
                <span className="flex items-center gap-2">
                  <ShieldCheck size={15} className="text-terracotta" /> Quality checked before dispatch
                </span>
              </div>
            </AccordionItem>
          </Accordion>
        </div>
      </div>

      <section className="mt-16 border-t border-line pt-12">
        <SectionHeading eyebrow="Reviews" title="What Parents Say" />
        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2">
          {product.reviews.map((r) => (
            <div key={r.id} className="rounded-xl border border-line p-5">
              <div className="flex items-center justify-between">
                <Rating value={r.rating} size={13} />
                <span className="text-xs text-ink-soft">{new Date(r.date).toLocaleDateString("en-IN", { month: "short", year: "numeric" })}</span>
              </div>
              <h3 className="mt-2 text-sm font-semibold text-ink">{r.title}</h3>
              <p className="mt-1 text-sm leading-relaxed text-ink-soft">{r.body}</p>
              <p className="mt-3 text-xs font-medium text-ink-soft">
                {r.author} {r.verified && <span className="text-sage-dark">· Verified Purchase</span>} · {r.childAge}
              </p>
            </div>
          ))}
        </div>
      </section>

      {completeLook.length > 0 && (
        <section className="mt-16 border-t border-line pt-12">
          <SectionHeading eyebrow="Style It Together" title="Complete the Look" />
          <ProductCarousel products={completeLook} onQuickView={setQuickViewProduct} />
        </section>
      )}

      {related.length > 0 && (
        <section className="mt-16 border-t border-line pt-12">
          <SectionHeading eyebrow="You May Also Like" title="Related Products" />
          <ProductCarousel products={related} onQuickView={setQuickViewProduct} />
        </section>
      )}

      {recentlyViewed.length > 0 && (
        <section className="mt-16 border-t border-line pt-12">
          <SectionHeading eyebrow="Your Browsing" title="Recently Viewed" />
          <ProductCarousel products={recentlyViewed} onQuickView={setQuickViewProduct} />
        </section>
      )}

      <div className="mt-10 flex justify-center">
        <Link to={`/category/${categorySlug}`} className="text-sm font-medium text-ink underline underline-offset-4">
          Back to {product.category}
        </Link>
      </div>

      <SizeGuideModal open={sizeGuideOpen} onClose={() => setSizeGuideOpen(false)} />
      <QuickViewModal product={quickViewProduct} onClose={() => setQuickViewProduct(null)} />
    </div>
  );
}
