import React from 'react';
import './index.css';
import {store} from './redux/redux-store';
import ReactDOM from 'react-dom';
import {BrowserRouter} from 'react-router-dom';
import App from './App';
import {StoreContext} from './StoreContext';

export const rerenderEntireTree = () => {
    ReactDOM.render(
        <BrowserRouter>
            <StoreContext.Provider value={store}>
            <App/>
            </StoreContext.Provider>
        </BrowserRouter>,
        document.getElementById('root')
    );
};
rerenderEntireTree();
store.subscribe(() => {
       rerenderEntireTree();
});