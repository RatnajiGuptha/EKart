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

import FashionComponent from "./components/FashionComponent";
import FashionProductsByGenderAndTypeInfo from "./components/ProductsInfo/FashionProductsByGenderAndTypeInfo";
import FashionProductByGender from "./components/Products/FashionProductByGender";
import FashionProductsByGenderInfo from "./components/ProductsInfo/FashionProductsByGenderInfo";
import FashionProductByCategory from "./components/Products/FashionProductByCategory";
import FashionProductsInfo from "./components/ProductsInfo/FashionProductsInfo";
import FashionProductByGenderAndType from "./components/Products/FashionProductByGenderAndType";

import Footware from "./components/Products/Footwear";
import FootwearProductsInfo from "./components/ProductsInfo/FootwearProductsInfo";

import ToysProductsInfo from "./components/ProductsInfo/ToysProductsInfo";
import Toys from "./components/Products/Toys";

import HeaderComponent from "./components/HeaderComponent.jsx";
import HomeComponent from "../../ui-frontend/src/components/HomeComponent";

import LoginPage from "./components/SecurityModules/LoginPage";
import Registrationpage from "./components/SecurityModules/RegistrationPage";
import SellerRegistration from "./components/SecurityModules/SellerRegistration";
import SellerHeaderComponent from "./components/SellerModules/SellerHeaderComponent";

import AccessoriesByType from "./components/Products/AccessoriesByType";
import AccessoriesProductsByTpeInfo from "./components/ProductsInfo/AccessoriesProductsByTpeInfo";

import FootwearByType from "./components/Products/FootwearByType";
import FootwearProductsByTypeInfo from "./components/ProductsInfo/FootwearProductsByTpeInfo";

import CheckMark from "./components/OrdersModules/CheckMark";
import CheckoutComponent from "./components/OrdersModules/CheckoutComponent";
import CartComponent from "./components/OrdersModules/CartComponent";

import AddFashionModule from "./components/SellerModules/AddFashionModule";
import AddAccessoriesModule from "./components/SellerModules/AddAccessoriesModule";
import AddBeautyModule from "./components/SellerModules/AddBeautyModule";
import AddElectronicsModule from "./components/SellerModules/AddElectronicsModule";
import AddFootWearModule from "./components/SellerModules/AddFootWearModule";
import AddToysProducts from "./components/SellerModules/AddToysProducts";
import ListFashionDetails from "./components/SellerModules/ListFashionDetails";
import ListAccessoriesDetails from "./components/SellerModules/ListAccessoriesDetails";
import ListBeautyDetails from "./components/SellerModules/ListBeautyDetails";
import ListElectronicsDetails from "./components/SellerModules/ListElectronicsDetails";
import ListFootWearDetails from "./components/SellerModules/ListFootWearDetails";
import ListToysDetails from "./components/SellerModules/ListToysDetails"
import SellerHomeCategories from "./components/SellerModules/SellerHomeCategories";

import AccountPage from "./components/UserModules/AccountPage";

