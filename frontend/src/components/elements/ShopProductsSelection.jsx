
import React from 'react';
import { Link } from 'react-router-dom';

import { shopSelectionMenuDatas } from '../../data/shopSelectionMenuDatas.js';
import { getSelectionImg } from '../../utils/getSelectionImg.js';

{/*
const NavbarContext = React.createContext({
            open: null,
            setOpen: () => {},
        });

        const NavbarGroupContext = React.createContext(false);
*/}

function ShopProductsSelection() {

    const [ selectedId, setSelectedId ] = React.useState(null);

    return (
        <>

            
            
            <ul className='sps-strip'>
                {shopSelectionMenuDatas.map(c => (
                    <li key={c.objectId}>
                        <button
                            type="button"
                            className={`sps-item ${selectedId === c.objectId ? 'is-active' : ''}`}
                            onClick= {() => setSelectedId(c.objectId)}
                        >
                            <img src={getSelectionImg(c.objectImgSrc)} alt={c.objectImgAlt} width="210" height="140" />
                            <span>{c.objectName}</span>
                        </button>
                    </li>
                ))}
            </ul>
            
            
            


            {/*

            <ShopProductsSelection.Bar>
                <ShopProductsSelection.Group>
                    {shopSelectionMenuDatas.map(({objectId, objectName, objectHref, objectImgSrc, objectImgAlt, objectDescription}) => (
                        <ShopProductsSelection.Item key={objectId}>
                            <Link to={objectHref}>
                                <img src={objectImgSrc} alt={objectImgAlt} />
                                <h3>{objectName}</h3>
                            </Link>
                        </ShopProductsSelection.Item>                    
                    ))}
                </ShopProductsSelection.Group>
            </ShopProductsSelection.Bar>

            */}

    </>

    );
}


function SPS_Bar({ children }) {
    return (
        <div className="sps-strip">
            { children }
        </div>
    );
}

function SPS_Group({ children}) {
    return (
        <div className="sps-group">
            { children }
        </div>
    );
}

function SPS_Item({ children }) {
    return (
        <div className="sps-item">
            { children }

            {/* 4 éléments par groupe, avec un titre et une image pour chaque élément. Défilable pour révéler les autres éléments de shopSelectionMenuDatas.js */}

        </div>
    )
}

ShopProductsSelection.Bar = SPS_Bar;
ShopProductsSelection.Group = SPS_Group;
ShopProductsSelection.Item = SPS_Item;


export default ShopProductsSelection;