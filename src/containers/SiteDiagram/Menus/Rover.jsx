import React, { Component } from 'react';
import {bindActionCreators} from "redux";
import * as diagramActions from "../../../actions/diagram/index";
import {connect} from 'react-redux';
import {RoverMenu} from '../../../components/SiteDiagram/Menus/index';

class RoverMenuContainer extends Component {
    render() {
        return (
            <RoverMenu
                position={this.props.position}
                rover={this.props.rover}
                style={''}
            />
        )
    }
}

const mapStateToProps = ({diagram}) => {
    return {
        rover: diagram.rover,
        position: diagram.position,
        sampleData: diagram.sampleData,
        element: diagram.element
    }
};

const mapDispatchToProps = dispatch => ({
    setPosition: bindActionCreators(
        diagramActions.setPosition,
        dispatch
    )
});

export default connect(mapStateToProps,mapDispatchToProps)(RoverMenuContainer);