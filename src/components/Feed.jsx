import React, { useEffect, useState } from 'react';
import { Box, Typography, Button } from '@mui/material';
import HorizontalScroll from 'react-scroll-horizontal';
import { useStateContext } from '../contexts/StateContextProvider';
import VideoItem from './VideoItem';
import Loader from './Loader';

const Feed = () => {
  const { fetchData, data, loading, results, fetchOtherData } =
    useStateContext();
  const [keyword, setKeyword] = useState();

  useEffect(() => {
    if (keyword) {
      fetchData(`search?part=snippet&q=${keyword}`);
    } else {
      fetchData(`videos?part=snippet&chart=mostPopular`);
    }

    fetchOtherData('videoCategories?part=snippet');
    document.title = 'U📺tube';
  }, [keyword]);

  if (loading) {
    return <Loader />;
  }
  return (
    <Box>
      <Box
        className='categories'
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
          {results?.map((category) => (
            <Button
              className='category-button'
              onClick={() => setKeyword(category.snippet.title)}
              sx={{
                width: '170px',
                height: '50px',
                background: '#F9F9F9',
                borderRadius: 20,
                color: 'black',
                cursor: 'pointer',
                fontWeight: 600,
                mt: 1,
                ml: 1,
              }}
              key={category?.id}
            >
              {category?.snippet?.title}
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
          {keyword || 'Recommended'} Videos
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
        {data?.map((video) => (
          <VideoItem
            video={video}
            id={(video.id.videoId && video.id.videoId) || video.id}
            key={(video.id.videoId && video.id.videoId) || video.id}
          />
        ))}
      </Box>
    </Box>
  );
};

export default Feed;
