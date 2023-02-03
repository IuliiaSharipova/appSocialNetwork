import React, {ComponentType} from 'react';
import Profile from './Profile';
import {connect} from 'react-redux';
import {rootStateType} from '../../redux/redux-store';
import {getUserProfile, UserProfileType} from '../../redux/profilePage-reducer';
import {withRouter} from '../common/WithRouter/WithRouter';
import {WithAuthRedirect} from '../../hoc/WithAuthRedirect';
import {compose} from 'redux';


class ProfileContainer extends React.Component<ProfileContainerClassType> {
    componentDidMount() {
        let userId = Number(this.props.params.userId);
        if (!userId) {
            userId = 2;
        }
        this.props.getUserProfile(userId);
    };

    render() {
        return <Profile {...this.props} profile={this.props.profile}/>;
    }
}


type ProfileContainerClassType = MapStatePropsType & MapDispatchPropsType & {
    params: Record<string, string>
}

type MapStatePropsType = {
    profile: UserProfileType
};
type MapDispatchPropsType = {
    getUserProfile: (userId: number) => void
}

const mapStateToProps = (state: rootStateType): MapStatePropsType => {
    return {
        profile: state.profilePage.profile,
    };
};

export default compose<ComponentType>(connect(mapStateToProps, {getUserProfile}), WithAuthRedirect, withRouter)(ProfileContainer);