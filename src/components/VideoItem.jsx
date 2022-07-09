import React from 'react';
import { Link } from 'react-router-dom';
import { Typography, Card, CardContent, CardMedia } from '@mui/material';
import CheckCircleIcon from '@mui/icons-material/CheckCircle';

const VideoItem = ({ video, id }) => {
  return (
    <Link
      to={
        video?.snippet?.thumbnails?.high.url
          ? `/video/${id}`
          : `/video/cV2gBU6hKfY`
      }
      onClick={() => window.scrollTo(0, 0)}
    >
      <Card
        sx={{
          width: 400,
          height: 340,
          boxShadow: 'none',
          borderRadius: 0,
        }}
      >
        <CardMedia
          component='img'
          height='250'
          image={
            video?.snippet?.thumbnails?.high.url ||
            'https://i.ytimg.com/vi/cV2gBU6hKfY/hqdefault.jpg'
          }
          alt='green iguana'
          sx={{ borderRadius: { sm: 0, md: 2 } }}
        />
        <CardContent>
          <Typography sx={{ fontSize: '15px', fontWeight: 600 }}>
            {video?.snippet?.title.slice(0, 80) ||
              'I Cleaned The World’s Dirtiest Beach #TeamSeas'}
           
          </Typography>
          <Link
            to={
              `channel/${video?.snippet?.channelId}` ||
              'channel/UCX6OQ3DkcsbYNE6H8uQQuVA'
            }
          >
            <Typography sx={{ fontSize: 14, fontWeight: 500 }}>
              {video?.snippet?.channelTitle || 'MrBeast'}
              <CheckCircleIcon
                sx={{ fontSize: '12px', color: 'gray', ml: '5px' }}
              />
            </Typography>
          </Link>
        </CardContent>
      </Card>
    </Link>
  );
};

export default VideoItem;
