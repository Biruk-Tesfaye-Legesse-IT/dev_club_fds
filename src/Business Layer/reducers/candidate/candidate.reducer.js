import candidateActionTypes from '../../actions/candidate/candidate.action.types';

const initialState = {
    candidates: [],
    candidate: {},
    candidatesLoading: true,
    candidateLoading: true,
    error: null,

}


export default function candidatesReducer(state = initialState, action) {
    // console.log('candidateReducer', action);
    switch (action.type) {
        case candidateActionTypes.CANDIDATES_LOADING:
            return {
                ...state,
                candidatesLoading: true,
                error: null
            }
        case candidateActionTypes.CANDIDATES_LOADED:
            return {
                ...state,
                candidates: action.payload,
                candidatesLoading: false,
            };

        case candidateActionTypes.CANDIDATES_LOADING_ERROR:
            return {
                ...state,
                candidatesLoading: false,
                error: action.payload,
            };

    // =======================================================

    case candidateActionTypes.CANDIDATE_LOADING:
        return {
            ...state,
            candidateLoading: true,
            error: null
        }
    case candidateActionTypes.CANDIDATE_LOADED:
        return {
            ...state,
            candidate: action.payload,
            candidateLoading: false,
        };

    case candidateActionTypes.CANDIDATE_LOADING_ERROR:
        return {
            ...state,
            candidateLoading: false,
            error: action.payload,
        };

    // =======================================================

    case candidateActionTypes.CANDIDATE_ACCEPTING:
        return {
            ...state,
            candidatesLoading: true,
            error: null
        }
    case candidateActionTypes.CANDIDATE_ACCEPTED:
        return {
            ...state,
            candidate: action.payload,
            candidateLoading: false,
        };
    case candidateActionTypes.CANDIDATE_ACCEPT_ERROR:
        return {
            ...state,
            candidateLoading: false,
            error: action.payload,
        };
        
    // =======================================================
    
    default:
        return state;
    }
};



