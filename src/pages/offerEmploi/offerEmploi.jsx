import React, { useEffect } from 'react';
import "./offerEmploi.css";
import NavBar from '../../components/navBar/navBar';
import BoxEmploi from '../../components/boxEmploi/boxEmploi';
import { useDispatch, useSelector } from 'react-redux';
import { getOfferEmployer } from '../../service/getOfferEmployer';
import { Typography, Box } from '@mui/material';

const OfferEmploi = () => {
    const { user } = useSelector((state) => state.login);
    const { offersEmployer } = useSelector((state) => state.offersEmployer);
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(getOfferEmployer(user?.token))
    }, [dispatch, user?.token]);

    const filteredOffers = offersEmployer?.filter(offer => offer.Status === true);

    return (
        <div className='offerEmplois_container'>
            <div className='section-pages'>
                <NavBar />
                <div className='emploi-section'>
                    {filteredOffers?.length === 0 ? (
                        <Box display="flex" justifyContent="center" alignItems="center" flexDirection="column" p={2}>
                            <Typography 
                                variant="h6" 
                                color="textSecondary" 
                                mt={2} 
                                fontWeight="bold" 
                                textAlign="center" 
                            >
                                No offers available at the moment.
                            </Typography>
                        </Box>
                    ) : (
                        filteredOffers?.map((offer, key) => (
                            <div className='emploi' key={key}>
                                <BoxEmploi data={offer} user={user} />
                            </div>
                        ))
                    )}
                </div>
            </div>
        </div>
    );
}

export default OfferEmploi;
