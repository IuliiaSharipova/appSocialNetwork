import {addPostAC, updateNewPostTextAC} from '../../../redux/profilePage-reducer';
import {MyPosts} from './MyPosts';
import {connect} from 'react-redux';
import {rootStateType} from '../../../redux/redux-store';
import {Dispatch} from 'redux';

type PostType = {
    id: string
    message: string
    likesCount: number
}

export type MapStatePropsType = {
    postsData: Array<PostType>
    newPostText: string
}
const mapStateToProps = (state: rootStateType): MapStatePropsType => {
    return {
        postsData: state.profilePage.postsData,
        newPostText: state.profilePage.newPostText
    };
};
export type MapDispatchPropsType = {
    addPostCallback: () => void
    updateNewPostText: (text: string) => void
}
const mapDispatchToProps = (dispatch: Dispatch): MapDispatchPropsType => {
    return {
        addPostCallback: () => {
            dispatch(addPostAC());
        },
        updateNewPostText: (text: string) => {
            dispatch(updateNewPostTextAC(text));
        }
    };
};

export const MyPostsContainer = connect(mapStateToProps, mapDispatchToProps)(MyPosts);
