import {AddMessageActionType, UpdateNewMessageTextActionType} from './dialogsPage-reducer';
import {Dispatch} from 'redux';
import {profileAPI} from '../api/api';

const ADD_POST = 'ADD-POST';
const UPDATE_NEW_POST_TEXT = 'UPDATE-NEW-POST-TEXT';
const SET_USER_PROFILE = 'SET_USER_PROFILE';


type ActionsType =
    AddPostActionType
    | UpdateNewPostTextActionType
    | AddMessageActionType
    | UpdateNewMessageTextActionType
    | setUserProfileActionType

export type UserProfileType = {
    userId: number
    aboutMe: string
    lookingForAJob: boolean
    lookingForAJobDescription: string
    fullName: string
    contacts: {
        github: string
        vk: string
        facebook: string
        instagram: string
        twitter: string
        website: string
        youtube: string
        mainLink: string
    }
    photos: {
        small: string
        large: string
    }
}

type initialStateType = typeof initialState
let initialState = {
    postsData: [
        {id: '1', message: 'It is my first message', likesCount: 10},
        {id: '2', message: 'What are you learning now?', likesCount: 15},
    ],
    newPostText: '',
    profile: {
        userId: 0,
        aboutMe: '',
        lookingForAJob: false,
        lookingForAJobDescription: '',
        fullName: '',
        contacts: {
            github: '',
            vk: '',
            facebook: '',
            instagram: '',
            twitter: '',
            website: '',
            youtube: '',
            mainLink: '',
        },
        photos: {
            small: '',
            large: '',
        }

    }
};

export const profilePageReducer = (state: initialStateType = initialState, action: ActionsType): initialStateType => {
    switch (action.type) {
        case ADD_POST:
            const newPost = {
                id: '3',
                message: state.newPostText,
                likesCount: 0
            };
            return {...state, postsData: [...state.postsData, newPost], newPostText: ''};
        case UPDATE_NEW_POST_TEXT:
            return {...state, newPostText: action.newPostText};
        case SET_USER_PROFILE:
            return {...state, profile: action.profile};
        default:
            return {...state};
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

export type setUserProfileActionType = ReturnType<typeof setUserProfile>
export const setUserProfile = (profile: UserProfileType) => {
    return {
        type: SET_USER_PROFILE,
        profile
    } as const;
};

export const getUserProfile = (userId: number) => {
    return (dispatch: Dispatch) => {
        profileAPI.getProfile(userId).then(data => {
            dispatch(setUserProfile(data));
        });
    };
};