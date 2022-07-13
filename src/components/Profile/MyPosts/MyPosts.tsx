import React from 'react';
import style from './MyPosts.module.css';
import Post from './Post/Post';


const MyPosts = () => {
    return (
        <div>
            My posts
            <div>
                <textarea></textarea>
                <button>Add post</button>
            </div>
            <div className={style.posts}>
                <Post message="It is my first message" likeCounts={10}/>
                <Post message="What are you learning now&" likeCounts={15}/>
            </div>
        </div>
    );
};
export default MyPosts;