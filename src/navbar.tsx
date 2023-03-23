import React from "react";
import logo from "./assets/logo.png";

const Navbar: React.FC = () => {
  return (
    <nav className="bg-black h-8 flex items-center">
      <img className="h-4" src={logo} alt="Logo" />

      <img
        className="inline-block h-6 w-6 rounded-full ring-2 ring-white"
        src="https://images.unsplash.com/photo-1491528323818-fdd1faba62cc?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
        alt=""
      />
    </nav>
  );
};

export default Navbar;
