import "./App.css";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import HeaderComponent from "./components/HeaderComponent.jsx";
import HomeComponent from "./components/HomeComponent";

// import ItemDetails from "./components/ItemDetails";
// import { commerce } from "./lib/commerce";
// import { useEffect, useState } from "react";
import Products from "./components/Products/Products";

function App() {
  return (
    <div className="App">
      <Router exact path="/">
        <HeaderComponent />
        <HomeComponent />

        {/* <Products /> */}
      </Router>
    </div>
  );
}

export default App;
