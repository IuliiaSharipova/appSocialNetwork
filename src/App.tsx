import React from 'react';
import './App.css';
import Header from './components/Header/Header';
import Navbar from './components/Navbar/Navbar';
import Profile from './components/Profile/Profile';
import {Route, Routes} from 'react-router-dom';
import News from './components/News/News';
import Music from './components/Music/Music';
import Settings from './components/Settings/Settings';
import DialogsContainer from './components/Dialogs/DialogsContainer';

/*type AppPropsType = {
    //state: StateType
    //store: StoreType
    //dispatch: (action: ActionsType) => void
}*/

const App = () => {
    return (
        <div className={'app-wrapper'}>
            <Header/>
            <Navbar/>
            <div className={'appWrapper-content'}>
                <Routes>
                    <Route path="/dialogs/*" element={
                        <DialogsContainer
                            //store={props.store}
                            //dispatch={props.dispatch}
                            //newMessageText={props.state.dialogsPage.newMessageText}
                        />
                    }/>
                    <Route path="/profile" element={
                        <Profile
                            //store={props.store}
                            //postsData={props.state.profilePage.postsData}
                            //newPostText={props.state.profilePage.newPostText}
                            // dispatch={props.dispatch}
                        />}
                    />
                    <Route path="/news" element={<News/>}/>
                    <Route path="/music" element={<Music/>}/>
                    <Route path="/settings" element={<Settings/>}/>
                </Routes>
            </div>

        </div>
    );
};

export default App;
