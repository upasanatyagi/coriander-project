import React from "react";
import axios from "./axios";
import { Button, Form } from "react-bootstrap";

export default function Order() {
    return (
        // <h3>Please fill:</h3>
        <form>
            <div className="form-check form-check-inline">
                <input
                    className="form-check-input"
                    type="radio"
                    name="inlineRadioOptions"
                    id="inlineRadio1"
                    value="option1"
                />
                <label className="form-check-label" htmlFor="inlineRadio1">
                    6inch
                </label>
            </div>
            <div className="form-check form-check-inline">
                <input
                    className="form-check-input"
                    type="radio"
                    name="inlineRadioOptions"
                    id="inlineRadio2"
                    value="option2"
                />
                <label className="form-check-label" htmlFor="inlineRadio2">
                    8inch
                </label>
            </div>
            <div className="form-check form-check-inline">
                <input
                    className="form-check-input"
                    type="radio"
                    name="inlineRadioOptions"
                    id="inlineRadio3"
                    value="option3"
                />
                <label className="form-check-label" htmlFor="inlineRadio3">
                    10inch
                </label>
            </div>
            <Form.Group controlId="exampleForm.ControlTextarea1">
                <Form.Label>Cake Inscription eg. Happy Birthday!</Form.Label>
                <Form.Control as="textarea" rows="3" />
            </Form.Group>
            <Button variant="primary">Add to Cart</Button>
        </form>
    );
}
