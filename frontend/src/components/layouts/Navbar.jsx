
/* Lien : https://www.codemzy.com/blog/reactjs-dropdown-component */

import '../../perso.css';
import React from 'react';
import { Link } from 'react-router-dom';

import { navbarDatas } from '../../data/navbarDatas.js';


const NavbarContext = React.createContext({
    open: null,
    setOpen: () => {},
});

const NavbarGroupContext = React.createContext(false);



function Navbar () {
    return (
        <Navbar.Menu>
            {navbarDatas.map(({ menuLabel, href, categories }, index) => (

                <Navbar.Group menuLabel={menuLabel} key={index}>

                    <Navbar.Button href={href} hasDropdown={!!categories}>
                        { menuLabel }
                    </Navbar.Button>

                    { categories && (
                        <Navbar.Content>

                            {categories.map(({ subLabel, submenus}, i) => (
                                <Navbar.List key={i} title={subLabel}>

                                    {submenus.map(({ particle }, j) => (
                                        <Navbar.Item key={j}>
                                            { particle }
                                        </Navbar.Item>
                                    ))}
                                    
                                </Navbar.List>
                            ))}

                        </Navbar.Content>
                    )}

                </Navbar.Group>

            ))}

        </Navbar.Menu>           
    )
}





function NavbarMenu({ children }) {

    const [open, setOpen] = React.useState(null);

    return (
        <NavbarContext.Provider value={{ open, setOpen }}>
            <div className="py-4"> {/* bg-blue-400 */}
                <nav className='justify-evenly align-middle w-fit box-border m-auto p-4 rounded-full bg-black text-white navbar-grid z-50'>
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
        </NavbarContext.Provider>
    )
}


function NavbarGroup({ children, menuLabel }) {
    return (
        <NavbarGroupContext.Provider value={ menuLabel }>
            <li className='dropdown'>
                { children }
            </li>
        </NavbarGroupContext.Provider>
    )
}

function NavbarButton({ children, hasDropdown, href }) {
    const { open, setOpen } = React.useContext(NavbarContext);
    const menuLabel = React.useContext(NavbarGroupContext);
 
    if (!hasDropdown) {
        return (
            <Link to={href} className="dropbtn header-links">
                { children }
            </Link>
        )
    }


    function toggleOpen() {

        setOpen(
            open === menuLabel
                    ? null
                    : menuLabel
        );

        {/*setOpen(!open);*/}
    };

    return ( 
        <>
                  
                <button
                    onClick={toggleOpen}
                    className="dropbtn header-links"
                >
                    {children}
                </button>
            
        </>
    )
}


function NavbarContent({ children }) {
    const { open } = React.useContext(NavbarContext);
    const menuLabel = React.useContext(NavbarGroupContext);

    const isOpen = open === menuLabel;
    const [ visible, setVisible ] = React.useState(isOpen);

    React.useEffect(() => {
        if (isOpen) setVisible(true);
    }, [isOpen]);

    
    return (
        <div className={`dropdown-content ${visible ? "block" : "hidden"}`}>
            <div className='dropdown-content-row'
                 onAnimationEnd={() => { if (!isOpen) setVisible(false)}}
            >
                { children }
            </div>
        </div>
    )
}

function NavbarList({ children, title }) {
    const { setOpen } = React.useContext(NavbarContext);
    const { open } = React.useContext(NavbarContext);
    const menuLabel = React.useContext(NavbarGroupContext);
    
    return (
        <div onClick={() => setOpen(null)} className={`dropdown-content-column ${open === menuLabel ? "fadeIn" : "fadeOut"}`}>
            { title && <h3 className="dropdown-content-title">{ title }</h3> }
            { children }

        </div>
    )
}

function NavbarItem({ children, ...props }) {

    return (    
        <button className="py-3 px-5 whitespace-nowrap hover:underline">
            { children }
        </button>
    )
}


Navbar.Menu = NavbarMenu;
Navbar.Group = NavbarGroup;
Navbar.Button = NavbarButton;
Navbar.Content = NavbarContent;
Navbar.List = NavbarList;
Navbar.Item = NavbarItem;


export default Navbar;
