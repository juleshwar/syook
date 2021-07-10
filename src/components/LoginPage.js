import { Component } from "react";
import Button from "./ui/Button";
import InputWithLabel from "./ui/InputWithLabel";

export default class LoginPage extends Component {
  render() {
    return (
      <section className="flex flex-col items-center my-32">
        <h3 className="text-xl">Login</h3>
        <form className="mt-4 grid grid-rows-2 gap-4">
          <InputWithLabel
            labelProps={{ label: "Name" }}
            inputProps={{ placeholder: "Enter your name" }}
          />
          <InputWithLabel
            labelProps={{ label: "Password" }}
            inputProps={{
              placeholder: "Enter your password",
              type: "password",
            }}
          />
          <Button buttonProps={{ primary: true }}>Login</Button>
        </form>
      </section>
    );
  }
}
