import React from 'react';
import { observer } from 'mobx-react';
import { ComponentInjector } from './ComponentInjector';

const Timer = observer(class TimerComponent extends React.Component {

    render() {
        const { app } = this.props;
        return (
            <ComponentInjector app={app} view="timer" />
        );
    }

});

export default Timer;