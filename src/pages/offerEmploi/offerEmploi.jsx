import React, { useEffect } from 'react';
import "./offerEmploi.css";
import NavBar from '../../components/navBar/navBar';
import BoxEmploi from '../../components/boxEmploi/boxEmploi';
import { useDispatch, useSelector } from 'react-redux';
import { getOfferEmployer } from '../../service/getOfferEmployer';

const OfferEmploi = () => {
    const { user } = useSelector((state) => state.login);
    const { offersEmployer } = useSelector((state) => state.offersEmployer);
    const dispatch = useDispatch();
    useEffect(() => {
        dispatch(getOfferEmployer(user?.token))
    }, []);
    console.log(offersEmployer)
    return (
        <div className='offerEmplois_container'>
            <div className='section-pages'>
                <NavBar />
                <div className='emploi-section'>
                {offersEmployer?.map((e,key) => (
                    <div className='emploi' key={key}>
                        <BoxEmploi data={e} user={user}/>
                    </div>
                ))}
                </div>
               

            </div>
        </div>
    )
}
export default OfferEmploi;
