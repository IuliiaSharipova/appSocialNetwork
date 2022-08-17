import React from 'react';
import style from './../Dialogs.module.css';

export type MessagePropsType = {
    id:string
    text: string
};

export const Message = (props: MessagePropsType) => {
    return (
        <div className={style.message}>{props.text}</div>
    );
};
