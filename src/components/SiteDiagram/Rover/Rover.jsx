import React, { Component } from 'react';
import {AlertRoverComponent} from "./Alert";
import ReactDOM from "react-dom";

export class Rover extends Component {

    constructor(props) {
        super(props);
        this.state = {
            mouseIn: true,
            showAlerts: true
        };

        this.handleMouseEnter = this.handleMouseEnter.bind(this);
        this.handleMouseLeave = this.handleMouseLeave.bind(this);
        this.handleMouseClick = this.handleMouseClick.bind(this);
    }

    shouldComponentUpdate() {
        return this.state.mouseIn
    }

    componentDidMount() {
        const rect = ReactDOM.findDOMNode(this).getBoundingClientRect();
        this.props.setRoverPosition(rect, this.props.side);
    }

    handleMouseEnter() {
        this.setState({
            mouseIn: true,
        });
        this.props.handleMouseOver(this.props.rover);
    }

    handleMouseLeave() {
        this.setState({
            mouseIn: false
        });
        this.props.setViewElement('hide');
    }

    handleMouseClick(e) {
        console.log(e.target.getBoundingClientRect());
        this.setState({
            showAlerts: !this.state.showAlerts
        })
    }

    render() {
        return(
            <div className={'rover'}>
                {
                    this.state.showAlerts &&
                    <AlertRoverComponent
                        rover={this.props.rover}
                    />
                }

                <div
                    className={'rover-img'}
                    onMouseEnter={this.handleMouseEnter}
                    onMouseLeave={this.handleMouseLeave}
                    onClick={this.handleMouseClick}
                >
                    <h3>Rover : {this.props.rover.id}</h3>
                </div>
            </div>
        )
    }
}