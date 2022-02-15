import React from 'react';
import Sidebar from '../components/Sidebar';
import { Button, Container, ListGroup, OverlayTrigger, Popover } from 'react-bootstrap';
import Carousel from '../components/Carousel';
import stoop1 from '../assets/images/concrete/stoop1.jpg';
import stoop2 from '../assets/images/concrete/stoop2.jpg';
import stoop3 from '../assets/images/concrete/stoop3.jpg';
import '../assets/styles/ServiceSections.css';

const data = [
  {
    image: stoop1,
    title: "Concrete Stoop",
    caption: "This is a caption."
  },
  {
    image: stoop2,
    title: "Concrete Stoop",
    caption: "This is a caption."
  },
  {
    image: stoop3,
    title: "Concrete Stoop",
    caption: "This is a caption."
  },
];

export default function Concrete() {
  const services1 = ["Footings", "Driveways", "Aprons",
    "Floating Garage Slabs"];
  const services2 = ["Floors", "Patios", "Sidewalks", "Steps"];
  let path = window.location.pathname;
  return (
    <Container fluid className="serviceContainer text font">
      <Sidebar urlPath={path} />
      <main className="d-inline-flex flex-row">
        <div className="divider" />
        <section className="serviceSection text-center">
          <h1 className="fontBold mb-3 serviceTitle">Concrete Work</h1>
          <div className="text-center">
            <p>
              We are able to do the following concrete projects:
            </p>
          </div>
          <hr />
          <Container fluid className="listContainer">
            <ListGroup horizontal="sm" className="mx-auto mb-2 text-center">
              {services1.map((item) => (
                <ListGroup.Item className="listItem">{item}</ListGroup.Item>
              ))}
            </ListGroup>
            <ListGroup horizontal="sm" className="text-center mx-auto mb-2">
              {services2.map((item) => (
                <ListGroup.Item className="listItem">{item}</ListGroup.Item>
              ))}
            </ListGroup>
          </Container>
          <OverlayTrigger
            trigger="click"
            placement="bottom"
            overlay={
              <Popover id="popover-positioned-bottom">
                <Popover.Header as="h3">Click each option for more info.</Popover.Header>
                <Popover.Body>
                  <ListGroup>
                    <ListGroup.Item>Colored Concrete</ListGroup.Item>
                    <ListGroup.Item>Exposed Aggregate Concrete</ListGroup.Item>
                    <ListGroup.Item>Fiber-Mesh Concrete</ListGroup.Item>
                  </ListGroup>
                </Popover.Body>
              </Popover>
            }
          >
            <Button className="mx-auto mt-2" id="optionsBtn">Concrete Options</Button>
          </OverlayTrigger>
          <hr />
          <Container className="mt-3">
            <Carousel serviceData={data} />
          </Container>
        </section>
        <div className="divider" />
      </main>
    </Container>
  )
};