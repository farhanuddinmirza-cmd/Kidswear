import { useParams, Link } from "react-router-dom";
import ProductListing from "../components/product/ProductListing";
import { products } from "../data/products";
import { ageGroups } from "../data/taxonomy";
import NotFound from "./NotFound";

export default function AgePage() {
  const { slug } = useParams();
  const age = ageGroups.find((a) => a.slug === slug);
  if (!age) return <NotFound />;

  const filtered = products.filter((p) => p.ageGroups.includes(age.label));

  return (
    <ProductListing
      title={age.label}
      description={age.blurb}
      bannerImage={age.image}
      breadcrumbLabel={age.label}
      products={filtered}
    />
  );
}

export function ShopByAgeIndex() {
  return (
    <div className="container-page py-14">
      <h1 className="font-serif text-3xl text-ink sm:text-4xl">Shop by Age</h1>
      <p className="mt-2 max-w-md text-sm text-ink-soft">From first onesies to first day of school — find their perfect fit.</p>
      <div className="mt-8 grid grid-cols-2 gap-5 sm:grid-cols-3 lg:grid-cols-6">
        {ageGroups.map((age) => (
          <Link key={age.slug} to={`/shop-by-age/${age.slug}`} className="group flex flex-col items-center gap-3 text-center">
            <div className="aspect-square w-full overflow-hidden rounded-full bg-ivory-dark">
              <img src={age.image} alt={age.label} className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-110" />
            </div>
            <div>
              <p className="text-sm font-semibold text-ink">{age.label}</p>
              <p className="text-xs text-ink-soft">{age.blurb}</p>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
}
