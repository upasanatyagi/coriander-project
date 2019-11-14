import React from "react";
import axios from "./axios";
import { useState, useEffect } from "react";
import ShoppingKart from "./shoppingkart";

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
            <div className="checkoutImg1">
                <img src="/pics/shoppingkartlogo.png" />
            </div>
            {checkout && (
                <React.Fragment>
                    <div className="checkoutDisplay">
                        <p>{checkout.first}</p>
                        <p>{checkout.last}</p>
                        <p>{checkout.message}</p>
                        <p>{checkout.size}</p>
                        <div className="checkoutImg2">
                            <img src={checkout.image_url} />
                        </div>
                    </div>
                </React.Fragment>
            )}
            <ShoppingKart />

            <p>thank you for placing an order with us</p>
        </div>
    );
}
