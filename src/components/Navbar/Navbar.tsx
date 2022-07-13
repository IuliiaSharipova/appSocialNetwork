import React from 'react';
import style from './Navbar.module.css';

const Navbar = () => {
    return (
        <nav className={style.nav}>
            <div className={style.item}><a href="src/components/Navbar/Navbar">Profile</a></div>
            <div className={style.item}><a href="src/components/Navbar/Navbar">Messages</a></div>
            <div className={style.item}><a href="src/components/Navbar/Navbar">News</a></div>
            <div className={style.item}><a href="src/components/Navbar/Navbar">Music</a></div>
            <div className={style.item}><a href="src/components/Navbar/Navbar">Settings</a></div>

        </nav>
    );
};
export default Navbar;