import React from 'react';
import style from './Dialogs.module.css';
import {NavLink} from 'react-router-dom';
import {stringify} from 'querystring';

export type DialogPropsType = {
    name: string,
    id: string
};

export const Dialog = (props: DialogPropsType) => {
    return (
        <div className={style.dialog}>
            <NavLink to={`/dialogs/${props.id}`}>{props.name}</NavLink>
        </div>
    );
};
export type MessagePropsType = {
    text: string
};

export const Message = (props: MessagePropsType) => {
    return (
        <div className={style.message}>{props.text}</div>
    );
};

const Dialogs = () => {
    let dialogsData = [
        {id: '1', name: 'Dima'},
        {id: '2', name: 'Sveta'},
        {id: '3', name: 'Ilia'}
    ];
    let messagesData = [
        {id: '1', text: 'Hi'},
        {id: '2', text: 'Yo'},
        {id: '3', text: 'How are you?'}
    ];
    return (
        <div className={style.dialogs}>

            <div className={style.dialogsItem}>
                {dialogsData.map(dialog => <Dialog name={dialog.name} id={dialog.id}/>)}
            </div>

            <div className={style.messages}>
                {messagesData.map(message => <Message text={message.text}/>)}
            </div>

        </div>
    );
};

export default Dialogs;