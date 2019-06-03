import React from 'react';
import { observer } from 'mobx-react';
import VoteModal from './VoteModal';
import { ComponentInjector } from './ComponentInjector';

const Ballot = observer(class Ballot extends React.Component {

    render() {
        const { app } = this.props;
        const { ballotState } = this.props;
        return (<main>
            <section className="container">

                <ComponentInjector app={app} ballotState={ballotState} view="ballot" />


            </section>
            <VoteModal ballotState={ballotState} actionVote={this.props.app.onVote} />
        </main>);
    }
});


export default Ballot;