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
    return (
        <div className={style.dialogs}>

            <div className={style.dialogsItem}>
                <Dialog name="Dima" id="1"/>
                <Dialog name="Sveta" id="2"/>
                <Dialog name="Ilia" id="3"/>
            </div>

            <div className={style.messages}>
                <Message text="Hi"/>
                <Message text="Yo"/>
                <Message text="How are you?"/>
            </div>

        </div>
    );
};

export default Dialogs;