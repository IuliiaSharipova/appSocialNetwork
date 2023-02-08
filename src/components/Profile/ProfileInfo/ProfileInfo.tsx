import React from 'react';
import style from './ProfileInfo.module.css';
import {UserProfileType} from '../../../redux/profilePage-reducer';
import Preloader from '../../common/Preloader/Preloader';
import ProfileStatus from '../ProfileStatus/ProfileStatus';


type ProfileInfoType = {
    profile: UserProfileType
}
const ProfileInfo = (props: ProfileInfoType) => {
    if (!props.profile) {
        return <Preloader/>;
    }
    return (
        <main className={style.content}>
            <div>
                <img
                    src="https://images.unsplash.com/photo-1652039033571-b4ea004b9369?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHx0b3BpYy1mZWVkfDMzOHw2c01WalRMU2tlUXx8ZW58MHx8fHw%3D&auto=format&fit=crop&w=600&q=60"
                    alt=""/>
            </div>
            <div>
                <img src={props.profile.photos.small} alt="userAvatar"/>
                <ProfileStatus status={'Hello friends'}/>
                <div className={style.description}>{props.profile.fullName}</div>
                <div className={style.description}>{props.profile.aboutMe}</div>
            </div>
        </main>
    );
};
export default ProfileInfo;