import React from 'react';
import { observer } from 'mobx-react';
import VoteModal from './VoteModal';
import { ElectionInProgressBallot } from './BallotComponents/ElectionInProgress';
import { ElectionFinished } from './BallotComponents/ElectionFinished';

const Ballot = observer(class Ballot extends React.Component {

    render() {
        const { app } = this.props;
        const { ballotState } = this.props;
        return (<div>
            <div className="container">
                {
                    (() => {
                        if (app.state === "in_progress") {
                            return (<span>{<ElectionInProgressBallot app={app} ballotState={ballotState} />}</span>);
                        } else {
                            if (app.state === "finished") {
                                return (

                                    <ElectionFinished app={app}/>
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


export default Ballot;