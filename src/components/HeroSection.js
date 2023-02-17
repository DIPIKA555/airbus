import * as React from "react";
import Box from "@mui/joy/Box";
import Card from "@mui/joy/Card";
import CardCover from "@mui/joy/CardCover";
import CardContent from "@mui/joy/CardContent";
import Typography from "@mui/joy/Typography";

import HeroBgImage from "../assets/herosection_bg.jpg";

export default function BasicCard() {
  return (
    <Box>
      <Card sx={{ minWidth: 300, flexGrow: 1 }}>
        <CardCover>
          <img src={HeroBgImage} alt="Hero bg Image" />
        </CardCover> 

        <CardContent id="mainContainer">
          <Box
            id="cardContent"
            >

              <Typography id="heroText"  textColor="#fff">Let the journey begin</Typography>

            <Box id="hero_search_flights">
              <Box className="inputConatiner">
                <label htmlFor="from">From</label>
                <input type="text" name="" id="from" placeholder="Amsterdam" />
              </Box>

              <Box className="inputConatiner">
                <label htmlFor="to">To</label>
                <input type="text" name="" id="to" placeholder="Stockholm" />
              </Box>

              <Box className="inputConatiner">
                <label htmlFor="depart">Depart</label>
                <input
                  type="date"
                  name=""
                  id="depart"
                  placeholder="01/Sa/2023"
                />
              </Box>

              <Box className="inputConatiner">
                <label htmlFor="return">Return</label>
                <input
                  type="date"
                  name=""
                  id="return"
                  placeholder="01/Sa/2023"
                />
              </Box>

              <button type="submit" id="btn">
                SEARCH FLIGHTS
              </button>
            </Box>

            </Box>
        </CardContent>
      </Card>
    </Box>
  );
}
