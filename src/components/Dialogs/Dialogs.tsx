import React, {ChangeEvent, useRef} from 'react';
import style from './Dialogs.module.css';
import {Dialog} from './Dialog/Dialog';
import {Message} from './Message/Message';
import {
    ActionsType,
    DialogsPageType,
    DialogType,
    MessageType, StoreType,
} from '../../redux/state';
import {addMessageAC, updateNewMessageTextAC} from '../../redux/dialogsPage-reducer';

type DialogsPropsType = {
    store: StoreType
    newMessageText: string
    dispatch: (action: ActionsType) => void
}

const Dialogs = (props: DialogsPropsType) => {

    let state = props.store.getState().dialogsPage;
let newMessageText=props.store.getState().dialogsPage.newMessageText
    function addMessage() {
        props.dispatch(addMessageAC());
    }

    const onMessageChangeHandler = (e: ChangeEvent<HTMLTextAreaElement>) => {
        props.dispatch(updateNewMessageTextAC(e.currentTarget.value));
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