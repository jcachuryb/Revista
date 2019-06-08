import React from "react";
import './App.css';
import {
  BrowserRouter as Router,
  Route,
  Switch
} from "react-router-dom";
import LoginPage from './Components/Login'
import Ballot from './Components/Ballot';
import Summary from "./Components/Summary";
import BallotState from "./BallotState";
import { Header } from "./Components/Header";
import { NoMatch } from "./Components/404";
import { Home } from "./Components/Home";


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

            <Switch>
              <Route exact path="/"
                render={props => <Home app={app} ballotState={ballotState} />}
              />
              <Route exact path="/ballot"
                render={props => <Ballot app={app} ballotState={ballotState} />}
              />
              <Route path="/summary"
                render={props => <Summary app={app} />}
              />
              <Route path="/login" component={LoginPage} />
              <Route component={NoMatch} />
            </Switch>
          </div>
        </Router>
      </div>
    );
  }
}

export default App;

