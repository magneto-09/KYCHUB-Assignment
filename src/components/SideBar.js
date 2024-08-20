import React from "react";
import { Link } from "react-router-dom";

const SideBar = () => {
  return (
    <aside className="w-64 bg-gray-800 h-screen p-4 top-16 fixed overflow-auto custom-scrollbar pb-20">
      <h2 className="text-white text-xl mb-4 font-bold">Pages</h2>
      <ul>
        <li className="text-white py-2 hover:bg-gray-700 cursor-pointer">
          <Link to="/">Products</Link>
        </li>
        <li className="text-white py-2 hover:bg-gray-700 cursor-pointer">
          <Link to="/compareProduct"> Compare Products </Link>
        </li>
      </ul>
    </aside>
  );
};

export default SideBar;
