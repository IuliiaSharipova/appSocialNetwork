
import React, {ChangeEvent,useRef} from 'react';
import style from './MyPosts.module.css';
import Post from './Post/Post';
import {PostType} from '../../../redux/state';

type MyPostsPropsType = {
    addPostCallback: () => void
    updateNewPostText: (newPostText: string) => void
    postsData: Array<PostType>
    newPostText: string
}

export const MyPosts = (props: MyPostsPropsType) => {

    function addPost() {
        props.addPostCallback();
    }

const onPostChange = (e:ChangeEvent<HTMLTextAreaElement>) => {
    props.updateNewPostText(e.currentTarget.value);
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
                <button onClick={addPost}>Add post</button>
            </div>
        </div>
        <div className={style.posts}>
            {props.postsData.map(post =>
                <Post
                    id={post.id}
                    message={post.message}
                    likesCount={post.likesCount}/>
            )
            }
        </div>
    </div>
)
};
