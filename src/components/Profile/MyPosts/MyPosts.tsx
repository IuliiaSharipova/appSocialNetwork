import React from 'react';
import style from './MyPosts.module.css';
import Post from './Post/Post';


const MyPosts = () => {
    let postsData = [
        {id: '1', message: 'It is my first message', likesCount: 10},
        {id: '2', message: 'What are you learning now?', likesCount: 15},
    ];
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
                {postsData.map(post => <Post message={post.message} likesCount={post.likesCount}/>)}
            </div>
        </div>
    );
};
export default MyPosts;