import React from "react";
import { Form, Col, Button } from "react-bootstrap";
export default function ShoppingKart() {
    return (
        <div>
            <Form>
                <Form.Row></Form.Row>

                <Form.Group controlId="formGridAddress1">
                    <Form.Label>Address</Form.Label>
                    <Form.Control placeholder="1234 Main St" />
                </Form.Group>

                <Form.Row>
                    <Form.Group as={Col} controlId="formGridCity">
                        <Form.Label>City</Form.Label>
                        <Form.Control />
                    </Form.Group>

                    <Form.Group as={Col} controlId="formGridZip">
                        <Form.Label>Zip</Form.Label>
                        <Form.Control />
                    </Form.Group>
                </Form.Row>

                <Button variant="primary" type="submit">
                    Checkout with PayPal
                </Button>
            </Form>
        </div>
    );
}
