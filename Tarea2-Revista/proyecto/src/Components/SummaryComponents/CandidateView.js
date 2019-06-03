import React from 'react';
import { observer } from 'mobx-react';
export const CandidateView = observer(({ position, candidate }) => (<li className="collection-item avatar">
    <h4>{position + 1} - {candidate.name}</h4>
    <p>Con un total de {candidate.votes} {candidate.votes === 1 ? 'voto' : 'votos'}
    </p>
</li>));
