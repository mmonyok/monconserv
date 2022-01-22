import React from 'react';
// import { validateEmail } from '../utils/helpers';
import { Button, Form, Modal } from 'react-bootstrap';

export default function Contact(props) {
  return (
    <Modal
      {...props}
      size="lg"
      aria-labelledby="contact-form"
      centered
    >
      <Modal.Header closeButton>
        <Modal.Title>
          Contact Options
        </Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <h4 className="text-center">
          {/* <i className="far fa-envelope me-2"></i> */}
          <a href="mailto:joemonyok@outlook.com">
            joemonyok@outlook.com
          </a>
        </h4>
        <h4 className="text-center">
          {/* <i className="fas fa-mobile-alt me-2"></i> */}
          <a href="tel:9524923671">
            952-492-3671
          </a>
        </h4>
        <hr />
        <p>
          When leaving a voicemail, please include the best time to call you back.
          <br />
          OR
          <br />
          Fill out the contact form below, and we will get back to you as soon as possible.
        </p>
        <hr />
        <Form action="https://formsubmit.co/309580e90c3d4e1a061ef9cd66d48059" method="POST">
          <input type="hidden" name="_subject" value="New Client Message from MCS Website!" />
          <input type="hidden" name="_autoresponse" value="Thank you for contacting Monyok Construction Services! We will get back to you as soon as possible." />
          <input type="hidden" name="_template" value="basic" />
          <input type="hidden" name="_next" value={window.location.href} />
          <Form.Group controlId="formBasicName">
            <Form.Label><span className="asterisk">*</span>Name:</Form.Label>
            <Form.Control type="name" name="name" placeholder="Enter name" />
          </Form.Group>
          <Form.Group controlId="formBasicEmail">
            <Form.Label><span className="asterisk">*</span>Email:</Form.Label>
            <Form.Control type="email" name="email" placeholder="Enter email" />
          </Form.Group>
          <Form.Group controlId="formBasicPhone">
            <Form.Label>Phone Number:</Form.Label>
            <Form.Control type="phone" name="phone" placeholder="Enter Phone Number" />
          </Form.Group>
          <Form.Group controlId="formBasicContent">
            <Form.Label><span className="asterisk">*</span>Brief Description of Project:</Form.Label>
            <Form.Control type="content" name="content" placeholder="Example: I have a 20' X 60' asphalt driveway that I would like replaced with concrete." />
          </Form.Group>
          <hr />
          <p>* Required Items</p>
          <Button type="submit">Submit</Button>
        </Form>
      </Modal.Body>
    </Modal>
  );
};