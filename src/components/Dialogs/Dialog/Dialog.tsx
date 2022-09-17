import React from 'react';
import style from './../Dialogs.module.css';
import {DialogType} from '../../../redux/state';

export const Dialog = (props: DialogType) => {
    return (
        <div className={style.dialog}>{props.name}</div>
    );
};
