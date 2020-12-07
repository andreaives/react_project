import React from "react";
import {
  Container,
  Row,
  Col,
  Card,
  CardBody,
  CardTitle,
  CardImg,
} from "reactstrap";
import { relationshipSeed } from "../../scripts/relationshipSeedDB";

function status() {
  const Style = {
    title: {
      textAlign: "center",
      fontSize: "20px",
    },
    basicColors: {
      backgroundColor: "#280f36",
      color: "#fe9c7f",
      opacity: "0.9",
    },
    bodyStyle: {
      textAlign: "center",
    },
    imageStyle: {
      height: "50%",
      width: "50%",
      margin: "auto",
    },
  };

  const randomNumber = Math.floor(Math.random() * 5) + 1;

  return (
    <Container>
      <Row>
        <Col>
          <Card style={Style.basicColors}>
            <CardTitle style={Style.title}>Your 2021 Relationship Status</CardTitle>
            <CardBody style={Style.bodyStyle}>{relationshipSeed[randomNumber].status}</CardBody>
            <CardImg src={relationshipSeed[randomNumber].image} style={Style.imageStyle}></CardImg>
          </Card>
        </Col>
      </Row>
    </Container>
  );
}

export default status;