import { applyMiddleware, combineReducers, compose, createStore } from "redux";
import thunk from 'redux-thunk';
import {getTaskReducer, postTaskReducer} from '../reducer/TaskReducer';

const initialState = {};
const reducer = combineReducers({
    taskReducer: postTaskReducer,
    getTaskReducer: getTaskReducer,
});
const composeEnhancer = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const store = createStore(reducer, initialState, composeEnhancer(applyMiddleware(thunk)));

export default store;