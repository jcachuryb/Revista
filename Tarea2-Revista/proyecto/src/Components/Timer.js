import React from 'react';
import { observer } from 'mobx-react';

const Timer = observer(class TimerComponent extends React.Component {

    render() {
        const { app } = this.props;
        return (<div>
            {
                (() => {
                    if (app.state === "in_progress") {
                        return (
                            <div className="badge">
                                Tiempo restante: {app.getTimeRemaining}
                            </div>
                        );
                    } else {
                        if (app.state === "finished") {
                            return (<span></span>);
                        } else {

                        }
                    }
                })()
            }
        </div>);
    }

});

export default Timer;