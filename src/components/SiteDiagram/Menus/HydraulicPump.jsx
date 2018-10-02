import React, { Component } from 'react';

export class HydraulicPumpMenu extends Component {
    render() {
        let position = {
            left: `${this.props.position.pageX+10}px`,
            top: `${this.props.position.pageY+20}px`,
        };
        const {channel_num, unit_id, tank_height, job_total, equipment_type} = this.props.tank;
        const {timestamp, code} = this.props.alarms;

        return(
            <div className={'hydraulic-pump-menu'} style={position}>
                <p className='chanel-number'>Chanel #{channel_num}/{equipment_type}</p>
                <p>Unit id : {unit_id}</p>
                <p>Tank height : {tank_height}</p>
                <p>Job total : {job_total}</p>
                <p className={'alarm'+code}>{timestamp}</p>
            </div>
        )
    }
}