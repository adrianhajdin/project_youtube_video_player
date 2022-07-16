import React, { useEffect, useState } from 'react';
import { Box, Typography } from '@mui/material';

import { Videos, Categories } from './';
import { axiosGetReq } from '../utils';

const Feed = () => {
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [videos, setVideos] = useState(null);

  useEffect(() => {
    const fetchVideos = async () => {
      const data = await axiosGetReq(`search?part=snippet&q=${selectedCategory}`);
      setVideos(data.items);
    };

    fetchVideos();
  }, [selectedCategory]);

  return (
    <Box>
      <Categories
        selectedCategory={selectedCategory}
        setSelectedCategory={setSelectedCategory}
      />
      <Typography
        fontSize={25}
        fontWeight={900}
        pt={1}
        pb={2}
        textAlign='center'
        sx={{textTransform:'capitalize'}}
      >
        {selectedCategory || 'Recommended'} Videos
      </Typography>

      <Videos videos={videos} />
    </Box>
  );
};

export default Feed;
