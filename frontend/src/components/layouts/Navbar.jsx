
import '../../perso.css';

function Navbar () {
    return (
        <div className="bg-blue-400 py-4">
            <nav className='flex justify-evenly align-middle w-fit box-border m-auto p-2 rounded-full bg-black text-white navbar-grid'>
                <ul className="select-bar">
                    <a href="#" className="header-links">Contact</a>            {/* Envisager une approche en composants ici */}
                    <a href="#" className='header-links'>Forum</a>                           {/* La Di La fé*/}
                    <a href="#" className="header-links">Connexion</a>
                </ul>
            </nav>
        </div>
    )
}

export default Navbar;