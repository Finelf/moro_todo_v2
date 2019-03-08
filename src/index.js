import React from 'react';
import { render } from 'react-dom';
import { Provider } from 'react-redux'
import {createStore, applyMiddleware, compose } from 'redux'
import thunk from 'redux-thunk';

import App from './App';
import reducer from './redux/reducer'
import * as serviceWorker from './serviceWorker';
import {fetchAllTodos} from "./redux/actions";

const enhancers = compose(
    applyMiddleware(thunk),
    window.devToolsExtension? window.devToolsExtension() : store => store
);

const store = createStore(reducer, enhancers);

store.dispatch(fetchAllTodos());

render(
    <Provider store={store}>
        <App/>
    </Provider>, document.getElementById('root')
);


serviceWorker.unregister();
