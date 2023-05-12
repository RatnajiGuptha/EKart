import "./App.css";
import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
import HeaderComponent from "./components/HeaderComponent.jsx";
import HomeComponent from "../../ui-frontend/src/components/HomeComponent"
import FashionProducts from "./components/Products/FashionProducts";
import FashionProductByCategory from "./components/Products/FashionProductByCategory";
import FashionProductsInfo from "./components/Products/FashionProductsInfo";
import AllFashionProductsInfo from "./components/Products/AllFashionProductsInfo";
import LoginPage from "./components/LoginPage";


function App() {

  return (
    <div className="App">
      <Router>
        <HeaderComponent />
        <Routes>
          <Route path="/" element={<HomeComponent />}></Route>
          <Route path="/fashion" element={<FashionProducts />}></Route>
          <Route path="/fashion/:productId" element={<AllFashionProductsInfo />}></Route>
          <Route path="/fashionByType/:type" element={<FashionProductByCategory />}></Route>
          <Route path="/fashion/:type/:productId" element={<FashionProductsInfo />}></Route>
          <Route path="/login" element={<LoginPage />}></Route>
        </Routes>
      </Router>

    </div>
  );
}

export default App;
