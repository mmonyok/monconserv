import React from 'react';
import { Button, Container, ListGroup, OverlayTrigger, Popover } from 'react-bootstrap';
import Carousel from '../components/Carousel';
import '../assets/styles/ServiceSections.css';

function importAll(r) {
  let images = {};
  r.keys().map((item, index) => {images[item.replace('./', '')] = r(item); });
  return images;
}

const images = importAll(require.context('../assets/images/concrete', false, /\.(png|jpe?g|svg)$/));

const data = [
  {
    image: images['apron1.jpg'],
    title: "Garage Apron Repair",
    caption: "We cut out the damaged portion, fix any rotted foundation, and prep for the pour."
  },
  {
    image: images['apron2.jpg'],
    title: "Garage Apron Repair",
    caption: "New concrete is filled in and finished; we can add drainage, if desired."
  },
  {
    image: images['concretePad.jpg'],
    title: "Concrete Pad",
    caption: "We can make a concrete pad to suit any need."
  },
  {
    image: images['steps.jpeg'],
    title: "Concrete Stoop (Steps)",
    caption: "Whether it is for a new addition or an existing one, we'll make sure it meets your needs."
  },
  {
    image: images['sidewalk.jpg'],
    title: "Sidewalk",
    caption: "They can wrap around, be curved, have varying width, etc."
  },
  {
    image: images['patio.jpg'],
    title: "Fireplace Patio",
    caption: "This patio is exposed aggregate and has negative space to fit a fire pit."
  },
  {
    image: images['exposedAggregate.jpg'],
    title: "Exposed Aggregate",
    caption: "Most concrete pours can utilize exposed aggregate, if desired."
  },
  {
    image: images['footings.jpg'],
    title: "Concrete Footings",
    caption: "From additions to garages, we'll ensure you have the base to maintain structural integrity."
  }
];

export default function Concrete() {
  const services1 = ["Footings", "Driveways", "Aprons",
    "Floating Garage Slabs"];
  const services2 = ["Floors", "Patios", "Sidewalks", "Steps"];
  return (
    <Container className="serviceContainer text">
      <section className="serviceSection text-center">
        <h1 className="fontBold mb-3 serviceTitle">Concrete Work</h1>
        <div className="serviceSubText text-start font">
          <h4>
            We are able to do the following concrete projects:
          </h4>
        </div>
        <hr className="hr" />
        <Container fluid className="listContainer justify-content-center">
          <ListGroup horizontal="sm" className="my-auto  text-center font me-2 listGroup" id="groupA">
            {services1.map((item) => (
              <ListGroup.Item className="listItem text">{item}</ListGroup.Item>
            ))}
          </ListGroup>
          <ListGroup horizontal="sm" className="ms-2 font text-center my-auto listGroup" id="groupB">
            {services2.map((item) => (
              <ListGroup.Item className="listItem text">{item}</ListGroup.Item>
            ))}
          </ListGroup>
        </Container>
        <OverlayTrigger
          trigger="click"
          placement="bottom"
          overlay={
            <Popover id="popover-positioned-bottom">
              {/* <Popover.Header as="h3">Click each option for more info.</Popover.Header> */}
              <Popover.Body className="font text-center popoverBody">
                <ListGroup>
                  <ListGroup.Item className="popItem text">Colored Concrete</ListGroup.Item>
                  <ListGroup.Item className="popItem text">Exposed Aggregate Concrete</ListGroup.Item>
                  <ListGroup.Item className="popItem text">Fiber-Mesh Concrete</ListGroup.Item>
                </ListGroup>
              </Popover.Body>
            </Popover>
          }
        >
          <Button className="mx-auto mt-2" id="optionsBtn">Concrete Options</Button>
        </OverlayTrigger>
        <hr className="hr" />
        <Container className="mt-3">
          <Carousel serviceData={data} />
        </Container>
      </section>
    </Container>
  )
};