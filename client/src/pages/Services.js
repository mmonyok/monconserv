import React from 'react';
import { Container } from 'react-bootstrap';
import ServiceMain from '../components/ServiceMain';
// import Sidebar from '../components/Sidebar';
import '../assets/styles/ServiceSections.css';

const currentYear = new Date().getFullYear();
const year = currentYear - 1995;

export default function AllServices() {
  return (
      <Container className="serviceContainer">
        <section className="serviceSection">
          <h1 className="my-3 fontBold">Our Services</h1>
          <div className="text-center">
            <p>Located out of Jordan, MN & serving the Twin Cities - South/South West Metro Areas.</p>
            <p>We've been in business {year} years and are fully insured.</p>
          </div>
          <ServiceMain />
        </section>
      </Container>
  )
};