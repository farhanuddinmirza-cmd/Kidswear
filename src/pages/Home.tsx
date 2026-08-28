import { useState } from "react";
import type { Product } from "../types";
import HeroBanner from "../components/sections/HeroBanner";
import ShopByAge from "../components/sections/ShopByAge";
import ShopByCategory from "../components/sections/ShopByCategory";
import NewArrivals from "../components/sections/NewArrivals";
import PromoBanners from "../components/sections/PromoBanners";
import BestSellers from "../components/sections/BestSellers";
import BrandStory from "../components/sections/BrandStory";
import SustainabilityHighlights from "../components/sections/SustainabilityHighlights";
import ShopByOccasion from "../components/sections/ShopByOccasion";
import Testimonials from "../components/sections/Testimonials";
import QuickViewModal from "../components/product/QuickViewModal";

export default function Home() {
  const [quickViewProduct, setQuickViewProduct] = useState<Product | null>(null);

  return (
    <>
      <HeroBanner />
      <ShopByAge />
      <ShopByCategory />
      <NewArrivals onQuickView={setQuickViewProduct} />
      <PromoBanners />
      <BestSellers onQuickView={setQuickViewProduct} />
      <BrandStory />
      <SustainabilityHighlights />
      <ShopByOccasion />
      <Testimonials />
      <QuickViewModal product={quickViewProduct} onClose={() => setQuickViewProduct(null)} />
    </>
  );
}
