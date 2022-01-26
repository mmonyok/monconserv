import React, { useState } from 'react';
import { Container, Navbar, Nav, NavDropdown } from 'react-bootstrap';
import Contact from './Contact.js';
import LogIn from './LogIn.js';
import MCS from '../assets/images/MCS.svg';
import "../assets/styles/NavBar.css";

function NavBar({ links }) {
  const [modalShow, setModalShow] = useState(false);
  const [showLogIn, setShowLogIn] = useState(false);
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
                <>
                  <NavDropdown title={link.name} id="basic-nav-dropdown">
                    <NavDropdown.Item href={link.href}>All Services</NavDropdown.Item>
                    <NavDropdown.Divider />
                    <NavDropdown.Item href="concrete">Concrete</NavDropdown.Item>
                    <NavDropdown.Item href="block">Block</NavDropdown.Item>
                    <NavDropdown.Item href="brick">Brick</NavDropdown.Item>
                    <NavDropdown.Item href="excavation">Excavation</NavDropdown.Item>
                    <NavDropdown.Item href="demolition">Demolition</NavDropdown.Item>
                  </NavDropdown>
                  <Nav.Link
                    key="z"
                    href="#"
                    onClick={() => setModalShow(true)}
                  >Contact</Nav.Link>
                </>
                :
                <Nav.Link
                  key={a}
                  href={link.href}
                >{link.name}
                </Nav.Link>
              )
            ))}
            <Nav.Link
              key="y"
              href="#"
              onClick={() => setShowLogIn(true)}
            >Log In</Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
      <Contact
        show={modalShow}
        onHide={() => setModalShow(false)} />
        <LogIn
        show={showLogIn}
        onHide={() => setShowLogIn(false)} />
    </Navbar>
  );
};

export default NavBar;