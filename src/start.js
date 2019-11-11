import React from "react";
import ReactDOM from "react-dom";
import App from "./app";
import Welcome from "./welcome";

let elem;
const userIsLoggedIn = location.pathname != "/welcome";
console.log("start js", userIsLoggedIn);

if (!userIsLoggedIn) {
    elem = <Welcome />;
} else {
    elem = <App />;
}
ReactDOM.render(elem, document.querySelector("main"));
