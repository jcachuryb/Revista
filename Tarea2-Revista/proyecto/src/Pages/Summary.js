import React from 'react';
import { observable, action, computed, extendObservable } from 'mobx';

export class Summary extends React.Component {



    render() {
        const { app } = this.props;
        return (
            <div>
                <div>
                    <header>
                        <h3>{app.state === 'on_course' ? 'Elecciones en curso' : 'Done'}</h3>

                    </header>
                    <div class="progress">
                        <div class="indeterminate"></div>
                    </div>

                </div>

            </div>);
    }
}


export default Summary;