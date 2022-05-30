import acceptedActionTypes from './accepted.action.types'

// GET ALL APPLICANTS (FOR LIST)
const acceptedsLoading = () => {
    return { type: acceptedActionTypes.APPLICANTS_LOADING }
}

const acceptedsLoaded = (accepteds) => ({
    type: acceptedActionTypes.APPLICANTS_LOADED,
    payload: accepteds,
})

const acceptedsLoadingError = (errorMessage) => ({
    type: acceptedActionTypes.APPLICANTS_LOADING_ERROR,
    payload: errorMessage,
})


// GET AN APPLICANT (FOR DETAILS)
const acceptedLoading = () => {
    return { type: acceptedActionTypes.APPLICANT_LOADING }
}

const acceptedLoaded = (accepted) => ({
    type: acceptedActionTypes.APPLICANT_LOADED,
    payload: accepted,
})

const acceptedLoadingError = (errorMessage) => ({
    type: acceptedActionTypes.APPLICANT_LOADING_ERROR,
    payload: errorMessage,
})






export default {
    acceptedsLoading,
    acceptedsLoaded,
    acceptedsLoadingError,

    acceptedLoading,
    acceptedLoaded,
    acceptedLoadingError,
}