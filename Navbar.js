import React from 'react';
import SignUp from './SignUp';
import './Navbar.css';
import News from './News';
import Exercice from './Exercice';
import About from './About';
import Home from './Home';
import Login from './Login.component';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Button } from 'react-bootstrap';
import HomeIcon from '@material-ui/core/Icon'
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";


function Navbar() {
    return (
 <Router>
      <div className="Navbar">
        <ul>
          <li>
            <Link to="/">Home </Link>
            
          </li>
          <li>
            <Link to="/About">About</Link>
          </li>
          <li>
            <Link to="/Exercice">Exercice</Link>
          </li>
          <li>
            <Link to="/News">News</Link>
          </li>
          <li className="   ">
            <Link to="/SignUp">SignUp</Link>
          </li>
          <li className="Navbar__login">
              
            <Link to="/Login">Login</Link>
          </li>
           
        </ul>
      
        <Switch>
          <Route path="/about">
            <About />
          </Route>
      
          <Route path="/Login">
            <Login />
          </Route>  
          <Route path="/SignUp">
            <SignUp />
          </Route>

          <Route path="/News">
            <News />
          </Route>
          <Route path="/Exercice">
            <Exercice />
          </Route>

          <Route path="/">
            <Home />
          </Route>
               
        </Switch>
    
      </div>
      
    </Router>
    
    )
}

export default Navbar
