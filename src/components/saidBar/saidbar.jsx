import { Box } from '@mui/material';
import { Briefcase, SmsSearch, Teacher, User } from 'iconsax-react';
import React from 'react';
import './saidbar.css';
import { Link } from 'react-router-dom';
import { useNavigate } from "react-router-dom";
const Saidbar = () => {
    var links = [
        {
            "linkName": "offer d'emploi",
            "icon": <Briefcase size="32" color="#f0f8ff" variant="Bold" />,
            "link":"/"
        },
        {
            "linkName": "condidatures",
            "icon": <SmsSearch size="32" color="#f0f8ff" variant="Bold" />,
            "link":"/condidatures"
        },
        {
            "linkName": "Quiz Historique",
            "icon": <Teacher size="32" color="#f0f8ff" variant="Bold" />,
            "link":"/quizHistorique"
        },
        {
            "linkName": "Profile",
            "icon": <User size="32" color="#f0f8ff" variant="Bold" />,
            "link":"/profile"
        }


    ]
    const navigate = useNavigate()
    const Logout = () => {
        localStorage.removeItem("persist:root");
        navigate("/login");
        navigate(0);
      };
    return (
        <Box sx={{
            width: 250,
            height: 729,
            borderRadius: 0.5,
            bgcolor: 'primary.main',
            display: 'flex',
            flexDirection: "column",
            alignItems: "center",
            justifyContent: "flex-start",
            position:'fixed',
            zIndex:1000
        }}
        >
            <h1 className='logo'>SkillLink</h1>
            <div className='links_container'>
                {links.map((data, index) => (
                    <div className={'linkSelected'} key={index}>
                        <div className='iconLink'>
                            {data.icon}
                        </div>
                        <Link  to={data.link} className="linkName">
                            {data.linkName}
                        </Link>
                        
                    </div>
                ))}

            </div>
            <button className='deconnexionBtn' onClick={Logout}>
                Déconnexion
            </button>
        </Box>
    );
}

export default Saidbar;
