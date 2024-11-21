import React from 'react';
import "./home.css"
import OfferEmploi from '../offerEmploi/offerEmploi';
import Saidbar from '../../components/saidBar/saidbar';
import { Outlet } from 'react-router-dom';
const Home = () => {
    return (
        <div className='home_container'>
            <Saidbar/>
            <Outlet/>
        </div>
    );
}

export default Home;
