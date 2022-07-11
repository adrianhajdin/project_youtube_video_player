import React, { useEffect, useState } from 'react';
import { Typography, Box } from '@mui/material';
import { Link, useParams } from 'react-router-dom';
import ThumbUpAltOutlinedIcon from '@mui/icons-material/ThumbUpAltOutlined';
import ReactPlayer from 'react-player';
import CheckCircleIcon from '@mui/icons-material/CheckCircle';

import { useStateContext } from '../contexts/StateContextProvider';
import { VideoItem, Loader } from './'

const VideoDetail = () => {
  const { id } = useParams();
  const { data, fetchData, fetchOtherData, results, loading } = useStateContext();
  const [videoDetail, setVideoDetail] = useState();

  useEffect(() => {
    fetchData(`search?part=snippet&relatedToVideoId=${id}&type=video`);
    fetchOtherData(`videos?part=snippet,statistics&id=${id}`);
  }, [id]);

  useEffect(() => {
    setVideoDetail(results[0]);
  }, [results]);

  return (
    <>
      {videoDetail && (
        <Box className='video-detail-container' sx={{ display: 'flex', justifyContent: 'space-between' }}>
          <Box
            sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center', mt: 1, pb: 1, position: 'relative', width: '100%' }}>
            <Box className='video-detail' sx={{ position: 'fixed', top: '100px', left: '10px' }}>
              <ReactPlayer className='video-card' controls url={`https://www.youtube.com/watch?v=${id}`} />
              <Typography sx={{ fontSize: 18, fontWeight: 600, p: 1.5 }}>
                {videoDetail?.snippet?.title}
              </Typography>
              <Box
                sx={{
                  display: 'flex',
                  justifyContent: 'space-between',
                  gap: '40px',
                }}
              >
                <Typography sx={{ marginBottom: '5px', opacity: 0.7 }}>
                  {parseInt(videoDetail?.statistics?.viewCount).toLocaleString(
                    'en-US'
                  )}{' '}
                  views
                </Typography>

                <Typography
                  sx={{
                    display: 'flex',
                    justifyContent: 'center',
                    gap: '6px',
                    opacity: 0.7,
                  }}
                >
                  <ThumbUpAltOutlinedIcon />
                  {parseInt(videoDetail?.statistics?.likeCount).toLocaleString(
                    'en-US'
                  )}{' '}
                </Typography>
              </Box>
              <Link to={`/channel/${videoDetail?.snippet?.channelId}`}>
                <Typography sx={{ fontSize: 20, fontWeight: 700, mx: 2 }}>
                  {videoDetail?.snippet?.channelTitle}
                  <CheckCircleIcon sx={{ fontSize: '12px', color: 'gray', ml: '5px' }} />
                </Typography>
              </Link>
            </Box>
          </Box>
          <Box sx={{ mt: 10, }} className='related-videos'>
            <Box className='related-videos-container' sx={{ mt: 1.3 }}>
              {!loading ? (
                data?.map((video) => (
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
        </Box>
      )}
    </>
  );
};

export default VideoDetail;
