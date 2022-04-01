import { applyMiddleware, createStore, compose } from "redux";
import thunk from "redux-thunk";
import logger from "redux-logger";
import rootReducer from "../reducers/rootReducer";

const store = () => {

    const middlewares = [thunk];

    // if (process.env.NODE_ENV === "development"){
    //     middlewares.push(logger)
    // }

    const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

    const middlewareEnhancer = composeEnhancers(applyMiddleware(...middlewares));

    const store = createStore(rootReducer(), middlewareEnhancer);

    return store;

}

export default store;