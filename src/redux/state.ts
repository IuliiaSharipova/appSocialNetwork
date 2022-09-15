export const store = {
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
    addPostMessage () {
        const newPost= {
            id: '3',
            message: this._state.profilePage.newPostText,
            likesCount: 0
        };
        this._state.profilePage.postsData.push(newPost);
        this._state.profilePage.newPostText = '';
        this._callSubscriber(this._state);
    },
    updateNewPostText (newPostText: string)  {
        this._state.profilePage.newPostText = newPostText;
        this._callSubscriber(this._state);
    },
    subscribe  (observer: (state: StateType) => void)  {
    this._callSubscriber = observer;
    },
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
}

export type ProfilePageType = {
    postsData: Array<PostType>
    newPostText: string
}

export type StateType = {
    profilePage: ProfilePageType
    dialogsPage: DialogsPageType
}


