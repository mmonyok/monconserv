import React/* , { useState } */ from 'react';
// import { NavLink } from 'react-router-dom';
import { Container, Navbar, Nav } from 'react-bootstrap';
import MCS from '../assets/images/MCS.svg';

function NavBar({ links }) {
  return (
    <Navbar bg="light" expand="lg">
      <Container>
        <Navbar.Brand href="#home">
          <img
            alt="MCS Logo"
            src={MCS}
            width="100"
            // height="100"
          />
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          {links.map((link, a) => (
            <Nav.Link
              key={a}
              href={link.href}
            >{link.name}</Nav.Link>
          ))}
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default NavBar;