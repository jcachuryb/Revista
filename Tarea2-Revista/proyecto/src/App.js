import React, { Component } from "react";
import './App.css';
import {
  BrowserRouter as Router,
  Route,
  Link,
  Redirect,
  withRouter
} from "react-router-dom";
import Ballot from './Pages/Ballot'
import LoginPage, { Authentication } from './Pages/Login'
import { Card, Col, Row } from "react-materialize/lib/";
import Summary from "./Pages/Summary";
import { observable, action, computed, extendObservable } from 'mobx';


class App extends React.Component {

  constructor(props) {
    super(props);
    extendObservable(this, {
      candidates: [
        { name: "Fry", votes: 1 },
        { name: "Leela", votes: 3 },
      ],
      canVote: true,
      onVote: (candidate) => {
        var modelCandidate = this.candidates.filter(c => {
          return c.name === candidate.name;
        });
        console.log(candidate)
        console.log(modelCandidate)
        if (modelCandidate != null) {
          console.log("A vote for " + modelCandidate.name)
          modelCandidate.votes += 1;
        }
      },
      total: () => {
        return this.candidates.reduce(function (sum, candidate) {
          return sum + candidate.votes;
        }, 0);
      }
    })
  }

  render() {

    const { candidates, onVote } = this;
    return (
      <Router>
        <div>
          <Header candidates={candidates} />

          <Route exact path="/"
            render={props => <Ballot candidates={candidates} onVote={this.onVote} />}
          />
          <Route path="/summary" component={Summary} />
          <Route path="/login" component={LoginPage} />
        </div>
      </Router>
    );
  }
}


function Header() {
  return (
    <nav>
      <div class="nav-wrapper green">
        <a href="#!" class="brand-logo right ">Elecciones 2020</a>
        <ul class="left hide-on-med-and-down">

          <li>
            <Link to="/">Ballot</Link>
          </li>
          <li>
            <Link to="/summary">Summary</Link>
          </li>

        </ul>
      </div>
    </nav>
  );
}

function PrivateRoute({ component: Component, ...rest }) {
  return (
    <Route
      {...rest}
      render={props =>
        Authentication.isAuthenticated ? (
          <Component {...props} />
        ) : (
            <Redirect
              to={{
                pathname: "/login",
                state: { from: props.location }
              }}
            />
          )
      }
    />
  );
}


export const AuthButton = withRouter(
  ({ history }) =>
    Authentication.isAuthenticated ? (
      <span>&nbsp;</span>
    ) : (
        <Link to="/login">Log in</Link>
      )
);


export default App;

