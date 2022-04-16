// const Protected = ({Component}, AuthStatus) => {
//     console.log('Guard Status:', AuthStatus)
//     return AuthStatus ? <Component /> : <Navigate to="/login" />
// }

import React from 'react';
import { login } from "../../Business Layer/thunks/auth/auth.thunk";
import { Navigate, Outlet } from 'react-router-dom';
import { connect } from 'react-redux';




const PrivateRoute = (props) => {
    const auth = props.auth.isAuthenticated; // determine if authorized, from context or however you're doing it
    console.log('Status:', auth)
    return auth ? <Outlet /> : <Navigate to="/login" />;
}

const mapStateToProps = state => {
    return {
      auth: state.auth
    };
  }
  
  const mapDispatchToProps = dispatch => {
    return {
      login: (username, password) => dispatch(login(username, password))
    };
  }


export default connect(mapStateToProps, mapDispatchToProps)(PrivateRoute);