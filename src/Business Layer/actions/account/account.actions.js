import accountActionTypes from './account.action.types'

// GET AN ACCOUNT (FOR DETAILS)
const accountLoading = () => {
    return { type: accountActionTypes.ACCOUNT_LOADING }
}

const accountLoaded = (account) => ({
    type: accountActionTypes.ACCOUNT_LOADED,
    payload: account,
})

const accountLoadingError = (errorMessage) => ({
    type: accountActionTypes.ACCOUNT_LOADING_ERROR,
    payload: errorMessage,
})


// CREATE AN ACCOUNT 
const accountCreating = () => {
    return { type: accountActionTypes.ACCOUNT_CREATING }
}

const accountCreated = (account) => ({
    type: accountActionTypes.ACCOUNT_CREATED,
    payload: account,
})

const accountCreateError = (errorMessage) => ({
    type: accountActionTypes.ACCOUNT_CREATE_ERROR,
    payload: errorMessage,
})

// UPDATE AN ACCOUNT 
const accountUpdating = () => {
    return { type: accountActionTypes.ACCOUNT_UPDATNG }
}

const accountUpdated = (account) => ({
    type: accountActionTypes.ACCOUNT_UPDATED,
    payload: account,
})

const accountUpdateError = (errorMessage) => ({
    type: accountActionTypes.ACCOUNT_UPDATE_ERROR,
    payload: errorMessage,
})


// DELETE AN ACCOUNT 
const accountDeleting = () => {
    return { type: accountActionTypes.ACCOUNT_DELETING }
}

const accountDeleted = (account) => ({
    type: accountActionTypes.ACCOUNT_DELETED,
    payload: account,
})

const accountDeleteError = (errorMessage) => ({
    type: accountActionTypes.ACCOUNT_DELETE_ERROR,
    payload: errorMessage,
})



export default {
    accountLoading,
    accountLoaded,
    accountLoadingError,

    accountCreating,
    accountCreated,
    accountCreateError,

    accountUpdating,
    accountUpdated,
    accountUpdateError,

    accountDeleting,
    accountDeleted,
    accountDeleteError
}