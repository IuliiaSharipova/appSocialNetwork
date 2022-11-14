import React from 'react';
import Profile from './Profile';
import axios from 'axios';
import {connect} from 'react-redux';
import {rootStateType} from '../../redux/redux-store';
import {setUserProfile, UserProfileType} from '../../redux/profilePage-reducer';


class ProfileContainer extends React.Component<ProfileContainerClassType> {
    componentDidMount() {
        axios.get(`https://social-network.samuraijs.com/api/1.0/profile/2`).then(res => {
            this.props.setUserProfile(res.data);

        });
    };

    render() {
        return <Profile {...this.props} profile={this.props.profile}/>;
    }
}


type ProfileContainerClassType = MapStatePropsType & MapDispatchPropsType
type MapStatePropsType = {
    profile: UserProfileType
};
type MapDispatchPropsType = {
    setUserProfile: (profile: UserProfileType) => void
}

const mapStateToProps = (state: rootStateType) => {
    return {
        profile: state.profilePage.profile
    };
};
export default connect(mapStateToProps, {setUserProfile})(ProfileContainer);