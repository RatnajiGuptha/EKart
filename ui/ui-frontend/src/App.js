import "./App.css";
import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
import HeaderComponent from "./components/HeaderComponent.jsx";
import HomeComponent from "./components/HomeComponent";
import Products from "./components/Products/Products";
import ProductsByTypeComponent from "./components/Products/ProductsByTypeComponent";


function App() {

  return (
    <div className="App">
      <Router>
        <HeaderComponent />
        {/* <HomeComponent /> */}
        <Routes>
          <Route path="/" element={<HomeComponent />}></Route>
          <Route path="/fashion" element={<Products />}></Route>
          <Route path="/fashionByType" element={<ProductsByTypeComponent />}></Route>
        </Routes>

      </Router>
    
    </div>
  );
}

export default App;
