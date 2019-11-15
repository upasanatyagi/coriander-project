import React from "react";

import { Button } from "react-bootstrap";

export default function ContactMe() {
    return (
        <div className="contact">
            <div id="contactMe">
                <div className="contactimg">
                    <img src="/pics/sidepic.jpg" />
                </div>
                <p>If you have questions, please contact:</p>

                <input name="name" placeholder="name" />
                <input name="email" placeholder="email" />
                <input name="subject" placeholder="subject" />
                <textarea
                    id="textarea"
                    name="message"
                    rows="6"
                    cols="34"
                    placeholder="Message here"
                ></textarea>
                <div className="contactbtn">
                    <Button variant="primary">Submit</Button>
                </div>
            </div>
        </div>
    );
}
