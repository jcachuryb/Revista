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


class App extends React.Component {
  render() {

    const app = this.props.app;
    return (
      <Router>
        <div>
          <Header app={app} />

          <Route exact path="/"
            render={props => <Ballot app={app} />}
          />
          <Route path="/summary"
            render={props => <Summary app={app} />}
          />
          <Route path="/login" component={LoginPage} />
        </div>
      </Router>
    );
  }
}


const Header = observer(class Header extends React.Component {
  render() {
    const { app } = this.props;
    return (
      <nav>
        <div className="nav-wrapper green">
          <a href="#!" class="brand-logo right ">Elecciones 2020</a>
          <ul className="left hide-on-med-and-down">

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
    );
  }
});

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

