import React from 'react';
import {
  Link,
} from "react-router-dom";
import { observer } from 'mobx-react';

export const NoMatch = observer(class Header extends React.Component {

  render() {
    return (
      <section className="container">
        <div id="main" class="row">
          <div class="col s12">
            <div class="card">
              <div class="card-content">
                <span class="card-title">Página no encontrada :(</span>
                <p> Quizá la página que estás buscando ha sido borrada o escribiste una URL equivocada
                  <br />
                </p>
              </div>
              <div class="card-action">
                <Link to="/">Ir a la votación</Link>
                <Link to="/summary">Ver los resultados</Link>
              </div>
            </div>
          </div>
        </div>
      </section>
    );
  }
});