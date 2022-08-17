import React from 'react';
import style from './Profile.module.css';
import MyPosts from './MyPosts/MyPosts';
import ProfileInfo from './ProfileInfo/ProfileInfo';
import {PostPropsType} from './MyPosts/Post/Post';

export type ProfileType = {
    postsData:Array<PostPropsType>

}

const Profile = (props: ProfileType) => {
    return (
        <div className={style.content}>
            <ProfileInfo/>
            <MyPosts postsData={props.postsData}/>
        </div>
    );
};
export default Profile;