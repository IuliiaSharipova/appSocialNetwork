import React, {ComponentType} from 'react';
import {rootStateType} from '../redux/redux-store';
import {connect} from 'react-redux';
import {Navigate} from 'react-router-dom';

type mapStateToPropsForRedirectType = {
    isAuth: boolean
}
const mapStateToPropsForRedirect = (state: rootStateType): mapStateToPropsForRedirectType => {
    return {
        isAuth: state.auth.isAuth
    };
};

export function WithAuthRedirect<T>(Component: ComponentType<T>) {
    const RedirectComponent = (props: mapStateToPropsForRedirectType) => {
        const {isAuth, ...restProps} = props;
        if (!isAuth) return <Navigate to={'/login'}/>;
        return <Component {...restProps as T}/>;
    };
    const ConnectedAuthRedirectComponent = connect(mapStateToPropsForRedirect)(RedirectComponent);
    return ConnectedAuthRedirectComponent
};
