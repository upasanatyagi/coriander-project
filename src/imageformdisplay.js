import React, { useState, useEffect } from "react";
import Order from "./order";
import axios from "./axios";

export default function Display(props) {
    const [info, setInfo] = useState();
    useEffect(() => {
        (async () => {
            console.log("al is cool: ", props);
            const { data } = await axios.get(
                `/displays/${props.match.params.id}`
            );
            setInfo(data[0]);
            // console.log("INfo is cool", info);
        })();
    }, []);
    if (!info) {
        return null;
    }
    return (
        <div className="imgdisplay">
            <div className="imageformdisplay">
                <img src={info.image_url} />
            </div>
            <h3>{info.title}</h3>
            <p>{info.description}</p>
            <Order
                cake_id={props.match.params.id}
                setchkDetail={props.setchkDetail}
            />
        </div>
    );
}
