import React, { Component } from "react";
import "./app.css";
import {
  BrowserRouter as Router,
  Route,
  Switch,
  Redirect,
  HashRouter,
} from "react-router-dom";

//GlobalNews
import Globalnews from "./Pages/apps/globalnews/src/globalnews";
import LandingPage from "./Pages/apps/globalnews/src/landingpage";
import GNLogin from "./Pages/apps/globalnews/src/GNlogin";
import GNSignup from "./Pages/apps/globalnews/src/GNSignup";
import GNHomePage from "./Pages/apps/globalnews/src/GNhome";

//Pages

import HomePage from "./Pages/Homepage";
import NotFound from "./Pages/NotFound";
import About from "./Pages/About";
import Blog from "./Pages/blog";
import ContactPage from "./Pages/Contact/contactpage";
import IntroScreen from "./Pages/intro";
import Resume from "./Pages/resume";

class App extends Component {
  render() {
    return (
      <HashRouter>
        <Switch>
          <Route exact path="/Intro" component={IntroScreen} />
          <Route exact path="/" component={HomePage} />
          <Route exact path="/About" component={About} />
          <Route exact path="/Blog" component={Blog} />
          <Route exact path="/Contact" component={ContactPage} />
          <Route exact path="/resume" component={Resume} />
          <Route exact path="/resume" component={Resume} />

          {/* <Route exact path="/globalnews" component={Globalnews} /> */}
          <Route exact path="/globalnews/landingpage" component={LandingPage} />
          <Route exact path="/globalnews/login" component={GNLogin} />
          <Route exact path="/globalnews/signup" component={GNSignup} />
          <Route exact path="/globalnews/home" component={GNHomePage} />

          <Route path="/404" component={NotFound} />
          <Redirect to="/404" />
        </Switch>
      </HashRouter>
    );
  }
}

export default App;
