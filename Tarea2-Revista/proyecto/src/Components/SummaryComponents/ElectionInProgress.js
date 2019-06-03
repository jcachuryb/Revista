import React from 'react';
import { observer } from 'mobx-react';
export const ElectionInProgressSummary = observer(class ElectionInProgress extends React.Component {

    render() {
        const { candidates } = this.props.app;
        return (<div>
            <header>
                <h3>Votación en curso</h3>
            </header>
            <article>
                <div className="progress">
                    <div className="indeterminate"></div>
                </div>
                <p className="flow-text">Actualmente, {candidates.length} películas se están disputando el primer lugar
                a la favorita de todos los que hicieron parte del Bootcamp.</p>
            </article>
        </div>);
    }
});
