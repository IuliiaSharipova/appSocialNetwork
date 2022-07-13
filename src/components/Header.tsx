import React from 'react';
import style from './Header.module.css'
const Header = () => {
    return (
        <header className={style.header}>
            <img
                src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQWQFl_RA0jVMP-_Bxb8xScQ7wyLRTWkoGq04dvJtR4mEc4Tn4xLJTrtGWtyUlCeoIDB8I&usqp=CAU"
                alt="logo image"/>
        </header>
    );
};
export default Header;