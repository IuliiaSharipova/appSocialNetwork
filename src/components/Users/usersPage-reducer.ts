const FOLLOW = 'FOLLOW';
const UNFOLLOW = 'UNFOLLOW';
const SET_USERS = 'SET_USERS';
const SET_CURRENT_PAGE = 'SET_CURRENT_PAGE';
const SET_USERS_TOTAL_COUNT = 'SET_USERS_TOTAL_COUNT';
const TOGGLE_IS_FETCHING = 'TOGGLE_IS_FETCHING';

type initialStateType = {
    users: Array<UserType>
    pageSize: number,
    totalUsersCount: number,
    currentPage: number
    isFetching: boolean
}

export type UserType = {
    id: number
    name: string
    photos: {
        small: string
        large: string
    }
    status: string
    //location: UserLocationType
    followed: boolean
}
/*type UserLocationType = {
    city: string
    country: string
}*/
const initialState: initialStateType = {
    users: [],
    pageSize: 15,
    totalUsersCount: 0,
    currentPage: 1,
    isFetching: false
};

export const usersPageReducer = (state = initialState, action: ActionsType): initialStateType => {
    switch (action.type) {
        case FOLLOW:
            return {...state, users: state.users.map(u => u.id === action.userId ? ({...u, followed: true}) : u)};
        case UNFOLLOW:
            return {...state, users: state.users.map(u => u.id === action.userId ? ({...u, followed: false}) : u)};
        case SET_USERS:
            return {...state, users: action.users};
        case SET_CURRENT_PAGE:
            return {...state, currentPage: action.pageNumber};
        case SET_USERS_TOTAL_COUNT:
            return {...state, totalUsersCount: action.totalCount};
        case TOGGLE_IS_FETCHING:
            return {...state, isFetching:action.isFetching};
        default:
            return {...state};
    }
};
type ActionsType =
    FollowActionType
    | UnFollowActionType
    | SetUsersActionType
    | setCurrentPageType
    | setUsersTotalCountType
    | toggleIsFetchingAC

type FollowActionType = ReturnType<typeof follow>

export const follow = (userId: number) => {
    return {
        type: FOLLOW,
        userId
    } as const;
};
type UnFollowActionType = ReturnType<typeof unfollow>
export const unfollow = (userId: number) => {
    return {
        type: UNFOLLOW,
        userId
    } as const;
};

type SetUsersActionType = ReturnType<typeof setUsers>
export const setUsers = (users: Array<UserType>) => {
    return {
        type: SET_USERS,
        users
    } as const;
};

type setCurrentPageType = ReturnType<typeof setCurrentPage>
export const setCurrentPage = (pageNumber: number) => {
    return {
        type: SET_CURRENT_PAGE,
        pageNumber
    } as const;
};

type setUsersTotalCountType = ReturnType<typeof setUsersTotalCount>
export const setUsersTotalCount = (totalCount: number) => {
    return {
        type: SET_USERS_TOTAL_COUNT,
        totalCount
    } as const;
};

type toggleIsFetchingAC = ReturnType<typeof toggleIsFetching>
export const toggleIsFetching = (isFetching: boolean) => {
    return {
        type: TOGGLE_IS_FETCHING,
        isFetching
    } as const;
};
