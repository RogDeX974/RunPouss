
import React from "react";
import './styles.css';

import PLPage from "./components/pages/PLPage.jsx";

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
            Component: PLPage,
            errorElement: <NotFoundPage />,
            children: [
                { index: true, Component: Home },
                { path: "home", Component: Home },
                { path: "forum", Component: Forum },
            ],

        },

    ]);



    return (
        <RouterProvider router={router} />
    );
}





export default App;