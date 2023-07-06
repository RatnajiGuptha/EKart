import React, { useState } from "react";
import { FaSearch, FaHome, FaShoppingCart, FaUser, FaSignInAlt, FaTh, FaHeart } from "react-icons/fa";
import { Container, Navbar, Nav, NavDropdown } from "react-bootstrap";
import { useNavigate } from "react-router-dom";
import "../StyleSheets/Home.css";

function HeaderComponent() {
  const username = localStorage.getItem("name");
  const [search, setSearch] = useState("");
  const navigate = useNavigate();
  const handleSearch = (e) => {
    const { id, value } = e.target;
    if (id === "search") {
      setSearch(value);
    }
  };
  let firstWord = search.charAt(0).toUpperCase();
  let secondWord = search.slice(1);
  let newWord = firstWord + secondWord;
  console.log(newWord);
  newWord = newWord.replace(/ /g, "_");
  const displayResultsForSearch = () => {
    if (newWord === "Toys") {
      navigate(`/${newWord}`);
    } else if (
      newWord === "Flats" ||
      newWord === "Shoes" ||
      newWord === "FormalShoes" ||
      newWord === "Heels"
    ) {
      navigate(`/footwearBy/${newWord}`);
    } else if (
      newWord === "Mobiles" ||
      newWord === "Refrigerators" ||
      newWord === "Air_Conditioners" ||
      newWord === "Headphones" ||
      newWord === "Laptops" ||
      newWord === "TV" ||
      newWord === "Washing_Machines" ||
      newWord === "Appliances"
    ) {
      navigate(`/electronicsBy/${newWord}`);
    } else if (newWord === "Beauty") {
      navigate(`/beauty`);
    } else if (
      newWord === "Jewellery" ||
      newWord === "HandBags" ||
      newWord === "Watches" ||
      newWord === "Sunglasses"
    ) {
      navigate(`/accessoriesBy/${newWord}`);
    } else if (
      newWord === "KurthaSets" ||
      newWord === "Sarees" ||
      newWord === "Tshirt" ||
      newWord === "ActiveWear" ||
      newWord === "KidsWear" ||
      newWord === "JumpSuits"
    ) {
      navigate(`/fashionBy/suitablefor/Female/${newWord}`);
    } else if (
      newWord === "SportsWear" ||
      newWord === "Shirts" ||
      newWord === "Trousers" ||
      newWord === "Jeans" ||
      newWord === "EthnicWear" ||
      newWord === "Suits"
    ) {
      navigate(`/fashionBy/suitablefor/Male/${newWord}`);
    } else {
    }
    console.log(search);
  };
  const handleLogin = (e) => {
    navigate("/");
  };
  const handleLogout = () => {
    localStorage.clear();
  };

  return (
    <Navbar className="navbar navbar-dark bg-dark" expand="lg">
      <Container>
        <Navbar.Brand href="/"> E-Kart </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav " />

        <Navbar.Collapse id="basic-navbar-nav">

          <div className="search-bar">
            <form onSubmit={displayResultsForSearch}>
              <input type="text" placeholder="Search"
                id="search" value={search} onChange={(e) => handleSearch(e)} />
            </form>
            <FaSearch className="search-icon" onClick={displayResultsForSearch} />
          </div>

          <Container className="display-nav-links-container">
            <Nav>
              <Nav.Link href="/"> <FaHome className="icon" /> Home</Nav.Link>
              <NavDropdown title={<span> <FaTh className="icon" /> Categories </span>} id="basic-nav-dropdown" >
                <NavDropdown.Item href="/accessories"> Accessories </NavDropdown.Item>
                <NavDropdown.Item href="/beauty">Beauty</NavDropdown.Item>
                <NavDropdown.Item href="/electronics">  Electronics</NavDropdown.Item>
                <NavDropdown.Item href="/fashionBy/Male"> Men's Fashion</NavDropdown.Item>
                <NavDropdown.Item href="/fashionBy/Female">Women's Fashion</NavDropdown.Item>
                <NavDropdown.Item href="/footwear">Footwear</NavDropdown.Item>
                <NavDropdown.Item href="/electronicsBy/Appliances"> Appliances</NavDropdown.Item>
                <NavDropdown.Item href="/electronicsBy/Mobiles"> Mobiles</NavDropdown.Item>
                <NavDropdown.Item href="/toys">Toys</NavDropdown.Item>
                <NavDropdown.Item href="/fashionByType/KidsWear">Kidswear</NavDropdown.Item>
              </NavDropdown>
              <Nav.Link href="/wishList">{" "}<FaHeart className="icon1" /> WishList</Nav.Link>
              <Nav.Link href="/cart">{" "}<FaShoppingCart className="icon" /> Cart</Nav.Link>
              {localStorage.getItem("token") ?
                (<NavDropdown title={<span> <FaUser className="icon" /> {username}</span>} id="basic-nav-dropdown">
                  <NavDropdown.Item href="/profile">Profile</NavDropdown.Item>
                  <NavDropdown.Item href="/" onClick={handleLogout}>  Logout</NavDropdown.Item>
                </NavDropdown>) :
                (<Nav.Link href="/login" onClick={handleLogin}>  <FaSignInAlt className="icon" /> Login</Nav.Link>)}
            </Nav>
          </Container>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default HeaderComponent;
