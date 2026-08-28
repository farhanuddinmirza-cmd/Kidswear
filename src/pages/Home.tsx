import HeroBanner from "../components/sections/HeroBanner";
import ShopByAge from "../components/sections/ShopByAge";
import ShopByCategory from "../components/sections/ShopByCategory";
import PromoBanners from "../components/sections/PromoBanners";
import BrandStory from "../components/sections/BrandStory";
import SustainabilityHighlights from "../components/sections/SustainabilityHighlights";
import ShopByOccasion from "../components/sections/ShopByOccasion";
import Testimonials from "../components/sections/Testimonials";

export default function Home() {
  return (
    <>
      <HeroBanner />
      <ShopByAge />
      <ShopByCategory />
      <PromoBanners />
      <BrandStory />
      <SustainabilityHighlights />
      <ShopByOccasion />
      <Testimonials />
    </>
  );
}
