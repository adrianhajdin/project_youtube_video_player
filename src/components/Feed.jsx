import React, { useEffect, useState } from 'react';
import { Box, Typography, Button } from '@mui/material';
import HorizontalScroll from 'react-scroll-horizontal';
import { useStateContext } from '../contexts/StateContextProvider';
import VideoItem from './VideoItem';
import Loader from './Loader';
import { categories } from '../categories';

const Feed = () => {
  const { fetchData, data, loading } = useStateContext();
  const [category, setCategory] = useState('all');

  useEffect(() => {
    fetchData(`search?part=snippet&q=${category}`);

    document.title = 'U📺tube';
  }, [category]);
  console.log(data);
  return (
    <Box>
      <Box
        sx={{
          display: 'flex',
          gap: 5,
          overflow: 'auto',
          width: '100%',
          height: '100px',
          mt: 10,
        }}
      >
        <HorizontalScroll reverseScroll={true}>
          {categories.map((item) => (
            <Button
              className='category-btn'
              onClick={() => setCategory(item.title)}
              sx={{
                width: '170px',
                height: '50px',
                background: item.title === category ? 'black' : '#F9F9F9',
                borderRadius: 20,
                color: item.title === category ? 'white' : 'black',
                cursor: 'pointer',
                fontWeight: 600,
                mt: 1,
                ml: 1,
                textTransform: 'capitalize',
              }}
              key={item.title}
            >
              {item.title}
            </Button>
          ))}
        </HorizontalScroll>
      </Box>
      <Box
        sx={{
          display: 'flex',
          flexWrap: 'wrap',
          justifyContent: 'center',
          alignItems: 'center',
          gap: 2,
          p: 1,
        }}
      >
        <Typography sx={{ fontSize: 25, fontWeight: 900, p: 3, pb: 1, pt: 0 }}>
          {category || 'Recommended'} Videos
        </Typography>
      </Box>
      <Box
        sx={{
          display: 'flex',
          flexWrap: 'wrap',
          justifyContent: 'center',
          alignItems: 'center',
          gap: 2,
          p: 1,
        }}
      >
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
