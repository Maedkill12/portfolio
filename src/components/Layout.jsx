import React from "react";
import Sidebar from "./Sidebar";

const Layout = ({ children }) => {
  return (
    <div className="flex h-screen w-screen text-white">
      <div className="w-[150px]">
        <Sidebar />
      </div>
      <div className="w-screen bg-slate-800">{children}</div>
    </div>
  );
};

export default Layout;
