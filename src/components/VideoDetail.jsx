import React, { useEffect, useState } from 'react';
import { Typography, Box } from '@mui/material';
import { useParams } from 'react-router-dom';
import ThumbDownAltOutlinedIcon from '@mui/icons-material/ThumbDownAltOutlined';
import ThumbUpAltOutlinedIcon from '@mui/icons-material/ThumbUpAltOutlined';
import ReactPlayer from 'react-player';
import { useStateContext } from '../contexts/StateContextProvider';
import VideoItem from './VideoItem';

const VideoDetail = () => {
  const { id } = useParams();
  const { data, fetchData, fetchOtherData, results } = useStateContext();
  const [videoDetail, setVideoDetail] = useState();

  useEffect(() => {
    fetchData(`search?part=snippet&relatedToVideoId=${id}&type=video`);
    fetchOtherData(`videos?part=snippet,statistics&id=${id}`);
  }, [id]);

  useEffect(() => {
    setVideoDetail(results[0]);
  }, [results]);

  if (videoDetail?.snippet?.title) {
    document.title = videoDetail?.snippet?.title;
  }
  return (
    <>
      {videoDetail && (
        <Box
          className='video-detail-container'
          sx={{
            display: 'flex',
            justifyContent: 'space-between',
          }}
        >
          <Box
            sx={{
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center',
              mt: 1,
              pb: 1,
              position: 'relative',
              width: '100%',
            }}
          >
            <Box
              className='video-detail'
              sx={{ position: 'fixed', top: '100px', left: '10px' }}
            >
              <ReactPlayer
                className='video-card'
                controls
                url={`https://www.youtube.com/watch?v=${id}`}
              />
              <Typography sx={{ fontSize: 18, fontWeight: 600, p: 1.5 }}>
                {videoDetail?.snippet?.title}
              </Typography>
              <Box sx={{ display: 'flex', justifyContent: 'space-between' }}>
                <Box sx={{ opacity: 0.7 }}>
                  <Typography sx={{ marginBottom: '5px' }}>
                    {parseInt(
                      videoDetail?.statistics?.viewCount
                    ).toLocaleString('en-US')}{' '}
                    views
                  </Typography>
                  {/* <Typography>{videoDetail?.snippet?.publishedAt}</Typography> */}
                </Box>

                <Box
                  sx={{
                    opacity: 0.7,
                    display: 'flex',
                    flexWrap: 'wrap',
                    gap: 3,
                  }}
                  className='like-dislike'
                >
                  <Typography
                    sx={{
                      marginBottom: '5px',
                      display: 'flex',
                      justifyContent: 'flex-start',
                      alignItems: 'center',
                      gap: 1,
                    }}
                  >
                    <ThumbUpAltOutlinedIcon />
                    <Typography>
                      {parseInt(
                        videoDetail?.statistics?.likeCount
                      ).toLocaleString('en-US')}
                    </Typography>
                  </Typography>
                  <Typography
                    sx={{
                      marginBottom: '5px',
                      display: 'flex',
                      justifyContent: 'flex-start',
                      alignItems: 'center',
                      gap: 1,
                    }}
                  >
                    <ThumbDownAltOutlinedIcon />
                    <Typography>
                      {parseInt(
                        videoDetail?.statistics?.dislikeCount
                      ).toLocaleString('en-US')}
                    </Typography>
                  </Typography>
                </Box>
              </Box>
            </Box>
          </Box>
          <Box
            sx={{
              mt: 10,
            }}
            className='related-videos'
          >
            <Typography
              sx={{ fontSize: 25, fontWeight: 800, m: 2, textAlign: 'center' }}
            >
              Similar Videos
            </Typography>
            <Box className='related-videos-container'>
              {data?.map((video) => (
                <VideoItem
                  video={video}
                  id={(video.id.videoId && video.id.videoId) || video.id}
                  key={(video.id.videoId && video.id.videoId) || video.id}
                />
              ))}
            </Box>
          </Box>
        </Box>
      )}
    </>
  );
};

export default VideoDetail;
