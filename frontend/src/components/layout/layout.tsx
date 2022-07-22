import { Header } from "components/layout/header";
import { Outlet } from "react-router-dom";
import { Footer } from "components/layout/footer";
import { memo } from "react";

export const Layout = memo(() => (
  <div className="h-screen">
    <div className="flex flex-col justify-between min-h-full max-w-7xl mx-auto px-4 sm:px-6">
      <Header />
      <div className="my-4">
        <Outlet />
      </div>
      <Footer />
    </div>
  </div>
));

export default Layout;
