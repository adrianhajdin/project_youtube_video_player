import React from 'react';
import { Button, Stack } from '@mui/material';
import HorizontalScroll from 'react-scroll-horizontal';

import { categories } from '../utils/categories';

const Categories = ({ selectedCategory, setSelectedCategory }) => {
  return (
    <Stack
      direction='row'
      gap={5}
      sx={{
        overflow: 'auto',
        width: '100%',
        height: '100px',
      }}
    >
      <HorizontalScroll reverseScroll={true}>
        {categories.map((category) => (
          <Button
            className='category-btn'
            onClick={() => setSelectedCategory(category)}
            sx={{
              width: '170px',
              height: '50px',
              background: category === selectedCategory ? 'black' : '#F9F9F9',
              borderRadius: 20,
              color: category === selectedCategory ? 'white' : 'black',
              cursor: 'pointer',
              fontWeight: 600,
              mt: 1,
              ml: 1,
              textTransform: 'capitalize',
            }}
            key={category}
          >
            {category}
          </Button>
        ))}
      </HorizontalScroll>
    </Stack>
  );
};

export default Categories;
