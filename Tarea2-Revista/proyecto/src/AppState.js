import { action, computed, decorate, observable } from 'mobx';
import DataService from './DataService';

export default class AppState {
    candidates = [];
    open_elections = true;
    timeRemaining = 0;
    state;

    intervalId;
    dataService = new DataService();

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
            return { success: true, message: "Voto registrado" };
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
        if (days + hours + minutes + seconds === 0) {
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

        this.dataService.fetchElectionData().then(data => {
            
            this.candidates = data.candidatos;
            this.deadLine = data.fechaLimite;

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
        });
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
