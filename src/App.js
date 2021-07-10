import { Component } from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import LoginPage from "./components/LoginPage";

class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <Switch>
          <Route exact path="/" component={LoginPage}></Route>
          <Route exact path="/login" component={LoginPage}></Route>
        </Switch>
      </BrowserRouter>
    );
  }
}

export default App;
