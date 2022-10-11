import React, {ChangeEvent} from 'react';
import style from './Dialogs.module.css';
import {Dialog} from './Dialog/Dialog';
import {Message} from './Message/Message';
import {MapDispatchPropsType, MapStatePropsType} from './DialogsContainer';

type DialogsPropsType = MapStatePropsType & MapDispatchPropsType

const Dialogs = (props: DialogsPropsType) => {

    let state = props.dialogsPage;
    let newMessageText = state.newMessageText;

    function addMessage() {
        props.sendMessage();
    }

    const onMessageChangeHandler = (e: ChangeEvent<HTMLTextAreaElement>) => {
        let newMessage = e.currentTarget.value;
        props.updateNewMessage(newMessage);
    };
    return (
        <div className={style.dialogs}>

            <div className={style.dialogsItem}>
                {state.dialogsData.map(dialog =>
                    <Dialog key={dialog.id} name={dialog.name} id={dialog.id}/>)}
            </div>

            <div className={style.messages}>
                {state.messagesData.map(message =>
                    <Message key={message.id} id={message.id} text={message.text}/>)}
                <div>
                    <div>
                        <textarea value={newMessageText} onChange={onMessageChangeHandler}></textarea>
                    </div>
                    <div>
                        <button onClick={addMessage}>Add message</button>
                    </div>
                </div>
            </div>

        </div>
    );
};

export default Dialogs;