import React from "react";
import Sidebar from "./Sidebar";

const Layout = ({ children }) => {
  return (
    <div className="flex min-h-screen text-white">
      <div className="w-[220px] bg-black/80">
        <Sidebar />
      </div>
      <div className="h-full min-h-screen w-screen bg-black/90">{children}</div>
    </div>
  );
};

export default Layout;
