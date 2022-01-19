import React from 'react';
import { Container, Figure, Image } from 'react-bootstrap';
import banner from '../../assets/images/brick_wall.jpg';
import cement from '../../assets/images/cement1.jpg';
import block from '../../assets/images/block1.jpg';
import brick from '../../assets/images/brick1.jpg';
import excavation from '../../assets/images/excavation1.jpg';
import demolition from '../../assets/images/demolition1.jpg';
import '../../assets/styles/Home.css';

const images = [
  {
    title: "Cement Work",
    src: cement,
    class: "col w-75 mx-auto imageWrapper",
    caption: "homeImageCaptionMain"
  },
  {
    title: "Block Work",
    src: block,
    class: "col w-50 imageWrapper",
    caption: "homeImageCaption"
  },
  {
    title: "Brick Work",
    src: brick,
    class: "col w-50 imageWrapper",
    caption: "homeImageCaption"
  },
  {
    title: "Excavation",
    src: excavation,
    class: "col w-50 imageWrapper",
    caption: "homeImageCaption"
  },
  {
    title: "Demolition",
    src: demolition,
    class: "col w-50 imageWrapper",
    caption: "homeImageCaption"
  }
];

export default function Home(/* { images } */) {
  return (
    <section>
      <div /* id="bannerWrapper" */>
        <Figure className="imageWrapper">
          <Figure.Image
            fluid
            src={banner} />
          <Figure.Caption id="bannerCaption">
            <h1 id="bannerTitle">Quality over Quantity</h1>
          </Figure.Caption>
        </Figure>
      </div>
      <Container>
        <div className='text-center'>
          <h1>Welcome to Monyok Construction Services!</h1>
          <p>
            We are a family owned and operated Concrete and Masonry business. Take a look around to find out a little bit more about us and what we can do for you.
          </p>
        </div>
        <div>
          <h2>WHAT WE DO</h2>
          <p>From block foundations and footings for house foundations to chimney repair. We have you covered for all your concrete and masonry needs.</p>
          <Figure className='row row-cols-2'>
            {images.map((image, a) => (
              <div className={image.class}><Figure.Image
                key={a}
                rounded
                src={image.src}
                className='border border-dark border-5 homeImageTitle' />
                <Figure.Caption className={image.caption}>
                  <h2 className="homeImageTitle">{image.title}</h2></Figure.Caption></div>
            ))}
          </Figure>
        </div>
      </Container>
    </section>
  );
};