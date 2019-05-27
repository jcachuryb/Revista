import React from 'react';
import { Button } from "react-materialize/lib/";
import { observer } from 'mobx-react'
import sample from '../images/sample-1.jpg'

const Ballot = observer(class Ballot extends React.Component {

    constructor(props) {
        super(props);

        console.log("Rendered Ballot")
        console.log(this.props)
    }

    vote = candidate => {
        this.props.app.onVote(candidate);
    }

    render() {
        const { candidates } = this.props.app;
        return (<div>
            <h3>This is the ballot paper</h3>
            {candidates.map((candidate, idx) =>

                <div class="row">
                    <CandidateView candidate={candidate} onVote={this.vote} key={idx} />
                </div>
            )}

        </div>);
    }
});

const CandidateView = observer(({ candidate, onVote }) => (
    <div class="col  m3">
        <div class="card">
            <div class="card-image">
                <img src={sample} alt="logo" />
                <span class="card-title">{candidate.name}</span>
                <button
                    class="btn-floating halfway-fab waves-effect waves-light red"
                    onClick={() => {
                        onVote(candidate)
                    }}><i class="material-icons">add</i></button>
            </div>
            <div class="card-content">
                <p>{candidate.description}</p>
                <hr></hr>
                <p>{candidate.votes} {candidate.votes === 1 ? 'vote' : 'votes'}</p>
            </div>
        </div>
    </div>
));


export default Ballot;