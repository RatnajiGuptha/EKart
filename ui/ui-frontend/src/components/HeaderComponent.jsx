import React, { useEffect, useState } from "react";
// import {FaSearch} from "react-icons/fa";
import Container from "react-bootstrap/Container";
import Navbar from "react-bootstrap/Navbar";
import Nav from "react-bootstrap/Nav";
import NavDropdown from "react-bootstrap/NavDropdown";
import "../StyleSheets/Home.css"
import { useNavigate } from "react-router-dom";

function HeaderComponent() {
  const [search, setSearch] = useState("");
  const [isLogin, setIsLogin] = useState(false);
  const navigate = useNavigate();

  const username = localStorage.getItem('username');

  const handleSearch = (e) => {
    setSearch(e.target.value);
  }
  const handleLogin = (e) => {
    navigate("/")
  }

  const handleLogout = () => {
    localStorage.removeItem('username');
    localStorage.removeItem('token');
  }

  useEffect(() => {
    const token = localStorage.getItem("token")
    if (token) {
      setIsLogin(true)
    }
    else {
      setIsLogin(false)
    }

  })
  return (
    <Navbar className="navbar navbar-dark bg-dark">
      <Container>
        <Navbar.Brand href="/">
          E-Kart
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav " />
        <Navbar.Collapse id="basic-navbar-nav">
          {/* <Container className="search-bar">
            < input
              type="text"
              placeholder="Search"
              value={search}
              onChange={handleSearch}
            />
            <FaSearch className="search-icon" />
          </Container> */}
          <Container className="d-flex flex-row justify-content-end">
            <Nav >
              <Nav.Link href="/"> Home</Nav.Link>
              <NavDropdown title="Categories" id="basic-nav-dropdown">
                <NavDropdown.Item href="/accessories">Accessories</NavDropdown.Item>
                <NavDropdown.Item href="/beauty">Beauty</NavDropdown.Item>
                <NavDropdown.Item href="/electronics">Electronics</NavDropdown.Item>
                <NavDropdown.Item href="/fashionBy/Male">Men's Fashion</NavDropdown.Item>
                <NavDropdown.Item href="/fashionBy/Female">Women's Fashion</NavDropdown.Item>
                <NavDropdown.Item href="/footwear">Footwear</NavDropdown.Item>
                <NavDropdown.Item href="/electronicsBy/Appliances">Appliances</NavDropdown.Item>
                <NavDropdown.Item href="/electronicsBy/Mobiles">Mobiles</NavDropdown.Item>
                <NavDropdown.Item href="/toys">Toys</NavDropdown.Item>
                <NavDropdown.Item href="/fashionByType/KidsWear">Kidswear</NavDropdown.Item>
              </NavDropdown>
              <Nav.Link href="/cart">Cart</Nav.Link>
              {
                isLogin ? <NavDropdown title={`${username}`} id="basic-nav-dropdown">
                  <svg xmlns="http://www.w3.org/2000/svg" fill="currentColor" className="bi bi-person-circle profile-logo" viewBox="0 0 16 16">
                    <path d="M11 6a3 3 0 1 1-6 0 3 3 0 0 1 6 0z" />
                    <path fill-rule="evenodd" d="M0 8a8 8 0 1 1 16 0A8 8 0 0 1 0 8zm8-7a7 7 0 0 0-5.468 11.37C3.242 11.226 4.805 10 8 10s4.757 1.225 5.468 2.37A7 7 0 0 0 8 1z" />
                  </svg>
                  <NavDropdown.Item href="/" onClick={handleLogout}>Logout</NavDropdown.Item></NavDropdown>

                  : <Nav.Link href="/login" onClick={handleLogin}>Login</Nav.Link>}
            </Nav>
          </Container>
        </Navbar.Collapse>
      </Container>
    </Navbar>

  );
}


export default HeaderComponent;
