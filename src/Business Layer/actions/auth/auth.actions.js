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

const refreshToken = (accessToken) => ({
      type: authActionTypes.REFRESH_TOKEN,
      payload: accessToken,
})




export default {
    loggingIn,
    loggedIn,
    logInError,

    loggingOut,
    loggedOut,
    logOutError,

    refreshToken,

}