import React from "react";
import axios from "./axios";
import { Container, Row, Col } from "react-bootstrap";

export default function Portfolio() {
    return (
        // <div>
        //     <h3>
        //         CheeseCakes / FondantCakes / ChocolateCake / ButterCreamCakes /
        //         SweetTreats / GlazeCkes
        //     </h3>lg={4}
        <Container className="container">
            <Row>
                <Col lg={4}>
                    <img src="/pics/babyshowercake.jpg" />
                </Col>
                <Col lg={4}>
                    <img src="/pics/bearcake.jpg" />
                </Col>
                <Col lg={4}>
                    <img src="/pics/blueberrycake.jpg" />
                </Col>
            </Row>
            <Row>
                <Col lg={4}>
                    <img src="/pics/chocolatebuttercreamcake.jpg" />
                </Col>
                <Col lg={4}>
                    <img src="/pics/duckcake.jpg" />
                </Col>
                <Col lg={4}>
                    <img src="/pics/floralbuttercream1.jpg" />
                </Col>
            </Row>
            <Row>
                <Col lg={4}>
                    <img src="/pics/floralbuttercream2.jpg" />
                </Col>
                <Col lg={4}>
                    <img src="/pics/floralbuttercream3.jpg" />
                </Col>
                <Col lg={4}>
                    <img src="/pics/floralbuttercream4.jpg" />
                </Col>
            </Row>
            <Row>
                <Col lg={4}>
                    <img src="/pics/frozencake.jpg" />
                </Col>
                <Col lg={4}>
                    <img src="/pics/highwaycake.jpg" />
                </Col>
                <Col lg={4}>
                    <img src="/pics/jamescake.jpg" />
                </Col>
            </Row>
            <Row>
                <Col lg={4}>
                    <img src="/pics/ninjacake.jpg" />
                </Col>
                <Col lg={4}>
                    <img src="/pics/santacake.jpg" />
                </Col>
                <Col lg={4}>
                    <img src="/pics/unicorn1.jpg" />
                </Col>
            </Row>
            <Row>
                <Col lg={4}>
                    <img src="/pics/unicorn2.jpg" />
                </Col>
                <Col lg={4}>
                    <img src="/pics/zoocake.jpg" />
                </Col>
                <Col lg={4}>
                    <img src="/pics/glazecake1.jpg" />
                </Col>
            </Row>
            <Row>
                <Col lg={4}>
                    <img src="/pics/glazecake2.jpg" />
                </Col>
                <Col lg={4}>
                    <img src="/pics/chocolatebutterfly.jpg" />
                </Col>
                <Col lg={4}>
                    <img src="/pics/cheesecake1.jpg" />
                </Col>
            </Row>
            <Row>
                <Col lg={4}>
                    <img src="/pics/newyorkcheesecake.jpg" />
                </Col>
                <Col lg={4}>
                    <img src="/pics/macarons.jpg" />
                </Col>
                <Col lg={4}>
                    <img src="/pics/lavenderMacarons.jpg" />
                </Col>
            </Row>
            <Row>
                <Col lg={4}>
                    <img src="/pics/christmasmacarons.jpg" />
                </Col>
                <Col lg={4}>
                    <img src="/pics/ganachemacaron.jpg" />
                </Col>
                <Col lg={4}>
                    <img src="/pics/floralfondant.jpg" />
                </Col>
            </Row>
            <Row>
                <Col lg={4}>
                    <img src="/pics/harrypottercake.jpg" />
                </Col>
                <Col lg={4}>
                    <img src="/pics/halloweentreat.jpg" />
                </Col>
                <Col lg={4}>
                    <img src="/pics/floralfondant.jpg" />
                </Col>
            </Row>
        </Container>
        // </div>
    );
}
