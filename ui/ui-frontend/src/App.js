import './App.css';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import HeaderComponent from "./components/HeaderComponent.jsx"
import HomeComponent from './components/HomeComponent';
import ItemDetails from './components/ItemDetails';

function App() {
  return (
    <div className="App">
      <Router>
        <HeaderComponent />
        <HomeComponent/>
        {/* <ItemDetails/> */}
      </Router >
    </div >
  );
}

export default App;
