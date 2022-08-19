import React from 'react';
import style from './Profile.module.css';
import MyPosts from './MyPosts/MyPosts';
import ProfileInfo from './ProfileInfo/ProfileInfo';
import {addPostMessage, PostType, ProfilePageType} from '../../redux/state';

type ProfilePropsType = {
    postsData: Array<PostType>
    addPostCallback: (newPostText: string) => void
}

const Profile = (props: ProfilePropsType) => {
    return (
        <div className={style.content}>
            <ProfileInfo/>
            <MyPosts addPostCallback={addPostMessage} postsData={props.postsData}/>
        </div>
    );
};
export default Profile;