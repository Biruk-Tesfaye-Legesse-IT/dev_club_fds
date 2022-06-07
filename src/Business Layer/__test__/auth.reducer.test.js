import authActionTypes from "../actions/auth/auth.action.types";
import authActions from "../actions/auth/auth.actions";
import authReducer from "../reducers/auth/auth.reducer";


// Language: javascript
// Path: src\Business Layer\__test__\auth.reducer.test.js
// Compare this snippet from src\Data Layer\__test__\applicant.service.test.js:
// import ApplicantDataService from "../services/applicant/applicant.service";

testState = {
    user: {
        isAuthenticated: true,
        user: {
            id: 1,
            name: "test"
        }
    },
    authLoading: false,
    error: null,
    isAuthenticated: true,
    tokenRefreshing: false,
    tokenRefreshed: false,
    tokenRefreshError: null,
}

test('authReducer', () => {
    expect(authReducer(testState, authActions.loggedIn)).toEqual({
        user: null,
        authLoading: false,
        error: null,
        isAuthenticated: false,
        tokenRefreshing: false,
        tokenRefreshed: false,
        tokenRefreshError: null,

});
});