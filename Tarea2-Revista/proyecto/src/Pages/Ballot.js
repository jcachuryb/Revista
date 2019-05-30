import React from 'react';
import { observer } from 'mobx-react';
import sample from '../images/sample-1.jpg';
import VoteModal from './VoteModal';

const Ballot = observer(class Ballot extends React.Component {

    constructor(props) {
        super(props);
    }

    vote = candidate => {
        const { ballotState } = this.props;
        ballotState.candidate = candidate;
        ballotState.newVote();
    }

    render() {
        const { candidates } = this.props.app;
        const { ballotState } = this.props;
        return (<div>
            <header className="center">
                <h3>El tarjet&oacute;n</h3>
                <p>A continuaci&oacute;n, escoge el área que más le interesa en el mundo tecnológico.</p>
            </header>
            <div className="container">

                <div className="row">
                    {candidates.map((candidate, idx) =>

                        <CandidateView candidate={candidate} onVote={this.vote} key={idx} />
                    )}
                </div>
            </div>
            <VoteModal ballotState={ballotState} actionVote={this.props.app.onVote} />
        </div>);
    }
});

const CandidateView = observer(({ candidate, onVote }) => (
    <div class="col s12 m4 l3">
        <div class="card hoverable">
            <div class="card-image">
                <img src={sample} alt="logo" />
                <button
                    class="btn-floating halfway-fab waves-effect waves-light red "
                    onClick={() => {
                        onVote(candidate)
                    }}>Votar</button>
            </div>
            <div class="card-content">
                <span class="card-title">{candidate.name}</span>
            </div>
        </div>
    </div>
));


export default Ballot;