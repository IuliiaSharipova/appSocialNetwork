export type StoreType = {
    _state: StateType
    getState: () => StateType
    _callSubscriber: (state: StateType) => void
    subscribe: (observer: (state: StateType) => void) => void
    dispatch: (action: ActionsType) => void
}
const ADD_POST = 'ADD-POST';
const UPDATE_NEW_POST_TEXT = 'UPDATE-NEW-POST-TEXT';
const ADD_MESSAGE='ADD-MESSAGE'
const UPDATE_NEW_MESSAGE_TEXT='UPDATE-NEW-MESSAGE-TEXT'

export const store: StoreType = {
    _state: {
        profilePage: {
            postsData: [
                {id: '1', message: 'It is my first message', likesCount: 10},
                {id: '2', message: 'What are you learning now?', likesCount: 15},
            ],
            newPostText: ''
        },
        dialogsPage: {
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
        }
    },
    getState() {
        return this._state;
    },
    _callSubscriber(state: StateType) {
        console.log('rerender state');
    },
    subscribe(observer) {
        this._callSubscriber = observer;
    },
    dispatch(action) {
        if (action.type === ADD_POST) {
            const newPost = {
                id: '3',
                message: this._state.profilePage.newPostText,
                likesCount: 0
            };
            this._state.profilePage.postsData.push(newPost);
            this._state.profilePage.newPostText = '';
            this._callSubscriber(this._state);
        } else if (action.type === UPDATE_NEW_POST_TEXT) {
            this._state.profilePage.newPostText = action.newPostText;
            this._callSubscriber(this._state);
        } else if (action.type === ADD_MESSAGE){
            const newMessage = {
                id: '4',
                text: this._state.dialogsPage.newMessageText,
            };
            this._state.dialogsPage.messagesData.push(newMessage);
            this._state.dialogsPage.newMessageText= '';
            this._callSubscriber(this._state);
        } else if (action.type === UPDATE_NEW_MESSAGE_TEXT) {
            this._state.dialogsPage.newMessageText = action.newMessageText;
            this._callSubscriber(this._state);
        }
    }
};

export type ActionsType = AddPostActionType | UpdateNewPostTextActionType|AddMessageActionType |UpdateNewMessageTextActionType

type AddPostActionType = ReturnType<typeof addPostAC>

export const addPostAC = () => {
    return {
        type: ADD_POST
    } as const;
};

type UpdateNewPostTextActionType = ReturnType<typeof updateNewPostTextAC>

export const updateNewPostTextAC = (newPostText: string) => {
    return {
        type: UPDATE_NEW_POST_TEXT,
        newPostText
    } as const;
};

type AddMessageActionType = ReturnType<typeof addMessageAC>

export const addMessageAC = () => {
    return {
        type: ADD_MESSAGE
    } as const;
};
type UpdateNewMessageTextActionType = ReturnType<typeof updateNewMessageTextAC>

export const updateNewMessageTextAC = (newMessageText: string) => {
    return {
        type: UPDATE_NEW_MESSAGE_TEXT,
        newMessageText
    } as const;
};

export type PostType = {
    id: string
    message: string
    likesCount: number
}

export type MessageType = {
    id: string
    text: string
};

export type DialogType = {
    name: string
    id: string
}

export type DialogsPageType = {
    dialogsData: Array<DialogType>
    messagesData: Array<MessageType>
    newMessageText:string
}

export type ProfilePageType = {
    postsData: Array<PostType>
    newPostText: string
}

export type StateType = {
    profilePage: ProfilePageType
    dialogsPage: DialogsPageType
}


