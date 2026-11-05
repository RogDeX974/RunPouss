
import Carousel from '../elements/Carousel.jsx';

import ListRoll from '../elements/ListRoll.jsx';
import WideImg from '../elements/WideImg.jsx';

import WithSidebar from '../layouts/WithSidebar.jsx';


function Home({props}) {
    return (
        <>

            <Carousel />
            <WithSidebar>
                <h2 className="section-context">Les actualités</h2>
                <ListRoll />
            </WithSidebar>
            <WideImg />
            
        </>
    )
}

export default Home;