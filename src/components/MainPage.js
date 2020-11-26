import React from 'react';
import '../css/mainPage.css';
import {Navbar, NavDropdown, Nav} from "react-bootstrap";
import { Component } from "react";

import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";

import Login from "./login.component";
import SignUp from "./signup.component";
import HomePage from "./homePage";
import Contact from "./contact";
import Career from "./career";
import About from "./about";


export default class MainPage extends Component  {

  componentDidMount(){
    document.getElementById('homeNavigationBar').style.display = "none";
 }

  render()
  {
    return (<Router>
    <div className="mainPage">
      <div id ="LoginNavPage">
      <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
        <Navbar.Brand>
          <Link to={"/home"} style={{color: "aliceblue"}}>Home</Link>
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="mr-auto">
            <Nav.Link as={Link} to={"/assesment"}>Assesment</Nav.Link>
          </Nav>
          <Nav>
            <Nav.Link as={Link} to={"/profile"}>Profile</Nav.Link>
            <Nav.Link as={Link} to={"/signout"}>Sign out</Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Navbar>
      </div>
      <div>
        <Switch>
          <Route exact path = "/home" component={HomePage}></Route>
          <Route path = "/assesment" component={Contact}></Route>
          <Route path = "/profile" component={Career}></Route>
          <Route path = "/signout" component={About}></Route>
        </Switch>
      </div>
    </div>
    </Router>
  );
}
}