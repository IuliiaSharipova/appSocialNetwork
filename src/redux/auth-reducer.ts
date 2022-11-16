const SET_AUTH_USER_DATA = 'SET_AUTH_USER_DATA';

export type AuthDataType = {
    id: null | number
    email: null | string
    login: null | string
}

type initialStateType = {
    data: {
        id: null | number,
        email: null | string,
        login: null | string,
    },
    isAuth: boolean
};
let initialState = {
    data: {
        id: null,
        email: null,
        login: null,
    },
    isAuth: false
};

type AuthActionType = SetAuthDataType

export const authReducer = (state:initialStateType = initialState, action: AuthActionType): initialStateType => {
    switch (action.type) {
        case SET_AUTH_USER_DATA:
            return {...state, data: action.data, isAuth: true};
        default:
            return {...state};
    }
};

type SetAuthDataType = ReturnType<typeof setAuthData>
export const setAuthData = (data: AuthDataType) => {
    return {
        type: SET_AUTH_USER_DATA,
        data
    } as const;
};