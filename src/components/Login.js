import React, {Component} from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import {Button, FormGroup, FormControl} from "react-bootstrap";
import "./Login.css";
import "../App.css";

export default class Login extends Component {
  constructor(props) {
    super(props);
    this.state = {
      email: "",
      password: ""
    };
  }
  validateForm() {
    return this.state.email.length>0 && this.state.password.length>0;
  }

  handleChange = event => {
    this.setState({
      [event.target.id]: event.target.value
    });
  }
  handleSubmit = event => {
    event.preventDefault();
  }

  render() {
    return (
      <div className="Login text-red login-bgcolor">
          <h3 align="center">LogIn</h3>
          <div className="login-form">
          <form onSubmit={this.handleSubmit}>
            <FormGroup controlId="email" bsSize="large">Enter Your Email Id:
              <FormControl
                autoFocus
                placeholder="eg.: harrypotter7@gmail.com"
                type="email"
                value={this.state.email}
                onChange={this.handleChange}
              />
            </FormGroup>
            <FormGroup controlId="password" bsSize="large">Enter Your Password:
              <FormControl
                placeholder="Password"
                value={this.state.password}
                onChange={this.handleChange}
                type="password"
              />
            </FormGroup>
            <Button
              block
              bsSize="large"
              disabled={!this.validateForm()}
              type="submit"
            >
              Login
            </Button>
          </form>
        </div>
      </div>
    );
  }
}
