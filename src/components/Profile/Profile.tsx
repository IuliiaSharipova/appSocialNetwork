import React from 'react';
import style from './Profile.module.css';
import ProfileInfo from './ProfileInfo/ProfileInfo';
import {ActionsType, PostType} from '../../redux/state';
import {MyPosts} from './MyPosts/MyPosts';

type ProfilePropsType = {
    postsData: Array<PostType>
    newPostText:string
    dispatch:(action:ActionsType)=>void
}

const Profile = (props: ProfilePropsType) => {
    return (
        <div className={style.content}>
            <ProfileInfo/>
            <MyPosts
                dispatch={props.dispatch}
                newPostText={props.newPostText}
                postsData={props.postsData}/>
        </div>
    );
};
export default Profile;