import * as React from 'react';
import Box from '@mui/joy/Box';
import Card from '@mui/joy/Card';
import CardCover from '@mui/joy/CardCover';
import CardContent from '@mui/joy/CardContent';
import Typography from '@mui/joy/Typography';

import HeroBgImage from "../assets/herosection_bg.jpg"

export default function BasicCard() {
  return (
    <Box
    >
      <Card  sx={{ minWidth: 300, flexGrow: 1 }}>
        <CardCover>
          <img
            src={HeroBgImage}
            alt="Hero bg Image"
          />
        </CardCover>

        <CardContent>
          <Typography
            level="h6"
            fontWeight="lg"
            textColor="#fff"
            mt={{ xs: 12, sm: 30 }}
          >
            <form>
                <input type="text" name="" id="" placeholder='From'/>
            </form>
          </Typography>
        </CardContent>
      </Card>
      
    </Box>
  );
}