
/* Lien : https://www.codemzy.com/blog/reactjs-dropdown-component */

import React from 'react';
import { Link } from 'react-router-dom';

import { navbarDatas } from '../../data/navbarDatas.js';

function Navbar () {
    return (
        <Navbar.Menu>
            {navbarDatas.map(({ menuLabel, href }, index) => (

                <Navbar.Group menuLabel={menuLabel} key={index}>

                    <Navbar.Button href={href}>
                        { menuLabel }
                    </Navbar.Button>

                </Navbar.Group>

            ))}

        </Navbar.Menu>           
    )
}





function NavbarMenu({ children }) {

    const [open, setOpen] = React.useState(null);

    return (
        
            <div className="py-4"> {/* bg-blue-400 */}
                <nav className='justify-evenly align-middle w-fit box-border m-auto p-3 rounded-full bg-black text-white navbar-grid z-50'>
                    <ul className="select-bar flex">

                            {/* Croix permettant de fermer le menu (set en false) */}
                        

                            { children }

                            {/*
                            {navbarDatas.map(({ menuLabel, href, categories }, index) => {
                                return <NavbarButton 
                                    key={index}
                                    menuLabel={menuLabel}
                                    href={href}
                                    categories={categories}
                                />
                            })}
                            */}

                        
                    </ul>
                </nav>
            </div>
        
    )
}


function NavbarGroup({ children, menuLabel }) {
    return (
        
            <li className='dropdown'>
                { children }
            </li>
        
    )
}

function NavbarButton({ children, hasDropdown, href }) {
 
    return (
        <Link to={href} className="dropbtn header-links">
            { children }
        </Link>
    )
    
}


Navbar.Menu = NavbarMenu;
Navbar.Group = NavbarGroup;
Navbar.Button = NavbarButton;

export default Navbar;
