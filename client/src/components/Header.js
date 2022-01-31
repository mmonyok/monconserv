import React from "react";
import NavBar from './NavBar';

function Header({ children }) {
  return (
    <header className="contentContainer">
      <NavBar />
      {children}
    </header>
  );
};

export default Header;