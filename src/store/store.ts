import {applyMiddleware, combineReducers, configureStore, createStore} from "@reduxjs/toolkit";
import postReducer from "./reducers/postReducer";
import thunk from "redux-thunk";

const rootReducer = combineReducers({
    posts: postReducer
});

const store = createStore(
    rootReducer,
    applyMiddleware(thunk)
);

export default store;
