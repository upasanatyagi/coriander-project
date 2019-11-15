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
        <div className="shopSummery">
            {checkout && (
                <React.Fragment>
                    <div className="checkoutDisplay">
                        <div className="checkoutImg1">
                            <div className="detailBox">
                                <div className="box1">
                                    <img src="/pics/shoppingkartlogo.png" />
                                    <h3>Would you like to checkout?</h3>
                                </div>
                                <h5>
                                    Ordered by:{checkout.first} {checkout.last}
                                </h5>
                                <h5> Message:{checkout.message}</h5>
                                <h5>Ordered Size:{checkout.size}</h5>
                            </div>

                            <div className="orderedCake">
                                <img src={checkout.image_url} />
                            </div>
                        </div>
                    </div>

                    <div className="checkoutImg2"></div>
                </React.Fragment>
            )}
            <div className="address">
                <p>Thank you for placing an order with us!!</p>
                <ShoppingKart />
            </div>
        </div>
    );
}
