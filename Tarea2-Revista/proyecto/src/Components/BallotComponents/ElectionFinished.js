import React from 'react';
import { observer } from 'mobx-react';
import {
    Link,
  } from "react-router-dom";
export const ElectionFinished = observer(class ElectionFinished extends React.Component {
    vote = candidate => {
        const { ballotState } = this.props;
        ballotState.candidate = candidate;
        ballotState.newVote();
    };
    render() {
        const { candidates } = this.props.app;
        return (<header className="center">
            <h2>La Cartelera</h2>
            <p className="flow-text">
                Se acabó el tiempo. Mira los resultados haciendo clic
                <Link to="/summary"> acá</Link>.
            </p>
        </header>);
    }
});
