import React from 'react';
import { observer } from 'mobx-react'
import * as M from "materialize-css";

export const VoteModal = observer(class VoteModal extends React.Component {

    modalInstance = null;

    componentDidMount() {
        var modalBlock = document.getElementById('modal1');
        this.modalInstance = M.Modal.init(modalBlock, {
            dismissible: false,
            onOpenEnd: () => {
                document.getElementById('idnumber').focus();
                return;
            }
        });
        this.props.ballotState.onVotingBegins = this.onNewVote;
    }

    onNewVote = () => {
        document.getElementById('idnumber').value = "";
        this.modalInstance.open();
    }

    onVote = () => {
        let idNumber = document.getElementById('idnumber').value;
        if (!/^([A-Za-z0-9]{4,12})$/.test(idNumber)) {
            alert("El número de identidad debe contener sólamente números y letras.")
            return;
        }

        const { ballotState } = this.props;

        this.props.actionVote(ballotState.candidate, idNumber).then(res => {
            if (res.success) {
                this.modalInstance.close();
                M.toast({ html: res.message })
                var result = ballotState.onVotingEnds();

            } else {
                alert(res.message);
            }
        });
    }

    render() {
        const { ballotState } = this.props;
        return (
            <section>
                <div id="modal1" className="modal">
                    <div className="modal-content">
                        <header className="center">
                            <h4>Confirmar el voto por {ballotState.candidate.name}</h4>
                            <p>Para confirmar tu voto, es necesario que ingreses tu número de documento</p>
                        </header>
                        <article>
                            <div className="row">
                                <div className="input-field col s12">
                                    <i className="material-icons prefix">account_circle</i>
                                    <input placeholder="Tarjeta de identidad, cédula, etc."
                                        aria-label="Tarjeta de identidad, cédula, etc."
                                        aria-required="true"
                                        id="idnumber"
                                        type="text"
                                        maxLength="12"
                                        className="validate"
                                        onKeyDown={e => {
                                            if (e.keyCode === 13) {
                                                this.onVote();
                                            }
                                        }} />
                                    <label htmlFor="idnumber">Número de identificación</label>
                                </div>
                            </div>
                        </article>

                    </div>
                    <div className="modal-footer">
                        <button type="button" onClick={ballotState.onVotingEnds} className="modal-close waves-effect waves-green btn-flat">Cancelar</button>
                        <button type="button" onClick={this.onVote} className="waves-effect waves-light btn">Confirmar voto</button>
                    </div>
                </div>
            </section>
        );
    }
});
