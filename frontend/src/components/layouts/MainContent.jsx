
// import { Outlet } from 'react-router-dom';

import '../../perso.css';

import MainView from '../elements/MainView.jsx';

function MainContent() {
    return (
        <div className='main-content'>
            <main>
                <MainView />
            {/* Outlet + Routes vers MainHome, MainForum, MainConnexion, etc. */}
            </main> 
        </div>
    )
}

export default MainContent;