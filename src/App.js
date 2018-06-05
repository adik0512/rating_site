import React, { Component } from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import { DivBackground } from "./App.styled";
import Home from "./components/Home";
import Settings from "./components/Settings";
import ErrorPath from "./components/ErrorPath";
import Navigation from "./components/Navigation";
import SignIn from "./components/SignIn";

class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <DivBackground>
          <Navigation />
          <link
            href="https://fonts.googleapis.com/css?family=Hind+Vadodara"
            rel="stylesheet"
          />
          <Switch>
            <Route path="/" component={Home} exact />
            <Route path="/settings" component={Settings} />
            <Route path="/signin" component={SignIn} />
            <Route component={ErrorPath} />
          </Switch>
        </DivBackground>
      </BrowserRouter>
    );
  }
}

export default App;
