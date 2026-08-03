
import '../../perso.css';

const DropdownContext = React.createContext({
    open: false,
    setOpen: () => {},
})


function Navbar () {
    return (
        <div className="py-4"> {/* bg-blue-400 */}
            <nav className='justify-evenly align-middle w-fit box-border m-auto p-4 rounded-full bg-black text-white navbar-grid -z-50'>
                <ul className="select-bar flex">
                    <li className='dropdown'>
                        <button className='dropbtn header-links'>Contact</button> {/* Envisager une approche en composants ici */}
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
                    </li>

                    <li className='dropdown'>
                        <button className='dropbtn header-links'>Forum</button> {/* La Di La fé*/}
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
                                        <a href="#">Link 4</a>
                                    </div>
                                    <div className='dropdown-content-column'>
                                        <h2>Test 3</h2>
                                        <a href="#">Link 1</a>
                                        <a href="#">Link 2</a>
                                        <a href="#">Link 3</a>
                                    </div>
                                </div>
                                
                            </div>
                    </li>

                    <li className='dropdown'>
                        <button className='dropbtn header-links'>Boutique</button> {/* Zot pièces */}
                            <div className='dropdown-content'>
                                <div className='dropdown-content-row'>
                                    <div className='dropdown-content-column'>
                                        
                                    </div>
                                </div>
                                
                            </div>
                    </li>

                    <li className='dropdown'>
                        <button className='dropbtn header-links'>Evénements</button>
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
                    </li>

                    <li className='dropdown'>
                        <button className='dropbtn header-links'>Services</button> {/* Pub, sponsors, ... */}
                            <div className='dropdown-content'>
                                <div className='dropdown-content-row'>
                                    <div className='dropdown-content-column'>
                                        
                                    </div>
                                </div>
                                
                            </div>
                    </li>
                </ul>
            </nav>
        </div>
    )
}

function Dropdown({children, ...props}) {
    const [open, setOpen] = React.useState(false);
    return (
        <DropdownContext.Provider value={{ open, setOpen }}>
            <div className="py-4"> {/* bg-blue-400 */}
                <nav className='justify-evenly align-middle w-fit box-border m-auto p-4 rounded-full bg-black text-white navbar-grid -z-50'>
                    <ul className="select-bar flex">
                        {children}
                    </ul>
                </nav>
            </div>
        </DropdownContext.Provider>
    )
}

export default Navbar;
