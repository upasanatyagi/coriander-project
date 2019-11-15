import React, { useState } from "react";

import { BrowserRouter, Route, Link } from "react-router-dom";
import AboutMe from "./about";
import ContactMe from "./contact";
import Portfolio from "./portfolio";
import Imgcarousel from "./imgcarousel";
import { Navbar, Nav, NavDropdown } from "react-bootstrap";
import Order from "./order";
import Display from "./imageformdisplay";
import Checkout from "./checkout";
import Faq from "./faq";
import Testimonials from "./testimonials";
import ShoppingKart from "./shoppingkart";
import Menu from "./menu";

export default function App() {
    console.log("in app");
    const [chkDetail, setchkDetail] = useState();
    console.log("app chkDetail", chkDetail);
    return (
        <div>
            <BrowserRouter>
                <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
                    <Navbar.Brand href="/pics/cakewalk.gif">
                        Cake Walk
                    </Navbar.Brand>
                    <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                    <Navbar.Collapse id="responsive-navbar-nav">
                        <Nav className="mr-auto">
                            <Link className="nav-link" to="/">
                                Home
                            </Link>
                            <Link className="nav-link" to="/portfolio">
                                Portfolio
                            </Link>
                            <Link className="nav-link" to="/testimonials">
                                Testimonials
                            </Link>
                            <Link className="nav-link" to="/meet">
                                Meet
                            </Link>
                            <Link className="nav-link" to="/contactme">
                                Contact
                            </Link>

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
                            </NavDropdown>
                            <Nav.Link href="/logout">LogOut</Nav.Link>
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
                                <Testimonials
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
                        <Route
                            path="/order"
                            render={props => (
                                <Order
                                    key={props.match.url}
                                    match={props.match}
                                    history={props.history}
                                />
                            )}
                        />
                        <Route
                            path="/display/:id"
                            render={props => (
                                <Display
                                    {...props}
                                    setchkDetail={setchkDetail}
                                />
                            )}
                        />
                        <Route path="/faq" component={Faq} />
                        <Route path="/shoppingkart" component={ShoppingKart} />
                        <Route path="/menu" component={Menu} />
                        <Route
                            path="/checkout"
                            render={props => (
                                <Checkout {...props} chkDetail={chkDetail} />
                            )}
                        />
                    </div>
                    <footer> &copy;Upasana Garg</footer>
                </div>
            </BrowserRouter>
        </div>
    );
}
