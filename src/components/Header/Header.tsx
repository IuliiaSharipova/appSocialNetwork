import React from 'react';
import style from './Header.module.css';
import {NavLink} from 'react-router-dom';

type HeaderPropsType = {
    isAuth: boolean
    login: string | null
}
const Header = (props: HeaderPropsType) => {
    return (
        <header className={style.header}>
            <img
                src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQWQFl_RA0jVMP-_Bxb8xScQ7wyLRTWkoGq04dvJtR4mEc4Tn4xLJTrtGWtyUlCeoIDB8I&usqp=CAU"
                alt="logo image"/>
            <div className={style.authBlock}>
                {props.isAuth
                    ? <span>{props.login}</span>
                    : <NavLink to={'/login'}>Login</NavLink>}
            </div>
        </header>
    );
};
export default Header;