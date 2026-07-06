
import "../../perso.css";

function Carousel() {
    return (

            <div className="carousel">

                {/* Carousel d'affichage */}

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
    )
}

export default Carousel;