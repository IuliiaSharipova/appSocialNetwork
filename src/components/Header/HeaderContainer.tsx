import React from 'react';
import Header from './Header';
import {AuthDataType, setAuthData} from '../../redux/auth-reducer';
import {rootStateType} from '../../redux/redux-store';
import {connect} from 'react-redux';
import axios from 'axios';


type HeaderContainerClassType = MapStatePropsType & MapDispatchPropsType

type MapStatePropsType = {
    isAuth: boolean
    login: string | null
}

type MapDispatchPropsType = {
    setAuthData: (data: AuthDataType) => void
}

class HeaderContainer extends React.Component<HeaderContainerClassType> {
    componentDidMount() {
        axios.get(`https://social-network.samuraijs.com/api/1.0/auth/me`, {withCredentials: true}).then(res => {
            if (res.data.resultCode === 0) {
                this.props.setAuthData(res.data.data);
            }
        });
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
export default connect(mapStateToProps, {setAuthData})(HeaderContainer);