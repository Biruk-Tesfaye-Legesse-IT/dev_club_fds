import AuthDataService from '../../../Data Layer/services/auth/auth.service';
import authActions from '../../actions/auth/auth.actions'
import encrypt from '../../hooks/encryption';

export const login = (username, password) => (dispatch) => {

    dispatch(authActions.loggingIn());

    AuthDataService.login(username, password)
        .then((response) => {
            // console.log('Thunk Response: ', response.data);
            
            
            if (response.data.account.type == 'CLUB'){
                if (response.data.access && response.data) {
                    // console.log('Adding token to local storage');
                    // sessionStorage.setItem("user", JSON.stringify(response.data.access));
                    
                    // localStorage.setItem("user", JSON.stringify(response.data));
                
                    AuthDataService.setAccessToken(response.data.access);
                    AuthDataService.setRefreshToken(response.data.refresh);
                    sessionStorage.setItem( 'user', (JSON.stringify(response.data.account)));
                    console.log('sessionData:', JSON.parse(sessionStorage.getItem('user')));    
                    console.log('responseData', JSON.stringify(response.data.account));
                }
                dispatch(authActions.loggedIn(response.data));
                return response.data;
                
            }
            else {dispatch(authActions.logInError('You are not a club!'));}
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

export const refreshToken = (refreshToken) => (dispatch) => {

    dispatch(authActions.refreshingToken());
    try{
        AuthDataService.refreshToken(refreshToken)
        .then((response) => {
            if (response.data.access) {
                // console.log('Adding token to local storage');
                // sessionStorage.setItem("user", JSON.stringify(response.data.access));
                
                // localStorage.setItem("user", JSON.stringify(response.data));

                // sessionStorage.setItem("user"., JSON.stringify(response.data));
                sessionStorage.setItem("access", JSON.stringify(response.data.access));
            }
            dispatch(authActions.tokenRefereshed(response.data));
            return response.data;
        })

    } catch (error) {
        console.log('Error refreshing token: ', error);
        dispatch(authActions.refreshTokenError(error.message));
    }
};