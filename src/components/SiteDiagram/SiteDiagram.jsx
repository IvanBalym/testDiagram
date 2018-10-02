import React, { Component } from 'react';
import {HydraulicPump} from './HydraulicPump';
import {Rover} from './Rover';
import RoverConnectionsContainer from '../../containers/SiteDiagram/RoverConnections/RoverConnections';
import ManifoldConnectionsContainer from '../../containers/SiteDiagram/ManifoldConnections/ManifoldConnections';
import ReactDOM from "react-dom";
import {Manifold} from './Manifold';


export class SiteDiagram extends Component {

    constructor(props) {
        super(props);

        this.state = {
            alertComponents: false
        };

        this.handleMouseInHydraulicPump = this.handleMouseInHydraulicPump.bind(this);
        this.handleMouseOverRover = this.handleMouseOverRover.bind(this);
    }

    componentDidMount() {
        const rect = ReactDOM.findDOMNode(this).getBoundingClientRect();
        this.props.setSiteDiagramPosition(rect);
    }


    handleMouseOverRover (rover) {
        this.props.setHoveredRover(rover);
        this.props.setViewElement('rover')
    }

    handleMouseInHydraulicPump(tank) {
        this.props.setHoveredHydraulicPump(tank);
        this.props.setViewElement('hydraulicPump')
    }

    _onMouseMove(e) {
        this.props.setPosition({
            pageX: e.pageX,
            pageY: e.pageY
        })

    }

    render() {
        const {rover} = this.props.sampleData.site;

        return(
            <div className={'site-diagram'}>
                <div className='part'>
                    <div className={'wellhead'}>
                    </div>
                </div>
                {/*--------First Rover---------*/}
                <div
                    className='mouseOverComponent'
                    onMouseMove={this._onMouseMove.bind(this)}
                >
                    <div className='block'>
                        <Rover
                            rover={rover[0]}
                            side={'normal'}
                            handleMouseOver={this.handleMouseOverRover}
                            setViewElement={this.props.setViewElement}
                            setRoverPosition={this.props.setRoverPosition}
                        />
                    </div>

                    <div className='container'>
                        {
                            rover[0].tank &&
                            rover[0].tank.map((tank, index)=>{
                                let alarm=null;
                                rover[0].alarm.map((item) => {
                                    if(item.channel_num===tank.channel_num) {
                                        return alarm = item;
                                    }
                                });

                                return (
                                    <div className='rover-item' key={index}>
                                        <HydraulicPump
                                            key={index+'pump'}
                                            tank={tank}
                                            alarm={alarm}
                                            side={'normal'}
                                            handleMouseOver={this.handleMouseInHydraulicPump}
                                            setViewElement={this.props.setViewElement}
                                            setRoverConnections={this.props.setRoverConnections}
                                        />
                                    </div>
                                )}
                            )
                        }
                    </div>
                    <div className='block'>
                        <Manifold setManifoldPosition={this.props.setManifoldPosition} />
                    </div>

                {/*-------Second rover--------*/}

                    <div className='container'>
                        {
                            rover[1].tank &&
                            rover[1].tank.map((tank, index)=>{
                                let alarm=null;
                                rover[1].alarm.map((item) => {
                                    if(item.channel_num===tank.channel_num) {
                                        return alarm = item;
                                    }
                                });
                                return (
                                    <div className='rover-item' key={index+'rover2'}>
                                        <HydraulicPump
                                            tank={tank}
                                            alarm={alarm}
                                            side={'rotate'}
                                            handleMouseOver={this.handleMouseInHydraulicPump}
                                            setViewElement={this.props.setViewElement}
                                            setRoverConnections={this.props.setRoverConnections}
                                        />
                                    </div>
                                )}
                            )
                        }
                    </div>
                    <div className='block'>
                        <Rover
                            rover={rover[1]}
                            side={'rotate'}
                            handleMouseOver={this.handleMouseOverRover}
                            setViewElement={this.props.setViewElement}
                            setRoverPosition={this.props.setRoverPosition}
                        />
                    </div>
                </div>
                <div className='part'>
                    <div className={'blender'}>
                    </div>
                    <div className={'chemadd'}>
                    </div>
                    <div className={'sand-king'}>
                    </div>
                </div>
                <RoverConnectionsContainer />
                <ManifoldConnectionsContainer />
            </div>
        )
    }
}

