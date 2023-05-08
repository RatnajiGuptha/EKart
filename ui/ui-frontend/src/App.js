<<<<<<< HEAD
import "./App.css";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import HeaderComponent from "./components/HeaderComponent.jsx";
import HomeComponent from "./components/HomeComponent";
import ItemDetails from "./components/ItemDetails";
import Itemmmm from "./components/Itemmm";
import { commerce } from "./lib/commerce";
import { useEffect, useState } from "react";
import Products from "./components/Products/Products";
=======
import './App.css';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import HeaderComponent from "./components/HeaderComponent.jsx"
import HomeComponent from './components/HomeComponent';
import ItemDetails from './components/ItemDetails';
>>>>>>> 99921644f02791abbd58a6f2034c820818244fa2

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
<<<<<<< HEAD
        <HomeComponent />
        <Products products={products} />
      </Router>
    </div>
=======
        <HomeComponent/>
        {/* <ItemDetails/> */}
      </Router >
    </div >
>>>>>>> 99921644f02791abbd58a6f2034c820818244fa2
  );
}

export default App;
