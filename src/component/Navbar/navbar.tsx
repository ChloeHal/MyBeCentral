import React from "react";
import Logo from "../../assets/logo.png";
import Search from "../../assets/search.png";

const Navbar: React.FC = () => {
  return (
    <nav className="bg-black h-12 flex items-center p-2">
      <img className="h-7" src={Logo} alt="Logo" />

      <form className="flex items-center justify-end flex-1 cursor-text">
        <div className="relative flex items-center w-11/12 sm:w-40 md:w-48 lg:w-96 xl:w-96 2xl:w-100">
          <input
            className="bg-transparent border border-white rounded-full text-white w-full pr-10 py-1 pl-4 sm:pr-2 sm:py-2 sm:pl-10"
            type="text"
            placeholder="Search"
          />
          <img
            className="absolute h-4 w-4 sm:h-5 sm:w-5 right-2 top-2 sm:right-3 sm:top-3"
            src={Search}
            alt="Search icon"
          />
        </div>
      </form>

      <img
        className="inline-block h-7 w-7 m-2 rounded-full ring-2 ring-white"
        src="https://images.unsplash.com/photo-1491528323818-fdd1faba62cc?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
        alt="John Doe's profile"
      />
    </nav>
  );
};

export default Navbar;
