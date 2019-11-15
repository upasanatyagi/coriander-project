import React from "react";
import Register from "./register";
import { HashRouter, Route } from "react-router-dom";
import Login from "./login";

export default function Welcome() {
    return (
        <div className="wel">
            <p id="welcome">Welcome to</p>
            <div>
                <img id="welcome1" src="/pics/cakewalk.gif" />
            </div>

            <HashRouter>
                <div>
                    <Route exact path="/" component={Register} />
                    <Route path="/login" component={Login} />
                </div>
            </HashRouter>
        </div>
    );
}
