import React, { Component } from "react";
import { Link } from "react-router-dom";
import Logo from "../Components/logo/logo"
import Sidebar from "../Components/sidebar/sidebar"


class HomePage extends Component {
  state = {
    sidebarVisible : false
  }

  clickHandler = ( ) => {
  this.setState(prevstate => ({
    sidebarVisible : !prevstate.sidebarVisible }))
  console.log(this.state.sidebarVisible);
}

  render() {
    return(
      <div>
          <Logo/>

          <Sidebar
          onClick = {this.clickHandler}
          sidebarStatus = {this.state.sidebarVisible}
          />
          <h2> Welcome to homepage </h2>
          <h3> Main Content Here </h3>

          <Link to = "/About"
        
          > About </Link>
     </div>
    )
}}

export default HomePage;
