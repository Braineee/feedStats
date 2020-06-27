import React from "react";
import { Route, Switch } from "react-router-dom";

import Header from "./components/header/header.component";
import Homepage from "./pages/homepage/hompage.page";

import "./App.scss";

class App extends React.Component {
  unSubscribeFromAuth = null;

  componentDidMount() {
  }

  componentWillUnmount() {
  }

  render() {
    return (
      <div className="App">
        <Header />
        <Switch>
          <Route exact path="/" component={Homepage}></Route>
        </Switch>
      </div>
    );
  }
}

export default App;
