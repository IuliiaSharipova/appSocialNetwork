import React from 'react';
import {StoreType} from '../../../redux/state';
import {addPostAC, updateNewPostTextAC} from '../../../redux/profilePage-reducer';
import {MyPosts} from './MyPosts';

type MyPostsContainerPropsType = {
    store: StoreType
    //postsData: Array<PostType>
    //newPostText: string
    //dispatch: (action: ActionsType) => void
}

export const MyPostsContainer = (props: MyPostsContainerPropsType) => {
    let state = props.store.getState();

    function addPost() {
        props.store.dispatch(addPostAC());
    }

    const onPostChange = (text: string) => {
        props.store.dispatch(updateNewPostTextAC(text));
    };

    return (
        <MyPosts
            newPostText={state.profilePage.newPostText}
            postsData={state.profilePage.postsData}
            addPostCallback={addPost}
            updateNewPostText={onPostChange}/>
    );
};
