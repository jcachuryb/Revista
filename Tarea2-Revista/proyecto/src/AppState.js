import { observable, action, computed, extendObservable, decorate } from 'mobx';


export default class AppState {
    candidates = [];
    open_elections = true;
    
    state;

    get totalVotes() {
        const candidatos = this.candidates.slice();
        var sum = 0;
        for (let idx = 0; idx < candidatos.length; idx++) {
            sum += candidatos[idx].votes;
        }
        return sum;
    }

    onVote = (candidate, idNumber) => {
        var modelCandidate = this.candidates.filter(c => {
            return c.id === candidate.id;
        })[0];
        if (modelCandidate != null) {
            console.log("A vote for " + modelCandidate.name)
            modelCandidate.votes += 1;
            if (modelCandidate.votes % 5 === 0) {
                this.candidates.push(
                    { name: "Candidato" + modelCandidate.votes, votes: 0, id: Math.random() * 100 }
                )
            }

        }
    }
    constructor() {
        this.candidates = [
            { id: 1, name: "Fry", votes: 1 },
            { id: 2, name: "Leela", votes: 3 },
        ];
        this.state = 'on_course';
    }
}

decorate(AppState, {
    state: observable,
    candidates: observable,
    open_elections: observable,
    totalVotes: computed,
    onVote: action
});
