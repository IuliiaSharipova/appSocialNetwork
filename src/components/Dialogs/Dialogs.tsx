import React from 'react';
import style from './Dialogs.module.css'

const Dialogs = () => {
    return (
            <div className={style.dialogs}>
                <div className={style.dialogsItem}>
                    <div className={style.dialog}>
                        Dima
                    </div>
                    <div className={style.dialog}>
                        Sveta
                    </div>
                    <div className={style.dialog}>
                        Ilia
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