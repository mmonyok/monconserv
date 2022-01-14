import React from 'react';
import { Container, Figure, Image } from 'react-bootstrap';
import banner from '../../assets/images/brick_wall.jpg';
import cement from '../../assets/images/cement1.jpg';
import block from '../../assets/images/block1.jpg';
import brick from '../../assets/images/brick1.jpg';
import excavation from '../../assets/images/excavation1.jpg';
import demolition from '../../assets/images/demolition1.jpg';

const images = [
  {
    title: "Cement Work",
    src: cement
  },
  {
    title: "Block Work",
    src: block
  },
  {
    title: "Brick Work",
    src: brick
  },
  {
    title: "Excavation",
    src: excavation
  },
  {
    title: "Demolition",
    src: demolition
  }
];

export default function Home(/* { images } */) {
  return (
    <section>
      <Image
        fluid
        src={banner} />
      <Container className='text-center'>
        <h1>Welcome to Monyok Construction Services!</h1>
        <p>
          We are a family owned and operated Concrete and Masonry business. Take a look around to find out a little bit more about us and what we can do for you.
        </p>

        <div>
          <h2>WHAT WE DO</h2>
          <Figure>
            {images.map((image, a) => (
            <><Figure.Image
                key={a}
                rounded
                src={image.src}
                className='border border-dark border-5' /><Figure.Caption>{image.title}</Figure.Caption></>
            ))}
          </Figure>
        </div>
      </Container>
    </section>
  );
};