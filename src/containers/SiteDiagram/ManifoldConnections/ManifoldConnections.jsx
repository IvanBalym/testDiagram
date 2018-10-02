import React, { Component } from 'react';
import {connect} from 'react-redux';
import { ManifoldConnections } from '../../../components/SiteDiagram/ManifoldConnections';

class ManifoldConnectionsContainer extends Component {
    render() {
        return(
            <div className={'main'}>
                <ManifoldConnections
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
        siteDiagramPosition: diagram.siteDiagramPosition,
        manifoldPosition: diagram.manifoldPosition
    }
};

export default connect(mapStateToProps)(ManifoldConnectionsContainer);