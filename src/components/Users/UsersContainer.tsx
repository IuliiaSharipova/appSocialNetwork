import {connect} from 'react-redux';
import {rootStateType} from '../../redux/redux-store';
import {
    follow,
    getUsers,
    setCurrentPage,
    toggleFollowingInProgress,
    unfollow,
    UserType
} from './usersPage-reducer';
import React, {ComponentType} from 'react';
import Users from './Users';
import Preloader from '../common/Preloader/Preloader';
import {WithAuthRedirect} from '../../hoc/WithAuthRedirect';
import {compose} from 'redux';

export type MapStatePropsType = {
    usersPage: Array<UserType>
    pageSize: number
    totalUsersCount: number
    currentPage: number
    isFetching: boolean
    followingInProgress: any
}
const mapStateToProps = (state: rootStateType): MapStatePropsType => {
    return {
        usersPage: state.usersPage.users,
        pageSize: state.usersPage.pageSize,
        totalUsersCount: state.usersPage.totalUsersCount,
        currentPage: state.usersPage.currentPage,
        isFetching: state.usersPage.isFetching,
        followingInProgress: state.usersPage.followingInProgress,
    };
};
export type MapDispatchPropsType = {
    follow: (userId: number) => void
    unfollow: (userId: number) => void
    setCurrentPage: (pageNumber: number, pageSize: number) => void
    getUsers: (currentPage: number, pageSize: number) => void
}

type UserClassType = MapStatePropsType & MapDispatchPropsType

class UsersApiComponent extends React.Component<UserClassType> {

    componentDidMount() {
        this.props.getUsers(this.props.currentPage, this.props.pageSize);
    };

    onPageChanged = (pageNumber: number) => {
        this.props.getUsers(pageNumber, this.props.pageSize);
    };

    render() {
        return (

            <>
                {this.props.isFetching ? <Preloader/> : null}
                <Users totalUsersCount={this.props.totalUsersCount}
                       pageSize={this.props.pageSize}
                       currentPage={this.props.currentPage}
                       usersPage={this.props.usersPage}
                       onPageChanged={this.onPageChanged}
                       unfollow={this.props.unfollow}
                       follow={this.props.follow}
                       followingInProgress={this.props.followingInProgress}
                />
            </>
        );
    }
};


export default compose<ComponentType>(connect(mapStateToProps, {
        setCurrentPage,
        getUsers,
        unfollow,
        follow
    }),
    WithAuthRedirect)(UsersApiComponent);