import { Outlet, useLocation } from "react-router-dom";
import { useEffect } from "react";
import AnnouncementBar from "./AnnouncementBar";
import Header from "./Header";
import NavMenu from "./NavMenu";
import Footer from "./Footer";

export default function Layout() {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  return (
    <div className="flex min-h-screen flex-col">
      <AnnouncementBar />
      <Header />
      <NavMenu />
      <main className="flex-1">
        <Outlet />
      </main>
      <Footer />
    </div>
  );
}
