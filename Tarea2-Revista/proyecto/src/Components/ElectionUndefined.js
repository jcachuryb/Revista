import React from 'react';

export class ElectionUndefined extends React.Component {

    render() {
        return (<div>
            <header>
                <h3>No hay votaciones definidas aún</h3>
            </header>
            <article>
                
                <p>No worries, en cualquier momento el administrador va a iniciar las elecciones.
                    <br/>
                    Keep Calm
                </p>
            </article>
        </div>);
    }
};
