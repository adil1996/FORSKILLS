import React from 'react';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import CICON from './image/Title.jpg';
import {Navbar, NavDropdown, Nav} from "react-bootstrap";

import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";

import Login from "./components/login.component";
import SignUp from "./components/signup.component";
import HomePage from "./components/homePage";
import Contact from "./components/contact";
import Career from "./components/career";
import About from "./components/about";
import MainPage from "./components/MainPage";

function App() {
  document.title="FORSKILLS";
  return (
    <div className="App">
      <div id = 'homeNavigationBar'>
      <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
        <Navbar.Brand>
          <Link to={"/"}><img src={CICON} style={{ width: '30px', height:'30px'}}/></Link>
          <Link to={"/"} style={{color: "aliceblue"}}>FORSKILLS</Link>
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="mr-auto">
            <Nav.Link as={Link} to={"/contact"}>Contact US</Nav.Link>
            <Nav.Link as={Link} to={"/about"}>About US</Nav.Link>
            <Nav.Link as={Link} to={"/career"}>Career</Nav.Link>
          </Nav>
          <Nav>
            <Nav.Link as={Link} to={"/login"}>Login</Nav.Link>
            <Nav.Link as={Link} to={"/signup"}>SignUp</Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Navbar>
      </div>
      <div>
        <Switch>
          <Route exact path = "/" component={HomePage}></Route>
          <Route path = "/contact" component={Contact}></Route>
          <Route path = "/career" component={Career}></Route>
          <Route path = "/about" component={About}></Route>
          <Route path = "/login" component={Login}></Route>
          <Route path = "/signup" component={SignUp}></Route>
          <Route exact path = "/mainpage" component={MainPage}></Route>
        </Switch>
      </div>
    </div>
  );
}


export default App;
