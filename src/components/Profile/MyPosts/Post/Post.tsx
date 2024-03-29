import React from 'react';
import style from './Post.module.css';

type PostType = {
    id: string
    message: string
    likesCount: number
}

export const Post = (props: PostType) => {
    return (
        <div className={style.item}>
            <img src="https://klike.net/uploads/posts/2019-03/1551511784_4.jpg" alt="ava"/>
            {props.message}
            <div>
                like
                <span> {props.likesCount}</span>
            </div>
        </div>
    );
};
export default Post;