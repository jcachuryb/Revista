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
                <p> Quizá la página que estás buscando ha sido borrada o escribiste mal la URL.
                  <br />
                  Puedes continuar con alguna de las siguientes opciones 
                </p>
              </div>
              <div class="card-action">
                <Link to="/">Inicio</Link>
                <Link to="/ballot">Cartelera de votación</Link>
                <Link to="/summary">Ver los resultados</Link>
              </div>
            </div>
          </div>
        </div>
      </section>
    );
  }
});