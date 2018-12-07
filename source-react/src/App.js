import React, { Component } from 'react';
import './App.css';
import Home from './Home';
import IssueList from './IssueList';
import { Link, Route, Redirect } from 'react-router-dom';


class App extends Component {
 
  render() {
    return (
      <div>
         <h1 className="text-center">Welcome to Issuetracker</h1>
          <nav className="navbar navbar-expand-lg navbar-dark" style={{backgroundColor: "#9E9FA0"}}>
            <Link className="navbar-brand" to="/">Issue Tracker</Link>
            <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent">
              <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse" id="navbarSupportedContent">
              <ul className="navbar-nav mr-auto">
                <li className="nav-item">
                  <Link className="nav-link" to="/" style={{ marginLeft: '20px'}}>Home</Link>
                </li>
                <li className="nav-item">
                  <Link className="nav-link" to="/issues" style={{ marginLeft: '20px'}}>List of Issues</Link>
                </li>
              </ul>
              <Link className="nav-link btn btn-primary float-right" to="/issues/new">Add new issue</Link>
            </div>
          </nav>
          
          <Route exact path="/" render ={() => ( <Redirect to="/home" />)} />
          <Route path="/home" component={Home} />
          <Route path="/issues" component={IssueList} />        
      </div>
    );
  }
}



export default App;
