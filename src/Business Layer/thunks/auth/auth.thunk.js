import AuthDataService from '../../../Data Layer/services/auth/auth.service';
import authActions from '../../actions/auth/auth.actions'
import encrypt from '../../hooks/encryption';

export const login = (username, password) => (dispatch) => {

    dispatch(authActions.loggingIn());

    AuthDataService.login(username, password)
        .then((response) => {
            // console.log('Thunk Response: ', response.data);
            if (response.data.access) {
                // console.log('Adding token to local storage');
                // sessionStorage.setItem("user", JSON.stringify(response.data.access));
                
                // localStorage.setItem("user", JSON.stringify(response.data));

                sessionStorage.setItem("user", JSON.stringify(response.data));
            }
            dispatch(authActions.loggedIn(response.data));
            return response.data;
        })

    .catch((error) => dispatch(authActions.logInError(error.message)));
};

export const logout = () => (dispatch) => {

    dispatch(authActions.loggingOut());
    try {
        AuthDataService.logout()
        console.log('Logged out');
        dispatch(authActions.loggedOut());
    } catch (error) {
        console.log('Error logging out: ', error);
        dispatch(authActions.logOutError(error.message));
    }
};

export const refreshToken = (accessToken) => (dispatch) => {

    dispatch(authActions.refreshToken(accessToken));
};