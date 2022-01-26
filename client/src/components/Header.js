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
    href: "services"
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