import ParameterDataService from '../../../Data Layer/services/parameter/parameter.service.js';
import parameterActions from '../../actions/parmeter/parameter.actions'


const getParameters = () => (dispatch) => {

    dispatch(parameterActions.parametersLoading());

    ParameterDataService.getAllParameters()
        .then((response) => {
            console.log('response', response.data);
            dispatch(parameterActions.parametersLoaded(response.data))
        })
        .catch((error) => dispatch(parameterActions.parametersLoadingError(error.message)));
};

const getParameter = (id) => (dispatch) => {

    dispatch(parameterActions.parameterLoading());

    ParameterDataService.getParameter(id)
        .then((response) => {
            console.log('response', response.data);
            dispatch(parameterActions.parameterLoaded(response.data))
        })
        .catch((error) => dispatch(parameterActions.parameterLoadingError(error.message)));    
};

const updateParameter = (id, data) => (dispatch) => {

    dispatch(parameterActions.parameterUpdating());

    ParameterDataService.updateParameter(id,data)
        .then((response) => {
            console.log('response', response.data);
            dispatch(parameterActions.parameterUpdated(response.data))
        })
        .catch((error) => dispatch(parameterActions.parameterUpdateError(error.message)));    
};


const createParameter = (data) => (dispatch) => {

    dispatch(parameterActions.parameterAdding());

    ParameterDataService.createParameter(data)
        .then((response) => {
            console.log('response', response.data);
            dispatch(parameterActions.parameterAdded(response.data))
        })
        .catch((error) => dispatch(parameterActions.parameterAddError(error.message)));    
};

const deleteParameter = (id) => (dispatch) => {

    dispatch(parameterActions.parameterDeleting());

    ParameterDataService.deleteParameter(id)
        .then((response) => {
            console.log('response', response.data);
            dispatch(parameterActions.parameterDeleted(response.data))
        })
        .catch((error) => dispatch(parameterActions.parameterDeleteError(error.message)));    
};


export{

    getParameters,
    getParameter,
    updateParameter,
    createParameter,
    deleteParameter,

}