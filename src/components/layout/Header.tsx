import { useState } from "react";
import { Link } from "react-router-dom";
import { Menu, Search, User, Heart, ShoppingBag } from "lucide-react";
import IconButton from "../ui/IconButton";
import MobileMenu from "./MobileMenu";
import SearchOverlay from "./SearchOverlay";
import { useCart } from "../../context/CartContext";
import { useWishlist } from "../../context/WishlistContext";

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [searchOpen, setSearchOpen] = useState(false);
  const { totalCount } = useCart();
  const { productIds } = useWishlist();

  return (
    <header className="sticky top-0 z-40 border-b border-line bg-ivory/95 backdrop-blur-sm">
      <div className="container-page flex h-16 items-center justify-between gap-4 sm:h-20">
        <div className="flex items-center gap-1 lg:hidden">
          <IconButton icon={<Menu size={20} />} label="Open menu" onClick={() => setMenuOpen(true)} />
        </div>

        <Link to="/" className="flex flex-col items-center leading-none whitespace-nowrap lg:items-start">
          <span className="font-serif text-lg tracking-tight text-ink sm:text-2xl lg:text-3xl">Pip & Panda</span>
          <span className="hidden text-[10px] uppercase tracking-[0.25em] text-ink-soft lg:block">
            Kidswear, Newborn to 14
          </span>
        </Link>

        <div className="flex items-center gap-0.5 sm:gap-1">
          <IconButton icon={<Search size={19} />} label="Search" onClick={() => setSearchOpen(true)} />
          <Link to="/account">
            <IconButton icon={<User size={19} />} label="Account" />
          </Link>
          <Link to="/wishlist" className="relative">
            <IconButton icon={<Heart size={19} />} label="Wishlist" />
            {productIds.length > 0 && (
              <span className="absolute right-0.5 top-0.5 flex h-4 w-4 items-center justify-center rounded-full bg-terracotta text-[10px] font-semibold text-ivory">
                {productIds.length}
              </span>
            )}
          </Link>
          <Link to="/bag" className="relative">
            <IconButton icon={<ShoppingBag size={19} />} label="Shopping Bag" />
            {totalCount > 0 && (
              <span className="absolute right-0.5 top-0.5 flex h-4 w-4 items-center justify-center rounded-full bg-terracotta text-[10px] font-semibold text-ivory">
                {totalCount}
              </span>
            )}
          </Link>
        </div>
      </div>

      <MobileMenu open={menuOpen} onClose={() => setMenuOpen(false)} />
      {searchOpen && <SearchOverlay onClose={() => setSearchOpen(false)} />}
    </header>
  );
}
