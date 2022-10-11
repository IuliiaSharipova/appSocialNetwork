import React from 'react';
import {MapDispatchPropsType, MapStatePropsType} from './UsersContainer';
import style from './Users.module.css';

type UserPropsType = MapStatePropsType & MapDispatchPropsType

const User = (props: UserPropsType) => {
    if (props.usersPage.length === 0) {
        props.setUsers([
            {
                id: 1,
                fullName: 'Milos Zeman',
                photoUrl: 'https://www.hrad.cz/file/edee/en/president-of-the-cr/current-president-of-the-cr/curriculum-vitae/milos-zeman.jpg',
                status: 'I am the president',
                location: {city: 'Prague', country: 'Czech Republic'},
                followed: false
            },
            {
                id: 2,
                fullName: 'Julia Roberts',
                photoUrl: 'https://www.biography.com/.image/ar_1:1%2Cc_fill%2Ccs_srgb%2Cg_face%2Cq_auto:good%2Cw_300/MTgwMTM3NTQ4MjgxMDI5NzU0/gettyimages-1191495915.jpg',
                status: 'I am an actress',
                location: {city: 'New Mexico', country: 'USA'},
                followed: true
            },
            {
                id: 3,
                fullName: 'Elizabeth 2',
                photoUrl: 'https://upload.wikimedia.org/wikipedia/commons/thumb/0/0d/Queen_Elizabeth_II_of_New_Zealand_%28cropped%29.jpg/800px-Queen_Elizabeth_II_of_New_Zealand_%28cropped%29.jpg',
                status: 'I am queen',
                location: {city: 'London', country: 'United Kingdom'},
                followed: false
            }
        ]);
    }
    return (
        <div>
            {props.usersPage.map(u =>
                <div key={u.id}>
                    <span>
                        <img className={style.avatar} src={u.photoUrl} alt="avatar"/>
                        <div>
                            {u.followed
                                ? <button onClick={() => props.unfollow(u.id)}>Unfollowed</button>
                                : <button onClick={() => props.follow(u.id)}>Followed</button>
                            }
                        </div>
                    </span>
                    <span>
                        <span>
                            <div>{u.fullName}</div>
                            <div>{u.status}</div>
                        </span>
                        <span>
                            <div>{u.location.country}</div>
                            <div>{u.location.city}</div>
                        </span>
                    </span>
                </div>)}
        </div>
    );
};

export default User;