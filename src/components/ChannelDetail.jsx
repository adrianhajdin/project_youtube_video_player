import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { Box } from '@mui/material';

import { useStateContext } from '../contexts/StateContextProvider';
import { VideoItem, Loader, ChannelCard } from './';

const ChannelDetail = () => {
  const [channelDetail, setChannelDetail] = useState();
  const { fetchData, data, loading, fetchOtherData, results } = useStateContext();
  const { id } = useParams();

  useEffect(() => {
    fetchData(`channels?part=snippet&id=${id}`);
    
    fetchOtherData(`search?channelId=${id}&part=snippet%2Cid&order=date&maxResults=50`);
  }, []);

  useEffect(() => {
    setChannelDetail(data[0]);
  }, [data]);

  return (
    <>
      <Box sx={{ bg: '#F9F9F9' }}>
        <img
          src={channelDetail?.brandingSettings?.image?.bannerExternalUrl}
          alt='channel-art'
          className='channel-art'
        />
        <ChannelCard channelDetail={channelDetail} mt='-93px'/>
      </Box>
      <Box sx={{ display: 'flex', flexWrap: 'wrap', justifyContent: 'center', alignItems: 'center', gap: 2, p: 1, mt: 5 }}>
        {!loading ? (
          results?.map((video) => (
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
    </>
  );
};

export default ChannelDetail;
