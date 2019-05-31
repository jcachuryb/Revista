import { observable, action, decorate } from 'mobx';


export default class BallotState {
    candidate
    isVoting;
    onVotingBegins;

    onVotingEnds = () => {
        this.isVoting = false;
        this.candidate = {};
    }

    newVote = () => {
        if (!this.isVoting) {
            this.isVoting = true;
            this.onVotingBegins();
        }
    }


    constructor() {
        this.candidate = {};
        this.isVoting = false;
        this.onVotingBegins = null;
    }
}

decorate(BallotState, {
    candidate: observable,
    isVoting: observable,
    onVotingEnds: action,
    newVote: action
});
