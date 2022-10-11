import {ActionsType, DialogsPageType} from './state';

const ADD_MESSAGE = 'ADD-MESSAGE';
const UPDATE_NEW_MESSAGE_TEXT = 'UPDATE-NEW-MESSAGE-TEXT';

let initialState: DialogsPageType = {
    dialogsData: [
        {id: '1', name: 'Dima'},
        {id: '2', name: 'Sveta'},
        {id: '3', name: 'Ilia'}
    ],
    messagesData: [
        {id: '1', text: 'Hi'},
        {id: '2', text: 'Yo'},
        {id: '3', text: 'How are you?'}
    ],
    newMessageText: ''
};

export const dialogsPageReducer = (state = initialState, action: ActionsType): DialogsPageType => {
    switch (action.type) {
        case ADD_MESSAGE:
            const newMessage = {
                id: '4',
                text: state.newMessageText,
            };
            return {...state, messagesData: [...state.messagesData, newMessage], newMessageText: ''};
        case 'UPDATE-NEW-MESSAGE-TEXT':
            return {...state, newMessageText: action.newMessageText};
        default:
            return {...state};
    }
};

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