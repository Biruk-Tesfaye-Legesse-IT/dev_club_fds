import eventActionTypes from '../../actions/event/event.action.types';

const initialState = {
    events: [],
    event: {},
    eventsLoading: true,
    eventLoading: true,
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
    
        default:
            return state;
    }
};



