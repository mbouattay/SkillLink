import { FormControl, IconButton, InputAdornment, OutlinedInput } from '@mui/material';
import { Notification, SearchNormal } from 'iconsax-react';
import React from 'react';
import img1 from "../../assets/userProfile.jpg"
import "./navBar.css"
const NavBar = () => {
    return (
             <nav className='navBar'>
                    <FormControl sx={{ m: 4, width: '480px' }} variant="outlined">
                        <OutlinedInput
                            id="outlined-adornment-rechercher"
                            type={'text'}
                            sx={{
                                borderRadius: 2
                            }}
                            placeholder="Rechercher un offre d'emploi"
                            endAdornment={
                                <InputAdornment position="end">
                                    <IconButton
                                        edge="end"
                                    >
                                        <SearchNormal size="32" color="#000000" />
                                    </IconButton>
                                </InputAdornment>
                            }

                        />
                    </FormControl>
                    <div className='nav-btn'>
                        <div className='notification1'>
                            <Notification size="32" color="#1b1b1b" variant="Bold" />
                            <div className='redicon'>3</div>
                        </div>
                        <div className='userProfile'>
                            <img src={img1} alt='profile' />
                            <div className='active'></div>
                        </div>

                    </div>
                </nav>
    );
}

export default NavBar;
