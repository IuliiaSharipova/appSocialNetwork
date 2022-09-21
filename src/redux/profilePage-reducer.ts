import {ActionsType, ProfilePageType} from './state';

const ADD_POST = 'ADD-POST';
const UPDATE_NEW_POST_TEXT = 'UPDATE-NEW-POST-TEXT';

export const profilePageReducer = (state: ProfilePageType, action: ActionsType): ProfilePageType => {
    switch (action.type) {
        case ADD_POST:
            const newPost = {
                id: '3',
                message: state.newPostText,
                likesCount: 0
            };
            state.postsData.push(newPost);
            state.newPostText = '';
            return state;
        case UPDATE_NEW_POST_TEXT:
            state.newPostText = action.newPostText;
            return state;
        default:
            return state;
    }
};

export type AddPostActionType = ReturnType<typeof addPostAC>

export const addPostAC = () => {
    return {
        type: ADD_POST
    } as const;
};

export type UpdateNewPostTextActionType = ReturnType<typeof updateNewPostTextAC>

export const updateNewPostTextAC = (newPostText: string) => {
    return {
        type: UPDATE_NEW_POST_TEXT,
        newPostText
    } as const;
};