import React, { Component } from 'react';

export class RoverConnections extends Component {

    componentDidMount() {
        console.log(this.props);
    }

    render() {
        return(
            <div>
                {
                    this.props.roverPosition.map((rover,roverIndex) => {
                        return (
                            <svg
                                key={roverIndex}
                                className={'svg-block'}
                                style={{position: 'absolute', left: '0px', top: '0px'}}
                                width="100%"
                                height={this.props.siteDiagramPosition.height}
                            >
                                {
                                    this.props.connections.map((connection, index) => {
                                        console.log(connection);
                                        const
                                            x1 = rover.position.x+rover.position.width/2,
                                            y1 = rover.side==='normal' ? rover.position.y+rover.position.height : rover.position.y,
                                            x2 = connection.connection.x+connection.connection.width,
                                            y2 = connection.side==='normal' ? connection.connection.y : connection.connection.y+connection.connection.height,
                                            vertical = connection.side==='normal' ? y2+35 : y2-35,
                                            color = "#456",
                                            tension = 0;
                                        const
                                            delta = (x2-x1)*tension,
                                            hx1=x1+delta,
                                            hy1=y1,
                                            hx2=x2-delta,
                                            hy2=y2;

                                        const path = "M "+x1+" "+y1+" C "+hx1+" "+hy1+" "+hx2+" "+hy2+" "+x2+" "+y2+"V "+vertical;
                                        return (
                                            rover.side === connection.side &&
                                            <path key={index} d={path} className="svg-path" fill="none" stroke={color} />
                                        )
                                    })
                                }
                            </svg>
                        )
                    })
                }
            </div>
        )
    }
}