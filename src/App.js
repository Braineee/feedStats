import React from "react";
import { Route, Switch } from "react-router-dom";

import Header from "./components/header-components/header.component";
import Footer from "./components/footer-components/footer.component";
import HomePage from "./pages/homepage/hompage.page";
import ReviewPage from "./pages/review/review.page";

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
          <Route exact path="/" component={HomePage}></Route>
          <Route path="/review" component={ReviewPage}></Route>
        </Switch>
        <Footer />
      </div>
    );
  }
}

export default App;
