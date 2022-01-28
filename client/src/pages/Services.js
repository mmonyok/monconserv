import React from "react";
import { Container } from "react-bootstrap";
import { Outlet } from "react-router-dom";

export default function AllServices() {
  return (
    <Container>
      <h1>I am the all services page!</h1>
      <section>
        <Outlet />
      </section>
    </Container>
  )
};