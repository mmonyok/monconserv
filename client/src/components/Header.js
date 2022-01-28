import React from "react";
import NavBar from './NavBar';

const links = [
  {
    name: "Home",
    href: "home"
  },
  {
    name: "About Us",
    href: "about_us"
  },
  {
    name: "Services",
    services: [
      {
        name: "Concrete",
        href: "concrete",
      },
      {
        name: "Block",
        href: "block",
      },
      {
        name: "Brick",
        href: "brick",
      },
      {
        name: "Excavation",
        href: "excavation",
      },
      {
        name: "Demolition",
        href: "demolition",
      }
    ] 
  },
  {
    name: "Reviews",
    href: "reviews"
  },
  {
    name: "FAQs",
    href: "faqs"
  }
];

function Header({ children }) {
  return (
    <header>
      <NavBar links={links} />
      {children}
    </header>
  );
};

export default Header;