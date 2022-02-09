import React from 'react';
import ServiceMain from '../components/ServiceMain';
import { Container, Image } from 'react-bootstrap';
import logo from '../assets/images/monconserv.png';
import '../assets/styles/Home.css';

export default function Home(props) {
  return (
    <section>
      <Container className="font text">
        <div className='text-center'>
          <Image
            fluid
            src={logo}></Image>
          <hr />
          <h1 className="fontBold">Welcome!</h1>
          <p>
            We are a family owned and locally operated Concrete and Masonry business. Take a look around to find out a little bit more about us and what we can do for you.
          </p>
        </div>
        <div className="mt-5">
          <h2 className="fontBold">WHAT WE <span className="blueSpan">DO</span></h2>
          <p className="text-center mb-5">From block foundations and footings for house foundations to chimney repair. We have you covered for all your concrete and masonry needs.</p>
          <ServiceMain />
        </div >
      </Container >
    </section>
  );
};