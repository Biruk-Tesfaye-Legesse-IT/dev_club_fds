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



// const eventsReducer = (state = initialState, action) => {
//     switch (action.type) {
//         case eventActionTypes.GET_EVENTS:
//             return {
//                 ...state,
//                 isLoading: true,
//             };

//         default:
//             return state;
//     }
// }

// export default function eventsReducer(state = initialState, action) {
//     switch (action.type) {
//         case eventActionTypes.GET_EVENTS:
//             return {
//                 ...state,
//                 events: action.payload,
//                 loading: false,
//             };
        // case eventActionTypes.GET_EVENT:
        //     return {
        //         ...state,
        //         event: action.payload,
        //         loading: false,
        //     };
        // case eventActionTypes.CREATE_EVENT:
        //     return {
        //         ...state,
        //         events: [...state.events, action.payload],
        //         loading: false,
        //     };
        // case eventActionTypes.UPDATE_EVENT:
        //     return {
        //         ...state,
        //         events: state.events.map(event => event.id === action.payload.id ? action.payload : event),
        //         loading: false,
        //     };
        // case eventActionTypes.DELETE_EVENT:
        //     return {
        //         ...state,
        //         events: state.events.filter(event => event.id !== action.payload),
        //         loading: false,
        //     };
        // case eventActionTypes.EVENT_ERROR:
        //     return {
        //         ...state,
        //         error: action.payload,
        //         loading: false,
        //     };
//         default:
//             return state;
//     }
// }

