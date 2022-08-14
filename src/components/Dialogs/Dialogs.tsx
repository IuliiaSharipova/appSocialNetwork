import React from 'react';
import style from './Dialogs.module.css'
import {NavLink} from 'react-router-dom';

const Dialogs = () => {
    return (
            <div className={style.dialogs}>
                <div className={style.dialogsItem}>
                    <div className={style.dialog}>
                       <NavLink to='/dialogs/1'>Dima</NavLink>
                    </div>
                    <div className={style.dialog}>
                        <NavLink to='/dialogs/2'>Sveta</NavLink>
                    </div>
                    <div className={style.dialog}>
                        <NavLink to='/dialogs/3'>Ilia</NavLink>
                    </div>
                </div>
                <div className={style.messages}>
                    <div className={style.message}>Hi</div>
                    <div className={style.message}>Yo</div>
                    <div className={style.message}>How are you?</div>
                </div>
            </div>
    );
};

export default Dialogs;