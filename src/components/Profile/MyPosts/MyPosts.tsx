import React, {useRef} from 'react';
import style from './MyPosts.module.css';
import Post from './Post/Post';
import {PostType, ProfilePageType} from '../../../redux/state';

type MyPostsPropsType = {
    addPostCallback: (newPostText: string) => void
    postsData: Array<PostType>
}

const MyPosts = (props: MyPostsPropsType) => {

    const newPostElement = useRef<HTMLTextAreaElement>(null);

    function addPost() {
        debugger
        if(newPostElement.current){
            const text = newPostElement.current.value;
            props.addPostCallback(text)
            newPostElement.current.value=''
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