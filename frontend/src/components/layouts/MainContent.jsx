
// import { Outlet } from 'react-router-dom';

import '../../perso.css';


function MainContent() {
    return (
        <div className='main-viewport'>
            <main>
                <div className="content">
                Les actualités
                {/* Outlet + Routes vers MainHome, MainForum, MainConnexion, etc. */}
                </div>
            </main> 
        </div>
    )
}

export default MainContent;