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
import Dialogs from './Dialogs';

type DialogsContainerPropsType = {
    store: StoreType
    //newMessageText: string
    //dispatch: (action: ActionsType) => void
}

const DialogsContainer = (props: DialogsContainerPropsType) => {

    let state = props.store.getState().dialogsPage;
    let newMessageText = props.store.getState().dialogsPage.newMessageText;

    function onSendMessageClick() {
        props.store.dispatch(addMessageAC());
    }

    const onMessageChangeHandler = (newMessage:string) => {
        props.store.dispatch(updateNewMessageTextAC(newMessage));
    };
    return (
        <Dialogs //store={props.store}
                 updateNewMessage={onMessageChangeHandler}
                 sendMessage={onSendMessageClick}
                 dialogsPage={state}
                 newMessageText={newMessageText}/>
    );
};

export default DialogsContainer;