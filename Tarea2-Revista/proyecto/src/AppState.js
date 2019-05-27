import { observable, action, computed, extendObservable, decorate } from 'mobx';


export default class AppState {
    candidates = [];
    is_loading = true;
    is_saving = false;

    start = Date.now();
    current = Date.now();

    get elapsedTime() {
        return this.current - this.start + "milliseconds";
    }


    get totalVotes() {
        // return this.candidates.reduce((aggregate, candidate) => {
        //     return candidate.votes + aggregate;
        // })
        return this.candidates.filter(
            candidate => candidate.votes > 0
        ).length;
    }

    onVote = (candidate) => {
        var modelCandidate = this.candidates.filter(c => {
            return c.name === candidate.name;
        })[0];
        if (modelCandidate != null) {
            console.log("A vote for " + modelCandidate.name)
            modelCandidate.votes += 1;
            if (modelCandidate.votes % 5 === 0) {
                this.candidates.push(
                    { name: "Candidato" + modelCandidate.votes, votes: 0 }
                )
            }

        }
    }
    constructor() {
        this.candidates = [
            { name: "Fry", votes: 1 },
            { name: "Leela", votes: 3 },
        ]
    }
}

decorate(AppState, {
    candidates: observable,
    is_loading: observable,
    is_saving: observable,
    totalVotes: computed,
    
    start: observable,
    current: observable,
    elapsedTime: computed,

    onVote: action
});
