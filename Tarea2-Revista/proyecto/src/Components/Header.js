import React from 'react';
import {
  Link,
} from "react-router-dom";
import { observer } from 'mobx-react';
import Timer from './Timer';

export const Header = observer(class Header extends React.Component {

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