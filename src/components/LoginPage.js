import { useEffect, useState } from "react";
import Button from "./ui/Button";
import InputWithLabel from "./ui/InputWithLabel";
import AuthenticationService from "../services/AuthenticationService";
import { usersActions } from "../store/slices/users";
import { useDispatch, useSelector } from "react-redux";
import { withRouter } from "react-router-dom";

function LoginPage({ history }) {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const dispatch = useDispatch();

  const isLoggedIn = useSelector((state) => state.users.loggedIn);

  useEffect(() => {
    if (isLoggedIn && history.location.pathname === "/login") {
      history.goBack();
    }
  });

  function onClickSubmit(userDetails, e) {
    e.preventDefault();
    try {
      if (AuthenticationService.authenticateUserCredentials(userDetails)) {
        dispatch(usersActions.logInUser(userDetails));
        history.push("/dashboard");
      } else {
        window.alert("Wrong credentials. Sorry!");
      }
    } catch (error) {
      window.alert(error);
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

export default withRouter(LoginPage);
