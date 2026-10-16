
import SearchBar from '../elements/SearchBar.jsx';
import '../../perso.css';

import { Link, useLocation } from 'react-router-dom';
import { useState } from 'react';

function Header() {

    /*
    const [ headColor, setHeadColor ] = useState();
    let currentPage = "#";
    */

    const loc = useLocation();
    let currentURL = `${loc.pathname}${loc.search}${loc.hash}`;
    
    const tailwindColors = 
        {
            '/': 'from-slate-700 to-blue-400',
            '/home': 'from-slate-700 to-blue-400',
            '/shop': 'from-pink-700 to-pink-400',
            '/contact': 'from-emerald-700 to-emerald-400'
        }
        

    const headerColor = tailwindColors[loc.pathname] || 'bg-gray-500';

    return (
        <div className="grid grid-flow-row place-items-center bg-slate-800 header-grid">


            {/* Section d'inscription | connexion */}
                <div className=''>
                    <span className='login-section'>
                        <a className='signin' rel='nofollow' href='#'>S'identifier</a>
                        <span> | </span>
                        <a className='signup' rel='nofollow' href='#'>S'inscrire</a>
                    </span>
                </div>


            {/* Bandeau principal */}

                <header className={`flex justify-center items-center p-10 m-5 w-fit h-32 min-w-64 bg-gradient-to-r text-white rounded-[15px] ${headerColor} header-brand`}> {/* from-slate-700 to-blue-400 */}
                    <Link to="/home" className="text-3xl font-bold text-teal-500">RunPouss</Link>
                
                    {/* Barre de séparation */}
                    <div className="p-3 mx-4 border-l-2"></div>
                    
                    <div className="justify-evenly">
                        <p className=''>Plus vite. Plus loin. Plus haut.</p>
                    </div>

                </header>

                <SearchBar />
            
        </div>
    )
}

export default Header;