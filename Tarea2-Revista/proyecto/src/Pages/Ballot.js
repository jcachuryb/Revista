import React from 'react';
import { observable, action, computed, extendObservable } from 'mobx';

export class Ballot extends React.Component {

    constructor(props) {
        super(props);
        extendObservable(this, {

        })
        console.log("Rendered Ballot")
        console.log(this.props)
    }

    vote = candidate => {

    }

    render() {
        const { candidates } = this.props;
        return (<div>
            <h3>This is the ballot paper</h3>
            {candidates.map((candidate, idx) => <CandidateView candidate={candidate} onVote={this.props.onVote} key={idx} />)}

        </div>);
    }
}

class CandidateView extends React.Component {

    constructor(props) {
        super(props);

    }

    vote = e => {
        this.props.onVote(this.props.candidate);
    }

    render() {
        const { candidate } = this.props;
        return (<div>
            <h3>{candidate.name}</h3>
            Votos: <span className="small">{candidate.votes}</span>
            <button class="btn waves-effect waves-light" onClick={this.vote}>Vote
            <i class="material-icons right">send</i>
            </button>
        </div>);
    }
}


export default Ballot;