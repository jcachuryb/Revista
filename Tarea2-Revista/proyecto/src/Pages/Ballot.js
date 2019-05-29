import React from 'react';
import { Button } from "react-materialize/lib/";
import { observer } from 'mobx-react'
import sample from '../images/sample-1.jpg'
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
            <p>A continuaci&oacute;n, escoge el tema que más te interesó en el Bootcamp.</p>
            </header>
            <div className="row">
                {candidates.map((candidate, idx) =>

                    <CandidateView candidate={candidate} onVote={this.vote} key={idx} />
                )}
            </div>
            <VoteModal ballotState={ballotState} actionVote={this.props.app.onVote} />
        </div>);
    }
});

const CandidateView = observer(({ candidate, onVote }) => (
    <div class="col s3 m2">
        <div class="card hoverable">
            <div class="card-image">
                <img src={sample} alt="logo" />
                <span class="card-title">{candidate.name}</span>
                <button
                    class="btn-floating halfway-fab waves-effect waves-light red "
                    onClick={() => {
                        onVote(candidate)
                    }}>Votar</button>
            </div>
            <div class="card-content">
                <p>{candidate.description}</p>
                <p>{candidate.votes} {candidate.votes === 1 ? 'vote' : 'votes'}</p>
            </div>
        </div>
    </div>
));


export default Ballot;