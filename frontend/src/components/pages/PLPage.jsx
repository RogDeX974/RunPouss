
import '../../perso.css';

import Header from '../layouts/Header.jsx';
import Navbar from "../layouts/Navbar.jsx";
import Sidebar from "../layouts/Sidebar.jsx";
import Footer from "../layouts/Footer.jsx";
import { Outlet } from 'react-router-dom';


function PLPage({ children }) {
    return (
        <div className='global-page'>   {/* Prime Layout Page */}
            <Header />
            <Navbar />
            <div className="content-grid content-disposition">
                <Outlet />
            </div>
            <Footer />
        </div>
    )
}

export default PLPage;