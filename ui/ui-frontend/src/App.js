import './App.css';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import HeaderComponent from "./components/HeaderComponent.jsx"
import HomeComponent from './components/HomeComponent';

function App() {
  return (
    <div className="App">
      <Router>
        <HeaderComponent />
        <HomeComponent/>
      </Router >
    </div >
  );
}

export default App;
