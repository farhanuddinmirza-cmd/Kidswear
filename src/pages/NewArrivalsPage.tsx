import ProductListing from "../components/product/ProductListing";
import { newArrivals } from "../data/products";

export default function NewArrivalsPage() {
  return (
    <ProductListing
      title="New Arrivals"
      description="Fresh prints and silhouettes, dropped this week."
      breadcrumbLabel="New Arrivals"
      products={newArrivals}
    />
  );
}
