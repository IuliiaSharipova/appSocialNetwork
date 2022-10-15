import React from 'react';
import {MapDispatchPropsType, MapStatePropsType} from './UsersContainer';
import style from './Users.module.css';
import axios from 'axios';
import userPhoto from '../../assets/images/user.jpg';

type UserClassType = MapStatePropsType & MapDispatchPropsType

class User extends React.Component<UserClassType> {

    componentDidMount() {
        axios.get(`https://social-network.samuraijs.com/api/1.0/users?page=${this.props.currentPage}&count=${this.props.pageSize}`).then(res => {
            this.props.setUsers(res.data.items);
            this.props.setUsersTotalCount(res.data.totalCount);

        });
    };

    onPageChanged = (pageNumber: number) => {
        this.props.setCurrentPage(pageNumber, this.props.pageSize);
        axios.get(`https://social-network.samuraijs.com/api/1.0/users?page=${pageNumber}&count=${this.props.pageSize}`).then(res => {
            this.props.setUsers(res.data.items);
        });
    };

    render() {
        const pagesCount = Math.ceil(this.props.totalUsersCount / this.props.pageSize);
        let pages = [];
        for (let i = 1; i <= pagesCount; i++) {
            pages.push(i);
        }
        return (
            <div>
                <div>{pages.slice(0,20).map((p, index) =>
                    <span key={index}
                          className={this.props.currentPage === p ? style.selectedPage : ''}
                          onClick={() => {
                              this.onPageChanged(p);
                          }}>
                    {p}
                    </span>)}
                </div>
                {this.props.usersPage.map(u =>
                    <div key={u.id}>
                    <span>
                        <img className={style.avatar} src={u.photos.small !== null ? u.photos.small : userPhoto}
                             alt="avatar"/>
                        <div>
                            {u.followed
                                ? <button onClick={() => this.props.unfollow(u.id)}>Unfollowed</button>
                                : <button onClick={() => this.props.follow(u.id)}>Followed</button>
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
    }

};

export default User;