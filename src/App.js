import { BrowserRouter, Switch, Route } from "react-router-dom";
import DashboardPage from "./components/DashboardPage";
import LoginPage from "./components/LoginPage";

function App() {
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path="/" component={LoginPage}></Route>
        <Route exact path="/login" component={LoginPage}></Route>
        <Route exact path="/dashboard" component={DashboardPage}></Route>
      </Switch>
    </BrowserRouter>
  );
}

export default App;
