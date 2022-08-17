import React from 'react';
import style from './Dialogs.module.css';
import {Dialog} from './Dialog/Dialog';
import {Message} from './Message/Message';
import {DialogsPageType} from '../../redux/state';


const Dialogs = (props: DialogsPageType) => {

    return (
        <div className={style.dialogs}>

            <div className={style.dialogsItem}>
                {props.dialogsData.map(dialog => <Dialog name={dialog.name} id={dialog.id}/>)}
            </div>

            <div className={style.messages}>
                {props.messagesData.map(message => <Message id={message.id} text={message.text}/>)}
            </div>

        </div>
    );
};

export default Dialogs;