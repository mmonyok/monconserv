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
  },
  {
    title: "Brick Work",
    src: brick,
  },
  {
    title: "Excavation",
    src: excavation,
  },
  {
    title: "Demolition",
    src: demolition,
  }
];

export default function ServiceMain() {
  return (
    <Container>
      <Row>
        <Col>
          <Figure>
            <div
              className="mx-auto w-50 imageWrapper"
              id="mainWrapper">
              <Figure.Image
                rounded
                src={cement}></Figure.Image>
              <Figure.Caption
                className="pe-2 caption text-end">
                Cement Work
              </Figure.Caption>
            </div>
          </Figure>
        </Col>
      </Row>
      <Row>
        {images.map((image, a) => (
          <Col className="subColumns">
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
          </Col>
        ))}
      </Row>
    </Container>
  )
};