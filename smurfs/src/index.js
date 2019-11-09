import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./components/App";

import { createStore, applyMiddleware } from 'redux';
import { Provider } from 'react-redux';
import reducer from './reducers/index';
import thunk from 'redux-thunk';

// thunk looks for actions that return another function
const store = createStore(reducer, applyMiddleware(thunk));

ReactDOM.render(
    // entire application with all components are within provider has access to the object called store
    // store contains data
    // getting store from reducers/index
    <Provider store={store}>
        <App />
    </Provider>,
    document.getElementById("root"));