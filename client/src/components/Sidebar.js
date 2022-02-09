import React from 'react';
import concreteIcon from '../assets/images/icons/concreteMixer.png';
import blockIcon from '../assets/images/icons/concreteBlock.png';
import brickIcon from '../assets/images/icons/brick.png';
import excavationIcon from '../assets/images/icons/bobcat.png';
import demolitionIcon from '../assets/images/icons/jackhammer.png';
import constructionIcon from '../assets/images/icons/constructionMan.png';
import { Image, Nav } from 'react-bootstrap';
import '../assets/styles/Sidebar.css';

const sidebarNavs = [
  {
    name: "Main",
    href: "/services",
    src: constructionIcon
  },
  {
    name: "Concrete",
    href: "/concrete",
    src: concreteIcon
  },
  {
    name: "Block",
    href: "/block",
    src: blockIcon
  },
  {
    name: "Brick",
    href: "/brick",
    src: brickIcon
  },
  {
    name: "Excavate",
    href: "/excavation",
    src: excavationIcon
  },
  {
    name: "Demolish",
    href: "/demolition",
    src: demolitionIcon
  },
];

export default function Sidebar() {
  return (
    <section id="sidebarWrapper">
      <Nav
        activeKey="/services"
        as="ul"
        className="fontBold justify-content-center my-auto"
        id="sidebar">
        {sidebarNavs.map((nav, a) => (
          <Nav.Item className="sidebarNav text-center" as="li">
            <a href={nav.href}>
              <Image
                fluid
                src={nav.src}
                className="sidebarIcons mx-auto" />
              <Nav.Link className="sidebarLinks" href={nav.href}>{nav.name}</Nav.Link>
            </a>
          </Nav.Item>
        ))}
      </Nav>
      <hr id="hr" />
    </section>
  )
};