function App() {

  const role = localStorage.getItem('role');
  const header = role === "SELLER" ? <SellerHeaderComponent forceRefresh={true} /> : <HeaderComponent forceRefresh={true} />
  const home = role === "SELLER" ? <SellerHomeCategories forceRefresh={true} /> : <HomeComponent forceRefresh={true} />

  return (
    <div className="App">
      <Router>
        {/* <HeaderComponent /> */}
        {header}
        <Routes>
          <Route path="/" element={home} ></Route>
          {/* <Route path="/" element={<HomeComponent />} ></Route> */}

          {/* security  */}
          <Route path="/login" element={<LoginPage />}></Route>
          <Route path='/registration' element={<Registrationpage />}></Route>
          <Route path="/addSeller" element={<SellerRegistration />}></Route>

          {/* cart  */}
          <Route path="/cart" element={<CartComponent />}></Route>
          <Route path="/paymentPage/:userName" element={<CheckoutComponent />}></Route>

          {/* fashion products  */}
          <Route path="/fashion" element={<FashionComponent />}></Route>
          <Route path="/fashionBy/:suitablefor" element={<FashionProductByGender />}></Route>
          <Route path="/fashionBy/:suitablefor/:productId" element={<FashionProductsByGenderInfo />}></Route>
          <Route path="/fashionByType/:type" element={<FashionProductByCategory />}></Route>
          <Route path="/fashion/:type/:productId" element={<FashionProductsInfo />}></Route>
          <Route path="/fashionBy/suitablefor/:suitablefor/:type" element={<FashionProductByGenderAndType />}></Route>
          <Route path="/fashionBy/suitablefor/:suitablefor/:type/id/:productId" element={<FashionProductsByGenderAndTypeInfo />}></Route>

          {/* toys products  */}
          <Route path="/toys" element={<Toys />}></Route>
          <Route path="/toys/:toyId" element={<ToysProductsInfo />}></Route>

          {/* footwear products  */}
          <Route path="/footwear" element={<Footware />}></Route>
          <Route path="/footwear/:footWearId" element={<FootwearProductsInfo />}></Route>
          <Route path="/footwearBy/:type" element={<FootwearByType />}></Route>
          <Route path="/footwearBy/:type/:footWearId" element={<FootwearProductsByTypeInfo />}></Route>

          {/* accessories Products */}
          <Route path="/accessories" element={<Accessories />}></Route>
          <Route path="/accessories/:accessoryId" element={<AccessoriesProductsInfo />}></Route>
          <Route path="/accessoriesBy/:type" element={<AccessoriesByType />}></Route>
          <Route path="/accessoriesBy/:type/:accessoryId" element={<AccessoriesProductsByTpeInfo />}></Route>

          {/* beauty products  */}
          <Route path="/beauty" element={<BeautyProducts />}></Route>
          <Route path="/beauty/:beautyId" element={<BeautyProductsInfo />}></Route>

          {/* electronics products  */}
          <Route path="/electronics" element={<ElectronicsProducts />}></Route>
          <Route path="/electronics/:electronicsId" element={<ElectronicsProductsInfo />}></Route>
          <Route path="/electronicsBy/:type" element={<ElectronicProductsByCategory />}></Route>
          <Route path="/electronicsBy/:type/:electronicsId" element={<ElectronicsProductsByTpeInfo />}></Route>

          {/* list seller products seller routes */}
          <Route path="/listFashionProducts" element={<ListFashionDetails />}></Route>
          <Route path="/listAccessoriesProducts" element={<ListAccessoriesDetails />}></Route>
          <Route path="/listBeautyProducts" element={<ListBeautyDetails />}></Route>
          <Route path="/listElectronicProducts" element={<ListElectronicsDetails />}></Route>
          <Route path="/listFootWearProducts" element={<ListFootWearDetails />}></Route>
          <Route path="/listToysProducts" element={<ListToysDetails />}></Route>

          {/* add products seller routes */}
          <Route path="/addAccessories" element={<AddAccessoriesModule />}></Route>
          <Route path="/addBeauty" element={<AddBeautyModule />}></Route>
          <Route path="/addElectronics" element={<AddElectronicsModule />}></Route>
          <Route path="/addFootWear" element={<AddFootWearModule />}></Route>
          <Route path="/addToys" element={<AddToysProducts />}></Route>
          <Route path="/addFashion" element={<AddFashionModule />}></Route>

          {/* update products seller routes */}
          <Route path="/updateFashion/:fashionId" element={<AddFashionModule />}></Route>
          <Route path="/updateAccessories/:accessoryId" element={<AddAccessoriesModule />}></Route>
          <Route path="/updateBeauty/:beautyId" element={<AddBeautyModule />}></Route>
          <Route path="/updateElectronics/:electronicsId" element={<AddElectronicsModule />}></Route>
          <Route path="/updateFootwear/:footWearId" element={<AddFootWearModule />}></Route>
          <Route path="/updateToys/:toyId" element={<AddToysProducts />}></Route>

          {/* seller home page routes */}
          <Route path="/sellerFashion" element={<SellerHomeCategories />}></Route>

          <Route path="/profile" element={<AccountPage />}></Route>
          <Route path="/profile/:type" element={<AccountPage />}></Route>
          <Route path="/orderStatus/:id" element={<CheckMark />}></Route>
        </Routes >
      </Router >
    </div >
  );
}

export default App;
