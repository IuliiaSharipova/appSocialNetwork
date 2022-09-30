import React from 'react';
import {StoreType} from '../../../redux/state';
import {addPostAC, updateNewPostTextAC} from '../../../redux/profilePage-reducer';
import {MyPosts} from './MyPosts';
import {StoreContext} from '../../../StoreContext';

/*type MyPostsContainerPropsType = {
    //store: StoreType
    //postsData: Array<PostType>
    //newPostText: string
    //dispatch: (action: ActionsType) => void
}*/

export const MyPostsContainer = () => {

    return (
        <StoreContext.Consumer>
            {
                (store) =>
                {
                    let state = store.getState();

                    function addPost() {
                       store.dispatch(addPostAC());
                    }

                    const onPostChange = (text: string) => {
                       store.dispatch(updateNewPostTextAC(text));
                    };
                    return (
                    <MyPosts
                        newPostText={state.profilePage.newPostText}
                        postsData={state.profilePage.postsData}
                        addPostCallback={addPost}
                        updateNewPostText={onPostChange}/>
                )
            }}
        </StoreContext.Consumer>
    );
};
