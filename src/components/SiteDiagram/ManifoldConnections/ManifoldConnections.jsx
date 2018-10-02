import React, { Component } from 'react';

export class ManifoldConnections extends Component {

    componentDidMount() {
        console.log(this.props);
    }

    render() {
        let  x1 = this.props.manifoldPosition ? this.props.manifoldPosition.x+this.props.manifoldPosition.width/2 : '',
             y1 = this.props.manifoldPosition ? this.props.manifoldPosition.y+this.props.manifoldPosition.height/2 : '';

        return(
            <div>
                {
                    this.props.siteDiagramPosition &&
                            <svg
                                className={'svg-block'}
                                style={{position: 'absolute', left: '0px', top: '0px'}}
                                width="100%"
                                height={this.props.siteDiagramPosition.height}
                            >
                                {
                                    this.props.connections.map((connection, index) => {
                                        console.log(this.props.manifoldPosition);
                                        const
                                            x2 = connection.connection.x+connection.connection.width/2,
                                            y2 = connection.side==='normal' ? connection.connection.y+connection.connection.height : connection.connection.y,
                                            color = "#456",
                                            tension = 0;
                                        const
                                            delta = (x2-x1)*tension,
                                            hx1=x1+delta,
                                            hy1=y1,
                                            hx2=x2-delta,
                                            hy2=y2;

                                        const path = "M "+x1+" "+y1+" C "+hx1+" "+hy1+" "+hx2+" "+hy2+" "+x2+" "+y2;
                                        return (
                                            <path key={index} d={path} className="svg-path-manifold" fill="none" stroke={color} />
                                        )
                                    })
                                }
                                <path d={`M ${x1} ${y1} ${x1-450} ${y1}`} className="svg-path-manifold" fill="none" stroke={'#456'} />
                            </svg>
                }
            </div>
        )
    }
}