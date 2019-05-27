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
            <h3>El tarjet&oacute;n</h3>
            <p>A continuaci&oacute;n, escoge el candidato que quieres como personero o personero este año.</p>
            <div className="row">
                {candidates.map((candidate, idx) =>

                    <CandidateView candidate={candidate} onVote={this.vote} key={idx} />
                )}
            </div>

        </div>);
    }
});

const CandidateView = observer(({ candidate, onVote }) => (
    <div class="col m2">
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