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

    const randomNumber = Math.floor(Math.random() * 39) + 1

    const Style = {
        middle: {
            textAlign: "center"
        }
    }

  return (
    <Container>
      <Row>
        <Col>
          <Card>
            <CardTitle style={Style.middle}>{ destinationSeed[randomNumber].state }</CardTitle>
            <CardImg src={ destinationSeed[randomNumber].image }></CardImg>
            <CardBody>
                {destinationSeed[randomNumber].destination}
                <br/>
                {destinationSeed[randomNumber].description}
            </CardBody>
          </Card>
        </Col>
      </Row>
    </Container>
  );
}

export default travel;