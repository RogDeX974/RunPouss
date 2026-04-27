
import React from "react";
import './styles.css';

import PLPage from "./components/pages/PLPage.jsx";

import Home from './components/pages/Home.jsx';


import { BrowserRouter, Routes, Route, Link, Outlet } from "react-router-dom";

function App() {

    /*React.useEffect(() => {
        fetch('/')
        .then(response => response.json())
    }, []);*/

    return (
        <BrowserRouter>
            <PLPage>
                <Routes>
                    {/* Routes Header */}
                    <Route path='/' element={<Home />} />

                    {/* Routes Footer */}
                    {/*<Route path='/a-propos' element={<About />} />
                    <Route path='/contact' element={<Contact />} />*/}
                </Routes>
            </PLPage>
        </BrowserRouter>
    );
}

export default App;