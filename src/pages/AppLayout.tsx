import { Outlet } from "react-router-dom";
import Navbar from "@/components/Navbar.tsx";
import { Toaster } from "@/components/ui/sonner.tsx";

const Layout = () => {
  return (
    <>
      <Navbar />

      <Outlet />
      <Toaster />
    </>
  );
};

export default Layout;
