
import '../../perso.css';

import MainContent from '../layouts/MainContent.jsx';
import MainHome from '../layouts/MainHome.jsx';


function Home() {
    return (
        <div className='m-auto w-auto h-full overflow-hidden bg-blue-500'> {/**/}
            <div className='bg-red-400 hyphens-auto break-words m-auto p-5 w-full h-[260px] rounded-b-[7.5%] bg-[url(../src/assets/images/webp/MM93_3small.webp)] bg-cover bg-center bg-no-repeat'> {/*inline-block*/}</div>


            {/* Carousel d'affichage */}

            <div className="carousel">
                <div className="track">
                    <div className='group'>
                        <div className="card">1</div>
                        <div className="card">2</div>
                        <div className="card">3</div>
                        <div className="card">4</div>
                    </div>
                    <div className="group" aria-hidden="true">
                        <div className="card">1</div>
                        <div className="card">2</div>
                        <div className="card">3</div>
                        <div className="card">4</div>
                    </div>
                </div>
            </div>

            <MainContent>
                <MainHome />
            </MainContent>
            
        </div>
    )
}

export default Home;