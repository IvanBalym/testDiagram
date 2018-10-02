import React, { Component } from 'react';

export class RoverMenu extends Component {
    render() {
        let position = {
            left: `${this.props.position.pageX+10}px`,
            top: `${this.props.position.pageY+20}px`,
        };

        const {rover} = this.props;

        return(
            <div className={`rover-menu ${this.props.style}`} style={position}>
                <div>
                    Detail information
                    <p className={'menu-item'}>Rover # {rover.channel_count}</p>
                    <p className={'menu-item'}>AEI serial :{rover.aei_serial}</p>
                    <p className={'menu-item'}>Side location : {rover.side_location}</p>
                    <p className={'menu-item'}>Faults : {rover.faults}</p>
                    <p className={'menu-item'}>Alarm code : {rover.alarm.code}</p>
                    <p className={'menu-item'}>Flow meter type : {rover.flow_meter_type}</p>
                    <p className={'menu-item'}>Type : {rover.type}</p>
                    <p className={'menu-item'}>Job grand total : {rover.job_grand_total}</p>

                    <p className={'menu-item'}>Last tank change : {rover.last_tank_change}</p>
                    <p className={'menu-item'}>Paused flow : {rover.paused_flow}</p>
                    <p className={'menu-item'}>Lifetime flow total : {rover.lifetime_flow_total}</p>
                    <p className={'menu-item'}>Lifetime flow time : {rover.lifetime_flow_time}</p>
                    <p className={'menu-item'}>Local estop active : {rover.local_estop_active}</p>
                </div>
            </div>
        )
    }
}