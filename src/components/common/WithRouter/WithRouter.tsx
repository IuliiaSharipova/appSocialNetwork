import React from 'react';
import {
    useLocation,
    useNavigate,
    useParams,
} from 'react-router-dom';
import {Location} from 'history';
import {NavigateFunction} from 'react-router/lib/hooks';

export interface WithRouterProps {
    location?: Location;
    params?: Record<string, string>;
    navigate?: NavigateFunction;
}

export const withRouter = <Props extends WithRouterProps>(
    Component: React.ComponentType<Props>
) => {
    return (props: Omit<Props, keyof WithRouterProps>) => {
        const location = useLocation();
        const params = useParams();
        const navigate = useNavigate();

        return (
            <Component
                {...(props as Props)}
                location={location}
                params={params}
                navigate={navigate}
            />
        );
    };
};
