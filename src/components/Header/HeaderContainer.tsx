import React from 'react';
import Header from './Header';
import {getAuthUserData} from '../../redux/auth-reducer';
import {rootStateType} from '../../redux/redux-store';
import {connect} from 'react-redux';


type HeaderContainerClassType = MapStatePropsType & MapDispatchPropsType

type MapStatePropsType = {
    isAuth: boolean
    login: string | null
}

type MapDispatchPropsType = {
    getAuthUserData: () => void
}

class HeaderContainer extends React.Component<HeaderContainerClassType> {
    componentDidMount() {
        this.props.getAuthUserData();
    };

    render() {
        return <Header {...this.props}/>;
    }
};

const mapStateToProps = (state: rootStateType): MapStatePropsType => {
    return {
        isAuth: state.auth.isAuth,
        login: state.auth.data.login
    };
};
export default connect(mapStateToProps, {getAuthUserData})(HeaderContainer);