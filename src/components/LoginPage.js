import { useState } from "react";
import Button from "./ui/Button";
import InputWithLabel from "./ui/InputWithLabel";
import AuthenticationService from "../services/AuthenticationService";

function LoginPage() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  function onClickSubmit(user, e) {
    e.preventDefault();
    if (AuthenticationService.authenticateUserCredentials(user)) {
      console.log("login");
    }
  }
  return (
    <section className="flex flex-col items-center my-32">
      <h3 className="text-xl">Login</h3>
      <form
        className="mt-4 grid grid-rows-2 gap-4"
        onSubmit={onClickSubmit.bind(this, {
          username,
          password,
        })}
      >
        <InputWithLabel
          labelProps={{ label: "Name" }}
          onChangeHandler={(value) => setUsername(value)}
          inputProps={{
            placeholder: "Enter your name",
            value: username,
          }}
        />
        <InputWithLabel
          labelProps={{ label: "Password" }}
          onChangeHandler={(value) => setPassword(value)}
          inputProps={{
            placeholder: "Enter your password",
            type: "password",
            value: password,
          }}
        />
        <Button buttonProps={{ primary: true }}>Login</Button>
      </form>
    </section>
  );
}

export default LoginPage;
