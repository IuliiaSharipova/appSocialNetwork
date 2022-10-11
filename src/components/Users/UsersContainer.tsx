import {connect} from 'react-redux';
import User from './User';
import {Dispatch} from 'redux';
import {rootStateType} from '../../redux/redux-store';
import {followAC, setUsersAC, unfollowAC, UserType} from './usersPage-reducer';

export type MapStatePropsType = {
    usersPage: Array<UserType>
}
const mapStateToProps = (state: rootStateType): MapStatePropsType => {
    return {
        usersPage: state.usersPage.users
    };
};
export type MapDispatchPropsType = {
    follow: (userId: number) => void
    unfollow: (userId: number) => void
    setUsers: (users: Array<UserType>) => void
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
        }
    };
};
const UsersContainer = connect(mapStateToProps, mapDispatchToProps)(User);

export default UsersContainer;