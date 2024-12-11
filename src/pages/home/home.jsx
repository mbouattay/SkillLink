import React, { useEffect } from 'react';
import "./home.css"
import OfferEmploi from '../offerEmploi/offerEmploi';
import Saidbar from '../../components/saidBar/saidbar';
import { Outlet, useNavigate } from 'react-router-dom';
import { useSelector } from 'react-redux';
const Home = () => {
    const { connected, msg, user } = useSelector((state) => state.login);
    const navigate = useNavigate();
    useEffect(() => {
        if(connected!=true){
            navigate("/login")
        }
        
    }, []);
    return (
        <div className='home_container'>
            <Saidbar/>
            <Outlet/>
        </div>
    );
}

export default Home;
