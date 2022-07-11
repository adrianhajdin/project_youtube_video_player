import React, { useEffect, useState } from 'react';
import { Box, Typography, Button } from '@mui/material';
import HorizontalScroll from 'react-scroll-horizontal';

import { useStateContext } from '../contexts/StateContextProvider';
import { categories } from '../categories';
import { VideoItem, Loader } from './';

const Feed = () => {
  const [selectedCategory, setSelectedCategory] = useState('all');
  const { fetchData, data, loading } = useStateContext();

  useEffect(() => {
    fetchData(`search?part=snippet&q=${selectedCategory}`);
  }, [selectedCategory]);
  
  return (
    <Box>
      <Box sx={{ display: 'flex', gap: 5, overflow: 'auto', width: '100%', height: '100px', mt: 10 }} >
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
      </Box>
      <Box sx={{ display: 'flex', flexWrap: 'wrap', justifyContent: 'center', alignItems: 'center', gap: 2, p: 1, }}>
        <Typography sx={{ fontSize: 25, fontWeight: 900, p: 3, pb: 1, pt: 0 }}>
          {(selectedCategory.charAt(0).toUpperCase() + selectedCategory.slice(1)) || 'Recommended'} Videos
        </Typography>
      </Box>
      <Box sx={{ display: 'flex', flexWrap: 'wrap', justifyContent: 'center', alignItems: 'center', gap: 2, p: 1, }}>
        {!loading ? (
          data.map((video) => (
            <VideoItem
              video={video}
              id={(video.id.videoId && video.id.videoId) || video.id}
              key={(video.id.videoId && video.id.videoId) || video.id}
            />
          ))
        ) : (
          <Loader />
        )}
      </Box>
    </Box>
  );
};

export default Feed;
