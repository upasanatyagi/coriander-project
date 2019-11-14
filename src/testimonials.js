import React from "react";
import { Card, Header } from "react-bootstrap";

export default function Testimonials() {
    return (
        <div className="feedback">
            <div className="feedback1">
                <Card>
                    <Card.Header>Feedback</Card.Header>
                    <Card.Body>
                        <blockquote className="blockquote mb-0">
                            <p>
                                {" "}
                                The cake was really good. It looked close to the
                                image and the taste was really good too!
                                Everyone who ate it loved it.{" "}
                            </p>
                            <footer className="blockquote-footer">
                                Prison Mike <cite title="Source Title"></cite>
                            </footer>
                        </blockquote>
                    </Card.Body>
                </Card>
            </div>
            <div className="feedback1">
                <Card>
                    <Card.Header>Feedback</Card.Header>
                    <Card.Body>
                        <blockquote className="blockquote mb-0">
                            <p>
                                {" "}
                                I really like your cake and was appreciated by
                                all friends and family!! Recommended your name
                                to all;){" "}
                            </p>
                            <footer className="blockquote-footer">
                                Archana Singh <cite title="Source Title"></cite>
                            </footer>
                        </blockquote>
                    </Card.Body>
                </Card>
            </div>
        </div>
    );
}
