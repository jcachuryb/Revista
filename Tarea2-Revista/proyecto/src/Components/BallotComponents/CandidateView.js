import React, { Fragment } from 'react';
import { observer } from 'mobx-react';
import sample from '../../images/sample-1.jpg';

export const CandidateView = observer(({ candidate, onVote }) => (
    <Fragment className="col s12 m4 l3">
        <div className="card hoverable">
            <div className="card-image">
                <img src={sample} alt="logo" />
                <button className="btn-floating halfway-fab waves-effect waves-light red " onClick={() => {
                    onVote(candidate);
                }}>Votar</button>
            </div>
            <div className="card-content">
                <span className="card-title">{candidate.name}</span>
            </div>
        </div>
    </Fragment>
));
