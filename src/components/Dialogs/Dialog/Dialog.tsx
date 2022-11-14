import React from 'react';
import style from './../Dialogs.module.css';

type DialogType = {
    name: string
    id: string
}
export const Dialog = (props: DialogType) => {
    return (
        <div className={style.dialog}>{props.name}</div>
    );
};
