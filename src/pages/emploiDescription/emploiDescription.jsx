import React, { useEffect, useState } from 'react';
import "./emploiDescription.css"
import NavBar from '../../components/navBar/navBar';
import img2 from "../../assets/entreprise.jpg"
import ModelCompetencesInsufison from '../../components/ModelCompetenceInsufison/modelCompetencesInsufison';
import ImporteCvPopUp from '../../components/importeCvPopUp/importeCvPopUp';
import { useDispatch, useSelector } from 'react-redux';
import { getProfilData } from '../../service/getProfilData';
import { getOfferById } from '../../service/getOfferById';
import { useNavigate, useParams } from 'react-router-dom';
import { VerifierCompetence } from '../../service/verifierCompitence';
import img1 from "../../assets/no-image-icon-23483.png"
const EmploiDescription = () => {
    const { id } = useParams();
    const [open, setOpen] = useState(false);
    const [openImporterCV, setopenImporterCV] = useState(false);
    const [dataOffer, setDataOffer] = useState({});
    const { profilData } = useSelector((state) => state.profilData);
    const { user } = useSelector((state) => state.login);
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const handleClose = () => {
        setOpen(false);
    };
    console.log(profilData)
    const handleSubmitPostilation = () => {
        if (profilData.CV.length == 0) {
            setopenImporterCV(true)
        }else{
           let data={
                EmployeId:user.id,
                idCv:profilData?.CV[0]?._id,
                OfferId:id
            }
            VerifierCompetence(data).then((response)=>{
                console.log(response)
                if(response.success==false){
                    setOpen(true);
                }else{
                    navigate("/quizzPage/"+id)
                }
            })
        }
    }
    const handleCloseImporterCV = () => setopenImporterCV(false);
    useEffect(() => {
        dispatch(getProfilData(user.token));
    }, [dispatch]);
    useEffect(() => {
        let data = {
            OfferId: id
        }
        getOfferById(user.token,id).then((response) => {

            setDataOffer(response.data.resault)
        })
    }, []);
    return (
        <div className='emploiDescriptionContainer'>
            <ModelCompetencesInsufison open={open} handleClose={handleClose} />
            <ImporteCvPopUp open={openImporterCV} handleClose={handleCloseImporterCV} />
            <div className='section-pages'>
                <NavBar />
                <div className='articlePage'>
                    <div className='headerArticlePage'>
                        <div>
                            <h1 className='nomEntreprise'>{dataOffer?.Enterprise?.nom}</h1>
                            <h2 className='titreOffer'>{dataOffer.titre}</h2>
                        </div>
                        <button className='btn_postuler' onClick={handleSubmitPostilation}> Postuler a l'Offer </button>

                    </div>
                    <div className='Description'>
                        <h3>Description du poste</h3>
                        <p>
                            {dataOffer.description}
                        </p>
                        <h3>Vos missions : ​</h3>
                        <p>
                            {
                                dataOffer.mession
                            }
                        </p>
                        <h3>Exigence du Poste</h3>
                        <p>
                            {dataOffer.exigence}
                        </p>
                    </div>
                </div>
                <div className='entrepriseDescription'>
                    <img src={  dataOffer?.Enterprise?.avatar !== "null" && dataOffer?.Enterprise?.avatar
              ? `http://127.0.0.1:3500/${dataOffer?.Enterprise?.avatar}`
              : img1} alt='logo entreprise' className='logoEntreprise' />
                    <div className='informationsContainer '>
                        <h1>{dataOffer?.Enterprise?.nom}</h1>
                        <h2>Site Web:</h2>
                        <p>{dataOffer?.Enterprise?.siteW}</p>
                        <h2>Rue:</h2>
                        <p>{dataOffer?.Enterprise?.address}</p>
                        <h2>Code postal:</h2>
                        <p>{dataOffer?.Enterprise?.CodePostal}</p>
                    </div>

                </div>
            </div>
        </div>
    );
}

export default EmploiDescription;
