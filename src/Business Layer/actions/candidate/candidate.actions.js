import candidateActionTypes from './candidate.action.types'

// GET ALL CANDIDATES (FOR LIST)
const candidatesLoading = () => {
    return { type: candidateActionTypes.CANDIDATES_LOADING }
}

const candidatesLoaded = (candidates) => ({
    type: candidateActionTypes.CANDIDATES_LOADED,
    payload: candidates,
})

const candidatesLoadingError = (errorMessage) => ({
    type: candidateActionTypes.CANDIDATES_LOADING_ERROR,
    payload: errorMessage,
})


// GET A CANDIDATE (FOR DETAILS)
const candidateLoading = () => {
    return { type: candidateActionTypes.CANDIDATE_LOADING }
}

const candidateLoaded = (candidate) => ({
    type: candidateActionTypes.CANDIDATE_LOADED,
    payload: candidate,
})

const candidateLoadingError = (errorMessage) => ({
    type: candidateActionTypes.CANDIDATE_LOADING_ERROR,
    payload: errorMessage,
})


// ACCEPT A CANDIDATE
const candidateAccepting = () => {
    return { type: candidateActionTypes.CANDIDATE_ACCEPTING }
}

const candidateAccepted = (candidate) => ({
    type: candidateActionTypes.CANDIDATE_ACCEPTED,
    payload: candidate,
})

const candidateAcceptError = (errorMessage) => ({
    type: candidateActionTypes.CANDIDATE_ACCEPT_ERROR,
    payload: errorMessage,
})



export default {
    candidatesLoading,
    candidatesLoaded,
    candidatesLoadingError,

    candidateLoading,
    candidateLoaded,
    candidateLoadingError,

    candidateAccepting,
    candidateAccepted,
    candidateAcceptError,
}