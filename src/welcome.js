import React from "react";
import Register from "./register";
import { HashRouter, Route } from "react-router-dom";
import Login from "./login";

export default function Welcome() {
    return (
        <div>
            <p>Welcome to</p>
            <div>
                <img src="https://img.pngio.com/logopond-logo-brand-identity-inspiration-cakewalk-cake-walk-png-325_260.png" />
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
