import accountActionTypes from '../../actions/account/account.action.types';

const initialState = {
    account: {},
    accountLoading: true,
    accountCreating: false,
    accountDeleting: false,
    accountUpdating: false,
    accountLocalUpdating: false,
    error: null,

}


export default function eventsReducer(state = initialState, action) {
    // console.log('eventReducer', action);
    switch (action.type) {

        case accountActionTypes.ACCOUNT_LOADING:
            return {
                ...state,
                accountLoading: true,
                error: null
            }
        case accountActionTypes.ACCOUNT_LOADED:
            return {
                ...state,
                event: action.payload,
                accountLoading: false,
            };

        case accountActionTypes.ACCOUNT_LOADING_ERROR:
            return {
                ...state,
                accountLoading: false,
                error: action.payload,
            };

        // ================================================

        case accountActionTypes.ACCOUNT_CREATING:
            return {
                ...state,
                accountCreating: true,
                error: null
            }
        case accountActionTypes.ACCOUNT_CREATED:
            return {
                ...state,
                account: action.payload,
                accountCreating: false,
            };
        
        case accountActionTypes.ACCOUNT_CREATE_ERROR:
            return {
                ...state,
                accountCreating: false,
                error: action.payload,
            };
        
        // ===================================================

        case accountActionTypes.ACCOUNT_UPDATNG:
            return {
                ...state,
                accountUpdating: true,
                error: null
            }
        case accountActionTypes.ACCOUNT_UPDATED:
            return {
                ...state,
                account: action.payload,
                accountUpdating: false,
            };
        case accountActionTypes.ACCOUNT_UPDATE_ERROR:
            return {
                ...state,
                accountUpdating: false,
                error: action.payload,
            };

         // ===================================================

         case accountActionTypes.ACCOUNT_LOCAL_UPDATNG:
            return {
                ...state,
                accountLocalUpdating: true,
                error: null
            }
        case accountActionTypes.ACCOUNT_LOCAL_UPDATED:
            return {
                ...state,
                account: action.payload,
                accountLocalUpdating: false,
            };
        case accountActionTypes.ACCOUNT__LOCAL_UPDATE_ERROR:
            return {
                ...state,
                accountLocalUpdating: false,
                error: action.payload,
            };

        // ===================================================
        case accountActionTypes.ACCOUNT_DELETING:
            return {
                ...state,
                accountDeleting: true,
                error: null
            }
        case accountActionTypes.ACCOUNT_DELETED:
            return {
                ...state,
                account: action.payload,
                accountDeleting: false,
            };
        
        case accountActionTypes.ACCOUNT_DELETE_ERROR:
            return {
                ...state,
                accountDeleting: false,
                error: action.payload,
            };
            
        // =========================================================

    
        default:
            return state;
    }
};



