
import '../../perso.css';

import Header from '../layouts/Header.jsx';
import Navbar from "../layouts/Navbar.jsx";
import Footer from "../layouts/Footer.jsx";


function PLPage({ children }) {
    return (
        
        <div>
            {/* Prime Layout Page */}

            <div className='global-page'>
                <div className="App">
                    <Header />
                    <Navbar />
                    <h1>Test grand</h1>
                    <h2>Test petit</h2>
                    <Footer />
                </div>
            </div>

        </div>
    )
}

export default PLPage;