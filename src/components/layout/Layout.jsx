import { Outlet } from "react-router";

import Header from "./Header.jsx";
import Footer from "./Footer.jsx";
import ScrollToTop from "./ScrollToTop.jsx";

export default function Layout() {
  return (
    <div className="flex min-h-screen flex-col">
      <ScrollToTop />
      <Header />

      <main
        id="main-content"
        className="flex-1 pt-16 sm:pt-[72px] xl:pt-20"
      >
        <Outlet />
      </main>

      <Footer />
    </div>
  );
}