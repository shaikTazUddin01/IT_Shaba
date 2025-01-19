import Footer from "@//components/shared/Footer";
import MainNavbar from "@//components/shared/Navbar";

import React, { ReactNode } from "react";

const layout = ({ children }: { children: ReactNode }) => {
  return (
    <div className="">
      {/* navbar */}
      <div>
        <MainNavbar />
      </div>
      {/* body */}
      <div className="min-h-[90vh] pt-10">{children}</div>
      {/* footer */}
      <div>
        <Footer />
      </div>
    </div>
  );
};

export default layout;
