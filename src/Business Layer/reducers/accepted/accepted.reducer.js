import acceptedActionTypes from '../../actions/accepted/accepted.action.types';

const initialState = {
    accepteds: [],
    accepted: {},
    acceptedsLoading: true,
    acceptedLoading: true,
    error: null,

}


export default function acceptedsReducer(state = initialState, action) {
    // console.log('acceptedReducer', action);
    switch (action.type) {
        case acceptedActionTypes.ACCEPTEDS_LOADING:
            return {
                ...state,
                acceptedsLoading: true,
                error: null
            }
        case acceptedActionTypes.ACCEPTEDS_LOADED:
            return {
                ...state,
                accepteds: action.payload,
                acceptedsLoading: false,
            };

        case acceptedActionTypes.ACCEPTEDS_LOADING_ERROR:
            return {
                ...state,
                acceptedsLoading: false,
                error: action.payload,
            };

    // =======================================================

    case acceptedActionTypes.ACCEPTED_LOADING:
        return {
            ...state,
            acceptedLoading: true,
            error: null
        }
    case acceptedActionTypes.ACCEPTED_LOADED:
        return {
            ...state,
            accepted: action.payload,
            acceptedLoading: false,
        };

    case acceptedActionTypes.ACCEPTED_LOADING_ERROR:
        return {
            ...state,
            acceptedLoading: false,
            error: action.payload,
        };
    
    default:
        return state;
    }
};



