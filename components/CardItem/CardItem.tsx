import {
  Box,
  Button,
  Card,
  CardActions,
  CardContent,
  CardMedia,
  Grid,
  IconButton,
  SvgIcon,
  Typography,
} from '@mui/material';
import { ActionButton } from '../ActionButton/ActionButton';

import AddIcon from '@mui/icons-material/Add';
import RemoveIcon from '@mui/icons-material/Remove';
import { useState } from 'react';

export interface ICardItem {}

const CardItem: React.FC<ICardItem> = () => {
  const [currentBid, setCurrentBid] = useState(45);
  const [newBidValue, setNewBidValue] = useState(45.5);
  const [loading, setLoading] = useState(false);

  const onBidClick = () => {
    setLoading(true);
    setTimeout(() => {
      setLoading(false)
    }, 1000)
  }

  const decreaseBid = () => {
    setNewBidValue((prev) => prev - 0.5);
  };
  const increaseBid = () => {
    setNewBidValue((prev) => prev + 0.5);
  };

  return (
    <Card
      sx={{ maxWidth: 280, borderRadius: '10px', border: '1px solid #EDEDED' }}
      elevation={0}
    >
      <CardMedia component="img" height="200" image="/images/ukraine.jpg" />
      <CardContent>
        <Typography
          variant="subtitle2"
          component="p"
          sx={{
            fontSize: '16px',
            fontFamily: 'poppinsSemiBold',
            fontWeight: 600,
          }}
        >
          Text auction name #1
        </Typography>
        <Box display="flex" alignItems="center">
          <Typography
            sx={{
              fontSize: '14px',
              fontFamily: 'poppins',
            }}
          >
            Current bid:
          </Typography>
          <Typography
            variant="subtitle1"
            component="p"
            sx={{
              fontSize: '16px',
              fontFamily: 'poppins',
              fontWeight: 400,
              marginLeft: '4px',
              color: '#7C7C7C',
            }}
          >
            {currentBid}$
          </Typography>
        </Box>
      </CardContent>
      <CardActions>
        <Box
          display="flex"
          width={'100%'}
          alignItems="center"
          justifyContent="space-between"
        >
          <Box
            display="flex"
            alignItems="center"
            justifyContent="space-between"
          >
            <IconButton
              sx={{
                border: '1px solid #EDEDED',
                borderRadius: '4px',
                padding: '2px',
              }}
              disabled={newBidValue === currentBid + 0.5}
              onClick={decreaseBid}
              color={newBidValue === currentBid + 0.5 ? 'default' : 'error'}
            >
              <RemoveIcon></RemoveIcon>
            </IconButton>
            <Typography
              sx={{
                fontSize: '14px',
                fontFamily: 'poppins',
                padding: '0 8px',
              }}
            >
              {newBidValue.toFixed(2)}$
            </Typography>
            <IconButton
              sx={{
                border: '1px solid #EDEDED',
                borderRadius: '4px',
                padding: '2px',
              }}
              color="success"
              onClick={increaseBid}
            >
              <AddIcon></AddIcon>
            </IconButton>
          </Box>
          <ActionButton loading={loading} onClick={onBidClick} fullWidth sx={{ maxWidth: '120px' }}>
            Take bid
          </ActionButton>
        </Box>
      </CardActions>
    </Card>
  );
};

export default CardItem;
