import React from 'react';
import { observer } from 'mobx-react';

export const Summary = observer(class Summary extends React.Component {



    render() {
        const { app } = this.props;

        var copyOfCandidates = [...app.candidates];
        copyOfCandidates = copyOfCandidates.sort((a, b) => {
            return b.votes - a.votes;
        })
        return (
            <div className="container">
                {
                    (() => {
                        if (app.state === "in_progress") {
                            return (<span>{<ElectionInProgress app={app} />}</span>);
                        } else {
                            if (app.state === "finished") {
                                return (<Resultados candidates={copyOfCandidates} />);
                            } else {
                                return (<ElectionUndefined />);
                            }
                        }
                    })()
                }
                <div>

                </div>

            </div>);
    }
});

function ElectionInProgress(props) {
    return (<div>
        <header>
            <h3>Votación en curso</h3>
        </header>
        <article>
            <div className="progress">
                <div className="indeterminate"></div>
            </div>
            <p className="flow-text">Actualmente, {props.app.candidates.length} películas se están disputando el primer lugar 
            a la favorita de todos los que hicieron parte del Bootcamp.</p>
        </article>
    </div>);
}

function ElectionUndefined(props) {
    return (<div>
        <header>
            <h3>No hay votaciones definidas aún</h3>
        </header>
        <article>
            
            <p>No worries, en cualquier momento el administrador va a iniciar las elecciones.
                <br/>
                Keep Calm
            </p>
        </article>
    </div>);
}

const Resultados = observer(class Resultados extends React.Component {
    render() {
        return (
            <div className="container">
                <ul className="collection">
                    {this.props.candidates.map((candidate, idx) =>

                        <CandidateView candidate={candidate} position={idx} key={idx}/>
                    )}
                </ul>

            </div>

        );
    }
})

const CandidateView = observer(({ position, candidate }) => (
    <li className="collection-item avatar">
        <h4>{position + 1} - {candidate.name}</h4>
        <p>Con un total de {candidate.votes} {candidate.votes === 1 ? 'voto' : 'votos'}
        </p>
    </li>
));


export default Summary;