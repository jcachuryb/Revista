import { observable, action, computed, decorate } from 'mobx';


export default class AppState {
    candidates = [];
    open_elections = true;
    timeRemaining = 0;
    state;

    intervalId;

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

    countDown = () => {
        this.timeRemaining = this.deadLine - new Date().getTime();
        if (this.timeRemaining < 0) {
            clearInterval(this.intervalId);
            this.state = 'finished';
        }
    }
    get getTimeRemaining() {
        var days = Math.floor(this.timeRemaining / (1000 * 60 * 60 * 24));
        var hours = Math.floor((this.timeRemaining % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
        var minutes = Math.floor((this.timeRemaining % (1000 * 60 * 60)) / (1000 * 60));
        var seconds = Math.floor((this.timeRemaining % (1000 * 60)) / 1000);
        if (days + hours + minutes + seconds == 0) {
            return "";
        } else {
            return (days > 0 ? days + " Día(s) " : "") + this.formatNumber(hours) + ":"
                + this.formatNumber(minutes) + ":" + this.formatNumber(seconds);
        }
    }

    formatNumber(number) {
        return number < 10 ? "0" + number : number;
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
            { id: 1, name: "Avengers: EndGame", votes: 0 },
            { id: 2, name: "Avengers: Infinity war", votes: 0 },
            { id: 3, name: "Black Panther", votes: 0 },
            { id: 4, name: "The Incredible Hulk", votes: 0 },
            { id: 5, name: "Guardians of the Galaxy", votes: 0 },
            { id: 6, name: "Captain America: Civil War", votes: 0 },
            { id: 7, name: "Doctor Strange", votes: 0 },
            { id: 8, name: "Spider-Man: Homecoming", votes: 0 },
            { id: 9, name: "Ant-man and The Wasp", votes: 0 },
            { id: 10, name: "Iron Man", votes: 0 },
            { id: 11, name: "Captain Marvel", votes: 0 },
            { id: 12, name: "Thor: Ragnarok", votes: 0 },
        ];
        this.deadLine = new Date(2019, 5, 2, 23, 16, 0).getTime();
        if (this.deadLine == null) {
            this.state = 'initial';
        } else {
            if (this.deadLine < new Date().getTime()) {
                this.state = 'finished';
            } else {
                this.intervalId = setInterval(() => {
                    this.countDown();
                }, 1000);
                this.state = 'in_progress';
            }
        }
    }
}

decorate(AppState, {
    state: observable,
    candidates: observable,
    open_elections: observable,
    timeRemaining: observable,

    onVote: action,
    countDown: action,

    totalVotes: computed,
    getTimeRemaining: computed
});
