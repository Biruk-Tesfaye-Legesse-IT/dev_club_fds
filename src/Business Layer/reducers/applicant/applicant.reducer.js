import applicantActionTypes from '../../actions/applicant/applicant.action.types';

const initialState = {
    applicants: [],
    applicant: {},
    applicantsLoading: false,
    applicantLoading: true,
    error: null,

}


export default function applicantsReducer(state = initialState, action) {
    // console.log('applicantReducer', action);
    switch (action.type) {
        case applicantActionTypes.APPLICANTS_LOADING:
            return {
                ...state,
                applicantsLoading: true,
                error: null
            }
        case applicantActionTypes.APPLICANTS_LOADED:
            return {
                ...state,
                applicants: action.payload,
                applicantsLoading: false,
            };

        case applicantActionTypes.APPLICANTS_LOADING_ERROR:
            return {
                ...state,
                applicantsLoading: false,
                error: action.payload,
            };

    // =======================================================

    case applicantActionTypes.APPLICANT_LOADING:
        return {
            ...state,
            applicantLoading: true,
            error: null
        }
    case applicantActionTypes.APPLICANT_LOADED:
        return {
            ...state,
            applicant: action.payload,
            applicantLoading: false,
        };

    case applicantActionTypes.APPLICANT_LOADING_ERROR:
        return {
            ...state,
            applicantLoading: false,
            error: action.payload,
        };

    // =======================================================
   

    case applicantActionTypes.APPLICANTS_APPROVING:
        return {
            ...state,
            applicantsLoading: true,
            error: null
        }
    case applicantActionTypes.APPLICANT_APPROVED:
        return {
            ...state,
            applicant: action.payload,
            applicantLoading: false,
        };
    case applicantActionTypes.APPLICANT_APPROVE_ERROR:
        return {
            ...state,
            applicantLoading: false,
            error: action.payload,
        };
        
    // =======================================================
    
    default:
        return state;
    }
};



