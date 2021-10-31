import React from 'react';
import { Link } from 'react-router-dom';
import { Typography, Card, CardContent, CardMedia } from '@mui/material';

const VideoItem = ({ video, id }) => {
  return (
    <Link
      to={
        video?.snippet?.thumbnails?.high.url
          ? `/video-details/${id}`
          : `/video-details/cV2gBU6hKfY`
      }
      style={{ textDecoration: 'none' }}
      onClick={() => window.scrollTo(0, 0)}
    >
      <Card
        className='recipe-card'
        sx={{
          width: 400,
          height: 310,
          boxShadow: 'none',
          borderRadius: 0,
        }}
      >
        <CardMedia
          component='img'
          height='250'
          image={
            video?.snippet?.thumbnails?.high.url ||
            'https://i.pinimg.com/474x/30/88/a3/3088a3ebaf713600adacd00397ee410d.jpg'
          }
          alt='green iguana'
          sx={{ borderRadius: 2 }}
        />
        <CardContent>
          <Typography sx={{ fontSize: 16, fontWeight: 600 }}>
            {video?.snippet?.title}
          </Typography>
        </CardContent>
      </Card>
    </Link>
  );
};

export default VideoItem;
