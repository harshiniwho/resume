import React, {Component} from 'react';

import Aux from '../../hoc/Aux/Aux';
import './Home.css';

class Home extends Component {
    render() {
        return (
            <Aux>
                <div className="Home">
                    <p>
                        Hi! I am Harshini! This is yet another website that should be just a resume. Feel free to judge my many accomplishments.
                    </p>
                </div>
            </Aux>
        );
    }
}

export default Home;