import { Switch, Route, withRouter } from "react-router-dom";
import DashboardPage from "./components/DashboardPage";
import LoginPage from "./components/LoginPage";

function App() {
  return (
    <Switch>
      <Route exact path="/login" component={LoginPage}></Route>
      <Route exact path="/dashboard" component={DashboardPage}></Route>
    </Switch>
  );
}

export default App;
