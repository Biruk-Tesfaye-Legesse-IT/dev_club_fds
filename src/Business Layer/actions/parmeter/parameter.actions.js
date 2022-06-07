import parameterActionTypes from './parameter.action.types'

// GET ALL PARAMETERS (FOR LIST)
const parametersLoading = () => {
    return { type: parameterActionTypes.PARAMETERS_LOADING }
}

const parametersLoaded = (parameters) => ({
    type: parameterActionTypes.PARAMETERS_LOADED,
    payload: parameters,
})

const parametersLoadingError = (errorMessage) => ({
    type: parameterActionTypes.PARAMETERS_LOADING_ERROR,
    payload: errorMessage,
})


// GET A PARAMETER (FOR DETAILS)
const parameterLoading = () => {
    return { type: parameterActionTypes.PARAMETER_LOADING }
}

const parameterLoaded = (parameter) => ({
    type: parameterActionTypes.PARAMETER_LOADED,
    payload: parameter,
})

const parameterLoadingError = (errorMessage) => ({
    type: parameterActionTypes.PARAMETER_LOADING_ERROR,
    payload: errorMessage,
})


// ADD A PARAMETER 
const parameterAdding = () => {
    return { type: parameterActionTypes.PARAMETER_ADDING }
}

const parameterAdded = (parameter) => ({
    type: parameterActionTypes.PARAMETER_ADDED,
    payload: parameter,
})

const parameterAddError = (errorMessage) => ({
    type: parameterActionTypes.PARAMETER_ADD_ERROR,
    payload: errorMessage,
})

// UPDATE AN PARAMETER 
const parameterUpdating = () => {
    return { type: parameterActionTypes.PARAMETER_UPDATNG }
}

const parameterUpdated = (parameter) => ({
    type: parameterActionTypes.PARAMETER_UPDATED,
    payload: parameter,
})

const parameterUpdateError = (errorMessage) => ({
    type: parameterActionTypes.PARAMETER_UPDATE_ERROR,
    payload: errorMessage,
})


// DELETE AN PARAMETER 
const parameterDeleting = () => {
    return { type: parameterActionTypes.PARAMETER_DELETING }
}

const parameterDeleted = (parameter) => ({
    type: parameterActionTypes.PARAMETER_DELETED,
    payload: parameter,
})

const parameterDeleteError = (errorMessage) => ({
    type: parameterActionTypes.PARAMETER_DELETE_ERROR,
    payload: errorMessage,
})


// DELETE ALL PARAMETERS 
const parametersDeleting = () => {
    return { type: parameterActionTypes.PARAMETERS_DELETING }
}

const parametersDeleted = (parameter) => ({
    type: parameterActionTypes.PARAMETERS_DELETED,
    payload: parameter,
})

const parametersDeleteError = (errorMessage) => ({
    type: parameterActionTypes.PARAMETERS_DELETE_ERROR,
    payload: errorMessage,
})

// DELETE A PARAMETERS 
const parametersSearching = () => {
    return { type: parameterActionTypes.PARAMETERS_DELETING }
}

const parametersSearchFound = (parameter) => ({
    type: parameterActionTypes.PARAMETERS_DELETED,
    payload: parameter,
})

const parametersSearchNotFound = (errorMessage) => ({
    type: parameterActionTypes.PARAMETERS_DELETE_ERROR,
    payload: errorMessage,
})

const parametersSearchError = (errorMessage) => ({
    type: parameterActionTypes.PARAMETERS_DELETE_ERROR,
    payload: errorMessage,
})


export default {
    parametersLoading,
    parametersLoaded,
    parametersLoadingError,

    parameterLoading,
    parameterLoaded,
    parameterLoadingError,

    parameterAdding,
    parameterAdded,
    parameterAddError,

    parameterUpdating,
    parameterUpdated,
    parameterUpdateError,

    parameterDeleting,
    parameterDeleted,
    parameterDeleteError
}