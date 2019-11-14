import React, { useState, useEffect } from "react";
import { Button, Form } from "react-bootstrap";
import { Link } from "react-router-dom";
import axios from "./axios";

export default function Order(props) {
    // console.log("order props", props);
    const [size, setSize] = useState();
    const [message, setMessage] = useState();
    const [post, setPost] = useState();
    useEffect(() => {
        setPost(false);
    }, []);
    useEffect(() => {
        console.log("setSize", setSize);
        console.log("setMessage", setMessage);
        console.log("setPost", setPost);
        (async () => {
            const { data } = await axios.post(`/sizemsg`, {
                msg: message,
                size: size,
                cake_id: props.cake_id
            });
            setSize(null);
            setMessage(null);
            location.replace("/checkout");
        })();
    }, [post]);

    return (
        // <h3>Please fill:</h3>
        <form>
            <div className="form-check form-check-inline">
                <input
                    className="form-check-input"
                    type="radio"
                    name="inlineRadioOptions"
                    id="inlineRadio1"
                    value="6inch"
                    onChange={e => setSize(e.target.value)}
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
                    value="8inch"
                    onChange={e => setSize(e.target.value)}
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
                    value="10inch"
                    onChange={e => setSize(e.target.value)}
                />
                <label className="form-check-label" htmlFor="inlineRadio3">
                    10inch
                </label>
            </div>
            <Form.Group controlId="exampleForm.ControlTextarea1">
                <Form.Label>Cake Inscription eg. Happy Birthday!</Form.Label>
                <Form.Control
                    as="textarea"
                    rows="3"
                    onChange={e => setMessage(e.target.value)}
                />
            </Form.Group>

            <Button variant="primary" onClick={() => setPost(true)}>
                Add to Cart
            </Button>
        </form>
    );
}
// const openCheckout = e => {
//     console.log("e.target", e.target);
// };
