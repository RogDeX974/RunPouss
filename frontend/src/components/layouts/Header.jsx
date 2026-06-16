
import SearchBar from '../elements/SearchBar.jsx';
import '../../perso.css';

function Header() {
    return (
        <div className="grid grid-flow-row place-items-center bg-slate-800 header-grid ">

        {/* Section d'inscription | connexion */}
            <div className=''>
                <span className='login-section'>
                    <a className='signin' rel='nofollow' href='#'>S'identifier</a>
                    <span> | </span>
                    <a className='signup' rel='nofollow' href='#'>S'inscrire</a>
                </span>
            </div>

        {/* Bandeau principal */}

            <header className="flex justify-center items-center p-10 m-5 w-fit h-32 min-w-64 bg-gradient-to-r from-slate-700 to-blue-400 text-white rounded-[15px] header-brand">
                <h1 className="text-3xl font-bold text-teal-500"><a href="#">RunPouss</a></h1>
               
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