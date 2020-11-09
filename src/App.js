import React from 'react';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import CICON from './image/Title.jpg';

import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";

import Login from "./components/login.component";
import SignUp from "./components/signup.component";
import HomePage from "./components/homePage";
import Contact from "./components/contact";
import Career from "./components/career";
import About from "./components/about";

function App() {
  document.title="FORSKILLS";
  return (<Router>
    <div className="App">
      <nav className="navbar navbar-expand-lg navbar-light fixed-top" style={{background: "black"}}>
        <div className="container">
        <Link to={"/"}><img src={CICON} style={{ width: '30px', height:'30px'}}/></Link>
          <Link className="navbar-brand" to={"/"} style={{color: "aliceblue"}}>FORSKILLS</Link>
          <div className="collapse navbar-collapse" id="navbarTogglerDemo02">
            <ul className="navbar-nav ml-auto">
              <li className="nav-item">
                <Link className="nav-link" to={"/about"} style={{color: "aliceblue"}}>ABOUT US</Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to={"/careers"} style={{color: "aliceblue"}}>CAREERS</Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to={"/contact"} style={{color: "aliceblue"}}>CONTACT US</Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to={"/sign-in"} style={{color: "aliceblue"}}>LOGIN</Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to={"/sign-up"} style={{color: "aliceblue"}}>SIGN UP</Link>
              </li>
            </ul>
          </div>
        </div>
      </nav>

      <div>
        <div>
          <Switch>
            <Route exact path='/' component={HomePage} />
            <Route path="/sign-in" component={Login} />
            <Route path="/sign-up" component={SignUp} />
            <Route path="/about" component={About} />
            <Route path="/careers" component={Career} />
            <Route path="/contact" component={Contact} />
          </Switch>
        </div>
      </div>
    </div></Router>
  );
}

export default App;
