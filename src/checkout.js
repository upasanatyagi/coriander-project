import React from "react";
import axios from "./axios";
import { useState, useEffect } from "react";

export default function Checkout(props) {
    console.log("checkout props", props.chkDetail);
    const [checkout, setCheckout] = useState();
    useEffect(() => {
        (async () => {
            console.log("Checkout is this", checkout);
            const { data } = await axios.get(
                `/checkouts/${props.chkDetail.cake_id}`
            );
            setCheckout(data[0]);
            console.log("Data[0] is this", data[0]);
        })();
    }, []);
    return (
        <div>
            <p>Would you like to checkout?</p>
            <img src="/pics/shopkart.png" />
            {checkout && (
                <React.Fragment>
                    <p>{checkout.first}</p>
                    <p>{checkout.last}</p>
                    <p>{checkout.message}</p>
                    <p>{checkout.size}</p>
                    <img src={checkout.image_url} />
                </React.Fragment>
            )}
            <textarea placeholder="your shipping address"></textarea>
            <button>place your order here</button>
            <p>thank you for placing an order with us</p>
        </div>
    );
}
