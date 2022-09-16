import React, {useRef} from 'react';
import style from './../Dialogs.module.css';
import {MessageType} from '../../../redux/state';

export const Message = (props: MessageType) => {
    return (
        <div className={style.message}>{props.text}</div>
    );
};
