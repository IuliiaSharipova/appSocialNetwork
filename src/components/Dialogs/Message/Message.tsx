import React from 'react';
import style from './../Dialogs.module.css';

type MessageType = {
    id: string
    text: string
};
export const Message = (props: MessageType) => {
    return (
        <div className={style.message}>{props.text}</div>
    );
};
