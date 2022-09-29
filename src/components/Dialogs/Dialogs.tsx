import React, {ChangeEvent} from 'react';
import style from './Dialogs.module.css';
import {Dialog} from './Dialog/Dialog';
import {Message} from './Message/Message';
import { DialogsPageType} from '../../redux/state';

type DialogsPropsType = {
    //store: StoreType
    updateNewMessage: (newMessage: string) => void
    sendMessage: () => void
    dialogsPage:DialogsPageType
    newMessageText: string
    //dispatch: (action: ActionsType) => void
}

const Dialogs = (props: DialogsPropsType) => {

    let state = props.dialogsPage;
    let newMessageText = props.newMessageText;

    function addMessage() {
        props.sendMessage();
    }

    const onMessageChangeHandler = (e: ChangeEvent<HTMLTextAreaElement>) => {
        let newMessage = e.currentTarget.value;
        props.updateNewMessage(newMessage);
        //props.dispatch(updateNewMessageTextAC(e.currentTarget.value));
    };
    return (
        <div className={style.dialogs}>

            <div className={style.dialogsItem}>
                {state.dialogsData.map(dialog =>
                    <Dialog name={dialog.name} id={dialog.id}/>)}
            </div>

            <div className={style.messages}>
                {state.messagesData.map(message =>
                    <Message id={message.id} text={message.text}/>)}
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