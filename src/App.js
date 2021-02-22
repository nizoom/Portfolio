import React, { Component } from "react";
import './App.css';
import { BrowserRouter as Router, Route, Switch, Redirect, HashRouter } from "react-router-dom"

//Pages

import HomePage from "./Pages/Homepage"
import NotFound from "./Pages/NotFound"
import About from "./Pages/About"
import Blog from "./Pages/blog"
import Tester from "./Pages/Contact/tester"

class App extends Component{
  render (){
    return (
      <HashRouter>
        <Switch>
          <Route exact path = "/" component = { HomePage }/>
          <Route exact path = "/About" component = { About }/>
          <Route exact path = "/Blog" component = { Blog } />
          <Route exact path = "/Contact" component = { Tester } />
          <Route path = "/404" component = { NotFound }/>
          <Redirect to = "/404"/>
        </Switch>
      </HashRouter>
    )
  }
}

export default App;
