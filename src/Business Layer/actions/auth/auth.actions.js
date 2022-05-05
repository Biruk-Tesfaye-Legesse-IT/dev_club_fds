import authActionTypes from './auth.action.types'

// LOG IN
const loggingIn = () => {
    return { type: authActionTypes.LOGGING_IN }
}

const loggedIn = (user) => ({
    type: authActionTypes.LOGGED_IN,
    payload: user,
})

const logInError = (errorMessage) => ({
    type: authActionTypes.LOG_IN_ERROR,
    payload: errorMessage,
})

// LOG_OUT

const loggingOut = () => {
    return { type: authActionTypes.LOGGING_OUT }
}

const loggedOut = (successMessage) => ({
    type: authActionTypes.LOGGED_OUT,
    payload: successMessage,
})

const logOutError = (errorMessage) => ({
    type: authActionTypes.LOG_OUT_ERROR,
    payload: errorMessage,
})

// Refresh Token

const refreshingToken = () => ({
      type: authActionTypes.REFRESHING_TOKEN,
})

const tokenRefereshed = (accessToken) => ({
    type: authActionTypes.TOKEN_REFRESHED,
    payload: accessToken,
})

const tokenRefereshError = (errorMessage) => ({
    type: authActionTypes.TOKEN_REFRESH_ERROR,
    payload: errorMessage,
})




export default {
    loggingIn,
    loggedIn,
    logInError,

    loggingOut,
    loggedOut,
    logOutError,

    refreshingToken,
    tokenRefereshed,
    tokenRefereshError,

}