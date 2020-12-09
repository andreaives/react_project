import React from "react";
import Navbar from "react-bootstrap/Navbar";
import Container from "react-bootstrap/Container";
import Col from "react-bootstrap/Col";
import "./navbar.css";
import LogoutButton from "../logoutButton/LogoutButton";

function Navigation() {
  return (
    <Container fluid="true">
      <Navbar className="navbar">
        <Col className="links">
          <div className="col-2" />
          <a className="homepage" href="/main">
            CELESTIAL NAVIGATOR
          </a>
          <a className="profile" href="/profile">
            Profile
          </a>
          <a className="journal" href="/journal">
            Journal
          </a>
          <a className="resources" href="/resources">
            Resources
          </a>
        </Col>
        <Col>
          <LogoutButton />
        </Col>
      </Navbar>
    </Container>
  );
}
export default Navigation;
