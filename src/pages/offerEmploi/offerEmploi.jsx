import React from 'react';
import "./offerEmploi.css";
import NavBar from '../../components/navBar/navBar';
import BoxEmploi from '../../components/boxEmploi/boxEmploi';

const OfferEmploi = () => {
    return (
        <div className='offerEmplois_container'>
            <div className='section-pages'>
                <NavBar />
                <div className='emploi-section'>
                    <BoxEmploi />
                    <BoxEmploi />
                    <BoxEmploi />
                    <BoxEmploi />
                    <BoxEmploi />
                </div>
            </div>
        </div>
    )
}
export default OfferEmploi;
