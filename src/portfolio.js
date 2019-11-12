import React, { useState, useEffect } from "react";
import axios from "./axios";
import { Container, Row, Col } from "react-bootstrap";
import { Link } from "react-router-dom";

export default function Portfolio(props) {
    const openPortfolio = e => {
        console.log("e.target.src", e.target.src);
    };

    return (
        <Container className="container">
            <Row>
                <Col lg={4}>
                    <Link to="/display/1">
                        <img
                            src="/pics/babyshowercake.jpg"
                            onClick={e => openPortfolio(e)}
                        />
                    </Link>
                </Col>
                <Col lg={4}>
                    <Link to="/display/2">
                        <img
                            src="/pics/bearcake.jpg"
                            onClick={e => openPortfolio(e)}
                        />
                    </Link>
                </Col>
                <Col lg={4}>
                    <Link to="/display/3">
                        <img
                            src="/pics/blueberrycake.jpg"
                            onClick={e => openPortfolio(e)}
                        />
                    </Link>
                </Col>
            </Row>
            <Row>
                <Col lg={4}>
                    <Link to="/display/4">
                        <img
                            src="/pics/chocolatebuttercreamcake.jpg"
                            onClick={e => openPortfolio(e)}
                        />
                    </Link>
                </Col>
                <Col lg={4}>
                    <Link to="/display/5">
                        <img
                            src="/pics/duckcake.jpg"
                            onClick={e => openPortfolio(e)}
                        />
                    </Link>
                </Col>
                <Col lg={4}>
                    <Link to="/display/6">
                        <img
                            src="/pics/floralbuttercream1.jpg"
                            onClick={e => openPortfolio(e)}
                        />
                    </Link>
                </Col>
            </Row>
            <Row>
                <Col lg={4}>
                    <Link to="/display/7">
                        <img
                            src="/pics/floralbuttercream2.jpg"
                            onClick={e => openPortfolio(e)}
                        />
                    </Link>
                </Col>
                <Col lg={4}>
                    <Link to="/display/8">
                        <img
                            src="/pics/floralbuttercream3.jpg"
                            onClick={e => openPortfolio(e)}
                        />
                    </Link>
                </Col>
                <Col lg={4}>
                    <Link to="/display/9">
                        <img
                            src="/pics/floralbuttercream4.jpg"
                            onClick={e => openPortfolio(e)}
                        />
                    </Link>
                </Col>
            </Row>
            <Row>
                <Col lg={4}>
                    <Link to="/display/10">
                        <img
                            src="/pics/frozencake.jpg"
                            onClick={e => openPortfolio(e)}
                        />
                    </Link>
                </Col>
                <Col lg={4}>
                    <Link to="/display/11">
                        <img
                            src="/pics/highwaycake.jpg"
                            onClick={e => openPortfolio(e)}
                        />
                    </Link>
                </Col>
                <Col lg={4}>
                    <Link to="/display/12">
                        <img
                            src="/pics/jamescake.jpg"
                            onClick={e => openPortfolio(e)}
                        />
                    </Link>
                </Col>
            </Row>
            <Row>
                <Col lg={4}>
                    <Link to="/display/13">
                        <img src="/pics/ninjacake.jpg" />
                        onClick={e => openPortfolio(e)}
                    </Link>
                </Col>
                <Col lg={4}>
                    <Link to="/display/14">
                        <img
                            src="/pics/santacake.jpg"
                            onClick={e => openPortfolio(e)}
                        />
                    </Link>
                </Col>
                <Col lg={4}>
                    <Link to="/display/15">
                        <img
                            src="/pics/unicorn1.jpg"
                            onClick={e => openPortfolio(e)}
                        />
                    </Link>
                </Col>
            </Row>
            <Row>
                <Col lg={4}>
                    <Link to="/display/16">
                        <img
                            src="/pics/unicorn2.jpg"
                            onClick={e => openPortfolio(e)}
                        />
                    </Link>
                </Col>
                <Col lg={4}>
                    <Link to="/display/17">
                        <img
                            src="/pics/zoocake.jpg"
                            onClick={e => openPortfolio(e)}
                        />
                    </Link>
                </Col>
                <Col lg={4}>
                    <Link to="/display/18">
                        <img
                            src="/pics/glazecake1.jpg"
                            onClick={e => openPortfolio(e)}
                        />
                    </Link>
                </Col>
            </Row>
            <Row>
                <Col lg={4}>
                    <Link to="/display/19">
                        <img
                            src="/pics/glazecake2.jpg"
                            onClick={e => openPortfolio(e)}
                        />
                    </Link>
                </Col>
                <Col lg={4}>
                    <Link to="/display/20">
                        <img
                            src="/pics/chocolatebutterfly.jpg"
                            onClick={e => openPortfolio(e)}
                        />
                    </Link>
                </Col>
                <Col lg={4}>
                    <Link to="/display/21">
                        <img
                            src="/pics/blackforestcake2.jpg"
                            onClick={e => openPortfolio(e)}
                        />
                    </Link>
                </Col>
            </Row>
            <Row>
                <Col lg={4}>
                    <Link to="/display/22">
                        <img
                            src="/pics/newyorkcheesecake.jpg"
                            onClick={e => openPortfolio(e)}
                        />
                    </Link>
                </Col>
                <Col lg={4}>
                    <Link to="/display/23">
                        <img
                            src="/pics/macarons.jpg"
                            onClick={e => openPortfolio(e)}
                        />
                    </Link>
                </Col>
                <Col lg={4}>
                    <Link to="/display/24">
                        <img
                            src="/pics/lavenderMacarons.jpg"
                            onClick={e => openPortfolio(e)}
                        />
                    </Link>
                </Col>
            </Row>
            <Row>
                <Col lg={4}>
                    <Link to="/display/25">
                        <img
                            src="/pics/christmasmacarons.jpg"
                            onClick={e => openPortfolio(e)}
                        />
                    </Link>
                </Col>
                <Col lg={4}>
                    <Link to="/display/26">
                        <img
                            src="/pics/ganachemacaron.jpg"
                            onClick={e => openPortfolio(e)}
                        />
                    </Link>
                </Col>
                <Col lg={4}>
                    <Link to="/display/27">
                        <img
                            src="/pics/floralfondant.jpg"
                            onClick={e => openPortfolio(e)}
                        />
                    </Link>
                </Col>
            </Row>
            <Row>
                <Col lg={4}>
                    <Link to="/display/28">
                        <img
                            src="/pics/harrypottercake.jpg"
                            onClick={e => openPortfolio(e)}
                        />
                    </Link>
                </Col>
                <Col lg={4}>
                    <Link to="/display/29">
                        <img
                            src="/pics/halloweentreat.jpg"
                            onClick={e => openPortfolio(e)}
                        />
                    </Link>
                </Col>
                <Col lg={4}>
                    <Link to="/display/30">
                        <img
                            src="/pics/applecake.jpg"
                            onClick={e => openPortfolio(e)}
                        />
                    </Link>
                </Col>
            </Row>
        </Container>
    );
}
// useEffect(() => {
//     (async () => {
//         console.log();
//         console.log("al is cool: ", props);
//         const { data } = await axios.get(
//             `/display/${props.match.params.id}`
//         );
//     })();
// }, []);
