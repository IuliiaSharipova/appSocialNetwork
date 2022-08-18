import React, {useRef} from 'react';
import style from './MyPosts.module.css';
import Post from './Post/Post';
import {ProfilePageType} from '../../../redux/state';


const MyPosts = (props: ProfilePageType) => {

    const newPostElement = useRef<HTMLTextAreaElement>(null);

    function addPost() {
        if(newPostElement.current){
            const text = newPostElement.current.value;
            alert(text);
        }
    }

    return (
        <div className={style.postsBlock}>
            <h3>My posts</h3>
            <div>
                <div><textarea ref={newPostElement}></textarea></div>
                <div>
                    <button onClick={addPost}>Add post</button>
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