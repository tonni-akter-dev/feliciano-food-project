import React from 'react';
import { Button, Container, Nav, Navbar } from 'react-bootstrap';
import { NavLink } from 'react-router-dom';
import useCart from '../../context/useCart';
import Heropart from '../Heropart/Heropart';
import './NavBar.css';
const NavBar = () => {
    const{allFoodQuantity}=useCart();
    return (
        <div className="navbarDesign">
            <div className="d-flex flex-wrap d-xs-block  justify-content-around">
                <p><i class="fas fa-phone-alt"></i> +2123548 98</p>
                <p><i class="fas fa-paper-plane"></i> tonniakhterbithi@gmail.com</p>
                <p>Open hours :Monday-Sunday 8.00AM-9.00PM</p>
            </div>
            <Navbar nav="dark" variant="dark" expand="lg" style={{ color: 'white' }}>
                <Container>
                    <Navbar.Brand href="#home">Feliciano</Navbar.Brand>
                    <Navbar.Toggle aria-controls="basic-navbar-nav" />
                    <Navbar.Collapse id="basic-navbar-nav">
                        <Nav className="mx-auto">
                            <NavLink className="navDesign" to="/home">Home</NavLink>
                            <NavLink className="navDesign" to="/about">About</NavLink>
                            <NavLink className="navDesign" to="/menu">Menu</NavLink>
                            <NavLink className="navDesign" to="/stories">Stories</NavLink>
                            <NavLink className="navDesign" to="/contact">Contact</NavLink>
                        </Nav>
                    </Navbar.Collapse>
                    <NavLink className="btn btn-outline-warning" to="/booking">Book a table</NavLink>
                    <NavLink className=" ms-2 btn btn-outline-warning" to="/login">Login for order</NavLink>
                   <NavLink to="/login">
<NavLink to="/orderReview" type="button" class="btn position-relative"><i style={{color:'goldenrod'}} class="fas fa-shopping-cart"></i>
  <span className="position-absolute top-0 start-100 translate-middle badge rounded-pill bg-dark">
  {allFoodQuantity}<span class="visually-hidden">unread messages</span>
  </span>
</NavLink>
</NavLink>
 </Container>
            </Navbar>
            <hr />
            <Heropart></Heropart>
        </div>
    );
};

export default NavBar;