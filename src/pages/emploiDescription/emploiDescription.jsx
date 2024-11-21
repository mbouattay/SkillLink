import React, { useState } from 'react';
import "./emploiDescription.css"
import NavBar from '../../components/navBar/navBar';
import img2 from "../../assets/entreprise.jpg"
import ModelCompetencesInsufison from '../../components/ModelCompetenceInsufison/modelCompetencesInsufison';
import ImporteCvPopUp from '../../components/importeCvPopUp/importeCvPopUp';
const EmploiDescription = () => {
    const [open, setOpen] = useState(false);
    const [openImporterCV, setopenImporterCV] = useState(true);

    const handleOpen = () => {
        setOpen(true);
    };

    const handleClose = () => {
        setOpen(false);
    };
   

  const handleOpenImporterCV = () => setopenImporterCV(true);
  const handleCloseImporterCV = () => setopenImporterCV(false);
    return (
        <div className='emploiDescriptionContainer'>
            <ModelCompetencesInsufison open={open} handleClose={handleClose} />
            <ImporteCvPopUp open={openImporterCV} handleClose={handleCloseImporterCV} />
            <div className='section-pages'>
                <NavBar />
                <div className='articlePage'>
                    <div className='headerArticlePage'>
                        <div>
                            <h1 className='nomEntreprise'>Proxym Sousse</h1>
                            <h2 className='titreOffer'>Technico commerciale en logistique</h2>
                        </div>
                        <button className='btn_postuler' onClick={handleOpen}> Postuler a l'Offer </button>

                    </div>
                    <div className='Description'>
                        <h3>Description du poste</h3>
                        <p>Smart Conseil est un éditeur de logiciels,
                            nous offrons à nos clients des solutions dans le domaine de l'intelligence artificielle et la data science ainsi qu'une expertise pour accompagner leur processus de transformation digitale.
                        </p>
                        <h3>Vos missions : ​</h3>
                        <p>
                            Identifiez les opportunités commerciales dans le domaine de la transformation numérique.
                            Évaluez les besoins potentiels des clients et qualifiez-les en fonction de nos solutions.
                            Établissez des contacts professionnels avec les décideurs clés.
                            Planifiez et organisez des rendez-vous pour présenter nos solutions.
                            Menez des actions de prospection ciblées pour développer notre portefeuille client.
                            Présentez de manière convaincante nos services et solutions lors d'entretiens avec des clients potentiels.
                        </p>
                        <h3>Exigence du Poste</h3>
                        <p>Bonnes connaissances du domaine de la transformation numérique et de l'intelligence artificielle.
                            Capacité à gérer son temps et son stress de manière efficace.
                            Dynamisme, enthousiasme et détermination.
                            Compétences en gestion d'équipe sont un atout apprécié.
                            Maîtrise du français courant et de l'anglais (un atout).
                            Curiosité, autonomie, polyvalence et rigueur.</p>
                    </div>
                </div>
                <div className='entrepriseDescription'>
                    <img src={img2} alt='logo entreprise' className='logoEntreprise' />
                    <div className='informationsContainer '>
                        <h1>Proxym Sousse</h1>
                        <h2>Site Web:</h2>
                        <p>https://metal2000.fr</p>
                        <h2>Localisation:</h2>
                        <p>Tunisia, Sousse</p>
                        <h2>Rue:</h2>
                        <p>Immeuble espace sousse</p>
                        <h2>Code postal:</h2>
                        <p>4000</p>
                    </div>

                </div>
            </div>
        </div>
    );
}

export default EmploiDescription;
