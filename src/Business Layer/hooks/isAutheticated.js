import { connect } from 'react-redux';

import { login } from "../../../Business Layer/thunks/auth/auth.thunk";

import { useSelector, useDispatch, connect } from "react-redux";

const dispatch = useDispatch();

import store from "../pages/Home.jsx";




const isAuthenticatedByToken = () => {
    // if (localStorage.getItem('token')) {
    if (sessionStorage.getItem('access')) {
        return true;
    }
};



const isAuthenticatedByLoginSuccessonProps = () => {
    if (props.auth.isAuthenticated) {
        return true;
    } else {
        return false;
    }
};

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

// export default connect(mapStateToProps, mapDispatchToProps)(isAuthenticatedByLoginSuccessonProps);

const { isAuthenticated } = useSelector((state) => state.auth); // this .posts is the name given to the reducer in the store/index.js file in combineReducers

const isAuthenticatedByLoginSuccess = () => {
    if (props.auth.isAuthenticated) {
        return true;
    } else {
        return false;
    }
};

function loadedShow() {
    if (isLoading === true) {
        return '<p>Loading...</p>'
    } else if (posts === true) {
        console.log('posts', posts);

        return 'posts.map(post => (<h5 key={post.id}>{post.firstName}</h5>),)'
    } else if (error === true) {

        return 'error   '
    } else {

        return store.getState();
        // return posts.map(post => (<h5 key={post.id}>{post.firstName}</h5>),)
    }
}