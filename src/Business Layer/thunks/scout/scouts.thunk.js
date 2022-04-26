import ScoutDataService from '../../../Data Layer/services/scout/scout.service';
import scoutActions from '../../actions/scout/scout.actions'


const getScouts = () => (dispatch) => {

    dispatch(scoutActions.scoutsLoading());

    ScoutDataService.getAllScouts()
        .then((response) => {
            console.log('response', response.data);
            dispatch(scoutActions.scoutsLoaded(response.data))
        })
        .catch((error) => dispatch(scoutActions.scoutsLoadingError(error.message)));
};

const getScout = (id) => (dispatch) => {

    dispatch(scoutActions.scoutLoading());

    ScoutDataService.getScout(id)
        .then((response) => {
            console.log('response', response.data);
            dispatch(scoutActions.scoutLoaded(response.data))
        })
        .catch((error) => dispatch(scoutActions.scoutLoadingError(error.message)));    
};

const updateScout = (id, data) => (dispatch) => {

    dispatch(scoutActions.scoutUpdating());

    ScoutDataService.updateScout(id,data)
        .then((response) => {
            console.log('response', response.data);
            dispatch(scoutActions.scoutUpdated(response.data))
        })
        .catch((error) => dispatch(scoutActions.scoutUpdateError(error.message)));    
};


const createScout = (data) => (dispatch) => {

    dispatch(scoutActions.scoutAdding());

    ScoutDataService.createScout(data)
        .then((response) => {
            console.log('response', response.data);
            dispatch(scoutActions.scoutAdded(response.data))
        })
        .catch((error) => dispatch(scoutActions.scoutAddError(error.message)));    
};


export{

    getScouts,
    getScout,
    updateScout,
    createScout,

}