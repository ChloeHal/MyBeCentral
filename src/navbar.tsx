import React from "react";
import Logo from "./assets/logo.png";
import Search from "./assets/search.png";

const Navbar: React.FC = () => {
  return (
    <nav className="bg-black h-12 flex items-center p-2">
      <img className="h-7" src={Logo} alt="Logo" />

      <form className="flex items-center justify-end flex-1">
        <label className="flex items-center text-white cursor-text rounded-full border border-1 border-white bg-transparent p-1 sm:w-40 md:w-48 lg:w-96 xl:w-96 2xl:w-100">
          <input
            className="place-items-stretch bg-transparent outline-none p-0.5" type="text" placeholder="Search"
          />
          <img className="h-4 ml-2" src={Search} alt="Search" />
        </label>
      </form>

      <img
        className="inline-block h-7 w-7 m-2 rounded-full ring-2 ring-white"
        src="https://images.unsplash.com/photo-1491528323818-fdd1faba62cc?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
        alt="Profile"
      />
    </nav>
  );
};

export default Navbar;