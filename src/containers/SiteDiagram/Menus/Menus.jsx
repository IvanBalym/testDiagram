import React, { Component } from 'react';
import {connect} from 'react-redux';

//components
import RoverMenuContainer from './Rover';
import HydraulicPumpMenuContainer from './HydraulicPump';

class MenuContainer extends Component {

    constructor(props) {
        super(props);

        this.state = ({
            menuOf: this.props.element
        });

        this.menuOf = this.menuOf.bind(this);
    }

    shouldComponentUpdate(a) {
        return a.element!==this.props.element
    }

    menuOf () {
        if(this.props.element === 'rover') {
            return <RoverMenuContainer />
        } else if(this.props.element === 'hydraulicPump') {
            return <HydraulicPumpMenuContainer />
        } else {
            return <div></div>
        }
    };

    render() {
        return(
            this.menuOf()
        )

    }
}

const mapStateToProps = ({diagram}) => {
    return {
        element: diagram.element
    }
};

export default connect(mapStateToProps)(MenuContainer);