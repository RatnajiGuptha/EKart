import './App.css';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import HeaderComponent from "./components/HeaderComponent.jsx"
import HomeComponent from './components/HomeComponent';
// import LoginPage from './components/LoginPage';

function App() {
  return (
    <div className="App">
      <Router>
        <HeaderComponent />
        <HomeComponent />
        {/* <LoginPage/> */}
      </Router >
    </div >
  );
}

export default App;
