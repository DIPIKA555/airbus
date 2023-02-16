import * as React from 'react';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import Modal from '@mui/material/Modal';
import {MdLockOpen} from "react-icons/md"
// import LockIcon from '@mui/icons-material/Lock';
import { useNavigate } from 'react-router-dom';

import {
  MDBContainer,
  MDBInput,
  MDBCheckbox,
  MDBBtn,
  MDBIcon
}
from 'mdb-react-ui-kit';
import { Stack } from '@mui/material';
import { textAlign, width } from '@mui/system';


const style = {
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: 400,
  bgcolor: 'background.paper',
  border: '2px solid #000',
  boxShadow: 24,
  p: 4,
};

export default function SignUPModal(props) {

  const navigate = useNavigate();

  const [open, setOpen] = React.useState(true);
//   const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);


  const handleClick = () =>{
     handleClose();
     navigate("/login")
  }

  return (
    <div>
      {/* <Button onClick={handleOpen} variant = "outlined" color="inherit" >Sign Up</Button> */}
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
      <Box bgcolor={"white"} width={"50%"} position="absolute" top="15%" left="25%" transform={"translate(-15%, -25%"}>
      <MDBContainer className="p-3 my-5 d-flex flex-column w-50">
       {/* <MdLockOpen position={"absolute"} size="20px" textAlign="center"/>
        */}
        {/* {LockIcon} */}
        <div style={{width: "100%", display: 'flex', justifyContent: "center"}}>
          <p style={{backgroundColor: "#9c27b0", textAlign: "center", color :"white", width: "30px", padding: "3px", borderRadius: "100px"}}><MdLockOpen/></p>
        </div>
        <div className="text-center">
          <h5>Sign Up</h5>
      </div>
      <MDBInput wrapperClass='mb-4' label='Name' id='form1' type='text'/>
      <MDBInput wrapperClass='mb-4' label='Email address' id='form2' type='email'/>
      <MDBInput wrapperClass='mb-4' label='Password' id='form3' type='password'/>
      <MDBBtn className="mb-4">Sign Up</MDBBtn>

      <div className="text-center">
        <p style={{color:"rgb(81,118, 178)", textAlign:"right", textDecoration:"underline"}}>Go to <span onClick={handleClick}>Login</span></p>
      </div>

      </MDBContainer>
      </Box>

      </Modal>
    </div>
  );
}