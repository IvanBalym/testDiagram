import * as constants from '../../constants';

export const setPosition = (position) => {
    return dispatch => {
        dispatch({
            type: constants.GET_HYDRAULIC_PUMP,
            position
        })
    }
}

export const setViewElement = (element) => {
    return dispatch => {
        dispatch({
            type: constants.SET_VIEW_ELEMENT,
            element
        })
    }
}

export const setHoveredRover = (rover) => {
    return dispatch => {
        dispatch({
            type: constants.SET_HOVERED_ROVER,
            rover
        })
    }
}

export const setHoveredHydraulicPump = (tank) => {
    return dispatch => {
        dispatch({
            type: constants.SET_HOVERED_HYDRAULIC_PUMP,
            tank
        })
    }
}


export const setRoverAlerts = (alarms) => {
    return dispatch => {
        dispatch({
            type: constants.SET_HOVERED_HYDRAULIC_PUMP_ALERT,
            alarms
        })
    }
}

export const setRoverPosition = (position, side) => {
    return dispatch => {
        dispatch({
            type: constants.SET_ROVER_POSITION,
            roverPosition: {position, side}
        })
    }
}

export const setManifoldPosition = position => {
    return dispatch => {
        dispatch({
            type: constants.SET_MANIFOLD_POSITION,
            manifoldPosition: position
        })
    }
}

export const setSiteDiagramPosition = position => {
    return dispatch => {
        dispatch({
            type: constants.SET_SITE_DIAGRAM_POSITION,
            siteDiagramPosition: position
        })
    }
}

export const setRoverConnections = (connection, side, alarm) => {
    return dispatch => {
        dispatch({
            type: constants.SET_ROVER_CONNECTIONS,
            connections: {connection, side, alarm}
        })
    }
}

