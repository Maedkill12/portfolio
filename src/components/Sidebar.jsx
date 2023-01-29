import React from "react";
import IconButton from "./IconButton";

const Sidebar = () => {
  return (
    <div className="h-screen">
      <IconButton>Home</IconButton>
      <IconButton>About</IconButton>
      <IconButton>Skills</IconButton>
      <IconButton>Portfolio</IconButton>
      <IconButton>Contact</IconButton>
    </div>
  );
};

export default Sidebar;
