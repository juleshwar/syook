import { Component } from "react";
import Button from "./ui/Button";
import InputWithLabel from "./ui/InputWithLabel";
import AuthenticationService from "../services/AuthenticationService";

export default class LoginPage extends Component {
  constructor() {
    super();
    this.state = {
      username: "",
      password: "",
    };
  }
  onClickSubmit(user, e) {
    e.preventDefault();
    console.log(AuthenticationService.authenticateUserCredentials(user));
  }
  render() {
    return (
      <section className="flex flex-col items-center my-32">
        <h3 className="text-xl">Login</h3>
        <form
          className="mt-4 grid grid-rows-2 gap-4"
          onSubmit={this.onClickSubmit.bind(this, {
            username: this.state.username,
            password: this.state.password,
          })}
        >
          <InputWithLabel
            labelProps={{ label: "Name" }}
            onChangeHandler={(value) => this.setState({ username: value })}
            inputProps={{
              placeholder: "Enter your name",
              value: this.state.username,
            }}
          />
          <InputWithLabel
            labelProps={{ label: "Password" }}
            onChangeHandler={(value) => this.setState({ password: value })}
            inputProps={{
              placeholder: "Enter your password",
              type: "password",
              value: this.state.password,
            }}
          />
          <Button buttonProps={{ primary: true }}>Login</Button>
        </form>
      </section>
    );
  }
}
