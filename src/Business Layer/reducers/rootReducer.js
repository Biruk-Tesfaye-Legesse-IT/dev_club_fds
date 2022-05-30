import { combineReducers } from 'redux';
import eventsReducer from './event/event.reducer';
import authReducer from './auth/auth.reducer';
import scoutsReducer from './scout/scout.reducer';
import accountReducer from './account/account.reducer';
import skillReducer from './skill/skill.reducer';
import applicantsReducer from './applicant/applicant.reducer';
import candidatesReducer from './candidate/candidate.reducer';
import acceptedsReducer from './accepted/accepted.reducer';



const rootReducer = function() {
    return combineReducers({
        auth: authReducer,
        events: eventsReducer,
        scouts: scoutsReducer,
        account: accountReducer,
        skills: skillReducer,
        applicants: applicantsReducer,
        candidates: candidatesReducer,
        accepteds: acceptedsReducer,
    });
}

export default rootReducer;