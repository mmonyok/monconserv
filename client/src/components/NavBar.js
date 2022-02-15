import React, { useState } from 'react';
import { Image, Nav, Navbar, NavDropdown } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import Contact from './Contact.js';
import LogIn from './LogIn.js';
import MCS from '../assets/images/MCS.svg';
import "../assets/styles/NavBar.css";

const links = [
  {
    name: "Home",
    href: "/home",
    key: "a"
  },
  {
    name: "About Us",
    href: "/about_us",
    key: "b"
  },
  {
    name: "Services",
    href: "/services",
    key: "c",
    services: [
      {
        name: "Concrete",
        href: "/services/concrete",
      },
      {
        name: "Block",
        href: "/services/block",
      },
      {
        name: "Brick",
        href: "/services/brick",
      },
      {
        name: "Excavation",
        href: "/services/excavation",
      },
      {
        name: "Demolition",
        href: "/services/demolition",
      }
    ]
  },
  /* {
    name: "Reviews",
    href: "/reviews",
    key: "e"
  }, */
  {
    name: "FAQs",
    href: "/faqs",
    key: "f"
  }
];

function NavBar(props) {
  const [showContact, setShowContact] = useState(false);
  const [showLogIn, setShowLogIn] = useState(false);
  const [toggleClass, setToggleClass] = useState(false);
  function toggleTrue() {
    setToggleClass(true)
  }
  function toggleFalse() {
    setToggleClass(false)
  }

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
        <Nav
          id="linkWrap"
          className="text">
          {links.map((link, a) => (
            (link.name === "Services" ?
              <>
                <NavDropdown
                  title={link.name}
                  href="#"
                  id="navDropdown"
                  className={`navLinks ${toggleClass ? 'active' : ''}`}>
                  <NavDropdown.Item
                    className="text fontBold"
                    eventKey="10"
                    as={Link}
                    to={link.href}
                    onClick={toggleTrue}>All Services</NavDropdown.Item>
                  <NavDropdown.Divider />
                  {link.services.map((service, b) => (
                    <NavDropdown.Item
                      eventKey={b}
                      className="text"
                      as={Link}
                      to={service.href}
                      onClick={toggleTrue}>{service.name}</NavDropdown.Item>
                  ))}
                </NavDropdown>
                <Nav.Link
                  as={Link}
                  to="#"
                  className="navLinks text"
                  onClick={() => setShowContact(true)}
                >Contact</Nav.Link>
              </>
              :
              <Nav.Link
                onClick={toggleFalse}
                eventKey={link.key}
                as={Link}
                to={link.href}
                className="navLinks text"
              >{link.name}
              </Nav.Link>
            )
          ))}
          {/* <Nav.Link
            as={Link}
            to="#"
            className="navLinks text"
            onClick={() => setShowLogIn(true)}
          >Log In</Nav.Link> */}
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