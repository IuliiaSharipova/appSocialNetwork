const FOLLOW = 'FOLLOW';
const UNFOLLOW = 'UNFOLLOW';
const SET_USERS = 'SET_USERS';

type initialStateType = {
    users: Array<UserType>
}

export type UserType = {
    id: number
    fullName: string
    photoUrl: string
    status: string
    location: UserLocationType
    followed: boolean
}
type UserLocationType = {
    city: string
    country: string
}
const initialState: initialStateType = {
    users: []
};

export const usersPageReducer = (state = initialState, action: ActionsType): initialStateType => {
    switch (action.type) {
        case FOLLOW:
            return {...state, users: state.users.map(u => u.id === action.userId ? ({...u, followed: true}) : u)};
        case UNFOLLOW:
            return {...state, users: state.users.map(u => u.id === action.userId ? ({...u, followed: false}) : u)};
        case 'SET_USERS':
            return {...state, users: action.users};
        default:
            return {...state};
    }
};
type ActionsType = FollowActionType | UnFollowActionType | SetUsersActionType

type FollowActionType = ReturnType<typeof followAC>

export const followAC = (userId: number) => {
    return {
        type: FOLLOW,
        userId
    } as const;
};
type UnFollowActionType = ReturnType<typeof unfollowAC>
export const unfollowAC = (userId: number) => {
    return {
        type: UNFOLLOW,
        userId
    } as const;
};

type SetUsersActionType = ReturnType<typeof setUsersAC>
export const setUsersAC = (users: Array<UserType>) => {
    return {
        type: SET_USERS,
        users
    } as const;
};