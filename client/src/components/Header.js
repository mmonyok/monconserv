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
  },
  {
    name: "Useful Links",
    href: "useful_links"
  }
]

function Header() {
  return (
    <header>
      <NavBar links={links} />
      {/* insert children here */}
    </header>
  );
};

export default Header;