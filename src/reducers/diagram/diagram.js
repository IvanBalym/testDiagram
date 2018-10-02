import * as constants from '../../constants';
import * as sampleData from '../../constants/sample-data';


const initialState = {
        position: 0,
        element: '',
        sampleData: sampleData,
        rover: {},
        tank: {},
        alarms: {},
        connections: [],
        roverPosition: []
    };

export default (state = initialState, action) => {
    switch (action.type) {
        case constants.GET_HYDRAULIC_PUMP:
            return {
                ...state,
                position: action.position
            };

        case constants.SET_VIEW_ELEMENT:
            return {
                ...state,
                element: action.element
            };

        case constants.SET_HOVERED_ROVER:
            return {
                ...state,
                rover: action.rover
            };

        case constants.SET_HOVERED_HYDRAULIC_PUMP:
            return {
                ...state,
                tank: action.tank
            };

        case constants.SET_HOVERED_HYDRAULIC_PUMP_ALERT:
            return {
                ...state,
                alerts: action.alerts
            };

        case constants.SET_ROVER_CONNECTIONS:
            return {
                ...state,
                connections: state.connections.concat(action.connections)
            };

        case constants.SET_ROVER_POSITION:
            return {
                ...state,
                roverPosition: state.roverPosition.concat(action.roverPosition)
            };

        case constants.SET_MANIFOLD_POSITION:
            return {
                ...state,
                manifoldPosition: action.manifoldPosition
            };

        case constants.SET_SITE_DIAGRAM_POSITION:
            return {
                ...state,
                siteDiagramPosition: action.siteDiagramPosition
            };

        default:
            return state
    }
}