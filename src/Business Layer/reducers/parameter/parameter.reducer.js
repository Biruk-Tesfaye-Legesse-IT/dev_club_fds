import parameterActionTypes from '../../actions/parmeter/parameter.action.types'

const initialState = {
    parameters: [],
    parameter: {},
    parametersLoading: true,
    parameterLoading: true,
    error: null,
}


export default function parametersReducer(state = initialState, action) {
    // console.log('parameterReducer', action);
    switch (action.type) {
        case parameterActionTypes.PARAMETERS_LOADING:
            return {
                ...state,
                parametersLoading: true,
                error: null
            }
        case parameterActionTypes.PARAMETERS_LOADED:
            return {
                ...state,
                parameters: action.payload,
                parametersLoading: false,
            };

        case parameterActionTypes.PARAMETERS_LOADING_ERROR:
            return {
                ...state,
                parametersLoading: false,
                error: action.payload,
            };

    // =======================================================

    case parameterActionTypes.PARAMETER_LOADING:
        return {
            ...state,
            parameterLoading: true,
            error: null
        }
    case parameterActionTypes.PARAMETER_LOADED:
        return {
            ...state,
            parameter: action.payload,
            parameterLoading: false,
        };

    case parameterActionTypes.PARAMETER_LOADING_ERROR:
        return {
            ...state,
            parameterLoading: false,
            error: action.payload,
        };
    
    default:
        return state;
    }
};



