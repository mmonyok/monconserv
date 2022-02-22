import React from 'react';
import { Button, Container, ListGroup, OverlayTrigger, Popover } from 'react-bootstrap';
import Carousel from '../components/Carousel';
import '../assets/styles/ServiceSections.css';

function importAll(r) {
  let images = {};
  r.keys().map((item, index) => { images[item.replace('./', '')] = r(item); });
  return images;
}

const images = importAll(require.context('../assets/images/block', false, /\.(png|jpe?g|svg)$/));

const data = [
  {
    image: images['brickBlock.jpg'],
    title: "Wall Replacement",
    caption: "We removed a crumbling brick wall and replaced it with Rock-Faced block."
  },
  {
    image: images['garageFoundation.jpg'],
    title: "Foundation Walls",
    caption: "After excavation and poured footings, we start on building up the block foundation."
  },
  {
    image: images['windowWell.jpg'],
    title: "Window Wells",
    caption: "These look great with rock-face block."
  },
  {
    image: images['apron1.jpg'],
    title: "Rotten Block",
    caption: "Garage floors are at risk of collapse if rotted away too much like this one."
  },
  {
    image: images['apron2.jpg'],
    title: "Rotten Block",
    caption: "Blocks are cleaned out and formed to replace the block ledge that a concrete apron will sit on."
  },
  {
    image: images['wallRepair1.jpg'],
    title: "Garage Wall Repair",
    caption: "This wall of the garage will have to be excavated before repair can begin."
  },
  {
    image: images['wallRepair2.jpg'],
    title: "Garage Wall Repair",
    caption: "The area is excavated, wall removed, and prepped for repair."
  },
  {
    image: images['wall.jpg'],
    title: "Garage Wall Repair",
    caption: "Rebar is inserted for additional support, as we build up the wall."
  }
];

export default function Block() {
  const services1 = ["House Additions", "Garage Foundation", "Block Wall"];
  const services2 = ["Rotten Block Replacement", "Tuck-Point Block Wall", "Window Wells", "Retaining Walls"];
  return (
    <Container className="serviceContainer text">
      <section className="serviceSection text-center">
        <h1 className="fontBold mb-3 serviceTitle">Block Work</h1>
        <div className="serviceSubText text-start font">
          <h4>
            We are able to do the following block projects:
          </h4>
        </div>
        <hr className="hr" />
        <Container fluid className="listContainer justify-content-center">
          <ListGroup horizontal="sm" className="my-auto  text-center font me-2 listGroup" id="groupC">
            {services1.map((item) => (
              <ListGroup.Item className="listItem text">{item}</ListGroup.Item>
            ))}
          </ListGroup>
          <ListGroup horizontal="sm" className="ms-2 font text-center my-auto listGroup" id="groupD">
            {services2.map((item) => (
              <ListGroup.Item className="listItem text">{item}</ListGroup.Item>
            ))}
          </ListGroup>
        </Container>
        <hr className="hr" />
        <Container className="mt-3">
          <Carousel serviceData={data} />
        </Container>
      </section>
    </Container>
  )
};