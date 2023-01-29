import React from "react";
import Sidebar from "./Sidebar";

const Layout = ({ children }) => {
  return (
    <div className="flex h-screen w-screen overflow-hidden text-white">
      <div className="w-[150px] bg-black/80">
        <Sidebar />
      </div>
      <div className="w-screen bg-black/90">{children}</div>
    </div>
  );
};

export default Layout;
