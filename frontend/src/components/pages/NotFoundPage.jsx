
import { Link } from 'react-router-dom';

function NotFoundPage() {
    return (
        <div className='flex flex-col gap-2'>
            404 Not Found
            <Link to="/">La page d'acceuil c'est ici !</Link>
        </div>
    )
}

export default NotFoundPage;