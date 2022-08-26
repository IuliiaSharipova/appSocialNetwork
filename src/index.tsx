import React from 'react';
import './index.css';
import {addPostMessage, state, StateType, updateNewPostText} from './redux/state';
import ReactDOM from 'react-dom';
import {BrowserRouter} from 'react-router-dom';
import App from './App';
import {subscribe} from './redux/state';

export const rerenderEntireTree = (state: StateType) => {
    ReactDOM.render(
        <BrowserRouter>
            <App state={state} addPostCallback={addPostMessage} updateNewPostText={updateNewPostText}/>
        </BrowserRouter>,
        document.getElementById('root')
    );
};
rerenderEntireTree(state);
subscribe(rerenderEntireTree);