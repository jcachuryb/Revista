import React from 'react';
import { extendObservable } from 'mobx';

export const Authentication = {
    isAuthenticated: false,
    authenticate(cb) {
        this.isAuthenticated = true;
        setTimeout(cb, 100); // fake async
    },
    signout(cb) {
        this.isAuthenticated = false;
        setTimeout(cb, 100);
    }
};
export class Login extends React.Component {

    constructor(props) {
        super(props);
        extendObservable(this, {

        })
    }
    login = () => {
        Authentication.authenticate(() => {
            this.setState({ redirectToReferrer: true });
        });
    };

    render() {
        return (<div>
            <h3>This is the login page</h3>
            <button onClick={this.login}>Log in</button>

        </div>);
    }
}


export default Login;