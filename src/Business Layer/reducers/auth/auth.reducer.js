import authActionTypes from '../../actions/auth/auth.action.types';


// const user = JSON.parse(localStorage.getItem("user"));

const user = JSON.parse(sessionStorage.getItem("access"));

const initialState = {

    user: user
    ? { isAuthenticated: true, user }
    : { isAuthenticated: false, user: null },
    
    authLoading: false,
    error: null,
    isAuthenticated: user
    ? true
    : false,

    tokenRefreshing: false,
    tokenRefreshed: false,
    tokenRefreshError: null,
}

export default function authReducer(state = initialState, action) {
    // console.log('authReducer', action);
    switch (action.type) {
        case authActionTypes.LOGGING_IN:
            return {
                ...state,
                authLoading: true,
                isAuthenticated: false,
                error: null,
            }
        case authActionTypes.LOGGED_IN:
            return {
                ...state,
                user: action.payload,
                authLoading: false,
                isAuthenticated: true,
            };

        case authActionTypes.LOG_IN_ERROR:
            return {
                ...state,
                authLoading: false,
                error: action.payload,
                isAuthenticated: false,
            };

        case authActionTypes.REFRESHING_TOKEN:
            return {
                ...state,
                tokenRefreshing: true,
                tokenRefreshed: false,
                tokenRefreshError: null,
            };

        case authActionTypes.TOKEN_REFRESHED:
            return {
                ...state,
                tokenRefreshing: false,
                tokenRefreshed: true,
                tokenRefreshError: null,
            };
        
        case authActionTypes.TOKEN_REFRESH_ERROR:
            return {
                ...state,
                tokenRefreshing: false,
                tokenRefreshed: false,
                tokenRefreshError: action.payload,
            };

        
        // case authActionTypes.REFRESH_TOKEN:
        //     return {
        //         ...state,
        //         user: { ...user, accessToken: action.payload },
        //     };

        default:
            return state;
    }
};