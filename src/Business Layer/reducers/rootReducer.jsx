import { combineReducers } from 'redux';
import eventsReducer from '../reducers/event/event.reducer';
import authReducer from '../reducers/auth/auth.reducer';
import scoutsReducer from './scout/scout.reducer';
import accountReducer from './account/account.reducer';



const rootReducer = function() {
    return combineReducers({
        auth: authReducer,
        events: eventsReducer,
        scouts: scoutsReducer,
        account: accountReducer
    });
}

export default rootReducer;