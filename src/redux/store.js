import { createStore, applyMiddleware, compose } from "redux";
import reducers from "./reducers/index"; //importing the combined reducers function from the index.js
import thunk from "redux-thunk";

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose; //This helps us see the state in the browser redux devtool extension i installed from chrome, when i "inspect" in the browser. I copied it from the official redux github readme.

const store = createStore(reducers, composeEnhancers(applyMiddleware(thunk))); //the arguments are the combinedReducers function you just imported and and then the "thunk" middleware for making the redux actions async. 

export default store;