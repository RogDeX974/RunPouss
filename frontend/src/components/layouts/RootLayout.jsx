
import React from "react";

import { Outlet } from "react-router-dom";

import Header from './Header.jsx';
import Navbar from "./Navbar.jsx";
import Sidebar from "./Sidebar.jsx";
import Footer from "./Footer.jsx";

import Carousel from '../elements/Carousel.jsx';


function RootLayout() {

    /*React.useEffect(() => {
        fetch('/')
        .then(response => response.json())
    }, []);*/



    /*
    const router = createBrowserRouter([
        {
            path: '/',
            element: <RootLayout />,
            errorElement: <NotFoundPage />,
            children: [
                { index: true, Component: Home },
                { path: "home", Component: Home },
                { path: "forum", Component: Forum },
            ],

        },

    ]);
    */



    return (

        <div className='global-page'>   {/* Prime Layout Page */}

            <Header />
            <Navbar />


            <div className="content-grid content-disposition">

                <div className='m-auto w-auto h-full overflow-hidden bg-white'> {/**/}
                    <div className='bg-red-400 hyphens-auto break-words m-auto p-5 w-full h-[200px] bg-[url(../src/assets/images/webp/MM93_3small.webp)] bg-cover bg-center bg-no-repeat'> {/*inline-block, rounded-b-[7.5%]*/}
                    </div>
            
                    


                    <main className='main-viewport'>

                            <Outlet />
                            
                            {/*<RouterProvider router={router} />*/}

                    </main>

                </div>

            </div>


            <Footer />
            
        </div>

    );
}


export default RootLayout;