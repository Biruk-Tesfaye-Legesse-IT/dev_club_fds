import skillActionTypes from './skill.action.types'

// GET ALL SKILLS (FOR LIST)
const skillsLoading = () => {
    return { type: skillActionTypes.SKILLS_LOADING }
}

const skillsLoaded = (skills) => ({
    type: skillActionTypes.SKILLS_LOADED,
    payload: skills,
})

const skillsLoadingError = (errorMessage) => ({
    type: skillActionTypes.SKILLS_LOADING_ERROR,
    payload: errorMessage,
})


// GET AN SKILL (FOR DETAILS)
const skillLoading = () => {
    return { type: skillActionTypes.SKILL_LOADING }
}

const skillLoaded = (skill) => ({
    type: skillActionTypes.SKILL_LOADED,
    payload: skill,
})

const skillLoadingError = (errorMessage) => ({
    type: skillActionTypes.SKILL_LOADING_ERROR,
    payload: errorMessage,
})


// ADD A SKILL 
const skillAdding = () => {
    return { type: skillActionTypes.SKILL_ADDING }
}

const skillAdded = (skill) => ({
    type: skillActionTypes.SKILL_ADDED,
    payload: skill,
})

const skillAddError = (errorMessage) => ({
    type: skillActionTypes.SKILL_ADD_ERROR,
    payload: errorMessage,
})

// UPDATE AN SKILL 
const skillUpdating = () => {
    return { type: skillActionTypes.SKILL_UPDATNG }
}

const skillUpdated = (skill) => ({
    type: skillActionTypes.SKILL_UPDATED,
    payload: skill,
})

const skillUpdateError = (errorMessage) => ({
    type: skillActionTypes.SKILL_UPDATE_ERROR,
    payload: errorMessage,
})


// DELETE AN SKILL 
const skillDeleting = () => {
    return { type: skillActionTypes.SKILL_DELETING }
}

const skillDeleted = (skill) => ({
    type: skillActionTypes.SKILL_DELETED,
    payload: skill,
})

const skillDeleteError = (errorMessage) => ({
    type: skillActionTypes.SKILL_DELETE_ERROR,
    payload: errorMessage,
})


// DELETE ALL SKILLS 
const skillsDeleting = () => {
    return { type: skillActionTypes.SKILLS_DELETING }
}

const skillsDeleted = (skill) => ({
    type: skillActionTypes.SKILLS_DELETED,
    payload: skill,
})

const skillsDeleteError = (errorMessage) => ({
    type: skillActionTypes.SKILLS_DELETE_ERROR,
    payload: errorMessage,
})

// DELETE A SKILLS 
const skillsSearching = () => {
    return { type: skillActionTypes.SKILLS_DELETING }
}

const skillsSearchFound = (skill) => ({
    type: skillActionTypes.SKILLS_DELETED,
    payload: skill,
})

const skillsSearchNotFound = (errorMessage) => ({
    type: skillActionTypes.SKILLS_DELETE_ERROR,
    payload: errorMessage,
})

const skillsSearchError = (errorMessage) => ({
    type: skillActionTypes.SKILLS_DELETE_ERROR,
    payload: errorMessage,
})


export default {
    skillsLoading,
    skillsLoaded,
    skillsLoadingError,

    skillLoading,
    skillLoaded,
    skillLoadingError,

    skillAdding,
    skillAdded,
    skillAddError,

    skillUpdating,
    skillUpdated,
    skillUpdateError,

    skillDeleting,
    skillDeleted,
    skillDeleteError
}