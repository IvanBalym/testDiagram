import React, { Component } from 'react';
import {bindActionCreators} from "redux";
import * as diagramActions from "../../../actions/diagram/index";
import {connect} from 'react-redux';
import {HydraulicPumpMenu} from '../../../components/SiteDiagram/Menus/index';

class HydraulicPumpMenuContainer extends Component {
    render() {
        return (
            <HydraulicPumpMenu
                position={this.props.position}
                tank={this.props.tank}
                alarms={this.props.tank}
            />
        )
    }
}

const mapStateToProps = ({diagram}) => {
    return {
        tank: diagram.tank,
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

export default connect(mapStateToProps,mapDispatchToProps)(HydraulicPumpMenuContainer);