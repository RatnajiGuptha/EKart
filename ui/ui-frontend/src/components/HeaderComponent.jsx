
import React, { useState } from "react";
import { FaSearch, FaHome, FaShoppingCart, FaUser, FaSignInAlt, FaTh } from "react-icons/fa";
import { Container, Navbar, Nav, NavDropdown } from "react-bootstrap";
import "../StyleSheets/Home.css"
import { useNavigate } from "react-router-dom";

function HeaderComponent() {

  const username = localStorage.getItem('username');
  const [search, setSearch] = useState("");
  const navigate = useNavigate();

  const handleSearch = (e) => {
    setSearch(e.target.value);
  }
  const handleLogin = (e) => {
    navigate("/")
  }

  const handleLogout = () => {
    localStorage.clear();
  }


  return (
    <Navbar className="navbar navbar-dark bg-dark" expand="lg">
      <Container>
        <Navbar.Brand href="/"> E-Kart </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav " />
        <Navbar.Collapse id="basic-navbar-nav">
          <Container className="search-bar">
            < input type="text"
              placeholder="Search"
              value={search}
              onChange={handleSearch} />
            <FaSearch className="search-icon" />
          </Container>
          <Container className="d-flex flex-row justify-content-end">
            <Nav >
              <Nav.Link href="/"><FaHome className="icon" /> Home</Nav.Link>
              <NavDropdown title={<span><FaTh className="icon" /> Categories</span>} id="basic-nav-dropdown" >
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
              <Nav.Link href="/cart"> <FaShoppingCart className="icon" /> Cart</Nav.Link>
              {
                localStorage.getItem("token") ? <NavDropdown title={<span><FaUser className="icon" />{" "}{username}</span>} id="basic-nav-dropdown">
                  <NavDropdown.Item href="/profile" >Profile</NavDropdown.Item>
                  <NavDropdown.Item href="/" onClick={handleLogout}>Logout</NavDropdown.Item></NavDropdown>
                  : <Nav.Link href="/login" onClick={handleLogin}><FaSignInAlt className="icon" />{" "} Login</Nav.Link>}
            </Nav>
          </Container>
        </Navbar.Collapse>
      </Container>
    </Navbar>

  );
}


export default HeaderComponent;
