import React from 'react';
import {rootStateType} from './redux/redux-store';
import {Store} from 'redux';

export const StoreContext = React.createContext({} as Store<rootStateType>);