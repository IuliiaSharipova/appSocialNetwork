import React from 'react';
import style from './MyPosts.module.css';
import Post, {PostPropsType} from './Post/Post';

export type MyPostsPropsType = {
    postsData: Array<PostPropsType>
}

const MyPosts = (props: MyPostsPropsType) => {
    return (
        <div className={style.postsBlock}>
            <h3>My posts</h3>
            <div>
                <div><textarea></textarea></div>
                <div>
                    <button>Add post</button>
                </div>
            </div>
            <div className={style.posts}>
                {props.postsData.map(post =>
                    <Post id={post.id} message={post.message} likesCount={post.likesCount}/>)
                }
            </div>
        </div>
    );
};
export default MyPosts;