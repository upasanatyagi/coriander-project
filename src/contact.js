import React, { useState, useEffect } from "react";
import axios from "./axios";
import { Button } from "react-bootstrap";

export default function ContactMe() {
    return (
        <div className="contactMe">
            <h3>Please Contact:</h3>
            <input name="name" placeholder="name" />
            <input name="email" placeholder="email" />
            <input name="subject" placeholder="subject" />
            <textarea
                id="textarea"
                name="message"
                rows="8"
                cols="42"
                placeholder="Message here"
            ></textarea>
            <a href="https://www.instagram.com/garg_upasana">
                Link to instagram
            </a>
            <Button variant="primary">Primary</Button>
        </div>
    );
}
