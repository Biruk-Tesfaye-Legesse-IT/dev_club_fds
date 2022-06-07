import eventActionTypes from '../../actions/event/event.action.types';

const initialState = {
    events: [],
    event: {},
    eventsLoading: true,
    eventLoading: true,
    teamBuilding: false,
    teamChecking: false,
    assigningScout: false,
    teamInfo: {},
    error: null,

}


export default function eventsReducer(state = initialState, action) {
    // console.log('eventReducer', action);
    switch (action.type) {
        case eventActionTypes.EVENTS_LOADING:
            return {
                ...state,
                eventsLoading: true,
                error: null
            }
        case eventActionTypes.EVENTS_LOADED:
            return {
                ...state,
                events: action.payload,
                eventsLoading: false,
            };

        case eventActionTypes.EVENTS_LOADING_ERROR:
            return {
                ...state,
                eventsLoading: false,
                error: action.payload,
            };

    // ==========================================================

        case eventActionTypes.EVENT_LOADING:
            return {
                ...state,
                eventLoading: true,
                error: null
            }
        case eventActionTypes.EVENT_LOADED:
            return {
                ...state,
                event: action.payload,
                eventLoading: false,
            };

        case eventActionTypes.EVENT_LOADING_ERROR:
            return {
                ...state,
                eventLoading: false,
                error: action.payload,
            };

    // ==========================================================

        case eventActionTypes.BUILDING_TEAM:
            return {
                ...state,
                teamBuilding: true,
                error: null
            }
        case eventActionTypes.TEAM_BUILT:
            return {
                ...state,
                teamBuilding: false,
                error: null
            }
        case eventActionTypes.TEAM_BUILD_ERROR:
            return {
                ...state,
                teamBuilding: false,
                error: action.payload,
            };
    
        //=========================================================

            case eventActionTypes.CHECKING_TEAM:
                return {
                    ...state,
                    teamChecking: true,
                    error: null
                }
            case eventActionTypes.TEAM_CHECKED:
                return {
                    ...state,
                    teamChecking: false,
                    teamInfo: action.payload,
                    error: null
                }
            case eventActionTypes.TEAM_CHECK_ERROR:
                return {
                    ...state,
                    teamChecking: false,
                    error: action.payload,
                };

        //=========================================================

            case eventActionTypes.ASSIGNING_SCOUT: 
                return {
                    ...state,
                    assigningScout: true,
                    error: null
                }

            case eventActionTypes.SCOUT_ASSIGNED:
                return {
                    ...state,
                    assigningScout: false,
                    error: null
                }

            case eventActionTypes.SCOUT_ASSIGN_ERROR:
                return {
                    ...state,
                    assigningScout: false,
                    error: action.payload,
                };
    
        default:
            return state;
    }
};



