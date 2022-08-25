import React from 'react';
import style from './Profile.module.css';
import ProfileInfo from './ProfileInfo/ProfileInfo';
import {PostType} from '../../redux/state';
import {MyPosts} from './MyPosts/MyPosts';

type ProfilePropsType = {
    postsData: Array<PostType>
    addPostCallback: () => void
    updateNewPostText:(newPostText: string) => void
    newPostText:string
}

const Profile = (props: ProfilePropsType) => {
    return (
        <div className={style.content}>
            <ProfileInfo/>
            <MyPosts
                addPostCallback={props.addPostCallback}
                updateNewPostText={props.updateNewPostText}
                newPostText={props.newPostText}
                postsData={props.postsData}/>
        </div>
    );
};
export default Profile;