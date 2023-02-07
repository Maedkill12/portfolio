import React from "react";
import Sidebar from "./Sidebar";

const Layout = ({ children }) => {
  return (
    <div className="relative flex flex-col overflow-hidden text-white md:flex-row">
      <div
        className={`fixed z-20 w-full overflow-hidden bg-black/80 md:static md:w-[220px]`}
      >
        <Sidebar />
      </div>
      <div className="relative top-[72px] h-full w-full bg-black/90 pb-[72px] md:static md:top-0 md:pb-0">
        {children}
      </div>
    </div>
  );
};

export default Layout;
