import React from "react";
import axios from "./axios";
import { useState, useEffect } from "react";

export default function Checkout(props) {
    const [checkout, setCheckout] = useState();
    useEffect(() => {
        (async () => {
            console.log("Checkout is this", checkout);
            const { data } = await axios.get(`/checkouts`, {
                cake_id: props.cake_id
            });
            setCheckout(data);
            console.log("Data is this", data);
        })();
    }, []);
    return (
        <div>
            <p>Would you like to checkout?</p>
            <img src="/pics/shopkart.png" />

            <textarea placeholder="your shipping address"></textarea>
            <p>thank you for placing an order with us</p>
        </div>
    );
}
