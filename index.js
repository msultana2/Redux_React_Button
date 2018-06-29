import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import Button from './Button';

import { Provider } from 'react-redux';
import { createStore } from 'redux';

const initialState = {
    showText: false
};

function reducer(state = initialState, action) {
    switch(action.type) {
        case 'SHOW':
            return {
                showText: true
            };
        default:
            return state;
    }
}

const store = createStore(reducer);

const App = () => (
    <Provider store={store}>
        <Button />
    </Provider>
);

ReactDOM.render(<App />, document.getElementById('root'));