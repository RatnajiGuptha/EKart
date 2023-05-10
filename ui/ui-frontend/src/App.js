import "./App.css";
import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
import HeaderComponent from "./components/HeaderComponent.jsx";
import HomeComponent from "./components/HomeComponent";
import Products from "./components/Products/Products";
<<<<<<< HEAD
import ProductsByTypeComponent from "./components/Products/ProductsByTypeComponent";
=======
import ProductsInfo from "./components/Products/ProductsInfo";
>>>>>>> a9528e09e0685cff907cc7b3f05920d779a8065a


function App() {

  return (
    <div className="App">
      <Router>
        <HeaderComponent />
        {/* <HomeComponent /> */}
        <Routes>
          <Route path="/" element={<HomeComponent />}></Route>
          <Route path="/fashion" element={<Products />}></Route>
<<<<<<< HEAD
          <Route path="/fashionByType" element={<ProductsByTypeComponent />}></Route>
=======
          <Route path="/fashion/:productId" element={<ProductsInfo />}></Route>
>>>>>>> a9528e09e0685cff907cc7b3f05920d779a8065a
        </Routes>

      </Router>
    
    </div>
  );
}

export default App;
