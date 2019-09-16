import React, { Component } from 'react';
import '../../css/style.css';

import Header from '../../components/header/header';

class Layout extends Component {

    state = {

    }

    render() {
        return(
            <div>
                <Header/>
                {this.props.children}
            </div>
        )
    }
}

export default Layout;