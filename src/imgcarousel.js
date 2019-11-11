import * as React from "react";
import { Carousel } from "react-bootstrap";

export default function Imgcarousel() {
    return (
        <Carousel>
            <Carousel.Item>
                <img
                    className="d-block w-100"
                    src="/pics/blackforestcake2.jpg"
                    alt="First slide"
                />
                <Carousel.Caption>
                    <p>First slide label</p>
                    <h3>Black Forest Cake</h3>
                </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item>
                <img
                    className="d-block w-100"
                    src="/pics/floralbuttercream2.jpg"
                    alt="Second slide"
                />

                <Carousel.Caption>
                    <p>Second slide label</p>
                    <h3>Floral Butter Cream Cake</h3>
                </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item>
                <img
                    className="d-block w-100"
                    src="/pics/highwaycake.jpg"
                    alt="Third slide"
                />

                <Carousel.Caption>
                    <p>Third slide label</p>
                    <h3>Highway Cake</h3>
                </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item>
                <img
                    className="d-block w-100"
                    src="/pics/floralbuttercream1.jpg"
                    alt="Third slide"
                />

                <Carousel.Caption>
                    <p>Fourth slide label</p>
                    <h3>Butter Cream Cake</h3>
                </Carousel.Caption>
            </Carousel.Item>
        </Carousel>
    );
}
