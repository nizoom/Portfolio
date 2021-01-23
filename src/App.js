import React, { Component } from "react";
import './App.css';
import { BrowserRouter as Router, Route, Switch, Redirect } from "react-router-dom"

//Pages

import HomePage from "./Pages/Homepage"
import NotFound from "./Pages/NotFound"
import About from "./Pages/About"
import Blog from "./Pages/blog"

class App extends Component{
  render (){
    return (
      <Router>
        <Switch>
          <Route exact path = "/" component = { HomePage }/>
          <Route exact path = "/About" component = { About }/>
          <Route exact path = "/Blog" component = { Blog } />
          <Route path = "/404" component = { NotFound }/>
          <Redirect to = "/404"/>
        </Switch>
      </Router>
    )
  }
}

export default App;
