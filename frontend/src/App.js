
import React from "react";
import './styles.css';

import PLPage from "./components/pages/PLPage.jsx";

import Home from './components/pages/Home.jsx';
import Forum from './components/pages/Forum.jsx';


import { BrowserRouter, Routes, Route, Link, Outlet } from "react-router-dom";

function App() {

    /*React.useEffect(() => {
        fetch('/')
        .then(response => response.json())
    }, []);*/

    return (
        <BrowserRouter>
            <Routes>
                <Route element={<PLPage />}>
                
                    {/* Routes Header */}
                    <Route path='/' element={<Home />} />
                    <Route path='/forum' element={<Forum />} />

                    {/* Routes Footer */}
                    {/*<Route path='/a-propos' element={<About />} />
                    <Route path='/contact' element={<Contact />} />*/}
                </Route>
            </Routes>
        </BrowserRouter>
    );
}

export default App;