import React from 'react';
import { Col, Container, Figure, Row } from 'react-bootstrap';
import '../assets/styles/ServiceMain.css';

// Main images
import cement from '../assets/images/cement1.jpg';
import block from '../assets/images/block1.jpg';
import brick from '../assets/images/brick1.jpg';
import excavation from '../assets/images/excavation1.jpg';
import demolition from '../assets/images/demolition1.jpg';

// This array contains image data, which will make our maps function work.
const images = [
  {
    title: "Block Work",
    src: block,
    href: "/services/block"
  },
  {
    title: "Brick Repair",
    src: brick,
    href: "/services/brick"
  },
  {
    title: "Demolition",
    src: demolition,
    href: "/services/demolition"
  },
  {
    title: "Excavation",
    src: excavation,
    href: "/services/excavation"
  },
];

export default function ServiceMain() {
  return (
    <Container>
      <Row>
        <Col>
          <a href="/services/concrete">
            <Figure>
              <div
                className="mx-auto w-50 imageWrapper"
                id="mainWrapper">
                <Figure.Image
                  rounded
                  src={cement}></Figure.Image>
                <Figure.Caption
                  className="pe-2 caption text-end">
                  Concrete Work
                </Figure.Caption>
              </div>
            </Figure>
          </a>
        </Col>
      </Row>
      <Row>
        {images.map((image, a) => (
          <Col className="subColumns">
            <a href={image.href}>
              <Figure>
                <div className="imageWrapper">
                  <Figure.Image
                    key={a}
                    rounded
                    src={image.src}></Figure.Image>
                  <Figure.Caption
                    className="pe-2 caption text-end">{image.title}</Figure.Caption>
                </div>
              </Figure>
            </a>
          </Col>
        ))}
      </Row>
    </Container>
  )
};