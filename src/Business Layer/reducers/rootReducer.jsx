import { combineReducers } from 'redux';
import eventsReducer from '../reducers/event/event.reducer';
import authReducer from '../reducers/auth/auth.reducer';



const rootReducer = function() {
    return combineReducers({
        auth: authReducer,
        events: eventsReducer,
    });
}

export default rootReducer;