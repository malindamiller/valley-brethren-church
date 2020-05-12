import React, { Component } from "react";
import ReactDOM from "react-dom";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import Home from "./home.js";
import About from "./about.js";
import Ministries from "./ministries.js";
import Outreaches from "./outreaches.js";
import Camp from "./camp.js";
import Calendar from "./calendar.js";

export class Main extends Component {
  render() {
    return (
      // <Router basename="/valley-brethren-church">
      <Router basename={process.env.PUBLIC_URL}>
        <Route exact path="/" component={Home} />
        <Route exact path="/about" component={About} />
        <Route exact path="/ministries" component={Ministries} />
        <Route exact path="/camp" component={Camp} />
        <Route exact path="/outreaches" component={Outreaches} />
        <Route exact path="/calendar" component={Calendar} />
      </Router>
    );
  }
}
export default Main;
