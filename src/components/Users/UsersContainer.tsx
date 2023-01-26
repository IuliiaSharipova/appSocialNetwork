import {connect} from 'react-redux';
import {rootStateType} from '../../redux/redux-store';
import {
    follow,
    setCurrentPage,
    setUsers,
    setUsersTotalCount,
    toggleIsFetching,
    unfollow,
    UserType
} from './usersPage-reducer';
import React from 'react';
import axios from 'axios';
import Users from './Users';
import Preloader from '../common/Preloader/Preloader';

export type MapStatePropsType = {
    usersPage: Array<UserType>
    pageSize: number
    totalUsersCount: number
    currentPage: number
    isFetching: boolean
}
const mapStateToProps = (state: rootStateType): MapStatePropsType => {
    return {
        usersPage: state.usersPage.users,
        pageSize: state.usersPage.pageSize,
        totalUsersCount: state.usersPage.totalUsersCount,
        currentPage: state.usersPage.currentPage,
        isFetching: state.usersPage.isFetching
    };
};
export type MapDispatchPropsType = {
    follow: (userId: number) => void
    unfollow: (userId: number) => void
    setUsers: (users: Array<UserType>) => void
    setCurrentPage: (pageNumber: number, pageSize: number) => void
    setUsersTotalCount: (totalCount: number) => void
    toggleIsFetching: (isFetching: boolean) => void
}

type UserClassType = MapStatePropsType & MapDispatchPropsType

class UsersApiComponent extends React.Component<UserClassType> {

    componentDidMount() {
        this.props.toggleIsFetching(true);
        axios.get(`https://social-network.samuraijs.com/api/1.0/users?page=${this.props.currentPage}&count=${this.props.pageSize}`, {
            withCredentials:true,
            headers:{
                "API-KEY":'1dda7b3e-e372-45e9-b764-953ac45ae692'
            }
        }).then(res => {
            this.props.toggleIsFetching(false);
            this.props.setUsers(res.data.items);
            this.props.setUsersTotalCount(res.data.totalCount);

        });
    };

    onPageChanged = (pageNumber: number) => {
        this.props.toggleIsFetching(true);
        this.props.setCurrentPage(pageNumber, this.props.pageSize);
        axios.get(`https://social-network.samuraijs.com/api/1.0/users?page=${pageNumber}&count=${this.props.pageSize}`,{
            withCredentials:true,
            headers:{
                "API-KEY":'1dda7b3e-e372-45e9-b764-953ac45ae692'
            }
        }).then(res => {
            this.props.toggleIsFetching(false);
            this.props.setUsers(res.data.items);
        });
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
                       follow={this.props.follow}/>
            </>
        );
    }
};

const UsersContainer = connect(mapStateToProps, {follow,unfollow,setCurrentPage,setUsers,setUsersTotalCount,toggleIsFetching})(UsersApiComponent);

export default UsersContainer;