import React from "react";
import './App.css';
import {
  BrowserRouter as Router,
  Route,
  Link,
  withRouter
} from "react-router-dom";
import { observer } from 'mobx-react'
import LoginPage, { Authentication } from './Components/Login'
import Ballot from './Components/Ballot';
import Summary from "./Components/Summary";
import BallotState from "./BallotState";
import Timer from "./Components/Timer";


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
            <span className="brand-logo left ">
              Bootcampers <span className="text-red">Marvel</span> fav movies
            <i className="material-icons large">code</i></span>

            <ul className="right hide-on-med-and-down">

              <li>
                <Link to="/">Votación</Link>
              </li>
              <li>
                <Link to="/summary">Resultados</Link>
              </li>
              <li className="blue darken-4">
                <Timer app={app} />
              </li>

            </ul>
          </div>
        </nav>
      </header>
    );
  }
});

export const AuthButton = withRouter(
  ({ history }) =>
    Authentication.isAuthenticated ? (
      <span>&nbsp;</span>
    ) : (
        <Link to="/login">Log in</Link>
      )
);


export default App;

