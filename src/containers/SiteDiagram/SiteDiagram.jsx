import React, { Component } from 'react';
import { SiteDiagram } from '../../components/SiteDiagram';
import {bindActionCreators} from "redux";
import * as diagramActions from "../../actions/diagram";
import {connect} from 'react-redux';

class SiteDiagramContainer extends Component {
    render() {
        return(
            <div className={'main'}>
                <SiteDiagram
                    {...this.props}
                />
            </div>
        )
    }
}

const mapStateToProps = ({diagram}) => {
    return {
        sampleData: diagram.sampleData
    }
};

const mapDispatchToProps = dispatch => ({
    setPosition: bindActionCreators(
        diagramActions.setPosition,
        dispatch
    ),
    setViewElement: bindActionCreators(
        diagramActions.setViewElement,
        dispatch
    ),
    setHoveredRover: bindActionCreators(
        diagramActions.setHoveredRover,
        dispatch
    ),
    setHoveredHydraulicPump: bindActionCreators(
        diagramActions.setHoveredHydraulicPump,
        dispatch
    ),
    setRoverAlerts: bindActionCreators(
        diagramActions.setRoverAlerts,
        dispatch
    ),
    setRoverConnections: bindActionCreators(
        diagramActions.setRoverConnections,
        dispatch
    ),
    setRoverPosition: bindActionCreators(
        diagramActions.setRoverPosition,
        dispatch
    ),
    setSiteDiagramPosition: bindActionCreators(
        diagramActions.setSiteDiagramPosition,
        dispatch
    ),
    setManifoldPosition: bindActionCreators(
        diagramActions.setManifoldPosition,
        dispatch
    )
});

export default connect(mapStateToProps,mapDispatchToProps)(SiteDiagramContainer);