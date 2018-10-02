import React, { Component } from 'react';
import ReactDOM from "react-dom";

export class Manifold extends Component {

    componentDidMount() {
        const rect = ReactDOM.findDOMNode(this).getBoundingClientRect();
        this.props.setManifoldPosition(rect);
    }


    render() {
        return(
            <div className={'manifold'}>
            </div>
        )
    }
}