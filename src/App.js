import React from "react";
import ReactDOM from "react-dom/client";
import "./styles.css";
import HomePage from "./pages/HomePage";
import { BrowserRouter } from "react-router-dom";

const App = () => {
  return <HomePage />;
};

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(
  <BrowserRouter>
    {" "}
    <App />{" "}
  </BrowserRouter>
);
