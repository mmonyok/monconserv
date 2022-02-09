import React from 'react';
import { Container, Figure } from 'react-bootstrap';
import joe from '../assets/images/joe.jpg';
import '../assets/styles/AboutUs.css';

export default function AboutUs() {
  return (
    <Container fluid className="d-flex flex-column text">
      <h1 className="text-center my-3 fontBold">About Monyok Construction Services</h1>
      <section 
        className="mb-3 d-flex flex-row flex-wrap-reverse justify-content-center mx-5"
        id="aboutSection">
        <p className="mt-5 pe-5 font" id="aboutText">
          Joe started out in commercial and residential framing in 1986, which involved some block & concrete work. After leaving framing, Joe was hired on by Reiscraft Masonry and worked several years for them. In 1995, Joe officially started his own Business. Monyok Construction Services has been continuing to build a strong base of satisfied customers since then.
          <br />
          <br />
          The key to MCS' success is client satisfaction. Getting you what you desire, combined with quality craftsmanship, and at a fair price is what we are all about here at Monyok Construction Services. Joe ensures this quality by personal supervision at all of our jobsites.
          <br />
          <br />
          You might ask yourself, "How different can concrete and masonry companies be from each other?" With over 30 years of experience and having worked for 3 different companies prior to starting MCS, Joe knows that process and materials make a difference. Here at MCS we use rebar in your sidewalks and welded wire fabric in patios and garage floors; this helps to hold them together, so they last many years for you.
          <br />
          <br />
          Like anything, a good foundation is key; we make sure there is a good level base under your concrete, which will ward off cracking outside of the control joints. Many control joints are factored in to help your concrete maintain a good appearance for many years to come.
          <br />
          <br />
          Joe also recommends a good sealer be put on your concrete 30 days after it is poured. Sealer will help the concrete withstand chemicals and water, which will often destroy your beautiful concrete finish.
          <br />
          <br />
          Thank you for considering Monyok Construction Services for all of your concrete and masonry needs!
        </p>
        <Figure.Image rounded src={joe} id="joe" />
      </section>
    </Container>
  );
};