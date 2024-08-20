import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar";
import { ReactNode } from "react";

const layout = ({ children }: { children: ReactNode }) => {
  return (
    <>
      <Navbar />
      <main className="flex min-h-screen flex-col">
        <div className="flex h-full flex-1 flex-col">
          {children}
          <Footer />
        </div>
      </main>
    </>
  );
};

export default layout;
