import React, { Fragment } from 'react';
import { observer } from 'mobx-react';
import { ElectionInProgressBallot } from './BallotComponents/ElectionInProgress';
import { ElectionFinishedBallot } from './BallotComponents/ElectionFinished';
import { ElectionInProgressSummary } from './SummaryComponents/ElectionInProgress';
import { Results } from './SummaryComponents/Results';

export const ComponentInjector = observer(class ComponentInjector extends React.Component {

    render() {
        const { app } = this.props;
        const { ballotState } = this.props;
        return (<div>
            {
                (() => {
                    if (app.state === "in_progress") {
                        if (this.props.view === "timer") {
                            return (
                                <Fragment className="badge">
                                    {app.getTimeRemaining != "" ? "Tiempo restante: " : ""}
                                    {app.getTimeRemaining}
                                </Fragment>
                            );
                        }

                        if (this.props.view === "ballot") {
                            return (<ElectionInProgressBallot app={app} ballotState={ballotState} />);
                        }

                        if (this.props.view === "summary") {
                            return (<ElectionInProgressSummary app={app} />);
                        }

                    } else {
                        if (app.state === "finished") {
                            if (this.props.view === "timer") {
                                return (
                                    null
                                );
                            }
    
                            if (this.props.view === "ballot") {
                                return (<ElectionFinishedBallot app={app} />);
                            }
    
                            if (this.props.view === "summary") {
                                return (<Results candidates={this.props.copyOfCandidates} />);
                            }
                        } else {
                            if (this.props.view === "timer") {
                                return (
                                    null
                                );
                            }
    
                            return (<h2>Ups, no hay votaciones definidas</h2>);
                        }
                    }
                })()
            }
        </div>);
    }

});