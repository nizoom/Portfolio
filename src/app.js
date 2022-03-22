import React, { Component } from "react";
import './app.css';
import { BrowserRouter as Router, Route, Switch, Redirect, HashRouter } from "react-router-dom"

//Apps 
import Globalnews from "./Pages/apps/globalnews/src/globalnews"
//import EchoChamber from "./Pages/apps/echochamber/client/src/echochamber";
//import EchoChamber from "./Pages/app/"
//Pages

import HomePage from "./Pages/Homepage"
import NotFound from "./Pages/NotFound"
import About from "./Pages/About"
import Blog from "./Pages/blog"
import ContactPage from "./Pages/Contact/contactpage"
import IntroScreen from "./Pages/intro";

class App extends Component {
  render() {
    return (
      <HashRouter>
        <Switch>
          <Route exact path = "/Loader" component = {IntroScreen}/>
          <Route exact path="/" component={HomePage} />
          <Route exact path="/About" component={About} />
          <Route exact path="/Blog" component={Blog} />
          <Route exact path="/Contact" component={ContactPage} />
          <Route exact path="/globalnews" component={Globalnews} />
          {/* <Route exact path="/enterthechamber" component={EchoChamber} /> */}


          <Route path="/404" component={NotFound} />
          <Redirect to="/404" />
        </Switch>
      </HashRouter>
    )
  }
}

export default App;
