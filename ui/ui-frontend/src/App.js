import "./App.css";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import HeaderComponent from "./components/HeaderComponent.jsx";
import HomeComponent from "./components/HomeComponent";
// import ItemDetails from "./components/ItemDetails";
import { commerce } from "./lib/commerce";
import { useEffect, useState } from "react";
import Products from "./components/Products/Products";

function App() {
  const [products, setProducts] = useState([]);
  const fetchProducts = async () => {
    const response = await commerce.products.list();
    setProducts((response && response.data) || []);
  };

  useEffect(() => {
    fetchProducts();
  }, []);
  console.log({ products });
  return (
    <div className="App">
      <Router exact path="/">
        <HeaderComponent />
        <HomeComponent />
        {/* <Products products={products} /> */}
      </Router>
    </div>
  );
}

export default App;
