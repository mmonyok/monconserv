import React/* , { useState } */ from 'react';
// import { NavLink } from 'react-router-dom';
import { Container, Navbar, Nav, NavDropdown } from 'react-bootstrap';
import MCS from '../assets/images/MCS.svg';
import "../assets/styles/NavBar.css";

function NavBar({ links }) {
  return (
    <Navbar bg="light" expand="lg" sticky="top" className="d-flex flex-row" id="navbar">
      <Container>
        <Navbar.Brand href="#home">
          <img
            alt="MCS Logo"
            src={MCS}
            width="100"
          />
        </Navbar.Brand>
      </Container>
      <Container>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav" className="d-flex justify-content-around">
          <Nav>
            {links.map((link, a) => (
              (link.name === "Services" ?
                <NavDropdown title={link.name} id="basic-nav-dropdown">
                  <NavDropdown.Item href={link.href}>All Services</NavDropdown.Item>
                  <NavDropdown.Divider />
                  <NavDropdown.Item href="concrete">Concrete</NavDropdown.Item>
                  <NavDropdown.Item href="block">Block</NavDropdown.Item>
                  <NavDropdown.Item href="brick">Brick</NavDropdown.Item>
                  <NavDropdown.Item href="excavation">Excavation</NavDropdown.Item>
                  <NavDropdown.Item href="demolition">Demolition</NavDropdown.Item>
                </NavDropdown>
                :
                <Nav.Link
                  key={a}
                  href={link.href}
                >{link.name}
                </Nav.Link>
              )
            ))}
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default NavBar;