import {applyMiddleware, combineReducers, legacy_createStore} from 'redux';
import {profilePageReducer} from './profilePage-reducer';
import {dialogsPageReducer} from './dialogsPage-reducer';
import {usersPageReducer} from '../components/Users/usersPage-reducer';
import {authReducer} from './auth-reducer';
import thunkMiddleware from 'redux-thunk'

const rootReducer = combineReducers({
    profilePage: profilePageReducer,
    dialogsPage: dialogsPageReducer,
    usersPage: usersPageReducer,
    auth:authReducer
});

export type rootStateType = ReturnType<typeof rootReducer>

export const store = legacy_createStore(rootReducer,applyMiddleware(thunkMiddleware));

// а это, чтобы можно было в консоли браузера обращаться к store в любой момент
// @ts-ignore
window.store = store;