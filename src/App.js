import React, { Component } from "react";
import './App.css';
import { BrowserRouter as Router, Route, Switch, Link, Redirect } from "react-router-dom"

//Pages

import HomePage from "./Pages/Homepage"
import NotFound from "./Pages/NotFound"
import About from "./Pages/About"

class App extends Component{
  render (){
    return (
      <Router>
        <Switch>
          <Route exact path = "/" component = { HomePage }/>
          <Route path = "/404" component = { NotFound }/>
          <Route exact path = "/About" component = { About }/>
          <Redirect to = "/404"/>
        </Switch>
      </Router>
    )
  }
}

export default App;
