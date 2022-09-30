import React from 'react';
import style from './Profile.module.css';
import ProfileInfo from './ProfileInfo/ProfileInfo';
import {MyPostsContainer} from './MyPosts/MyPostsContainer';

type ProfilePropsType = {
    //postsData: Array<PostType>
    //newPostText:string
    //store:StoreType
    //dispatch:(action:ActionsType)=>void
}

const Profile = (props: ProfilePropsType) => {
    return (
        <div className={style.content}>
            <ProfileInfo/>
            <MyPostsContainer
                //store={props.store}
                //dispatch={props.dispatch}
                //newPostText={props.newPostText}
                />
        </div>
    );
};
export default Profile;