import React from "react";
import Logo from "../../content/logowhite.svg";
import profile from "../../content/profile12.png";
import { Link } from "react-router-dom"; // importez Link depuis react-router-dom
import SearchBar from "../../component/Searchbar/searchbar";
const Navbar: React.FC = () => {
  return (
    <nav className="fixed top-0 left-0 right-0 bg-black h-12 flex items-center p-2 z-10 ">
      <img
        className="h-7 m-2 lg:h-8 lg:m-3 xl:h-9 xl:m-4 2xl:h-9 2xl:m-5"
        src={Logo}
        alt="Logo"
      />
      <SearchBar />
      <Link to="/user">
        <img
          className="inline-block h-9 w-9 m-2 lg:m-3 xl:m-4 2xl:m-5 rounded-full"

          src={profile}
          alt="John Doe's profile"
        />
      </Link>
    </nav>
  );
};

export default Navbar;
