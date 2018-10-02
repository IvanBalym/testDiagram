import React, { Component } from 'react';
import {AlertLight} from './AlertLight';

export class AlertRoverComponent extends Component {

    constructor(props) {
        super(props);

        this.state={
            red: false,
            amber: false,
            blue: false,
            green: false
        };

        this.findAlerts=this.findAlerts.bind(this);
    }

    findAlerts() {

        let result = {
            green: false,
            amber: false,
            blue: false,
            red: false,
        };

        this.props.rover.alarm.forEach((alarm)=>{
            this.props.rover.tank.forEach((tank)=>{

                if(tank.channel_num === alarm.channel_num) {

                    switch (alarm.code) {
                        case 1:
                            result.green= true;
                            break;

                        case 5:
                            result.green= true;
                            break;

                        case 2:
                            result.amber= true;
                            break;

                        case 3:
                            result.amber= true;
                            break;

                        case 6:
                            result.amber= true;
                            break;

                        case 7:
                            result.amber= true;
                            break;

                        case 8:
                            result.blue= true;
                            break;

                        case 9:
                            result.blue= true;
                            break;

                        case 10:
                            result.blue= true;
                            break;

                        case 11:
                            result.blue= true;
                            break;

                        case 12:
                            result.blue= true;
                            break;

                        case 13:
                            result.blue= true;
                            break;

                        case 14:
                            result.blue= true;
                            break;

                        case 15:
                            result.blue= true;
                            break;

                        case 16:
                            result.red= true;
                            break;

                        default:
                            break;
                    }

                }

            })
        });
        this.setState(result);
    }

    componentDidMount() {
        this.findAlerts();
    }

    render() {
        return(
            <div
                className={'alert-component'}
            >
                {this.state.red ? <AlertLight color={'glowRed'} /> : ''}
                {this.state.amber ? <AlertLight color={'glowAmber'} /> : ''}
                {this.state.blue ? <AlertLight color={'glowBlue'} /> : ''}
                {this.state.green ? <AlertLight color={'glowGreen'} /> : ''}
            </div>
        )
    }
}