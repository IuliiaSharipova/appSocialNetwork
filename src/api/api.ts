import axios from 'axios';

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
    getUsers(currentPage = 1, pageSize = 10) {
        return instance.get<GetUsersResponseType>(`users?page=${currentPage}&count=${pageSize}`).then(res => res.data);
    },
    getUsersOfCurrentPage(pageNumber: number, pageSize: number) {
        return instance.get<GetUsersResponseType>(`https://social-network.samuraijs.com/api/1.0/users?page=${pageNumber}&count=${pageSize}`).then(res => res.data);
    }
};

type FollowUserResponseType = {
    'data': {}
    'messages': Array<string>
    'fieldsErrors': Array<string>
    'resultCode': number
}

export const followAPI = {
    follow(userId: number) {
        return instance.post<FollowUserResponseType>(`https://social-network.samuraijs.com/api/1.0/follow/${userId}`, {}).then((res) => res.data);
    },
    unfollow(userId: number){
        return instance.delete<FollowUserResponseType>(`https://social-network.samuraijs.com/api/1.0/follow/${userId}`).then((res) => res.data);
    }
};