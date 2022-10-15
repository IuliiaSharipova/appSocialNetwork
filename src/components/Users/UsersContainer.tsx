import {connect} from 'react-redux';
import User from './User';
import {Dispatch} from 'redux';
import {rootStateType} from '../../redux/redux-store';
import {followAC, setCurrentPageAC, setUsersAC, setUsersTotalCountAC, unfollowAC, UserType} from './usersPage-reducer';

export type MapStatePropsType = {
    usersPage: Array<UserType>
    pageSize: number
    totalUsersCount: number
    currentPage: number
}
const mapStateToProps = (state: rootStateType): MapStatePropsType => {
    return {
        usersPage: state.usersPage.users,
        pageSize: state.usersPage.pageSize,
        totalUsersCount: state.usersPage.totalUsersCount,
        currentPage: state.usersPage.currentPage
    };
};
export type MapDispatchPropsType = {
    follow: (userId: number) => void
    unfollow: (userId: number) => void
    setUsers: (users: Array<UserType>) => void
    setCurrentPage: (pageNumber: number, pageSize: number) => void
    setUsersTotalCount: (totalCount: number) => void
}
const mapDispatchToProps = (dispatch: Dispatch) => {
    return {
        follow: (userId: number) => {
            dispatch(followAC(userId));
        },
        unfollow: (userId: number) => {
            dispatch(unfollowAC(userId));
        },
        setUsers: (users: Array<UserType>) => {
            dispatch(setUsersAC(users));
        },
        setCurrentPage: (pageNumber: number) => {
            dispatch(setCurrentPageAC(pageNumber));
        },
        setUsersTotalCount: (totalCount: number) => {
            dispatch(setUsersTotalCountAC(totalCount));
        }
    };
};
const UsersContainer = connect(mapStateToProps, mapDispatchToProps)(User);

export default UsersContainer;