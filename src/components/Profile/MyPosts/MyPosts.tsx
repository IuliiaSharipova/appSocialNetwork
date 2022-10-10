import React, {ChangeEvent} from 'react';
import style from './MyPosts.module.css';
import Post from './Post/Post';
import {MapDispatchPropsType, MapStatePropsType} from './MyPostsContainer';

type MyPostsPropsType = MapStatePropsType & MapDispatchPropsType

export const MyPosts = (props: MyPostsPropsType) => {

    function onAddPost() {
        props.addPostCallback()
        //props.dispatch(addPostAC());
    }

    const onPostChange = (e: ChangeEvent<HTMLTextAreaElement>) => {
        let text=e.currentTarget.value
        props.updateNewPostText(text);
    };

    return (
        <div className={style.postsBlock}>
            <h3>My posts</h3>
            <div>
                <div>
                    <textarea
                        onChange={onPostChange}
                        value={props.newPostText}/>
                </div>
                <div>
                    <button onClick={onAddPost}>Add post</button>
                </div>
            </div>
            <div className={style.posts}>
                {props.postsData.map(post =>
                    <Post
                        key={post.id}
                        id={post.id}
                        message={post.message}
                        likesCount={post.likesCount}/>
                )
                }
            </div>
        </div>
    );
};
