import React from 'react';
import './index.css';
import {StateType, store} from './redux/state';
import ReactDOM from 'react-dom';
import {BrowserRouter} from 'react-router-dom';
import App from './App';

export const rerenderEntireTree = (state: StateType) => {
    ReactDOM.render(
        <BrowserRouter>
            <App state={state} addPostCallback={store.addPostMessage.bind(store)} updateNewPostText={store.updateNewPostText.bind(store)}/>
        </BrowserRouter>,
        document.getElementById('root')
    );
};
rerenderEntireTree(store.getState());
store.subscribe(rerenderEntireTree);