import React from "react";
import Navbar from "react-bootstrap/Navbar"
import Container from "react-bootstrap/Container"
import Row from "react-bootstrap/Row"
import Col from "react-bootstrap/Col"
import Button from "react-bootstrap/Button"
import Nav from "react-bootstrap/Nav"
import "./navbar.css"
import LogoutButton from "../logoutButton/LogoutButton"

function Navigation() {
  return (
    <Container  fluid="true">
      <Navbar className="navbar">
            <Col className="links">
              <a className="homepage" href="/">
                CELESTIAL NAVIGATOR
              </a>
              <a className="profile" href="/profile">Profile</a>
              <a className="journal" href="/journal">Journal</a>
            </Col>
            <Col >
              <LogoutButton/>
              <Button className="signOut">SIGN OUT</Button>
            </Col>
      </Navbar>
    </Container>
  );
}
export default Navigation;
