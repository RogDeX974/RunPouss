
import '../../perso.css';

function Footer() {
    return (
        <div className='m-auto mt-2 mb-2 p-1 bg-black text-white rounded-md box-content footer-grid'>
            <ul className="footer-bar">
                <a href="#" className="footer-links">Accueil</a>
                <a href="#" className='footer-links'>Mentions légales</a>
                <a href="#" className="footer-links">Qu'est-ce que <strong>Runpouss</strong> ?</a> {/* Ajouter Portfolio ? */}
            </ul>
        </div>
    )
}

export default Footer;