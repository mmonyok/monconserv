import React, { useState } from 'react';
import { Image, Nav, Navbar, NavDropdown } from 'react-bootstrap';
import Contact from './Contact.js';
import LogIn from './LogIn.js';
import MCS from '../assets/images/MCS.svg';
import "../assets/styles/NavBar.css";

function NavBar({ links }) {
  const [showContact, setShowContact] = useState(false);
  const [showLogIn, setShowLogIn] = useState(false);
  return (
    <Navbar collapseOnSelect sticky="top" expand="md" className="d-flex flex-row" id="navbar">
      <Navbar.Brand className="ms-5 py-1 flex-fill" id="navBrand" href="#home">
        <Image
          alt="MCS Logo"
          src={MCS}
          width="100"></Image>
      </Navbar.Brand>
      <Navbar.Toggle
        aria-controls="navToggle"
        className="me-3"
        id="toggler" />
      <Navbar.Collapse id="navToggle" className="justify-content-around font">
        <Nav id="linkWrap" className="text">
          {links.map((link, a) => (
            (link.name === "Services" ?
              <>
                <NavDropdown
                  title={link.name}
                  id="navDropdown"
                  className="navLinks">
                  <NavDropdown.Item className="text fontBold" href={link.href}>All Services</NavDropdown.Item>
                  <NavDropdown.Divider />
                  {link.services.map((service, b) => (
                    <NavDropdown.Item className="text" href={service.href}>{service.name}</NavDropdown.Item>
                  ))}
                </NavDropdown>
                <Nav.Link
                  key="z"
                  href="#"
                  className="navLinks text"
                  onClick={() => setShowContact(true)}
                >Contact</Nav.Link>
              </>
              :
              <Nav.Link
                key={a}
                href={link.href}
                className="navLinks text"
              >{link.name}
              </Nav.Link>
            )
          ))}
          <Nav.Link
            key="y"
            href="#"
            className="navLinks text"
            onClick={() => setShowLogIn(true)}
          >Log In</Nav.Link>
        </Nav>
        <Contact
          show={showContact}
          onHide={() => setShowContact(false)} />
        <LogIn
          show={showLogIn}
          onHide={() => setShowLogIn(false)} />
      </Navbar.Collapse>
    </Navbar>
  );
};

export default NavBar;