import Box from '@mui/material/Box';
// import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import Modal from '@mui/material/Modal';
import Avatar from '@mui/material/Avatar';
import './DetailsUserCard.css';
import CloseIcon from '@mui/icons-material/Close';
import IconButton from '@mui/material/IconButton'
var nestedProperty = require("nested-property");
// import { useState } from 'react';

const style = {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: 350,
    bgcolor: 'background.paper',
    outline: 0,
    borderRadius:"10px",
    boxShadow: 24,
    p: 4,
  };

  
export const DetailsUserCard = ({user,open,setOpen})=>{
  
  const handleClose = () => setOpen(false);
  const location = nestedProperty.get(user,"location.name")
  const origin = nestedProperty.get(user,"origin.name")
//   console.log(location)
    return(
        <div>
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >

        <Box sx={style}>
        <IconButton onClick={handleClose}
         sx={{
            position: 'absolute',
            right: 8,
            top: 8,
            color: (theme) => theme.palette.grey[500],
          }}>
            <CloseIcon />
          </IconButton>
          <Typography id="modal-modal-title" variant="h6" component="p">
          <div className='userhead'>
           <Avatar alt="Remy Sharp" src={user.image} sx={{ width: 100, height: 100 }}/>
           <div className='avatarDetails'>
              <p className='avatarName'>{user.name}</p>
              <div className="avatarStatus">
                       <div className="dot" style={{backgroundColor:user.status==="Alive"?"#00FF00":"gray"}}></div>
                       <p style={{marginTop:"-8px"}}>{user.status} - {user.species}</p>
                </div>
           </div>
          </div>
          </Typography>
          <hr />
          <Typography id="modal-modal-description" sx={{ mt: 2 }}>
            <div className='avatarDescription'>
                <div>
                    <p className='descTitle'>Gender</p>
                    <p className='descBody'>{user.gender}</p>
                </div>
                <div>
                   <p className='descTitle'>Location</p>
                    <p className='descBody'>{location}</p>
                </div>
            </div>

            <div className='avatarDescription'>
                <div>
                    <p className='descTitle'>Species</p>
                    <p className='descBody'>{user.species}</p>
                </div>
                <div>
                   <p className='descTitle'>Origin</p>
                    <p className='descBody'>{origin}</p>
                </div>
            </div>
          </Typography>
        </Box>
      </Modal>
        </div>
    )
}