import React, { Component } from 'react';
import {connect} from 'react-redux';
import { RoverConnections } from '../../../components/SiteDiagram/RoverConnections';

class RoverConnectionsContainer extends Component {
    render() {
        return(
            <div className={'main'}>
                <RoverConnections
                    {...this.props}
                />
            </div>
        )
    }
}

const mapStateToProps = ({diagram}) => {
    return {
        roverPosition: diagram.roverPosition,
        connections: diagram.connections,
        siteDiagramPosition: diagram.siteDiagramPosition
    }
};

export default connect(mapStateToProps)(RoverConnectionsContainer);