import {rerenderEntireTree} from '../rerender';

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
    newPostText:string
}

export type StateType = {
    profilePage: ProfilePageType
    dialogsPage: DialogsPageType
}

export const state: StateType = {
    profilePage: {
        postsData: [
            {id: '1', message: 'It is my first message', likesCount: 10},
            {id: '2', message: 'What are you learning now?', likesCount: 15},
        ],
        newPostText:''
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
};

export const addPostMessage = () => {
    const newPost: PostType = {
        id: '3',
        message: state.profilePage.newPostText,
        likesCount: 0
    };
    state.profilePage.postsData.push(newPost);
    state.profilePage.newPostText=''
    rerenderEntireTree(state)
};
export const updateNewPostText = (newPostText: string) => {
    state.profilePage.newPostText=newPostText
    rerenderEntireTree(state)
};
