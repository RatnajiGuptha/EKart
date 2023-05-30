import React, { useEffect, useState } from "react";
import { FaHome, FaUser, FaSignInAlt, FaTh } from "react-icons/fa";
import { Container, Navbar, Nav, NavDropdown } from "react-bootstrap";
import "../../StyleSheets/Home.css"
import { useNavigate } from "react-router-dom";

function HeaderComponent() {
    const username = localStorage.getItem('username');
    const [isLogin, setIsLogin] = useState(false);
    const navigate = useNavigate();

    const handleLogin = (e) => {
        navigate("/")
    }

    const handleLogout = () => {
        localStorage.clear();
    }

    useEffect(() => {
        const token = localStorage.getItem("token")
        if (token) {
            setIsLogin(true)
        }
        else {
            setIsLogin(false)
        }
    },[])

    return (
        <Navbar className="navbar navbar-dark bg-dark" expand="lg">
            <Container>
                <Navbar.Brand href="/"> E-Kart </Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav " />
                <Navbar.Collapse id="basic-navbar-nav">
                    <Container className="d-flex flex-row justify-content-end">
                        <Nav >
                            <Nav.Link href="/"><FaHome className="icon" /> Home</Nav.Link>
                            <NavDropdown title={<span><FaTh className="icon" /> Categories</span>} id="basic-nav-dropdown" >
                                <NavDropdown.Item href="listAccessoriesProducts">Accessories</NavDropdown.Item>
                                <NavDropdown.Item href="/listBeautyProducts">Beauty</NavDropdown.Item>
                                <NavDropdown.Item href="/listElectronicProducts">Electronics</NavDropdown.Item>
                                <NavDropdown.Item href="/listFootWearProducts">Footwear</NavDropdown.Item>
                                <NavDropdown.Item href="/listToysProducts">Toys</NavDropdown.Item>
                                <NavDropdown.Item href="/listFashionProducts">Fashion</NavDropdown.Item>
                            </NavDropdown>
                            {
                                isLogin ? <NavDropdown title={<span><FaUser className="icon" />{" "}{username}</span>} id="basic-nav-dropdown">
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
