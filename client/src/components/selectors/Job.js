import React from "react"
import {
    Container,
    Row,
    Col,
    Card,
    CardBody,
    CardTitle,
    CardImg
  } from "reactstrap";
  import { jobSeeds } from "../../scripts/jobSeedDB";

function job(){

    const Style = {
        title: {
          textAlign: "center",
          fontSize: "25px",
          // paddingLeft: "15px"
        },
        basicColors: {
          backgroundColor: "#280f36",
          color: "#fe9c7f",
          opacity: "0.9"
        },
        bodyStyle: {
          textAlign: "center",
          fontSize: "20px"
        },
        imageStyle: {
            height: "50%",
            width: "50%",
            margin: "auto",
          }
      };

    const randomNumber = Math.floor(Math.random() * 7) + 1
    return (
        <Container>
            <Row>
                <Col>
                    <Card style={Style.basicColors}>
                        <CardTitle style={Style.title}>Your 2021 Job</CardTitle>
                        <CardImg src={ jobSeeds[randomNumber].image} style={Style.imageStyle}></CardImg>
                        <CardBody style={Style.bodyStyle}> 
                            { jobSeeds[randomNumber].job}
                            <br/>
                            { jobSeeds[randomNumber].salary}
                        </CardBody>
                    </Card>
                </Col>
            </Row>
        </Container>
    )
}

export default job