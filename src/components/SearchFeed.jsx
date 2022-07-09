import React from 'react';
import { Box } from '@mui/material';

import VideoItem from './VideoItem';
import { useStateContext } from '../contexts/StateContextProvider';
import Loader from './Loader';
import ChannelCard from './ChannelCard';
import { Link } from 'react-router-dom';

const SearchFeed = () => {
  const { data, loading } = useStateContext();
  document.title = 'U📺tube';

  if (loading) <Loader />;

  return (
    <Box
      sx={{
        display: 'flex',
        flexWrap: 'wrap',
        justifyContent: 'center',
        alignItems: 'center',
        gap: 2,
        p: 1,
        mt: 10,
      }}
    >
      {
        data.map((item, idx) => (
          <Box key={idx}>
            {item?.id?.videoId && (
              <VideoItem video={item} id={item.id.videoId} />
            ) }
            {item?.id?.channelId && (
              <Link to={`/channel/${item.id.channelId}`}>
                <ChannelCard channelDetail={item} />
              </Link>
            )}
          </Box>
        ))}
    </Box>
  );
};

export default SearchFeed;
