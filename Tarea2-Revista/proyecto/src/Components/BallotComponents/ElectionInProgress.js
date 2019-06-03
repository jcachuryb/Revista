import React from 'react';
import { observer } from 'mobx-react';
import { CandidateView } from './CandidateView';
export const ElectionInProgressBallot = observer(class ElectionInProgress extends React.Component {
    vote = candidate => {
        const { ballotState } = this.props;
        ballotState.candidate = candidate;
        ballotState.newVote();
    };
    render() {
        const { candidates } = this.props.app;
        return (<article>

            <header className="center">
                <h2>La Cartelera</h2>
                <p className="flow-text">Acá podrás escoger la película que más te gusta de todas.
                    ¡La ganadora será proyectada en los cuarteles de Globant!
                </p>
            </header>
            <div className="row">
                {candidates.map((candidate, idx) => <CandidateView candidate={candidate} onVote={this.vote} key={idx} />)}
            </div>
        </article>);
    }
});
