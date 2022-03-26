import React from 'react';
import { Container } from 'react-bootstrap';
import Carousel from '../components/Carousel';
import '../assets/styles/ServiceSections.css';

function importAll(r) {
  let images = {};
  r.keys().map((item, index) => { return images[item.replace('./', '')] = r(item); });
  return images;
}

const images = importAll(require.context('../assets/images/demolition', false, /\.(png|jpe?g|svg)$/));

const data = [
  {
    image: images['demo1.jpg'],
    title: "Front Stoop Demolition",
    caption: "Want a new front stoop? We'll take care of removing the old one."
  },
  {
    image: images['demo2.jpg'],
    title: "Jack Hammer Demolition",
    caption: "Monyok Construction Services is a family business; Melody is working hard to chip away the stoop."
  },
  {
    image: images['demo3.jpg'],
    title: "Jack Hammer Demolition",
    caption: "We will also haul away any of the demoed debris, such as what Christy is working on here."
  },
  {
    image: images['demo4.jpg'],
    title: "Front Stoop Demolition",
    caption: "Sometimes larger pieces of concrete need to be wedged with wood for better leverage."
  },
  {
    image: images['demo5.jpg'],
    title: "Sidewalk Demolition",
    caption: "Often times we will break up concrete with a pry bar and sledge hammer."
  }
];

export default function Demolish() {
  return (
    <Container className="serviceContainer text">
      <section className="serviceSection text-center">
        <h1 className="fontBold mb-3 serviceTitle">Demolition</h1>
        <div className="serviceSubText text-start font">
          <h4>
            We are able to demolish your existing concrete structures, haul away the materials, and replace as needed.
          </h4>
        </div>
        <hr className="hr" />
        <Container className="mt-3">
          <Carousel serviceData={data} />
        </Container>
      </section>
    </Container>
  )
};