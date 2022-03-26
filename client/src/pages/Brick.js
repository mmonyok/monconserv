import React from 'react';
import { Container, ListGroup } from 'react-bootstrap';
import Carousel from '../components/Carousel';
import '../assets/styles/ServiceSections.css';

function importAll(r) {
  let images = {};
  r.keys().map((item, index) => { return images[item.replace('./', '')] = r(item); });
  return images;
}

const images = importAll(require.context('../assets/images/brick', false, /\.(png|jpe?g|svg)$/));

const data = [
  {
    image: images['capRepair1.jpg'],
    title: "Chimney Cap Repair",
    caption: "The brick on this chimney is in disrepair and the cap is broken."
  },
  {
    image: images['capRepair2.jpg'],
    title: "Chimney Cap Repair",
    caption: "A fresh, unbroken cap will help protect your house from stray sparks that come up and out the flue."
  },
  {
    image: images['chimneyRepair.jpg'],
    title: "Chimney Repair",
    caption: "An extended Chimney cap will increase the life of your chimney by helping to keep water from running down the side of the brick."
  },
  {
    image: images['paverPatio.jpg'],
    title: "Paver Patio",
    caption: "The ground is leveled and prepared with a layer of sand to ensure a level base for the pavers."
  },
  {
    image: images['brickSteps1.jpg'],
    title: "Rotten Steps",
    caption: "Using tuck-point we remove the broken bricks and replace them with fresh mortar."
  },
  {
    image: images['brickSteps2.jpg'],
    title: "Brick Steps Repair",
    caption: "Replacing bricks on steps is key to reduce possible injury from misstep."
  },
  {
    image: images['brickWall1.jpg'],
    title: "Bowling Alley Wall",
    caption: "The area is completely prepped and slathered with a type of mortar glue."
  },
  {
    image: images['brickWall2.jpg'],
    title: "Brick Veneer",
    caption: "Brick Veneer is carefully cut and mortered in to give the illusion of a full brick wall."
  },
  {
    image: images['glassBlock1.jpg'],
    title: "Glass Block Window",
    caption: "The window is sized to accomodate the full glass block dimensions."
  },
  {
    image: images['glassBlock2.jpg'],
    title: "Glass Block Window",
    caption: "Each block is mortarted in, resulting in a beautiful window for added muted lighting."
  }
];

export default function Brick() {
  const services1 = ["Chimney Repair", "Fireplace Repair", "General Brick Repair", "Tuck-Point Brick Repair"];
  const services2 = ["Paver Patios", "Glass Block Windows", "Brick Veneer"];
  return (
    <Container className="serviceContainer text">
      <section className="serviceSection text-center">
        <h1 className="fontBold mb-3 serviceTitle">Brick Repair</h1>
        <div className="serviceSubText text-start font">
          <h4>
            We are able to do the following brick repair projects:
          </h4>
        </div>
        <Container fluid className="listContainer justify-content-center">
          <ListGroup variant="flush" horizontal="sm" className="my-auto  text-center fontBold me-2 listGroup" id="groupE">
            {services1.map((item) => (
              <ListGroup.Item className="listItem text">{item}</ListGroup.Item>
            ))}
          </ListGroup>
          <ListGroup variant="flush" horizontal="sm" className="ms-2 fontBold text-center my-auto listGroup" id="groupF">
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