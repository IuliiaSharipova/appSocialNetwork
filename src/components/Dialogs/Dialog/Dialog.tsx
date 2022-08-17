import React from 'react';
import style from './../Dialogs.module.css';
import {NavLink} from 'react-router-dom';

export type DialogType={
    name:string
    id:string
}
export const Dialog = (props: DialogType) => {
    return (
        <div className={style.dialog}>
            <NavLink to={`/dialogs/${props.id}`}>{props.name}</NavLink>
        </div>
    );
};
