import React from 'react';
import style from './Dialogs.module.css';
import {Dialog, DialogType} from './Dialog/Dialog';
import {Message, MessagePropsType} from './Message/Message';

export type DialogsPropsType = {
    dialog: Array<DialogType>
    message: Array<MessagePropsType>
}
const Dialogs = (props: DialogsPropsType) => {

    return (
        <div className={style.dialogs}>

            <div className={style.dialogsItem}>
                {props.dialog.map(dialog => <Dialog name={dialog.name} id={dialog.id}/>)}
            </div>

            <div className={style.messages}>
                {props.message.map(message => <Message id={message.id} text={message.text}/>)}
            </div>

        </div>
    );
};

export default Dialogs;