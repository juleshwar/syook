import { Switch, Route, withRouter } from "react-router-dom";
import { useEffect } from "react";
import { useSelector } from "react-redux";
import DashboardPage from "./components/DashboardPage";
import LoginPage from "./components/LoginPage";

function App({ history }) {
  const isLoggedIn = useSelector((state) => state.currentUser.loggedIn);
  useEffect(() => {
    if (!isLoggedIn && history.location.pathname !== "/login") {
      history.push("/login");
    }
  });

  return (
    <Switch>
      <Route exact path="/login" component={LoginPage}></Route>
      <Route exact path="/dashboard" component={DashboardPage}></Route>
    </Switch>
  );
}

export default withRouter(App);
