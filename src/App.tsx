import React from 'react';
import './App.css';
import Navbar from './components/Navbar/Navbar';
import {Route, Routes} from 'react-router-dom';
import News from './components/News/News';
import Music from './components/Music/Music';
import Settings from './components/Settings/Settings';
import UsersContainer from './components/Users/UsersContainer';
import ProfileContainer from './components/Profile/ProfileContainer';
import HeaderContainer from './components/Header/HeaderContainer';
import Login from './components/Login/Login';
import DialogsContainer from './components/Dialogs/DialogsContainer';


const App = () => {
    return (
        <div className={'app-wrapper'}>
            <HeaderContainer/>
            <Navbar/>
            <div className={'appWrapper-content'}>
                <Routes>
                    <Route path="/dialogs/*" element={<DialogsContainer/>}/>
                    <Route path="/profile/" element={<ProfileContainer/>}/>
                    <Route path="/profile/:userId" element={<ProfileContainer/>}/>
                    <Route path="/users" element={<UsersContainer/>}/>
                    <Route path="/news" element={<News/>}/>
                    <Route path="/music" element={<Music/>}/>
                    <Route path="/settings" element={<Settings/>}/>
                    <Route path="/login" element={<Login/>}/>
                </Routes>
            </div>

        </div>
    );
};

export default App;


