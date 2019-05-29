import React from 'react';
import { observer } from 'mobx-react'
import * as M from "materialize-css";

const VoteModal = observer(class VoteModal extends React.Component {

    modalInstance = null;

    constructor(props) {
        super(props);
    }
    
    componentDidMount() {
        var modalBlock = document.getElementById('modal1');
        this.modalInstance = M.Modal.init(modalBlock, {
            dismissible: false
        });
        this.props.ballotState.onVotingBegins = this.onNewVote;
    }

    onNewVote = () => {
        document.getElementById('idnumber').value = "";
        this.modalInstance.open();
    }

    onVote = () => {
        let idNumber = document.getElementById('idnumber').value;
        if (idNumber.length < 3) {
            return;
        }

        const { ballotState } = this.props;

        this.props.actionVote(ballotState.candidate, idNumber);
        ballotState.onVotingEnds();
        this.modalInstance.close();
        M.toast({html: 'Voto registrado'})
    }

    render() {
        const { ballotState } = this.props;
        return (
            <section>

                <div id="modal1" class="modal">
                    <div class="modal-content">
                        <header className="center">
                            <h4>Confirmar el voto por {ballotState.candidate.name}</h4>
                            <p>A continuación, diligencia tus datos para registrar tu voto</p>
                        </header>
                        <article>
                            <div class="row">
                                <form class="col s12">
                                    <div class="row">
                                        <div class="input-field col s12">
                                            <input placeholder="Tarjeta de identidad, cédula, etc." id="idnumber" type="text" class="validate" />
                                            <label htmlFor="idnumber">Número de identificación</label>
                                        </div>
                                    </div>
                                </form>
                            </div>
                        </article>

                    </div>
                    <div class="modal-footer">
                        <button onClick={ballotState.onVotingEnds} className="modal-close waves-effect waves-green btn-flat">Cancelar</button>
                        <button onClick={this.onVote} className="waves-effect waves-light btn">Confirmar voto</button>
                    </div>
                </div>
            </section>
        );
    }
});


export default VoteModal;