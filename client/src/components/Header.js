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
    href: "services",
    services: [
      {
        name: "Concrete",
        href: "services/concrete",
      },
      {
        name: "Block",
        href: "services/block",
      },
      {
        name: "Brick",
        href: "services/brick",
      },
      {
        name: "Excavation",
        href: "services/excavation",
      },
      {
        name: "Demolition",
        href: "services/demolition",
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
    <header className="contentContainer">
      <NavBar links={links} />
      {children}
    </header>
  );
};

export default Header;