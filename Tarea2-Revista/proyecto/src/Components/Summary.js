import React from 'react';
import { observer } from 'mobx-react';
import { ComponentInjector } from './ComponentInjector';

export const Summary = observer(class Summary extends React.Component {



    render() {
        const { app } = this.props;

        var copyOfCandidates = [...app.candidates];
        copyOfCandidates = copyOfCandidates.sort((a, b) => {
            return b.votes - a.votes;
        })
        return (
            <section className="container">
                <ComponentInjector app={app} copyOfCandidates={copyOfCandidates} view="summary" />

            </section>);
    }
});

export default Summary;