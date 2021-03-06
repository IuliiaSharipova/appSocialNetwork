import React from 'react';
import style from './Post.module.css';

type PostPropsType = {
    message: string
    likesCount: number
}

export const Post = (props: PostPropsType) => {
    return (
        <div className={style.item}>
            <img src="https://static.independent.co.uk/2022/03/17/10/newFile.jpg?width=1200" alt="avatarka"/>
            {props.message}
            <div>
                like
                <span> {props.likesCount}</span>
            </div>
        </div>
    );
};
export default Post;