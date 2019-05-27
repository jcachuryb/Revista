import React from 'react';
import { Button } from "react-materialize/lib/";
import { observer } from 'mobx-react'

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
            {candidates.map((candidate, idx) => <CandidateView candidate={candidate} onVote={this.vote} key={idx} />)}

        </div>);
    }
});

const CandidateView = observer(({ candidate, onVote }) => (
    <div class="row">
        <div class="col s12 m7">
            <h2 class="header">{candidate.name}</h2>
            <div class="card horizontal">
                <div class="card-image">
                    <img src="https://lorempixel.com/100/190/nature/6" />
                </div>
                <div class="card-stacked">
                    <div class="card-content">
                        <p>Tiene {candidate.votes} {candidate.votes === 1 ? 'voto' : 'votos'}</p>
                    </div>
                    <div class="card-action">
                        <button onClick={() => {
                            onVote(candidate)
                        }} class="waves-effect waves-light btn">
                            <i class="material-icons left">cloud</i>
                            Votar</button>
                    </div>
                </div>
            </div>
        </div>
    </div>
));


export default Ballot;