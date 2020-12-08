import React from "react";
import {
  Container,
  Row,
  Col,
  Card,
  CardBody,
  CardImg,
  CardTitle,
} from "reactstrap";
import { destinationSeed } from "../../scripts/destinationSeedDB";

function travel() {
  const randomNumber = Math.floor(Math.random() * 38) + 1;

  const Style = {
    title: {
      textAlign: "center",
      fontSize: "30px",
      // paddingLeft: "70px"
    },
    basicColors: {
      backgroundColor: "#280f36",
      color: "#fe9c7f",
      opacity: "0.9"
    },
    imageStyle: {
      height: "50%",
      width: "50%",
      margin: "auto",
    },
    fontSize: {
      fontSize: "20px"
    }
  };

  return (
    <Container>
      <Row>
        <Col>
          <Card style={Style.basicColors}>
            <CardTitle style={Style.title}>Your 2021 Destination</CardTitle>
            <CardTitle style={Style.title}>
              {destinationSeed[randomNumber].state}
            </CardTitle>
            <CardImg
              src={destinationSeed[randomNumber].image}
              style={Style.imageStyle}
            ></CardImg>
            <CardBody style={Style.fontSize}>
              {destinationSeed[randomNumber].destination}
              <br />
              {destinationSeed[randomNumber].description}
            </CardBody>
          </Card>
        </Col>
      </Row>
    </Container>
  );
}

export default travel;