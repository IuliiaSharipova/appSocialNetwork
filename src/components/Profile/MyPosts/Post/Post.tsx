import React from 'react';
import style from './Post.module.css';

const Post = () => {
    return (
        <div className={style.item}>
            <img src="https://static.independent.co.uk/2022/03/17/10/newFile.jpg?width=1200" alt="avatarka"/>
            Post
        </div>
    );
};
export default Post;