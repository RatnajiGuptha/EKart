import './App.css';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import HeaderComponent from "./components/HeaderComponent.jsx"
import HomeComponent from './components/HomeComponent';
<<<<<<< HEAD
import ItemDetails from './components/ItemDetails';
=======
// import LoginPage from './components/LoginPage';
>>>>>>> 6be996ab1dde0bd3ccb4772fc04f93cf666491af

function App() {
  return (
    <div className="App">
      <Router>
        <HeaderComponent />
<<<<<<< HEAD
        <HomeComponent/>
        {/* <ItemDetails/> */}
=======
        <HomeComponent />
        {/* <LoginPage/> */}
>>>>>>> 6be996ab1dde0bd3ccb4772fc04f93cf666491af
      </Router >
    </div >
  );
}

export default App;
