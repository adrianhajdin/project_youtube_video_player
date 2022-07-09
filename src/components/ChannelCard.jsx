import React from 'react';
import { Card, CardContent, CardMedia, Typography } from '@mui/material';
import CheckCircleIcon from '@mui/icons-material/CheckCircle';

const ChannelCard = ({ channelDetail, mt }) => {
  return (
    <Card
      sx={{
        boxShadow: 'none',
        borderRadius: 0,
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        flexDirection: 'column',
        width: '100vw',
        mt
      }}
    >
      <CardMedia
        component='img'
        height='160'
        image={channelDetail?.snippet?.thumbnails?.high.url}
        alt='channel-img'
        sx={{
          borderRadius: '50%',
          bg: 'white',
          width: '160px',
          border: '1px solid #e3e3e3',
        }}
      />

      <CardContent sx={{ textAlign: 'center' }}>
        <Typography sx={{ fontSize: '15px', fontWeight: 700 }}>
          {channelDetail?.snippet?.title}{' '}
          <CheckCircleIcon
            sx={{ fontSize: '12px', color: 'gray', ml: '5px' }}
          />
        </Typography>
        {channelDetail?.statistics?.subscriberCount && (
          <Typography sx={{ fontSize: '15px', fontWeight: 500, color:'gray' }}>
            {channelDetail?.statistics?.subscriberCount &&
              parseInt(
                channelDetail?.statistics?.subscriberCount
              ).toLocaleString('en-US')}{' '}
            Subscribers
          </Typography>
        )}
      </CardContent>
    </Card>
  );
};

export default ChannelCard;
