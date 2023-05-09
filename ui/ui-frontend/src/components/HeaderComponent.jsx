import React, { useState } from "react";
import {FaSearch} from "react-icons/fa";
import Container from "react-bootstrap/Container";
import Navbar from "react-bootstrap/Navbar";
import Nav from "react-bootstrap/Nav";
import NavDropdown from "react-bootstrap/NavDropdown";
import "../StyleSheets/Home.css"

function HeaderComponent() {
  const [search, setSearch] = useState("");

  const handleSearch = (e) => {
    setSearch(e.target.value);
  }
  return (
    <Navbar className="navbar navbar-dark bg-dark">
      <Navbar fixed="top" />
      <Container>
        <Navbar.Brand href="/">
          E-Kart
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav " />
        <Navbar.Collapse id="basic-navbar-nav">
          <Container className="search-bar">
            < input
              type="text"
              placeholder="Search"
              value={search}
              onChange={handleSearch}
            />
            <FaSearch className="search-icon" />
          </Container>
          <Container className="d-flex flex-row justify-content-end">
            <Nav >
              <Nav.Link href="/"> Home</Nav.Link>
              <NavDropdown title="Categories" id="basic-nav-dropdown">
                <NavDropdown.Item href="/">Accessories</NavDropdown.Item>
                <NavDropdown.Item href="/">Beauty</NavDropdown.Item>
                <NavDropdown.Item href="/">Electronics</NavDropdown.Item>
                <NavDropdown.Item href="/fashion">Fashion</NavDropdown.Item>
                <NavDropdown.Item href="/">Grocery</NavDropdown.Item>
                <NavDropdown.Item href="/">Appliances</NavDropdown.Item>
                <NavDropdown.Item href="/">Mobiles</NavDropdown.Item>
                <NavDropdown.Item href="/">Toys</NavDropdown.Item>
                <NavDropdown.Item href="/">Kids wear</NavDropdown.Item>
              </NavDropdown>
              <Nav.Link href="/">Cart</Nav.Link>
              <Nav.Link href="/">Help</Nav.Link>
              <Nav.Link href="/">Login</Nav.Link>
              {/* <Nav.Link href="/">Become a Seller</Nav.Link> */}
            </Nav>
          </Container>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}


export default HeaderComponent;
