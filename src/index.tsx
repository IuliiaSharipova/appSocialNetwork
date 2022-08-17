import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';


export const postsData = [
    {id: '1', message: 'It is my first message', likesCount: 10},
    {id: '2', message: 'What are you learning now?', likesCount: 15},
];

export const dialogsData = [
    {id: '1', name: 'Dima'},
    {id: '2', name: 'Sveta'},
    {id: '3', name: 'Ilia'}
];

export const messagesData = [
    {id: '1', text: 'Hi'},
    {id: '2', text: 'Yo'},
    {id: '3', text: 'How are you?'}
];

ReactDOM.render(
    <App postsData={postsData} dialogsData={dialogsData} messagesData={messagesData}/>,
  document.getElementById('root')
);