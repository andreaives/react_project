import React from "react"
import {
    Container,
    Row,
    Col,
    Card,
    CardBody,
    CardTitle,
  } from "reactstrap";
  import { jobSeeds } from "../../scripts/jobSeedDB";

function job(){

    const randomNumber = Math.floor(Math.random() * 7) + 1
    return (
        <Container>
            <Row>
                <Col>
                    <Card>
                        <CardTitle>Your 2021 Job</CardTitle>
                        <CardBody> 
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