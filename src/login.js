import React from "react";
import axios from "./axios";

export default class Login extends React.Component {
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
            .post("/login", {
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
            <div className="login">
                {this.state.error && (
                    <div className="error">oops! That was your fault</div>
                )}
                <p id="loginline">Please login here:</p>
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
                <button className="btnSubmit" onClick={() => this.submit()}>
                    submit
                </button>
            </div>
        );
    }
}
