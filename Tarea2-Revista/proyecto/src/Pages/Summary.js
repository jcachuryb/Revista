import React from 'react';
import { observer } from 'mobx-react';

export class Summary extends React.Component {



    render() {
        const { app } = this.props;

        var copyOfCandidates = [...app.candidates];
        copyOfCandidates = copyOfCandidates.sort((a,b) => {
            return b.votes - a.votes;
        })
        return (
            <div>
                <div>
                    <header>
                        <h3>{app.state === 'on_course' ? 'Elecciones en curso' : 'Done'}</h3>

                    </header>
                    <div class="progress">
                        <div class="indeterminate"></div>
                    </div>
                </div>
                <div className="container">
                    <ul class="collection">
                        {copyOfCandidates.map((candidate, idx) =>

                            <CandidateView candidate={candidate} position={idx} />
                        )}
                    </ul>

                </div>
            </div>);
    }
}

const CandidateView = observer(({ position, candidate }) => (
    <li class="collection-item avatar">
        <h4>{position + 1} - {candidate.name}</h4>
        <p>Con un total de {candidate.votes} {candidate.votes === 1 ? 'voto' : 'votos'}
        </p>
    </li>
));


export default Summary;