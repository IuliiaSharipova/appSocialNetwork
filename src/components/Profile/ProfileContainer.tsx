import React from 'react';
import Profile from './Profile';
import axios from 'axios';
import {connect} from 'react-redux';
import {rootStateType} from '../../redux/redux-store';
import {setUserProfile, UserProfileType} from '../../redux/profilePage-reducer';
import {withRouter} from '../common/WithRouter/WithRouter';


class ProfileContainer extends React.Component<ProfileContainerClassType> {
    componentDidMount() {
       let userId = Number(this.props.params.userId);
        if (!userId) {
            userId = 2;
        }
        axios.get(`https://social-network.samuraijs.com/api/1.0/profile/${userId}`).then(res => {
            this.props.setUserProfile(res.data);

        });
    };

    render() {
        return <Profile {...this.props} profile={this.props.profile}/>;
    }
}


type ProfileContainerClassType = MapStatePropsType & MapDispatchPropsType & {
    params:  Record<string, string>
}

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
export default connect(mapStateToProps, {setUserProfile})(withRouter(ProfileContainer));