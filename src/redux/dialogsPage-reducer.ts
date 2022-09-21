import {ActionsType, DialogsPageType} from './state';

const ADD_MESSAGE = 'ADD-MESSAGE';
const UPDATE_NEW_MESSAGE_TEXT = 'UPDATE-NEW-MESSAGE-TEXT';

export const dialogsPageReducer = (state: DialogsPageType, action: ActionsType): DialogsPageType => {
    switch (action.type) {
        case ADD_MESSAGE:
            const newMessage = {
                id: '4',
                text: state.newMessageText,
            };
            state.messagesData.push(newMessage);
            state.newMessageText = '';
            return state;
        case 'UPDATE-NEW-MESSAGE-TEXT':
            state.newMessageText = action.newMessageText;
            return state;
        default:
            return state;
    }
};
/*
else
if (action.type === ADD_MESSAGE) {
    const newMessage = {
        id: '4',
        text: this._state.dialogsPage.newMessageText,
    };
    this._state.dialogsPage.messagesData.push(newMessage);
    this._state.dialogsPage.newMessageText = '';
    this._callSubscriber(this._state);
} else if (action.type === UPDATE_NEW_MESSAGE_TEXT) {
    this._state.dialogsPage.newMessageText = action.newMessageText;
    this._callSubscriber(this._state);
}
}
}
;

*/

export type AddMessageActionType = ReturnType<typeof addMessageAC>

export const addMessageAC = () => {
    return {
        type: ADD_MESSAGE
    } as const;
};
export type UpdateNewMessageTextActionType = ReturnType<typeof updateNewMessageTextAC>

export const updateNewMessageTextAC = (newMessageText: string) => {
    return {
        type: UPDATE_NEW_MESSAGE_TEXT,
        newMessageText
    } as const;
};