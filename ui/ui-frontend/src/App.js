import "./App.css";
import { BrowserRouter as Router } from "react-router-dom";
import HeaderComponent from "./components/HeaderComponent.jsx";
import HomeComponent from "./components/HomeComponent";
import Products from "./components/Products/Products";


function App() {

  return (
    <div className="App">
      <Router exact path="/">
        <HeaderComponent />
        <HomeComponent />
        <Products/>
      </Router>
    </div>
  );
}

export default App;
