import axios from 'axios';
import {UserProfileType} from '../redux/profilePage-reducer';

const instance = axios.create({
    baseURL: `https://social-network.samuraijs.com/api/1.0/`,
    withCredentials: true,
    headers: {
        'API-KEY': '1dda7b3e-e372-45e9-b764-953ac45ae692'
    }
});
type UserType = {
    'name': string
    'id': number
    'uniqueUrlName': null
    'photos': {
        'small': string
        'large': string
    },
    'status': string
    'followed': boolean
}

type GetUsersResponseType = {
    'items': Array<UserType>
    'totalCount': number
    'error': string
}
export const usersAPI = {
    getUsers(pageNumber = 1, pageSize = 10) {
        return instance.get<GetUsersResponseType>(`users?page=${pageNumber}&count=${pageSize}`).then(res => res.data);
    },
    authMe() {
        return instance.get<AuthFollowResponseType<AuthDataType>>(`auth/me`).then(res => res.data);
    }
};
type AuthDataType = {
    'id': number
    'login': string
    'email': string
}
type AuthFollowResponseType<D = {}> = {
    'data': D
    'messages': Array<string>
    'fieldsErrors': Array<string>
    'resultCode': number
}

export const followAPI = {
    follow(userId: number) {
        return instance.post<AuthFollowResponseType>(`follow/${userId}`, {}).then((res) => res.data);
    },
    unfollow(userId: number) {
        return instance.delete<AuthFollowResponseType>(`follow/${userId}`).then((res) => res.data);
    }
};

export const profileAPI = {
    getProfile(userId: number) {
        return instance.get<UserProfileType>(`profile/${userId}`).then(res => res.data);
    }
};
