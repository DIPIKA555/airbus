import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import IconButton from '@mui/material/IconButton';

import logo from "../assets/logo.webp"
import { Stack } from '@mui/system';

// import LoginModal from './LoginModal';
import SignUPModal from './SignUpModal';
import LoginModal from './LoginModal';
import {Routes, Route} from "react-router-dom";
import { useNavigate } from 'react-router-dom';
// import Home from '../pages/Home';
// import { Link } from 'react-router-dom';



export default function Navbar() {
  const navigate = useNavigate();

   const handleOpen = () =>{
       navigate("/login")
   }
   const handleClick = () =>{
       navigate("/")
   }
  return (
    <Box sx={{ flexGrow: 1 }} >
      <AppBar position="static">
     <Toolbar style={{display: "flex", justifyContent: "space-around"}}>
        <Stack direction={"row"} alignItems={"center"} justifyContent={"center"}>
          <IconButton
            size="large"
            edge="start"
            color="inherit"
            aria-label="menu"
            sx={{ mr: 2 }}
            onClick={handleClick}
          >
           <img src={logo} width ={40}  alt="Logo" />
          </IconButton>
          <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
            Airbus
          </Typography>
          </Stack>
          <Button color="inherit" variant='outlined' onClick={handleOpen}>Login</Button>
          
          {/* <LoginModal /> */}

          {/* <BasicModal /> */}
          
          </Toolbar>
      </AppBar>

      <Routes>
        <Route path="/signup" element={<SignUPModal/>} />
        <Route path="/login" element={<LoginModal/>} />
        {/* <Route path="/" element={<Home/>} /> */}


      </Routes>
    </Box>
  );
}