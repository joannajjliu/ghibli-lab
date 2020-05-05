import React from "react";
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
} from "react-router-dom";
import Container from 'react-bootstrap/Container';
import { Films } from './FilmHook';

export default function App() {
  return (
    <div>
      <Router>
        <Navbar bg="dark" variant="dark">
          {
            // 1. Modify the behaviour of the Navbar.Brand and Nav.Link elements to behave as a react-router
            //    <Link>. Using <Link> will not trigger a full page refresh when navigating within a router. 
            //    Hint: Use 'as' attribute
          }
          <Navbar.Brand href="/home">Lab 3 (Router)</Navbar.Brand>
          <Nav className="mr-auto">
            <Nav.Link href="/home">Home</Nav.Link>
            <Nav.Link href="/films">Films</Nav.Link>
          </Nav>
        </Navbar>
        {
          // 2. Replace the current <Home> return with  two <Route> components within a <Switch> component
          // a. The first route will render the <Films> component if the path is "/films/:id?" or "/films"
          // b. The second route will render the <Home> component if the path is "/"
        }
        <Home />




        
      </Router> 
    </div>
  );
}

function Home() {
  return (
    <Container>
      <h3 className="display-3">Home</h3>
      <p>This lab aims to apply the basics of react-router.</p>
    </Container>);
}
