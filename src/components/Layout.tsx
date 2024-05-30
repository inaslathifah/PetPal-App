import { ReactNode } from "react";
import Navbar from "@/components/navbar";
import Footer from "@/components/footer";

const Layout = ({ children }: { children: ReactNode }) => {
  return (
    <div className="w-full min-h-screen">
      <Navbar />
      <main className="overflow-hidden min-h-screen">{children}</main>
      <Footer />
    </div>
  );
};

export default Layout;
