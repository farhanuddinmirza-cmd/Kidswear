import { Link } from "react-router-dom";
import { User, Package, Heart, MapPin, LogOut } from "lucide-react";
import { useAuth } from "../context/AuthContext";
import { useOrders } from "../context/OrdersContext";
import { useWishlist } from "../context/WishlistContext";
import Breadcrumb from "../components/ui/Breadcrumb";
import Button from "../components/ui/Button";

export default function Account() {
  const { user, logout } = useAuth();
  const { orders } = useOrders();
  const { products } = useWishlist();

  if (!user) {
    return (
      <div className="container-page flex flex-col items-center gap-4 py-20 text-center">
        <User size={30} className="text-ink-soft" />
        <h1 className="font-serif text-3xl text-ink">You're not logged in</h1>
        <p className="max-w-sm text-sm text-ink-soft">Log in to view your orders, wishlist and saved addresses.</p>
        <div className="mt-2 flex gap-3">
          <Link to="/login">
            <Button variant="primary">Log In</Button>
          </Link>
          <Link to="/register">
            <Button variant="outline">Create Account</Button>
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div className="container-page py-8">
      <Breadcrumb items={[{ label: "My Account" }]} />
      <div className="mt-4 flex flex-col items-start gap-4 sm:flex-row sm:items-center sm:justify-between">
        <div>
          <h1 className="font-serif text-3xl capitalize text-ink sm:text-4xl">Hi, {user.name}</h1>
          <p className="mt-1 text-sm text-ink-soft">{user.email}</p>
        </div>
        <Button variant="outline" size="sm" icon={<LogOut size={14} />} onClick={logout} className="shrink-0 whitespace-nowrap">
          Log Out
        </Button>
      </div>

      <div className="mt-8 grid grid-cols-1 gap-5 sm:grid-cols-3">
        <Link to="/orders/track" className="flex flex-col gap-2 rounded-2xl border border-line p-6 hover:border-ink">
          <Package size={20} className="text-terracotta" />
          <p className="font-semibold text-ink">Orders</p>
          <p className="text-sm text-ink-soft">{orders.length} orders placed</p>
        </Link>
        <Link to="/wishlist" className="flex flex-col gap-2 rounded-2xl border border-line p-6 hover:border-ink">
          <Heart size={20} className="text-terracotta" />
          <p className="font-semibold text-ink">Wishlist</p>
          <p className="text-sm text-ink-soft">{products.length} items saved</p>
        </Link>
        <div className="flex flex-col gap-2 rounded-2xl border border-line p-6">
          <MapPin size={20} className="text-terracotta" />
          <p className="font-semibold text-ink">Addresses</p>
          <p className="text-sm text-ink-soft">Saved during your last checkout</p>
        </div>
      </div>

      {orders.length > 0 && (
        <div className="mt-10">
          <h2 className="mb-4 text-sm font-semibold uppercase tracking-wide text-ink">Recent Orders</h2>
          <div className="flex flex-col gap-3">
            {orders.slice(0, 5).map((o) => (
              <Link key={o.id} to={`/orders/track?id=${o.id}`} className="flex items-center justify-between rounded-xl border border-line p-4 hover:border-ink">
                <div>
                  <p className="text-sm font-medium text-ink">{o.id}</p>
                  <p className="text-xs text-ink-soft">{new Date(o.date).toLocaleDateString("en-IN")}</p>
                </div>
                <span className="text-xs font-semibold text-terracotta">{o.status}</span>
              </Link>
            ))}
          </div>
        </div>
      )}
    </div>
  );
}
