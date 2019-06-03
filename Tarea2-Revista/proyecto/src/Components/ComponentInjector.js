import React from 'react';
import { observer } from 'mobx-react';

export const ComponentInjector = observer(class ComponentInjector extends React.Component {

    render() {
        const { app } = this.props;
        return (<div>
            {
                (() => {
                    if (app.state === "in_progress") {
                        if (this.props.view === "timer") {
                            return (
                                <div className="badge">
                                    Tiempo restante: {app.getTimeRemaining}
                                </div>
                            );
                        }
                        
                        if (this.props.view === "ballot") {

                        }
                        
                        if (this.props.view === "summary") {

                        }

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