import React from 'react';
import '../assets/styles/Footer.css';

const links = [
  {
    name: 'Facebook',
    class: '',
    icon: 'fab fa-facebook-square',
    website: 'https://www.facebook.com/MonyokConstructionServices'
  },
  {
    name: 'Thumbtack',
    class: 'thumbtack px-2 mx-2',
    icon: 'fas fa-thumbtack',
    website: 'https://www.thumbtack.com/mn/jordan/concrete-contractors/monyok-construction-services/service/77640534927090689'
  },
  {
    name: 'LinkedIn',
    class: '',
    icon: 'fab fa-linkedin',
    website: 'https://www.linkedin.com/in/joseph-monyok-79206223/'
  }
];

function Footer() {
  return (
    <footer className="text-center py-3">
      <ul className="d-inline-flex">
        {links.map((link, a, b, c) => (
          <li
            key={a}
            className={`links ${link.class}`}>
            <a
              className="text font"
              key={b}
              href={link.website}
              target="_blank"
              rel="noreferrer">
              <i className={`linkIcon me-2 ${link.icon} fa-2x`}>
              </i>{link.name}</a>
          </li>
        ))}
      </ul>
      <h5 className="fontBold text"><i className="far fa-copyright"></i> <sup>1995</sup> Monyok Construction Services</h5>
    </footer>
  )
};

export default Footer;