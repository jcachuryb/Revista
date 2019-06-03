import React from 'react';
import { observer } from 'mobx-react';
import { CandidateView } from './CandidateView';
export const Results = observer(class Results extends React.Component {
    render() {
        return (<div className="container">
            <ul className="collection">
                {this.props.candidates.map((candidate, idx) => <CandidateView candidate={candidate} position={idx} key={idx} />)}
            </ul>

        </div>);
    }
});
