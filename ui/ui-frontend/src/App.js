import "./App.css";
import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
import HeaderComponent from "./components/HeaderComponent.jsx";
import HomeComponent from "../../ui-frontend/src/components/HomeComponent"
import FashionProducts from "./components/Products/FashionProducts";
import FashionProductByCategory from "./components/Products/FashionProductByCategory";
import FashionProductsInfo from "./components/ProductsInfo/FashionProductsInfo";
import AllFashionProductsInfo from "./components/ProductsInfo/AllFashionProductsInfo";
import LoginPage from "./components/LoginPage";
import Toys from "./components/Products/Toys";
import Footware from "./components/Products/Footwear";
import Accessories from "./components/Products/Accessories";
import AccessoriesProductsInfo from "./components/ProductsInfo/AccessoriesProductsInfo";
import FootwearProductsInfo from "./components/ProductsInfo/FootwearProductsInfo";
import ToysProductsInfo from "./components/ProductsInfo/ToysProductsInfo";
import BeautyProducts from "./components/Products/BeautyProducts";
import BeautyProductsInfo from "./components/ProductsInfo/BeautyProductsInfo";


function App() {

  return (
    <div className="App">
      <Router>
        <HeaderComponent />
        <Routes>
          <Route path="/" element={<HomeComponent />}></Route>
          <Route path="/login" element={<LoginPage />}></Route>
          <Route path="/fashion" element={<FashionProducts />}></Route>
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
        </Routes>
      </Router>

    </div>
  );
}

export default App;
