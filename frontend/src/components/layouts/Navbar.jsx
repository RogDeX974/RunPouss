
import '../../perso.css';

function Navbar () {
    return (
        <div className="flex justify-evenly align-middle w-fit box-border m-auto my-3 p-2 rounded-full bg-black text-white navbar-grid">
            <nav>
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