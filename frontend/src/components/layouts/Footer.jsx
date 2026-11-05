
import { Link } from 'react-router-dom';

function Footer() {
    return (
        <div className='m-auto mt-2 mb-2 p-1 bg-black text-white rounded-md box-content footer-grid'>
            <ul className="footer-bar">
                <Link to="#" className="footer-links">Accueil</Link>
                <Link to="#" className="footer-links">Mentions légales</Link>
                <Link to="#" className="footer-links">Qu'est-ce que <strong>Runpouss</strong> ? {/* Ajouter Portfolio ? */}</Link>
            </ul>
        </div>
    )
}

export default Footer;