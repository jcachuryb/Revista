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
            
            this.candidates = this.shuffleCandidatesArray(this.candidates);

        }
    }


    shuffleCandidatesArray(array) {
        var currentIndex = array.length, temporaryValue, randomIndex;
      
        // While there remain elements to shuffle...
        while (0 !== currentIndex) {
      
          // Pick a remaining element...
          randomIndex = Math.floor(Math.random() * currentIndex);
          currentIndex -= 1;
      
          // And swap it with the current element.
          temporaryValue = array[currentIndex];
          array[currentIndex] = array[randomIndex];
          array[randomIndex] = temporaryValue;
        }
      
        return array;
      }

    constructor() {
        this.candidates = [
            { id: 1, name: "Cyclomatic ", votes: 0 },
            {id: 2, name: "Semantic in ", votes: 0},
            {id: 3, name: "React: State", votes: 0},
            {id: 4, name: "Candidato 4", votes: 0},
            {id: 5, name: "Candidato 5", votes: 0},
            {id: 6, name: "Candidato 6", votes: 0},
            {id: 7, name: "Candidato 7", votes: 0},
            {id: 8, name: "Candidato 8", votes: 0},
            {id: 9, name: "Candidato 9", votes: 0},
            {id: 10, name: "Candidato 10", votes: 0},
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
