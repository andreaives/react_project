import React from "react";
import Navbar from "react-bootstrap/Navbar"
import Container from "react-bootstrap/Container"

function Navigation() {
  return (
    <Container fluid="true">
      <Navbar>
        <Row>
            <a className="navbar-brand" href="/">
              LITERALLY A GOAT
            </a>
        </Row>
      </Navbar>
    </Container>
  );
}
export default Navigation;