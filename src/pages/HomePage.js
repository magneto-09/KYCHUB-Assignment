import React from "react";
import NavBar from "../components/NavBar";
import SideBar from "../components/SideBar";
import ProductDetailsPage from "./ProductDetailsPage";
import CompareProduct from "./CompareProduct";
import { Route, Routes } from "react-router-dom";

const HomePage = () => {
  return (
    <div className="flex flex-col gap-12 h-screen">
      <div className="">
        <NavBar />
      </div>
      <div className="flex flex-1">
        <div className="">
          <SideBar />
        </div>
        <main className="flex-1 ml-64 p-4 overflow-y-auto">
          <Routes>
            {
              // routing
            }
            <Route
              exact
              path="/"
              element={
                <>
                  <h2 className="text-2xl font-bold mb-4 px-2">
                    Product Details
                  </h2>
                  <ProductDetailsPage />
                </>
              }
            />
            <Route
              exact
              path="/compare-page"
              element={
                <>
                  <h2 className="text-2xl font-bold mb-4 px-2">
                    Compare Product
                  </h2>
                  <CompareProduct />
                </>
              }
            />
          </Routes>
        </main>
      </div>
    </div>
  );
};

export default HomePage;
