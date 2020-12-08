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
      // paddingLeft: "60px",
      fontSize: "20px",
    },
    basicColors: {
      backgroundColor: "#280f36",
      color: "#fe9c7f",
      opacity: "0.9",
      // textAlign: "center"
    },
    bodyStyle: {
      fontSize: "20px"
    },
    imageStyle: {
      height: "50%",
      width: "50%",
      margin: "auto",
    },
    center: {
      textAlign: "center"
    }
  };

  const randomNumber = Math.floor(Math.random() * 5) + 1;

  return (
    <Container>
      <Row>
        <Col style={Style.center}>
          <Card style={Style.basicColors}>
            <CardTitle style={Style.title}>Your 2021 Relationship Status</CardTitle>
            <CardImg src={relationshipSeed[randomNumber].image} style={Style.imageStyle}></CardImg>
            <CardBody style={Style.bodyStyle}>{relationshipSeed[randomNumber].status}</CardBody>
          </Card>
        </Col>
      </Row>
    </Container>
  );
}

export default status;