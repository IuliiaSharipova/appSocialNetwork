import React from 'react';
import './App.css';
import Header from './components/Header/Header';
import Navbar from './components/Navbar/Navbar';
import Profile from './components/Profile/Profile';
import Dialogs from './components/Dialogs/Dialogs';
import {Route, Routes} from 'react-router-dom';
import News from './components/News/News';
import Music from './components/Music/Music';
import Settings from './components/Settings/Settings';
import {StateType} from './redux/state';

type AppPropsType = {
    state: StateType
    addPostCallback:()=> void
    updateNewPostText:(newPost:string)=> void
}

const App = (props: AppPropsType) => {
    return (
        <div className={'app-wrapper'}>
            <Header/>
            <Navbar/>
            <div className={'appWrapper-content'}>
                <Routes>
                    <Route path="/dialogs/*" element={<Dialogs messagesData={props.state.dialogsPage.messagesData}
                                                               dialogsData={props.state.dialogsPage.dialogsData}/>}/>
                    <Route path="/profile" element={
                        <Profile
                            postsData={props.state.profilePage.postsData}
                            newPostText={props.state.profilePage.newPostText} addPostCallback={props.addPostCallback} updateNewPostText={props.updateNewPostText}/>}/>
                    <Route path="/news" element={<News/>}/>
                    <Route path="/music" element={<Music/>}/>
                    <Route path="/settings" element={<Settings/>}/>
                </Routes>
            </div>

        </div>
    );
};

export default App;
