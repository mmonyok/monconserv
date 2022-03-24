import React from 'react';
import { Container } from 'react-bootstrap';
import Carousel from '../components/Carousel';
import '../assets/styles/ServiceSections.css';

function importAll(r) {
  let images = {};
  r.keys().map((item, index) => { images[item.replace('./', '')] = r(item); });
  return images;
}

const images = importAll(require.context('../assets/images/excavation', false, /\.(png|jpe?g|svg)$/));

const data = [
  {
    image: images['drainage1.jpg'],
    title: "Drainage Pipe",
    caption: "Sometimes a client's gutter drainage is not optimally set up, so we can assist with adjustments."
  },
  {
    image: images['drainage2.jpg'],
    title: "Drainage Pipe",
    caption: "We can even make a drain pipe go under a project such as a new sidewalk."
  },
  {
    image: images['skidSteer.jpg'],
    title: "Skid-Steer Loader",
    caption: "We use a skidsteer to help with demolition and excavation of small jobs."
  },
  {
    image: images['excavation.jpg'],
    title: "Excavation",
    caption: "With larger jobs we need to hire a sub-contractor to make sure to excavation meets the job's needs."
  },
  {
    image: images['excavation2.jpg'],
    title: "Sub-Contractors",
    caption: "We have a wide-variety of sub-contractors we trust and have used over the years."
  }
];

export default function Excavate() {
  return (
    <Container className="serviceContainer text">
      <section className="serviceSection text-center">
        <h1 className="fontBold mb-3 serviceTitle">Excavation</h1>
        <div className="serviceSubText text-start font">
          <h4>
            We will excavate for any small projects and can recommend sub-contractors for any larger ones.
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