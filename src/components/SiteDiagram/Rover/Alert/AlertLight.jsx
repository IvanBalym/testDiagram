import React, { Component } from 'react';

export class AlertLight extends Component {
    render() {
        return(
            <div
                className={`alert-light ${this.props.color}`}
            >
            </div>
        )
    }
}