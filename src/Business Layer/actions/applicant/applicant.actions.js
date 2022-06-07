import applicantActionTypes from './applicant.action.types'

// GET ALL APPLICANTS (FOR LIST)
const applicantsLoading = () => {
    return { type: applicantActionTypes.APPLICANTS_LOADING }
}

const applicantsLoaded = (applicants) => ({
    type: applicantActionTypes.APPLICANTS_LOADED,
    payload: applicants,
})

const applicantsLoadingError = (errorMessage) => ({
    type: applicantActionTypes.APPLICANTS_LOADING_ERROR,
    payload: errorMessage,
})


// GET AN APPLICANT (FOR DETAILS)
const applicantLoading = () => {
    return { type: applicantActionTypes.APPLICANT_LOADING }
}

const applicantLoaded = (applicant) => ({
    type: applicantActionTypes.APPLICANT_LOADED,
    payload: applicant,
})

const applicantLoadingError = (errorMessage) => ({
    type: applicantActionTypes.APPLICANT_LOADING_ERROR,
    payload: errorMessage,
})


// APPROVE AN APPLICANT 
const applicantApproving = () => {
    return { type: applicantActionTypes.APPLICANTS_APPROVING }
}

const applicantApproved = (applicant) => ({
    type: applicantActionTypes.APPLICANT_APPROVED,
    payload: applicant,
})

const applicantApproveError = (errorMessage) => ({
    type: applicantActionTypes.APPLICANT_APPROVE_ERROR,
    payload: errorMessage,
})



export default {
    applicantsLoading,
    applicantsLoaded,
    applicantsLoadingError,

    applicantLoading,
    applicantLoaded,
    applicantLoadingError,

    applicantApproving, 
    applicantApproved,
    applicantApproveError,
}