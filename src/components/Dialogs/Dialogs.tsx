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
    let dialogsData=[
        {id:"1", name:"Dima"},
        {id:"2", name:"Sveta"},
        {id:"3", name:"Ilia"}
    ]
    let messagesData=[
        {id:"1", text:"Hi"},
        {id:"2", text:"Yo"},
        {id:"3", text:"How are you?"}
    ]
    return (
        <div className={style.dialogs}>

            <div className={style.dialogsItem}>
                <Dialog name={dialogsData[0].name} id={dialogsData[0].id}/>
                <Dialog name={dialogsData[1].name} id={dialogsData[1].id}/>
                <Dialog name={dialogsData[2].name} id={dialogsData[2].id}/>
            </div>

            <div className={style.messages}>
                <Message text={messagesData[0].text}/>
                <Message text={messagesData[1].text}/>
                <Message text={messagesData[2].text}/>
            </div>

        </div>
    );
};

export default Dialogs;