import AccountDataService from '../../../Data Layer/services/account/account.service';
import accountActions from '../../actions/account/account.actions'


const getAccount = (id) => (dispatch) => {

    dispatch(accountActions.accountLoading());

    AccountDataService.getAccount(id)
        .then((response) => {
            console.log('response', response.data);
            dispatch(accountActions.accountLoaded(response.data))
        })
        .catch((error) => dispatch(accountActions.accountLoadingError(error.message)));   
};

const updateAccount = (id, data) => (dispatch) => {

    dispatch(accountActions.accountUpdating());

    AccountDataService.updateAccount(id,data)
        .then((response) => {
            console.log('response', response.data);
            dispatch(accountActions.accountUpdated(response.data))
        })
        .catch((error) => dispatch(accountActions.accountUpdateError(error.message)));    
};

const createAccount = (data) => (dispatch) => {

    dispatch(accountActions.accountCreating());

    AccountDataService.createAccount(data)
        .then((response) => {
            console.log('response', response.data);
            dispatch(accountActions.accountCreated(response.data))
        })
        .catch((error) => dispatch(accountActions.accountCreateError(error.message)));    
};

const deleteAccount = (id) => (dispatch) => {

    dispatch(accountActions.accountDeleting());

    AccountDataService.deleteAccount(id)
        .then((response) => {
            console.log('response', response.data);
            dispatch(accountActions.accountDeleted(response.data))
        })
        .catch((error) => dispatch(accountActions.accountDeleteError(error.message)));    
};


export {
    getAccount,
    updateAccount,
    createAccount,
    deleteAccount,
}