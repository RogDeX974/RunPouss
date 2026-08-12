import React from "react";
import './styles.css';
import './perso.css';
 
import { createBrowserRouter, RouterProvider } from "react-router-dom";
 
import RootLayout from './components/layouts/RootLayout.jsx';
import Home from './components/pages/Home.jsx';
import Forum from './components/pages/Forum.jsx';
import NotFoundPage from "./components/pages/NotFoundPage.jsx";


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

function App() {
    return <RouterProvider router={router} />
}

export default App;