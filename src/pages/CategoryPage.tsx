import { useParams } from "react-router-dom";
import ProductListing from "../components/product/ProductListing";
import { products } from "../data/products";
import { categories } from "../data/taxonomy";
import NotFound from "./NotFound";

export default function CategoryPage() {
  const { slug } = useParams();
  const category = categories.find((c) => c.slug === slug);
  if (!category) return <NotFound />;

  const filtered = products.filter((p) => p.category === category.label);

  return (
    <ProductListing
      title={category.label}
      description={category.description}
      bannerImage={category.image}
      breadcrumbLabel={category.label}
      products={filtered}
    />
  );
}
