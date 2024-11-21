
import { BrowserRouter, Route, Routes, useLocation } from 'react-router-dom'
import './App.css'
import OfferEmploi from './pages/offerEmploi/offerEmploi.jsx'
import Home from './pages/home/home.jsx'
import EmploiDescription from './pages/emploiDescription/emploiDescription.jsx'
import { useEffect } from 'react'
import QuizPage from './pages/quizzPage/quizzPage.jsx'
import Condidatures from './pages/condidatures/condidatures.jsx'
import Profile from './pages/profile/profile.jsx'
import Login from './pages/login/login.jsx'
import Register from './pages/register/register.jsx'
import EntrepriseHome from './pages/entrepriseHome/entrepriseHome.jsx'
import AjouterOffre from './pages/ajouterOffre/ajouterOffre.jsx'
import AjouteQuizz from './pages/ajouteQuizz/ajouteQuizz.jsx'
import CondidateurEntreprise from './pages/condidateurEntreprise/condidateurEntreprise.jsx'
import RechercheProfile from './pages/rechercheProfile/rechercheProfile.jsx'
import ListeOfferEmplois from './pages/listeOfferEmplois/listeOfferEmplois.jsx'
import ModifierOffer from './pages/modifierOffer/modifierOffer.jsx'
const ScrollToTop = ({ children }) => {
  const { pathname } = useLocation();
  useEffect(() => {
    window.scrollTo({ top: 0, left: 1000, behavior: "auto" });
  }, [pathname]);
  return children;
};
function App() {

  return (
    <>
      <BrowserRouter>
      <ScrollToTop>
      <Routes>
          <Route path="/" element={<Home />} >
          <Route path="/" element={<OfferEmploi/>}/>
          <Route path="/offerDescription/:id" element={<EmploiDescription/>}/>
          <Route path='/condidatures' element={<Condidatures/>}/>
          <Route path='/profile' element={<Profile/>}/>
          </Route>
          <Route path='/quizzPage' element={<QuizPage/>}/>
          <Route path='/login' element={<Login/>}/>
          <Route path='/register' element={<Register/>}/>
          <Route path='/home' element={<EntrepriseHome/>}/>
          <Route path='/ajouterOffer' element={<AjouterOffre/>}/>
          <Route path='/ajouterQuizz' element={<AjouteQuizz/>}/>
          <Route path='/listeCondidatures' element={<CondidateurEntreprise/>}/>
          <Route path='/rechercheProfile' element={<RechercheProfile/>} />
          <Route path='/listOfferEmplois' element={<ListeOfferEmplois/>} />
          <Route path='/modifierOffre/:id' element={<ModifierOffer/>} />

         
          
        </Routes>
      </ScrollToTop>
      </BrowserRouter>
    </>
  )
}

export default App
