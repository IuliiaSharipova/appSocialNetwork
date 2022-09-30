import React from 'react';
import {addMessageAC, updateNewMessageTextAC} from '../../redux/dialogsPage-reducer';
import Dialogs from './Dialogs';
import {StoreContext} from '../../StoreContext';
/*
type DialogsContainerPropsType = {
    store: StoreType
    //newMessageText: string
    //dispatch: (action: ActionsType) => void
}*/

const DialogsContainer = () => {


    return (
        <StoreContext.Consumer>
            {
                (store) => {
                    let state = store.getState().dialogsPage;
                    let newMessageText = store.getState().dialogsPage.newMessageText;

                    function onSendMessageClick() {
                        store.dispatch(addMessageAC());
                    }

                    const onMessageChangeHandler = (newMessage: string) => {
                        store.dispatch(updateNewMessageTextAC(newMessage));
                    };
                    return (<Dialogs
                        //store={props.store}
                        updateNewMessage={onMessageChangeHandler}
                        sendMessage={onSendMessageClick}
                        dialogsPage={state}
                        newMessageText={newMessageText}/>);

                }
            }
        </StoreContext.Consumer>
    );
};

export default DialogsContainer;