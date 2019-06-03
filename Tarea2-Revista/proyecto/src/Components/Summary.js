import React from 'react';
import { observer } from 'mobx-react';
import { Results } from './SummaryComponents/Results';
import { ElectionInProgressSummary } from './SummaryComponents/ElectionInProgress';
import { ElectionUndefined } from './ElectionUndefined';

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
                            return (<span>{<ElectionInProgressSummary app={app} />}</span>);
                        } else {
                            if (app.state === "finished") {
                                return (<Results candidates={copyOfCandidates} />);
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

export default Summary;