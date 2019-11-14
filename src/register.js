import React from "react";
import axios from "./axios";
import { Link } from "react-router-dom";

export default class Register extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            error: null
        };
    }
    handleChange({ target }) {
        this.setState({
            [target.name]: target.value
        });
    }
    submit() {
        axios
            .post("/register", {
                first: this.state.first,
                last: this.state.last,
                email: this.state.email,
                password: this.state.password
            })
            .then(({ data }) => {
                if (data.success) {
                    console.log(data);
                    location.replace("/");
                } else {
                    this.setState({
                        error: true
                    });
                }
            })
            .catch(e => {
                console.log(e);
                this.setState({
                    error: true
                });
            });
    }
    render() {
        return (
            <div className="reg">
                <div id="registration">
                    {this.state.error && (
                        <div className="error">oops! That was your fault</div>
                    )}

                    <input
                        name="first"
                        placeholder="firstname"
                        onChange={e => this.handleChange(e)}
                    />
                    <input
                        name="last"
                        placeholder="lastname"
                        onChange={e => this.handleChange(e)}
                    />
                    <input
                        name="email"
                        placeholder="email"
                        onChange={e => this.handleChange(e)}
                    />
                    <input
                        name="password"
                        type="password"
                        placeholder="password"
                        onChange={e => this.handleChange(e)}
                    />
                    <div id="btnlogin">
                        <button
                            className="btnSubmit"
                            onClick={() => this.submit()}
                        >
                            submit
                        </button>
                    </div>
                    <Link to="/login">Click here if already Registered!</Link>
                </div>
            </div>
        );
    }
}
