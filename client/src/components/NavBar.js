import React/* , { useState } */ from 'react';
import { NavLink } from 'react-router-dom';

function NavBar({ links }) {
  return (
    <nav>
      <div>
        <NavLink
          to="/home">
          <h4>Monyok Construction Services!</h4>
        </NavLink>

        <div>
          <ul>
            {links.map((link, a, b) => (
              <li key={a}>
                <NavLink
                  key={b}
                  to={link.href}
                >{link.name}</NavLink>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default NavBar;