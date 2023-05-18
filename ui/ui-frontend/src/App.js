import "./App.css";
import { Route, BrowserRouter as Router, Routes } from "react-router-dom";

import Accessories from "./components/Products/Accessories";
import AccessoriesProductsInfo from "./components/ProductsInfo/AccessoriesProductsInfo";

import BeautyProducts from "./components/Products/BeautyProducts";
import BeautyProductsInfo from "./components/ProductsInfo/BeautyProductsInfo";

import ElectronicsProducts from "./components/Products/ElectronicsProducts";
import ElectronicsProductsInfo from "./components/ProductsInfo/ElectronicsProductsInfo";
import ElectronicProductsByCategory from "./components/Products/ElectronicProductsByCategory";
import ElectronicsProductsByTpeInfo from "./components/ProductsInfo/ElectronicsProductsByTpeInfo";

import AllFashionProductsInfo from "./components/ProductsInfo/AllFashionProductsInfo";
import FashionProducts from "./components/Products/FashionProducts";
import FashionProductByGender from "./components/Products/FashionProductByGender";
import FashionProductsByGenderInfo from "./components/ProductsInfo/FashionProductsByGenderInfo";
import FashionProductByCategory from "./components/Products/FashionProductByCategory";
import FashionProductsInfo from "./components/ProductsInfo/FashionProductsInfo";

import Footware from "./components/Products/Footwear";
import FootwearProductsInfo from "./components/ProductsInfo/FootwearProductsInfo";

import HeaderComponent from "./components/HeaderComponent.jsx";
import HomeComponent from "../../ui-frontend/src/components/HomeComponent";

import LoginPage from "./components/LoginPage";

import ToysProductsInfo from "./components/ProductsInfo/ToysProductsInfo";
import Toys from "./components/Products/Toys";
import CartComponent from "./components/CartComponent";

import FashionComponent from "./components/FashionComponent";
import CartComponent from "./components/CartComponent";


function App() {

  return (
    <div className="App">
      <Router>
        <HeaderComponent />
        <Routes>
          <Route path="/" element={<HomeComponent />}></Route>
          <Route path="/login" element={<LoginPage />}></Route>

          {/* <Route path="/fashion" element={<FashionProducts />}></Route> */}
          <Route path="/fashion" element={<FashionComponent />}></Route>
          {/* <Route path="/fashionByType/:type" element={<FashionComponent/>}></Route> */}

          <Route path="/fashionBy/:suitablefor" element={<FashionProductByGender />}></Route>
          <Route path="/fashionBy/:suitablefor/:productId" element={<FashionProductsByGenderInfo />}></Route>
          <Route path="/fashion/:productId" element={<AllFashionProductsInfo />}></Route>
          <Route path="/fashionByType/:type" element={<FashionProductByCategory />}></Route>
          <Route path="/fashion/:type/:productId" element={<FashionProductsInfo />}></Route>

          <Route path="/toys" element={<Toys />}></Route>
          <Route path="/toys/:toyId" element={<ToysProductsInfo />}></Route>

          <Route path="/footwear" element={<Footware />}></Route>
          <Route path="/footwear/:footWearId" element={<FootwearProductsInfo />}></Route>

          <Route path="/accessories" element={<Accessories />}></Route>
          <Route path="/accessories/:accessoryId" element={<AccessoriesProductsInfo />}></Route>

          <Route path="/beauty" element={<BeautyProducts />}></Route>
          <Route path="/beauty/:beautyId" element={<BeautyProductsInfo />}></Route>

          <Route path="/electronics" element={<ElectronicsProducts />} ></Route>
          <Route path="/electronics/:electronicsId" element={<ElectronicsProductsInfo />} ></Route>
          <Route path="/electronicsBy/:type" element={<ElectronicProductsByCategory />}></Route>
          <Route path="/electronicsBy/:type/:electronicsId" element={<ElectronicsProductsByTpeInfo />}></Route>

          <Route path="/cart" element={<CartComponent />}></Route>
        </Routes>
      </Router>

    </div>
  );
}

export default App;
