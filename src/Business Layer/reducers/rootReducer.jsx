import { combineReducers } from 'redux';
import eventsReducer from '../reducers/event/event.reducer';



const rootReducer = function() {
    return combineReducers({
        events: eventsReducer,
    });
}

export default rootReducer;