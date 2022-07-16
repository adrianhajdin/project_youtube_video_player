import React from 'react';
import { Stack } from '@mui/material';
import { Link } from 'react-router-dom';

import Logo from '../logo.png'
import { SearchBar } from './';

const Navbar = () =>  (
    <Stack direction='row' justifyContent='space-between' alignItems='center'
      p={2}
      sx={{
      position: { md: 'sticky' },
      top: 0,
      left: 0,
      background: 'white',
      width: '100%',
      zIndex: 100,
      gap: '30px',
    }}
  >
    <Link to='/' style={{ display: 'flex', alignItems: 'center' }}>
      <img src={Logo} alt="logo" height={45} />
    </Link>
    <SearchBar />
  </Stack>
);

export default Navbar;
