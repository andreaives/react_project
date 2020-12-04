import React from "react"
import {
    Container,
    Row,
    Col,
    Card,
    CardBody,
    CardTitle,
    CardImg,
  } from "reactstrap";
import { relationshipSeed } from "../../scripts/relationshipSeedDB"

function status(){

    const randomNumber = Math.floor(Math.random() * 6) + 1

    return (
        <Container>
            <Row>
                <Col>
                    <Card>
                        <CardTitle>Your 2021 Relationship Status</CardTitle>
                        <CardBody> 
                            {relationshipSeed[randomNumber].status}
                        </CardBody>
                        {/* <CardImg> image goes here </CardImg> */}
                    </Card>
                </Col>
            </Row>
        </Container>
    )
}

export default status