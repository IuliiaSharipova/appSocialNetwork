import React from 'react';
import style from './Profile.module.css'

const Profile = () => {
    return (
        <main className={style.content}>
            <div>
                <img
                    src="https://images.unsplash.com/photo-1652039033571-b4ea004b9369?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHx0b3BpYy1mZWVkfDMzOHw2c01WalRMU2tlUXx8ZW58MHx8fHw%3D&auto=format&fit=crop&w=600&q=60"
                    alt=""/>
            </div>
            <div>
                <img
                    src="data:image/jpeg;base64,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"
                    alt=""/>
                ava+description
            </div>
            <div>
                My posts
                <div>
                    New post
                </div>
                <div className={style.posts}>
                    <div className={style.item}>
                        Post 1
                    </div>
                    <div className={style.item}>
                        Post 2
                    </div>
                </div>
            </div>
        </main>
    );
};
export default Profile;