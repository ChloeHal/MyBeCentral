import React from "react";
<<<<<<<< HEAD:src/component/Navbar/navbar.tsx
import Logo from "../../assets/logo.png";
import Search from "../../assets/search.png";
========
import Logo from "../content/logowhite.svg";
import Search from "../content/search.svg";
>>>>>>>> development:src/component/navbar.tsx

const Navbar: React.FC = () => {
  return (
    <nav className="bg-black h-12 flex items-center p-2">
      <img className="h-7 m-2 lg:h-8 lg:m-3 xl:h-9 xl:m-4 2xl:h-9 2xl:m-5" src={Logo} alt="Logo" />

      <form className="flex items-center justify-end flex-1 cursor-text">
        <div className="relative flex items-center w-11/12 sm:w-40 md:w-48 lg:w-96 xl:w-96 2xl:w-100">
          <input
            className="bg-transparent border border-white rounded-full text-white h-6 w-full pr-10 py-1 pl-3 sm:pr-2 sm:py-2 sm:pl-4 lg:pr-3 lg:py-3 lg:pl-3 xl:pr-4  xl:py-4 xl:pl-4"
            type="text"
            placeholder="Search"
          />
          <img
            className="relative h-4 w-4 right-7 sm:right-8"
            src={Search}
            alt="Search icon"
          />
        </div>
      </form>

      <img
        className="inline-block h-9 w-9 m-2 lg:m-3 xl:m-4 2xl:m-5 rounded-full ring-2 ring-white"
        src="https://images.unsplash.com/photo-1491528323818-fdd1faba62cc?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
        alt="John Doe's profile"
      />
    </nav>
  );
};

export default Navbar;
