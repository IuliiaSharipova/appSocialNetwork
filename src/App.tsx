import React from 'react';
import './App.css';
import Header from './components/Header/Header';
import Navbar from './components/Navbar/Navbar';
import Profile from './components/Profile/Profile';
import Dialogs from './components/Dialogs/Dialogs';
import {BrowserRouter, Route, Routes} from 'react-router-dom';
import News from './components/News/News';
import Music from './components/Music/Music';
import Settings from './components/Settings/Settings';
import {StateType} from './redux/state';


const App = (props: StateType) => {
    return (
            <div className={'app-wrapper'}>
                <Header/>
                <Navbar/>
                <div className={'appWrapper-content'}>
                    <Routes>
                        <Route path="/dialogs/*" element={<Dialogs messagesData={props.dialogsPage.messagesData} dialogsData={props.dialogsPage.dialogsData} />}/>
                        <Route path="/profile" element={<Profile postsData={props.profilePage.postsData}/>}/>
                        <Route path="/news" element={<News/>}/>
                        <Route path="/music" element={<Music/>}/>
                        <Route path="/settings" element={<Settings/>}/>
                    </Routes>
                </div>

            </div>
    );
};

export default App;
