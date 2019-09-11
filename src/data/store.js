import { createStore, compose } from "redux";
import persistState from "redux-localstorage";

import reducer from "./reducer";
import initial from "./initial";

let composeEnhancers =
window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

let store = createStore(
	reducer, 
	initial,
	composeEnhancers(persistState())
);

export default store;