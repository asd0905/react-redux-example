import React from 'react';
import ReactDOM from 'react-dom';
import {Provider} from 'react-redux'; // react-redux
import {createStore} from 'redux'; // redux

import App from "./containers/app";
import reducers from './reducers';

const store = createStore(reducers)

ReactDOM.render(
    <Provider store={store}>
        <App/>
    </Provider>,
    document.querySelector('.container'))
