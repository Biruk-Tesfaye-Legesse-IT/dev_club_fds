import SkillDataService from '../../../Data Layer/services/skill/skill.service';
import skillActions from '../../actions/skill/skill.actions'


const getSkills = () => (dispatch) => {

    dispatch(skillActions.skillsLoading());

    SkillDataService.getAllSkills()
        .then((response) => {
            console.log('response', response.data);
            dispatch(skillActions.skillsLoaded(response.data))
        })
        .catch((error) => dispatch(skillActions.skillsLoadingError(error.message)));
};

const getSkill = (id) => (dispatch) => {

    dispatch(skillActions.skillLoading());

    SkillDataService.getSkill(id)
        .then((response) => {
            console.log('response', response.data);
            dispatch(skillActions.skillLoaded(response.data))
        })
        .catch((error) => dispatch(skillActions.skillLoadingError(error.message)));    
};

const updateSkill = (id, data) => (dispatch) => {

    dispatch(skillActions.skillUpdating());

    SkillDataService.updateSkill(id,data)
        .then((response) => {
            console.log('response', response.data);
            dispatch(skillActions.skillUpdated(response.data))
        })
        .catch((error) => dispatch(skillActions.skillUpdateError(error.message)));    
};


const createSkill = (data) => (dispatch) => {

    dispatch(skillActions.skillAdding());

    SkillDataService.createSkill(data)
        .then((response) => {
            console.log('response', response.data);
            dispatch(skillActions.skillAdded(response.data))
        })
        .catch((error) => dispatch(skillActions.skillAddError(error.message)));    
};

const deleteSkill = (id) => (dispatch) => {

    dispatch(skillActions.skillDeleting());

    SkillDataService.deleteSkill(id)
        .then((response) => {
            console.log('response', response.data);
            dispatch(skillActions.skillDeleted(response.data))
        })
        .catch((error) => dispatch(skillActions.skillDeleteError(error.message)));    
};


export{

    getSkills,
    getSkill,
    updateSkill,
    createSkill,
    deleteSkill,

}