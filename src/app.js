import React from "react";
import axios from "./axios";

import { BrowserRouter, Route } from "react-router-dom";
import AboutMe from "./about";
import ContactMe from "./contact";
import Portfolio from "./portfolio";
import Imgcarousel from "./imgcarousel";
import { Navbar, Nav, NavDropdown } from "react-bootstrap";

export default function App() {
    console.log("in app");

    return (
        <div>
            <BrowserRouter>
                <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
                    <Navbar.Brand href="#home" img>
                        Cake Walk
                    </Navbar.Brand>
                    <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                    <Navbar.Collapse id="responsive-navbar-nav">
                        <Nav className="mr-auto">
                            <Nav.Link href="/">About Me</Nav.Link>
                            <Nav.Link href="/portfolio">Portfolio</Nav.Link>
                            <Nav.Link href="/testimonials">
                                Testimonials
                            </Nav.Link>
                            <Nav.Link href="/meet">Meet</Nav.Link>
                            <Nav.Link href="/contactme">Contact</Nav.Link>
                            <Nav.Link href="/logout">LogOut</Nav.Link>
                            <NavDropdown
                                title="Dropdown"
                                id="collasible-nav-dropdown"
                            >
                                <NavDropdown.Item href="/menu">
                                    Menu
                                </NavDropdown.Item>
                                <NavDropdown.Item href="/faq">
                                    FAQ
                                </NavDropdown.Item>
                                <NavDropdown.Divider />
                                <NavDropdown.Item href="#action/3.4">
                                    Separated link
                                </NavDropdown.Item>
                            </NavDropdown>
                        </Nav>
                    </Navbar.Collapse>
                </Navbar>
                <div className="container">
                    <div className="content">
                        <Route
                            exact
                            path="/"
                            render={props => (
                                <Imgcarousel
                                    key={props.match.url}
                                    match={props.match}
                                    history={props.history}
                                />
                            )}
                        />
                        <Route
                            path="/portfolio"
                            render={props => (
                                <Portfolio
                                    key={props.match.url}
                                    match={props.match}
                                    history={props.history}
                                />
                            )}
                        />
                        <Route
                            path="/testimonials"
                            render={props => (
                                <Portfolio
                                    key={props.match.url}
                                    match={props.match}
                                    history={props.history}
                                />
                            )}
                        />
                        <Route
                            path="/meet"
                            render={props => (
                                <AboutMe
                                    key={props.match.url}
                                    match={props.match}
                                    history={props.history}
                                />
                            )}
                        />
                        <Route
                            path="/contactme"
                            render={props => (
                                <ContactMe
                                    key={props.match.url}
                                    match={props.match}
                                    history={props.history}
                                />
                            )}
                        />
                    </div>
                    <footer> &copy;upasana tyagi</footer>
                </div>
            </BrowserRouter>
        </div>
    );
}
