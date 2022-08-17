import React from 'react';
import style from './Profile.module.css';
import MyPosts from './MyPosts/MyPosts';
import ProfileInfo from './ProfileInfo/ProfileInfo';
import {ProfilePageType} from '../../redux/state';


const Profile = (props: ProfilePageType) => {
    return (
        <div className={style.content}>
            <ProfileInfo/>
            <MyPosts postsData={props.postsData}/>
        </div>
    );
};
export default Profile;