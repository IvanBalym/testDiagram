import React, { Component} from 'react';
import ReactDOM from 'react-dom';

export class HydraulicPump extends Component {

    constructor(props) {
        super(props);
        this.state = {
            mouseIn: false
        };

        this.handleMouseEnter = this.handleMouseEnter.bind(this);
        this.handleMouseLeave = this.handleMouseLeave.bind(this);
    }

    shouldComponentUpdate() {
        return this.state.mouseIn
    }

    componentDidMount() {
        const rect = ReactDOM.findDOMNode(this).getBoundingClientRect();
        this.props.setRoverConnections(rect, this.props.side, this.props.alarm.code);
    }

    handleMouseEnter(event) {
        this.setState({
            mouseIn: true
        });
        this.props.handleMouseOver(this.props.tank);
    }

    handleMouseLeave(event) {
        this.setState({
            mouseIn: false
        });
        this.props.setViewElement('hide');
    }

    render() {
        const {high_trigger_pc, channel_num, tank_level, flow_rate, auto , low_trigger_pc } = this.props.tank;

        return(
            <div
                className={`hydraulic-pump ${this.props.side}`}
                onMouseEnter={this.handleMouseEnter}
                onMouseLeave={this.handleMouseLeave}
            >
                <div className={'alarm alarm'+this.props.alarm.code}>
                    <div className={'hydraulic-stat'}>
                        <p>High:{high_trigger_pc}</p>
                    </div>
                    <div className={'hydraulic-stat chanel-number'}>
                        <p>{channel_num}</p>
                    </div>
                    <div className={'hydraulic-stat'}>
                        <p>{tank_level} %</p>
                    </div>
                    <div className={'hydraulic-stat'}>
                        <p>{flow_rate} gpm</p>
                    </div>
                    <div className={'hydraulic-stat'}>
                        <p>{this.props.tank["24hr_total"]}</p>
                    </div>
                    <div className={'hydraulic-stat auto-field'}>
                        <p>{auto}</p>
                    </div>
                    <div className={'hydraulic-stat'}>
                        <p>Low:{low_trigger_pc}</p>
                    </div>
                </div>
            </div>
        )
    }
}