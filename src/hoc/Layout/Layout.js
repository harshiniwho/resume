import React, {Component} from 'react';

import Aux from '../Aux/Aux';
import Toolbar from '../../components/Navigation/Toolbar/Toolbar';

class Layout extends Component {
    render() {
        return (
            <Aux>
                <Toolbar />
                <main className="Content">
                    {this.props.children}
                </main>
                <p>placeholder footer</p>
            </Aux>
        );
    }
}

export default Layout;