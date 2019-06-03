import React, { Fragment } from 'react';
import { observer } from 'mobx-react';

export const CandidateView = observer(({ candidate, onVote }) => (
    <Fragment>
        <div className="col s12 m4 l3 candidate ballot">
            <div className="card hoverable">
                <div className="card-image">
                    <img src={candidate.img} alt="logo" />
                    <button className="btn-floating halfway-fab waves-effect waves-light red " onClick={() => {
                        onVote(candidate);
                    }}>Votar</button>
                </div>
                <div className="card-content">
                    <span className="card-title">{candidate.name}</span>
                </div>
            </div>
        </div>
    </Fragment>
));
