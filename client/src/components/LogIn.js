import React from 'react';
import { Button, Form, InputGroup, Modal } from 'react-bootstrap';
import '../assets/styles/Forms.css';
import { Formik } from 'formik';
import * as Yup from 'yup';

const schema = Yup.object().shape({
  email: Yup.string().email('Invalid email').required(),
  password: Yup.string().required(),
});

export default function LogIn(props) {
  return (
    <Modal
      {...props}
      size="lg"
      aria-labelledby="login-form"
      centered
      className="text"
    >
      <Modal.Header className="modalHead" closeButton>
        <Modal.Title className="fontBold">
          Log In
        </Modal.Title>
      </Modal.Header>
      <Modal.Body className="modalBody">
        <h6 className="font">Please Note: This login form is only for the owner of this site.</h6>
        <hr />
        <Formik
          validationSchema={schema}
          onSubmit={console.log}
          initialValues={{
            email: '',
            password: '',
          }}
        >
          {({
            handleSubmit,
            handleChange,
            values,
            touched,
            isValid,
            errors,
          }) => (
            <Form noValidate onSubmit={handleSubmit}>
              <Form.Group className="mb-3" controlId="formBasicEmail">
                <InputGroup hasValidation>
                  <InputGroup.Text className="iconWrap">
                    <i className="formIcons far fa-envelope"></i>
                  </InputGroup.Text>
                  <Form.Control
                    className="fontLight"
                    type="email"
                    placeholder="Enter Email"
                    name="email"
                    value={values.email}
                    onChange={handleChange}
                    isInvalid={!!errors.email}
                    isValid={touched.email && !errors.email}
                  />
                  <Form.Control.Feedback type="invalid">
                    {errors.email}
                  </Form.Control.Feedback>
                  <Form.Control.Feedback type="valid">
                    Looks Good!
                  </Form.Control.Feedback>
                </InputGroup>
              </Form.Group>

              <Form.Group className="mb-3" controlId="formBasicPassword">
                <InputGroup hasValidation>
                  <InputGroup.Text className="iconWrap">
                    <i className="formIcons fas fa-key"></i>
                  </InputGroup.Text>
                  <Form.Control
                    className="fontLight"
                    type="password"
                    placeholder="Enter Password"
                    name="password"
                    value={values.password}
                    onChange={handleChange}
                    isInvalid={!!errors.password}
                    isValid={touched.password && !errors.password}
                  />
                  <Form.Control.Feedback type="invalid">
                    {errors.password}
                  </Form.Control.Feedback>
                  <Form.Control.Feedback type="valid">
                    Looks Good!
                  </Form.Control.Feedback>
                </InputGroup>
              </Form.Group>
              <div className="text-center">
                <Button id="loginBtn" type="submit">Log In</Button>
              </div>
            </Form>
          )}
        </Formik>
      </Modal.Body>
    </Modal>
  );
};