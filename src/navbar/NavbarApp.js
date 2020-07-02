import React, { Component } from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";

import TodoApp from "../todos/TodoApp";
import Navbar from "./Navbar";
import About from "./About";
import Contact from "./Contact";
import Post from "./Post";

class NavbarApp extends Component {
  render() {
    return (
      <BrowserRouter>
        <Navbar />
        <div className="container">
          <Switch>
            <Route exact path="/" component={TodoApp} />
            <Route path="/about" component={About} />
            <Route path="/contact" component={Contact} />
            <Route path="/:post_id" component={Post} />
          </Switch>
        </div>
      </BrowserRouter>
    );
  }
}

export default NavbarApp;
