
/* Lien : https://www.codemzy.com/blog/reactjs-dropdown-component */

import '../../perso.css';
import React from 'react';
/*import { Link } from 'react-router-dom';*/


const DropdownContext = React.createContext({
    open: false,
    setOpen: () => {},
})


function Navbar () {
    return (
        <>
        <Dropdown>
            <Dropdown.Button>Ouvrez!</Dropdown.Button>
            <Dropdown.Content> 
                <Dropdown.List>
                    <Dropdown.Item>Item 1</Dropdown.Item>
                    <Dropdown.Item>Item 2</Dropdown.Item>
                </Dropdown.List>
            </Dropdown.Content>
        </Dropdown>

        <Dropdown>
            <Dropdown.Button>Découvrez?</Dropdown.Button>
            <Dropdown.Content> 
                <Dropdown.List>
                    <Dropdown.Item>Item 3</Dropdown.Item>
                    <Dropdown.Item>Item 4</Dropdown.Item>
                </Dropdown.List>
            </Dropdown.Content>
        </Dropdown>

            {/*
            <>
                    
                        <button className='dropbtn header-links'>Contact</button>
                            <div className='dropdown-content'>
                                <div className='dropdown-content-row'>
                                    <div className='dropdown-content-column'>
                                        <h2>Test 1</h2>
                                        <a href="#">Link 1</a>
                                        <a href="#">Link 2</a>
                                        <a href="#">Link 3</a>
                                    </div>
                                    <div className='dropdown-content-column'>
                                        <h2>Test 2</h2>
                                        <a href="#">Link 1</a>
                                        <a href="#">Link 2</a>
                                        <a href="#">Link 3</a>
                                    </div>
                                </div>

                            </div>
            </>
        */}
        </>
                    
    )
}





function Dropdown({children, ...props}) {
    const [open, setOpen] = React.useState(false);
    return (
        <DropdownContext.Provider value={{ open, setOpen }}>
            <div className="py-4"> {/* bg-blue-400 */}
                <nav className='justify-evenly align-middle w-fit box-border m-auto p-4 rounded-full bg-black text-white navbar-grid -z-50'>
                    <ul className="select-bar flex">
                        <li className='dropdown'>
                            { children }
                        </li>
                    </ul>
                </nav>
            </div>
        </DropdownContext.Provider>
    )
}



function DropdownButton({children, ...props}) {
    const { open, setOpen } = React.useContext(DropdownContext);

    function toggleOpen() {
        setOpen(!open);
    };

    return (
        <button onClick={toggleOpen} className='dropbtn header-links'>
            { children }
        </button>
    )
}


function DropdownContent({ children }) {
    const { open } = React.useContext(DropdownContext);

    return (
        <div className={`dropdown-content ${open ? "block" : "hidden"}`}>
            <div className='dropdown-content-row'>
                { children }
            </div>
        </div>
    )
}

function DropdownList({ children, ...props }) {
    const { setOpen } = React.useContext(DropdownContext);
    
    return (
        <div onClick={() => setOpen(false)} className='dropdown-content-column'>
            { children }
        </div>
    )
}

function DropdownItem({ children, ...props }) {

    return (    
        <button className="py-3 px-5 whitespace-nowrap hover:underline" {...props}>{ children }</button>
    )
}


Dropdown.Button = DropdownButton;
Dropdown.Content = DropdownContent;
Dropdown.List = DropdownList;
Dropdown.Item = DropdownItem;


export default Navbar;
