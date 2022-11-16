import {
    AddPostActionType,
    setUserProfileActionType,
    UpdateNewPostTextActionType,
} from './profilePage-reducer';
import {AddMessageActionType, dialogsPageReducer, UpdateNewMessageTextActionType} from './dialogsPage-reducer';

type ActionsType =
    AddPostActionType
    | UpdateNewPostTextActionType
    | AddMessageActionType
    | UpdateNewMessageTextActionType
    | setUserProfileActionType

export type StoreType = {
    _state: StateType
    getState: () => StateType
    _callSubscriber: (state: StateType) => void
    subscribe: (observer: (state: StateType) => void) => void
    dispatch: (action: ActionsType) => void
}

const store: StoreType = {
    _state: {
        profilePage: {
            postsData: [
                {id: '1', message: 'It is my first message', likesCount: 10},
                {id: '2', message: 'What are you learning now?', likesCount: 15},
            ],
            newPostText: '',
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
      /*  this._state.profilePage = profilePageReducer(this._state.profilePage, action)*/;
        this._state.dialogsPage = dialogsPageReducer(this._state.dialogsPage, action);
        this._callSubscriber(this._state);
    }
};

 type PostType = {
    id: string
    message: string
    likesCount: number
}

 type MessageType = {
    id: string
    text: string
};

 type DialogType = {
    name: string
    id: string
}

type DialogsPageType = {
    dialogsData: Array<DialogType>
    messagesData: Array<MessageType>
    newMessageText: string
}

 type ProfilePageType = {
    postsData: Array<PostType>
    newPostText: string
}

 type StateType = {
    profilePage: ProfilePageType
    dialogsPage: DialogsPageType
}


