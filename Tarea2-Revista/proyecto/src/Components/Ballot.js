import React from 'react';
import { observer } from 'mobx-react';
import sample from '../images/sample-1.jpg';
import VoteModal from './VoteModal';
import {
    Link,
  } from "react-router-dom";

const Ballot = observer(class Ballot extends React.Component {

    render() {
        const { app } = this.props;
        const { ballotState } = this.props;
        return (<div>
            <div className="container">
                {
                    (() => {
                        if (app.state === "in_progress") {
                            return (<span>{<ElectionInProgress app={app} ballotState={ballotState} />}</span>);
                        } else {
                            if (app.state === "finished") {
                                return (

                                    <header className="center">
                                        <h2>La Cartelera</h2>
                                        <p className="flow-text">
                                        Se acabó el tiempo. Mira los resultados haciendo clic  
                                        <Link to="/summary"> acá</Link>.
                                        </p>
                                    </header>
                                );
                            } else {
                                return (<h1>Ups, no hay votaciones definidas</h1>);
                            }
                        }
                    })()
                }

            </div>
            <VoteModal ballotState={ballotState} actionVote={this.props.app.onVote} />
        </div>);
    }
});


const ElectionInProgress = observer(class ElectionInProgress extends React.Component {

    vote = candidate => {
        const { ballotState } = this.props;
        ballotState.candidate = candidate;
        ballotState.newVote();
    }

    render() {
        const { candidates } = this.props.app;

        return (
            <article>

                <header className="center">
                    <h2>La Cartelera</h2>
                    <p className="flow-text">Acá podrás escoger la película que más te gusta de todas.
                        ¡La ganadora será proyectada en los cuarteles de Globant!
                </p>
                </header>
                <div className="row">
                    {candidates.map((candidate, idx) =>

                        <CandidateView candidate={candidate} onVote={this.vote} key={idx} />
                    )}
                </div>
            </article>
        );
    }
});

const CandidateView = observer(({ candidate, onVote }) => (
    <div className="col s12 m4 l3">
        <div className="card hoverable">
            <div className="card-image">
                <img src={sample} alt="logo" />
                <button
                    className="btn-floating halfway-fab waves-effect waves-light red "
                    onClick={() => {
                        onVote(candidate)
                    }}>Votar</button>
            </div>
            <div className="card-content">
                <span className="card-title">{candidate.name}</span>
            </div>
        </div>
    </div>
));


export default Ballot;