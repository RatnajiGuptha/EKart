import React, { Component } from "react";
import Container from "react-bootstrap/Container";
import Navbar from "react-bootstrap/Navbar";
import Nav from "react-bootstrap/Nav";
import NavDropdown from "react-bootstrap/NavDropdown";
import Form from "react-bootstrap/Form";

class headerComponent extends Component {
  render() {
    return (
      <Navbar className="navbar navbar-dark bg-dark">
        <Navbar fixed="top" />
        <Container>
          <Navbar.Brand href="/" className="m-auto">
            E-Kart
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Container>
              <Form className="d-flex">
                <Form.Control
                  type="search"
                  placeholder="Search"
                  className="m-auto text-dark w-75 "
                  aria-label="Search"
                />
              </Form>
            </Container>
            <Container>
              <Nav className="m-auto">
                <Nav.Link href="/"> Home</Nav.Link>
                <NavDropdown title="Categories" id="basic-nav-dropdown">
                  <NavDropdown.Item href="/">Accessories</NavDropdown.Item>
                  <NavDropdown.Item href="/">Beauty</NavDropdown.Item>
                  <NavDropdown.Item href="/">Electronics</NavDropdown.Item>
                  <NavDropdown.Item href="/">Fashion</NavDropdown.Item>
                  <NavDropdown.Item href="/">Grocery</NavDropdown.Item>
                  <NavDropdown.Item href="/">Appliances</NavDropdown.Item>
                  <NavDropdown.Item href="/">Mobiles</NavDropdown.Item>
                  <NavDropdown.Item href="/">Toys</NavDropdown.Item>
                  <NavDropdown.Item href="/">Kids wear</NavDropdown.Item>
                </NavDropdown>
                <Nav.Link href="/">Help</Nav.Link>
                <Nav.Link href="/">Login</Nav.Link>
                <Nav.Link href="/">Become a Seller</Nav.Link>
              </Nav>
            </Container>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    );
  }
}

export default headerComponent;
