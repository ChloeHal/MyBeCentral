import react from "react";
import logo from "./assets/logo.svg";

function Navbar () {

    return (
    
    <nav className="bg-black h-70">
        <img src="logo"></img>
        <ul className="">MyBeCentral</ul>
        <img
          className="inline-block h-6 w-6 rounded-full ring-2 ring-white"
          src="https://images.unsplash.com/photo-1491528323818-fdd1faba62cc?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
          alt=""
        />
    </nav>

)

}

export default Navbar;