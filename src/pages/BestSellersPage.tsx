import ProductListing from "../components/product/ProductListing";
import { bestsellers } from "../data/products";

export default function BestSellersPage() {
  return (
    <ProductListing
      title="Best Sellers"
      description="The pieces our little customers reach for again and again."
      breadcrumbLabel="Best Sellers"
      products={bestsellers}
    />
  );
}
