import React from 'react';
import { Button, Container, Nav, Navbar } from 'react-bootstrap';
import { NavLink } from 'react-router-dom';
import Heropart from '../Heropart/Heropart';
import './NavBar.css';
const NavBar = () => {
    return (
        <div className="navbarDesign">
            <div className ="d-flex flex-wrap d-xs-block  justify-content-around">
                <p><i class="fas fa-phone-alt"></i> +2123548 98</p>
                <p><i class="fas fa-paper-plane"></i> tonniakhterbithi@gmail.com</p>
                <p>Open hours :Monday-Sunday 8.00AM-9.00PM</p>
            </div>
            <Navbar nav="dark" variant="dark" expand="lg" style={{ color: 'white'}}>
                <Container>
                    <Navbar.Brand href="#home">Feliciano</Navbar.Brand>
                    <Navbar.Toggle aria-controls="basic-navbar-nav" />
                    <Navbar.Collapse id="basic-navbar-nav">
                        <Nav className="ms-auto">
                            <NavLink to="/home">Home</NavLink>
                            <NavLink to="/about">About</NavLink>
                            <NavLink to="/menu">Menu</NavLink>
                            <NavLink to="/stories">Stories</NavLink>
                            <NavLink to="/contact">Contact</NavLink>
                            <Button to="booking"
                                style={{
                                    backgroundColor: '#C8A97E',
                                    border: 'none'
                                }}
                            >Book a table</Button>
                        </Nav>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
            <hr />
         <Heropart></Heropart>
        </div>
    );
};

export default NavBar;