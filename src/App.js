import './App.scss';
import Nav from './components/Navigation/Nav';
import Login from './components/Login/Login';
import React from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  // Link
} from "react-router-dom";


function App() {
  return (
    <Router>

  <div className='App-container'>
      <Nav />
    
        <Switch>
          <Route path="/home">
            Home
          </Route>
          <Route path="/about">
            <About />
          </Route>
          <Route path="/login">
            <Login />
          </Route>
          <Route path="/News">
            <News />
          </Route>
          <Route path="/" exact>
          Trang chur home
          </Route>
          <Route path="*">
404 Notfout
          </Route>
        </Switch>
  </div>
    </Router>
  );
}

function Home() {
  return <h2>Home</h2>;
}

function About() {
  return <h2>About</h2>;
}

function News() {
  return <h2>News</h2>;
}


export default App;
