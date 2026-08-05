
import "../../perso.css";



function ListRollCard({id, link, imgSrc, altText, title, description, width = 150, height = 100}) {
    return (
        
            <li id={id}>
                <a href={link}>
                    <picture>
                        <img className='list-roll-img' src={imgSrc} alt={altText} width={width} height={height} />
                    </picture>
                    <h4>{title}</h4>
                    <p>{description}</p>
                </a>
            </li>
        
    )
}


function ListRoll() {
    return (
                            <ul className='list-roll'>

                                <ListRollCard
                                    id="news-1"
                                    link="#"
                                    imgSrc=""
                                    altText=""
                                    title="Voici la toute nouvelle Honda CBR 2026 !"
                                    description="Cette CBR est remarqué par sa férocité couplé à un style agressif."
                                />

                                <ListRollCard
                                    id="news-2"
                                    link="#"
                                    imgSrc=""
                                    altText=""
                                />

                                <ListRollCard
                                    id="news-3"
                                    link="#"
                                    imgSrc=""
                                    altText=""
                                />

                                <ListRollCard
                                    id="news-4"
                                    link="#"
                                    imgSrc=""
                                    altText=""
                                    title="Voici la toute nouvelle Honda CBR 2026 !"
                                    description="Cette CBR est remarqué par sa férocité couplé à un style agressif."
                                />

                                <ListRollCard
                                    id="news-5"
                                    link="#"
                                    imgSrc=""
                                    altText=""
                                />

                                <ListRollCard
                                    id="news-6"
                                    link="#"
                                    imgSrc=""
                                    altText=""
                                />

                            </ul>
    )
}
                                

export default ListRoll;