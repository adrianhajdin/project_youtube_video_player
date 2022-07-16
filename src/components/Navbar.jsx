import React from 'react';
import { Box } from '@mui/material';
import { Link } from 'react-router-dom';
import Logo from '../logo.png'

import { SearchBar } from './';

const Navbar = () =>  (
  <Box sx={{ display: 'flex', justifyContent: 'space-between', p: 2, pt: 1, borderBottom: '1px solid #e3e3e3', position: 'fixed', top: 0, left: 0, background: 'white', width: '100%', zIndex: 100 }}>
    <Link to='/' style={{ display: 'flex', alignItems: 'center' }}>
      <img src={Logo} alt="logo" height={45} />
    </Link>
    <SearchBar />
  </Box>
);

export default Navbar;
