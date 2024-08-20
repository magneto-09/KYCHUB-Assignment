import React from "react";
import { Link } from "react-router-dom";

const NavBar = () => {
  return (
    <nav
      className=" p-4 fixed top-0 w-screen"
      style={{ backgroundColor: "#A2CA71" }}
    >
      <div className="container mx-auto flex justify-between items-center">
        <h1 className="text-white text-2xl font-bold">Novamart</h1>
        <div>
          <Link to="/" className="text-white mx-4">
            Home
          </Link>
        </div>
      </div>
    </nav>
  );
};

export default NavBar;
