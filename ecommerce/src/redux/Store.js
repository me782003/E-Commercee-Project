import {createStore, applyMiddleware } from 'redux'
import thunk from 'redux-thunk';
import rootReducer from "./reducers/rootReducer"
    import {composeWithDevTools} from 'redux-devtools-extension';

    const initialState = {};
    const middleware = [thunk];

export const Store = createStore (rootReducer , initialState , composeWithDevTools(applyMiddleware(...middleware)))