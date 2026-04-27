
import SearchBar from '../SearchBar.jsx';
import '../../perso.css';

function Header() {
    return (
        <div className="grid grid-flow-row grid-cols-2 place-items-center bg-slate-800 header-grid">

            <header className="flex justify-center items-center p-10 m-5 w-fit h-32 min-w-64 bg-gradient-to-r from-slate-700 to-blue-400 text-white rounded-[15px]">
                <h1 className="text-3xl font-bold text-teal-500"><a href="#">RunPouss</a></h1>
               
               {/* Barre de séparation */}
                <div className="p-3 mx-4 border-l-2"></div>
                
                <div className="justify-evenly">
                    <h1 className=''>Plus vite. Plus loin. Plus haut.</h1>
                </div>

            </header>

            <SearchBar />
            
        </div>
    )
}

export default Header;