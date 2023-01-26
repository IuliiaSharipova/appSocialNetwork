import React from 'react';
import style from './Users.module.css';
import userPhoto from '../../assets/images/user.jpg';
import {UserType} from './usersPage-reducer';
import {NavLink} from 'react-router-dom';
import {followAPI} from '../../api/api';

type UsersPropsType = {
    totalUsersCount: number
    pageSize: number
    currentPage: number
    usersPage: Array<UserType>
    onPageChanged: (page: number) => void
    unfollow: (userId: number) => void
    follow: (userId: number) => void
    followingInProgress: Array<number>
    toggleFollowingInProgress: (isFetching: boolean, userId: number) => void
}

const Users = (props: UsersPropsType) => {
    const pagesCount = Math.ceil(props.totalUsersCount / props.pageSize);
    let pages = [];
    for (let i = 1; i <= pagesCount; i++) {
        pages.push(i);
    }
    return (
        <div>
            <div>{pages.slice(0, 20).map((p, index) =>
                <span key={index}
                      className={props.currentPage === p ? style.selectedPage : ''}
                      onClick={() => {
                          props.onPageChanged(p);
                      }}>
                    {p}
                    </span>)}
            </div>
            {props.usersPage.map(u =>
                <div key={u.id}>
                    <span>
                        <NavLink to={'/profile/' + u.id}>
                            <img className={style.avatar}
                                 src={u.photos.small !== null
                                     ? u.photos.small
                                     : userPhoto}
                                 alt="avatar"/>
                        </NavLink>
                        <div>
                            {u.followed
                                ? <button
                                    disabled={props.followingInProgress.some((id: number) => id === u.id)}
                                    onClick={() => {
                                        props.toggleFollowingInProgress(true, u.id);
                                        followAPI.unfollow(u.id).then((data) => {
                                            if (data.resultCode === 1) {
                                                props.unfollow(u.id);
                                            }
                                            props.toggleFollowingInProgress(false, u.id);
                                        });
                                    }}>Unfollow</button>
                                : <button
                                    disabled={props.followingInProgress.some((id: number) => id === u.id)}
                                    onClick={() => {
                                        props.toggleFollowingInProgress(true, u.id);
                                        followAPI.follow(u.id).then((data) => {
                                            if (data.resultCode === 0) {
                                                props.follow(u.id);
                                            }
                                            props.toggleFollowingInProgress(false, u.id);
                                        });
                                    }}>Follow</button>
                            }
                        </div>
                    </span>
                    <span>
                        <span>
                            <div>{u.name}</div>
                            <div>{u.status}</div>
                        </span>
                        <span>
                           {/* <div>{u.location.country}</div>
                            <div>{u.location.city}</div>*/}
                        </span>
                    </span>
                </div>)}
        </div>
    );
};
export default Users;