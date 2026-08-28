import { useParams } from "react-router-dom";
import ProductListing from "../components/product/ProductListing";
import { products } from "../data/products";
import { occasions } from "../data/taxonomy";
import NotFound from "./NotFound";

export default function OccasionPage() {
  const { slug } = useParams();
  const occasion = occasions.find((o) => o.slug === slug);
  if (!occasion) return <NotFound />;

  const filtered = products.filter((p) => p.occasions.includes(occasion.label));

  return (
    <ProductListing
      title={occasion.label}
      description={occasion.description}
      bannerImage={occasion.image}
      breadcrumbLabel={occasion.label}
      products={filtered}
    />
  );
}
