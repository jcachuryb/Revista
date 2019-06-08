import React from 'react';
import { observer } from 'mobx-react';
import { ComponentInjector } from './ComponentInjector';

export const Home = observer(class Home extends React.Component {



    render() {
        const { app } = this.props;

        return (
            <section className="">
                <div className="parallax-container">
                    <div >
                        <img className="responsive-img" 
                        src="http://2.bp.blogspot.com/-xASg99RvfmY/W0Tc5hqBYuI/AAAAAAAADcM/tg_9cZzG4I05HBH6O8RBc5SIvkfzXq05wCK4BGAYYCw/s1600/.....-................................................png" />
                    </div>
                </div>
                <div className="section white">
                    <div className="row container">
                        <h2 className="header">¿Cuál fue el largometraje de Marvel que más te gustó?</h2>
                        <p className="grey-text text-darken-3 lighten-3 flow-text">
                            ¡Entre los participantes del Bootcamp 2019 de React vamos a saberlo hoy!
                        </p>
                    </div>
                </div>
            </section>);
    }
});

export default Home;