import React, { useState } from 'react';
import { Link, Outlet } from 'react-router-dom';
import { Container, Image, Nav } from 'react-bootstrap';
// All of our icons
import concreteIcon from '../assets/images/icons/concreteMixer.png';
import blockIcon from '../assets/images/icons/concreteBlock.png';
import brickIcon from '../assets/images/icons/brick.png';
import excavationIcon from '../assets/images/icons/bobcat.png';
import demolitionIcon from '../assets/images/icons/jackhammer.png';
import constructionIcon from '../assets/images/icons/constructionMan.png';
// Style Sheets
import '../assets/styles/ServiceLayout.css';

const sidebarNavs = [
  {
    name: "Main",
    href: "/services",
    src: constructionIcon,
    key: "20"
  },
  {
    name: "Concrete",
    href: "concrete",
    src: concreteIcon,
    key: "21"
  },
  {
    name: "Block",
    href: "block",
    src: blockIcon,
    key: "22"
  },
  {
    name: "Brick",
    href: "brick",
    src: brickIcon,
    key: "23"
  },
  {
    name: "Excavate",
    href: "excavation",
    src: excavationIcon,
    key: "24"
  },
  {
    name: "Demolish",
    href: "demolition",
    src: demolitionIcon,
    key: "25"
  },
];

function ServiceLayout() {
  let path = window.location.pathname;
  return (
    <Container fluid id="serviceLayout">
      <Nav
        activeKey="/services"
        id="sidebar">
        {sidebarNavs.map((nav, m) => (
          <Nav.Item
            className="sidebarNav text-center">
            <Nav.Link
              as={Link}
              className={`sideNavLink`}
              to={nav.href}
              eventKey={nav.key}>
              <Image
                fluid
                src={nav.src}
                className="sidebarIcons mx-auto" />
              <p className="text fontBold m-0 sidebarLinks">{nav.name}</p>
            </Nav.Link>
          </Nav.Item>
        ))}
      </Nav>
      <Outlet />
    </Container>
  )
};

export default ServiceLayout;