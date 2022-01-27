import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Accordion, Container } from 'react-bootstrap';
import Contact from '../components/Contact';
import '../assets/styles/FAQs.css';

const faqsArray = [
  {
    name: "Concrete Questions",
    qArray: [
      {
        question: "How big of a patio can you pour?",
        answer: "We can do pours of all shapes and sizes; generally large pours like pole barns take special considerations that can be discussed in further detail over the phone."
      },
      {
        question: "Do you do colored concrete?",
        answer: "Yes, we can do colored concrete; contact us to discuss color options."
      },
      {
        question: "Do you do stamped concrete?",
        answer: "At this time we do not have stamped concrete availability."
      },
      {
        question: "What is the latest and earliest in the year you can do pours?",
        answer: "Interior pours can happen all year round. If you are wanting an exterior pour, those usually stop around late fall, depending on the temperature. We can do pours in the deeper winter but there will be additional costs involved for heating. In the spring, generally we have to wait for road restrictions to end before we can bring out concrete trucks for big pours; very small pours can be done prior to road restrictions. However, for additional costs we can still work during road restrictions."
      },
      {
        question: "Is there any benefit to a concrete driveway over an asphalt one?",
        answer: "Concrete driveways will last longer and require less maintenance than an asphalt one. Concrete is also preferred by motorcycle drivers, as they do not need to worry about their kickstand sinking in the asphalt during hot summer months when the asphalt is softer."
      },
      {
        question: "Should I get a concrete garage apron for my asphalt driveway?",
        answer: "Concrete aprons help with ground settling that often happens at garage door openings."
      },
      {
        question: "Do you do poured walls?",
        answer: "No, we do not do poured walls, but see our Block section for any questions on block walls and footings."
      }
    ]
  },
  {
    name: "Brick Questions",
    qArray: [
      {
        question: "Do you build brick chimneys or just repair them?",
        answer: "We only do chimney repair."
      },
      {
        question: "Can you repair brick on house siding?",
        answer: "Yes, we can do tuck-point brick repair on almost any existing structure."
      },
      {
        question: "Do you do brick repair inside structures?",
        answer: "Yes, we can repair internal brick structures."
      },
      {
        question: "Do you do brick repair year-round?",
        answer: "If it is inside we do; otherwise we typically stop external repair when the temperature is below freezing."
      }
    ]
  },
  {
    name: "Block Questions",
    qArray: [
      {
        question: "Do you do footings?",
        answer: "Yes, we can do footings for floating garages, house additions, new houses, etc. We can also do post footings."
      },
      {
        question: "Do you fix rotting block?",
        answer: "Yes, we can tuck-point for block repair. People often have rotting block under their garage walls. Salt eats away at it during the winter."
      },
      {
        question: "Do you excavate for footings and blockwork?",
        answer: "We can do any excavation needed or we hire a sub-contractor for larger jobs."
      },
      {
        question: "Are you able to work with rock-faced block?",
        answer: "Yes, we can do your blockwork with rock-faced block."
      },
      {
        question: "Can you do blockwork in the winter?",
        answer: "Typically we don't do blockwork outside in the winter months. We usually wait until around April, depending on the weather."
      }
    ]
  },
  {
    name: "Misc. Questions",
    qArray: [
      {
        question: "What is tuck-pointing?",
        answer: "We grind out the mortar joints for your pre-existing brick/blockwork. Then we pull out the broken or rotting brick/block and replace it with new brick/block and mortar."
      },
      {
        question: "Are there any months you don't do work?",
        answer: "We typically don't do outside jobs December-March, but we can do jobs that are inside during the cold, winter months."
      },
      {
        question: "What is your post-job clean-up process.",
        answer: "When working a concrete job, we do need a place to dump concrete water. We do clean up extra materials around the job."
      },
      {
        question: "Do you backfill sidewalks and concrete jobs?",
        answer: "We do not do any landscaping, and you will be responsible for backfilling your sidewalks, patios, and similar items."
      },
      {
        question: "Do you demolish existing concrete structures to make way for the new ones?",
        answer: "Yes, we employ a variety of methods for removing concrete structures such as sidewalks, aprons, driveways, garage floors, etc. We could probably assist in finding someone to remove non-concrete structures, but we do not do that ourselves."
      }
    ]
  }
];

export default function FAQs(props) {
  const [showContact, setShowContact] = useState(false);
  return (
    <Container>
      <h1 className="ms-5 mt-3 text-center text fontBold"><span className="faqsSpan">F</span>requently <span className="faqsSpan">A</span>sked <span className="faqsSpan">Q</span>uestion<span className="faqsSpan">s</span></h1>
      <hr />
      <p className="text-center text font">Please view the following Frequently Asked Questions by subject matter. 
      <br />
      If you have any additional questions, do not hesitate to contact us via this <Link
        id="contactLink"
        to="#"
        onClick={() => setShowContact(true)}>
        Contact Form
      </Link>. </p>
      <Contact
        show={showContact}
        onHide={() => setShowContact(false)} />
      <hr />

      <Accordion className="mb-3">
        {faqsArray.map((section, a) => (
          <Accordion.Item
            className="sectionWhole font"
            eventKey={a}>
            <Accordion.Header className="sectionHead">{section.name}</Accordion.Header>
            <Accordion.Body className="sectionBody">
              <Accordion>
                {section.qArray.map((group, b) => (
                  <Accordion.Item
                    className="groupWhole fontBold"
                    eventKey={b}>
                    <Accordion.Header className="groupHead">{group.question}</Accordion.Header>
                    <Accordion.Body className="ms-3 groupBody">{group.answer}</Accordion.Body>
                  </Accordion.Item>
                ))}
              </Accordion>
            </Accordion.Body>
          </Accordion.Item>
        ))}
      </Accordion>
    </Container>
  )
};