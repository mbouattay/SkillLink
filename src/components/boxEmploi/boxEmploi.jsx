import React from 'react';
import "./boxEmploi.css" ; 
import img2 from "../../assets/entreprise.jpg"
import { Link } from 'react-router-dom';

const BoxEmploi = () => {
    var motsCle=["ANGULAR","PHP","FULL STACK","GIT","REACT"]; 
    return (
        <div className='box-emploi'>
                        <div className='header-box'>
                            <img src={img2} alt="entrepriseLogo"  />
                            <div className='emploi_description'>
                                <h2>Développeur Full Stack (H/F)</h2>
                                <h3>proxym sousse</h3>
                                <div className='boxs-container'>
                                    <div className='box'>
                                        12 oct. 2024
                                    </div>
                                    <div className='box'>
                                        3 à 5 ans
                                    </div>
                                    <div className='box'>
                                        CDD
                                    </div>
                                    <div className='box'>
                                        Tunisie
                                    </div>

                                </div>
                                <p>
                                    À propos de nous:FabSkill vous permet de rencontrer des recruteurs Tunisiens et internationaux et de passer vos entretiens de recrutement en vidéo.
                                    Description de l'offre:Nous recherchons un(e) Développeur Angular confirmé(e) pour rejoindre notre équipe chez FabSkill.
                                    Si vous êtes passionné(e) par les technologies de pointe et que vous aimez travailler en équipe, ce poste est fait pour vous !Responsabilités:Développer des applications web complexes à l'aide d'Angular.Participer à la conception et à l'architecture de projets Full Stack.
                                    Collaborer avec des équipes multidisciplinaires pour assurer la qualité et la performance des produits.Exigences:Expérience confirmée dans le développement web, en particulier avec Angular et PHP.Maîtrise de Git et des
                                </p>

                            </div>
                        </div>
                        <div className='motsCles'>
                            {
                                motsCle.map((data,index)=>(
                                    <div className='mot-container' key={index}>
                                                #{data}
                                    </div>
                                ))
                            }
                                

                        </div>
                        
                        <div className='Btn-group1'>
                        <Link  to={"/offerDescription/1"} className="btn1">
                        voir plus
                        </Link>
                            <button className='btn2'> Postuler</button>
                            
                        </div>
                    </div>
    );
}

export default BoxEmploi;
