import React, { useEffect, useState } from "react";
// import {FaSearch} from "react-icons/fa";
import Container from "react-bootstrap/Container";
import Navbar from "react-bootstrap/Navbar";
import Nav from "react-bootstrap/Nav";
import NavDropdown from "react-bootstrap/NavDropdown";
import "../StyleSheets/Home.css";

function HeaderComponent() {
  const [search, setSearch] = useState("");
  const [isLogin, setIsLogin] = useState(false);

  const handleSearch = (e) => {
    setSearch(e.target.value);
  };

  const handleLogout = () => {
    localStorage.removeItem("username");
    localStorage.removeItem("token");
  };

  useEffect(() => {
    const token = localStorage.getItem("token");
    if (token) {
      setIsLogin(true);
    } else {
      setIsLogin(false);
    }
  });
  return (
    <Navbar className="navbar navbar-dark bg-dark">
      <Container>
        <Navbar.Brand href="/">E-Kart</Navbar.Brand>
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
            <Nav>
              <Nav.Link href="/"> Home</Nav.Link>
              <NavDropdown title="Categories" id="basic-nav-dropdown">
                <NavDropdown.Item href="/accessories">
                  Accessories
                </NavDropdown.Item>
                <NavDropdown.Item href="/beauty">Beauty</NavDropdown.Item>
                <NavDropdown.Item href="/electronics">
                  Electronics
                </NavDropdown.Item>
                <NavDropdown.Item href="/fashionBy/Male">
                  Men's Fashion
                </NavDropdown.Item>
                <NavDropdown.Item href="/fashionBy/Female">
                  Women's Fashion
                </NavDropdown.Item>
                <NavDropdown.Item href="/footwear">Footwear</NavDropdown.Item>
                <NavDropdown.Item href="/electronicsBy/Appliances">
                  Appliances
                </NavDropdown.Item>
                <NavDropdown.Item href="/electronicsBy/Mobiles">
                  Mobiles
                </NavDropdown.Item>
                <NavDropdown.Item href="/toys">Toys</NavDropdown.Item>
                <NavDropdown.Item href="/fashionByType/KidsWear">
                  Kidswear
                </NavDropdown.Item>
              </NavDropdown>
              <Nav.Link href="/cart">Cart</Nav.Link>
              <Nav.Link href="/help">Help</Nav.Link>
              {isLogin ? (
                <NavDropdown title="Profile" id="basic-nav-dropdown">
                  <NavDropdown.Item href="/AccountPage">
                    Profile
                  </NavDropdown.Item>
                  <NavDropdown.Item href="/address">
                    Manage Address
                  </NavDropdown.Item>
                  <NavDropdown.Item href="/wallet">Wallet</NavDropdown.Item>
                  <NavDropdown.Item href="/" onClick={handleLogout}>
                    Logout
                  </NavDropdown.Item>
                </NavDropdown>
              ) : (
                <Nav.Link href="/login">Login</Nav.Link>
              )}
            </Nav>
          </Container>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default HeaderComponent;
