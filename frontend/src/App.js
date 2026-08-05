
import React from "react";
import './styles.css';
import './perso.css';


import Header from './components/layouts/Header.jsx';
import Navbar from "./components/layouts/Navbar.jsx";
import Sidebar from "./components/layouts/Sidebar.jsx";
import Footer from "./components/layouts/Footer.jsx";

import Carousel from './components/elements/Carousel.jsx';


import Home from './components/pages/Home.jsx';
import Forum from './components/pages/Forum.jsx';

import { BrowserRouter, Routes, Route, Link, Outlet, createBrowserRouter, RouterProvider } from "react-router-dom";
import NotFoundPage from "./components/pages/NotFoundPage.jsx";

function App() {

    /*React.useEffect(() => {
        fetch('/')
        .then(response => response.json())
    }, []);*/


    const router = createBrowserRouter([
        {
            path: '/',
            errorElement: <NotFoundPage />,
            children: [
                { index: true, Component: Home },
                { path: "home", Component: Home },
                { path: "forum", Component: Forum },
            ],

        },

    ]);



    return (

<div className='global-page'>   {/* Prime Layout Page */}

            <Header />
            <Navbar />


            <div className="content-grid content-disposition">

                <div className='m-auto w-auto h-full overflow-hidden bg-white'> {/**/}
                    <div className='bg-red-400 hyphens-auto break-words m-auto p-5 w-full h-[260px] rounded-b-[7.5%] bg-[url(../src/assets/images/webp/MM93_3small.webp)] bg-cover bg-center bg-no-repeat'> {/*inline-block*/}
                    </div>
            
                    <Carousel />


                    <div className='main-viewport'>
                        <main>

                            <RouterProvider router={router} />

                        </main>


            </div>

                </div>

            </div>


            <Footer />
            
</div>




        
    );
}





export default App;