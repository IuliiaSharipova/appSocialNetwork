import React from 'react';
import {MapDispatchPropsType, MapStatePropsType} from './UsersContainer';
import style from './Users.module.css';
import axios from 'axios';
import userPhoto from '../../assets/images/user.jpg';

type UserClassType = MapStatePropsType & MapDispatchPropsType

class User extends React.Component<UserClassType> {
    componentDidMount() {
        axios.get('https://social-network.samuraijs.com/api/1.0/users').then(res => {
            this.props.setUsers(res.data.items)})
    }

    render() {
        return (
            <div>
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