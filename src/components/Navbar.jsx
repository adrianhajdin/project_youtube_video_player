import React from 'react';
import { Typography, Stack } from '@mui/material';
import { Link } from 'react-router-dom';

import { SearchBar } from './';

const Navbar = () => (
  <Stack
    direction='row'
    justifyContent='space-between'
    alignItems='center'
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
    <Link to='/'>
      <Typography
        fontSize={{ md: '25px', xs: '20px' }}
        fontWeight={800}
        color='red'
      >
        U📺tube
      </Typography>
    </Link>
    <SearchBar />
  </Stack>
);

export default Navbar;
