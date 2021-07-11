import { useEffect, useState } from "react";
import Button from "./ui/Button";
import InputWithLabel from "./ui/InputWithLabel";
import AuthenticationService from "../services/AuthenticationService";
import { actions as currentUserActions } from "../store/slices/currentUser";
import { useDispatch, useSelector } from "react-redux";
import { withRouter } from "react-router-dom";

function LoginPage({ history }) {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const dispatch = useDispatch();
  const isLoggedIn = useSelector((state) => state.currentUser.loggedIn);

  useEffect(() => {
    if (isLoggedIn && history.location.pathname === "/login") {
      history.goBack();
    }
  })

  function onClickSubmit(user, e) {
    e.preventDefault();
    if (AuthenticationService.authenticateUserCredentials(user)) {
      dispatch(currentUserActions.logInUser(user));
      history.push("/dashboard");
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
