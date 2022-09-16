
type StoreType = {
    _state: StateType
    getState: () => StateType
    _callSubscriber: (state: StateType) => void
    subscribe: (observer: (state: StateType) => void) => void
    dispatch: (action: ActionsType) => void
}

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
            ]
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
        if (action.type === 'ADD-POST') {
            const newPost = {
                id: '3',
                message: this._state.profilePage.newPostText,
                likesCount: 0
            };
            this._state.profilePage.postsData.push(newPost);
            this._state.profilePage.newPostText = '';
            this._callSubscriber(this._state);
        } else if (action.type === 'UPDATE-NEW-POST-TEXT') {
            this._state.profilePage.newPostText = action.newPostText;
            this._callSubscriber(this._state);
        }
    }
};

export type ActionsType = AddPostActionType | UpdateNewPostTextActionType

type AddPostActionType = {
    type: 'ADD-POST'
}

type UpdateNewPostTextActionType = {
    type: 'UPDATE-NEW-POST-TEXT'
    newPostText: string
}

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
}

export type ProfilePageType = {
    postsData: Array<PostType>
    newPostText: string
}

export type StateType = {
    profilePage: ProfilePageType
    dialogsPage: DialogsPageType
}


