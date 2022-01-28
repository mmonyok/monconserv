import React from 'react';
import { Nav } from 'react-bootstrap';

export default function Sidebar() {
  return (
    <>
      <Nav
        activeKey="/services"
        as="us"
        className="flex-column">
          <Nav.Item as="li">
            <Nav.Link href="/services">All Services</Nav.Link>
          </Nav.Item>
          <Nav.Item as="li">
            <Nav.Link href="/concrete">Concrete</Nav.Link>
          </Nav.Item>
      </Nav>
    </>
  )
};