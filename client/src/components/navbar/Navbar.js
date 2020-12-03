import React from "react";
import Navbar from "react-bootstrap/Navbar"
import Container from "react-bootstrap/Container"
import Row from "react-bootstrap/Row"
import Col from "react-bootstrap/Col"
import Button from "react-bootstrap/Button"
import Nav from "react-bootstrap/Nav"
import "./navbar.css"

function Navigation() {
  return (
    <Container  fluid="true">
      <Navbar className="navbar">
            <Col className="links">
              <a className="homepage" href="/">
                LITERALLY A HOMEPAGE
              </a>
              <a className="profile" href="/profile">Profile</a>
              <a className="journal" href="/journal">Journal</a>
            </Col>
            <Col >
              <Button className="signOut">SIGN OUT</Button>
            </Col>
      </Navbar>
    </Container>
  );
}
export default Navigation;
