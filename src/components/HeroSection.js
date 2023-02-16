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
            mt={{ xs: 12, sm: 45 }}
          >
              <Typography
            level="h6"
            fontWeight="lg"
            textColor="#fff"
            mt={{ xs: 12, sm: 30 }}
          ><h1 id='heroText'>Let the journey begin</h1></Typography>

            <form id="hero_search_flights">
                <div className='inputConatiner'>
                <label htmlFor="from">From</label>
                <input type="text" name="" id="from" placeholder='Amsterdam'/>
                </div>

                <div className='inputConatiner'>
                <label htmlFor="to">To</label>
                <input type="text" name="" id="to" placeholder='Stockholm'/>
                </div>

                <div className='inputConatiner'>
                <label htmlFor="depart">Depart</label>
                <input type="date" name="" id="depart" placeholder='01/Sa/2023'/>
                </div>

                <div className='inputConatiner'>
                <label htmlFor="return">Return</label>
                <input type="date" name="" id="return" placeholder='01/Sa/2023'/>
                </div>

                <button type="submit" id="btn">SEARCH FLIGHTS</button>
            </form>
          </Typography>
        </CardContent>
      </Card>
      
    </Box>
  );
}