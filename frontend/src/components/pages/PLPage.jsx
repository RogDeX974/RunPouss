
import '../../perso.css';

import Header from '../layouts/Header.jsx';
import Navbar from "../layouts/Navbar.jsx";
import Sidebar from "../layouts/Sidebar.jsx";
import Footer from "../layouts/Footer.jsx";
import { Outlet } from 'react-router-dom';

import Carousel from '../elements/Carousel.jsx';


function PLPage({ children }) {
    return (
        <div className='global-page'>   {/* Prime Layout Page */}

            <Header />
            <Navbar />


            <div className="content-grid content-disposition">

                <div className='m-auto w-auto h-full overflow-hidden bg-white'> {/**/}
                    <div className='bg-red-400 hyphens-auto break-words m-auto p-5 w-full h-[260px] rounded-b-[7.5%] bg-[url(../src/assets/images/webp/MM93_3small.webp)] bg-cover bg-center bg-no-repeat'> {/*inline-block*/}
                    </div>
            
                    <Carousel />
                    <Outlet />

                </div>

            </div>


            <Footer />
            
        </div>
    )
}

export default PLPage;