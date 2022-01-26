import React from 'react';
import { Button, Form, Modal } from 'react-bootstrap';
import '../assets/styles/LogIn.css';
import { Formik } from 'formik';
import * as Yup from 'yup'

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
    >
      <Modal.Header closeButton>
        <Modal.Title>
          Log In
        </Modal.Title>
      </Modal.Header>
      <Modal.Body className="">
        <h6 className=''>Please Note: This login form is only for the owner of this site.</h6>
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
            handleBlur,
            values,
            touched,
            isValid,
            errors,
          }) => (
            <Form noValidate onSubmit={handleSubmit}>
              <Form.Group className="group mb-3" controlId="formBasicEmail">
                <Form.Label className="label mb-1">Email Address:</Form.Label>
                <Form.Control
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
              </Form.Group>

              <Form.Group className="group mb-3" controlId="formBasicPassword">
                <Form.Label className="label mb-1">Password:</Form.Label>
                <Form.Control
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