import React, { Component } from "react";
import './App.css';
import {
  BrowserRouter as Router,
  Route,
  Link,
  Redirect,
  withRouter
} from "react-router-dom";
import { observer } from 'mobx-react'
import LoginPage, { Authentication } from './Pages/Login'
import Ballot from './Pages/Ballot';
import Summary from "./Pages/Summary";
import Footer from "react-materialize/lib/Footer";
import BallotState from "./BallotState";


class App extends React.Component {
  render() {

    const ballotState = new BallotState();
    ballotState.isVoting = false;
    const app = this.props.app;
    return (
      <div>
        <Router>
          <Header app={app} />
          <div>

            <Route exact path="/"
              render={props => <Ballot app={app} ballotState={ballotState} />}
            />
            <Route path="/summary"
              render={props => <Summary app={app} />}
            />
            <Route path="/login" component={LoginPage} />
          </div>
        </Router>
      </div>
    );
  }
}


const Header = observer(class Header extends React.Component {
  render() {
    const { app } = this.props;
    return (
      <header>
        <nav>
          <div className="nav-wrapper blue darken-2">
            <a href="#!" class="brand-logo left ">
            Bootcamp Favorites
            <i class="material-icons large">code</i></a>

            <ul className="right hide-on-med-and-down">

              <li>
                <Link to="/">Ballot</Link>
              </li>
              <li>
                <Link to="/summary">Summary</Link>
              </li>
              <li>
                Votos: {app.totalVotes}
              </li>

            </ul>
          </div>
        </nav>
      </header>
    );
  }
});

function AfterVotation({ component: Component, ...rest }) {
  return (
    <Route
      {...rest}
      render={props =>
        props.app.open_elections ? (
          <Component {...props} />
        ) : (
            <Redirect
              to={{
                pathname: "/"
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

