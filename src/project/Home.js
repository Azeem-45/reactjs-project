import React from 'react'
import './Home.css';
import AppBar from '@mui/material/AppBar';
import {Stack,Toolbar,Typography} from "@mui/material";
import Button from '@mui/material/Button';
import {Link} from 'react-router-dom';
function Home() {
  return (
    <div className='navbar'>
      <AppBar position='static' sx={{backgroundColor:'black',opacity:0.7}}> 
        <Toolbar>
          <Typography variant="h6" sx={{}}>
             Headache Treatment
          </Typography>
          <Stack direction='row' spacing={2} className='button'>
            <Link to="/">
          <Button style={{color:'white'}} className='button1'>Home</Button></Link>
          <Link to="/Services"><Button style={{color:'white'}}className='button1'>Services</Button></Link>
          <Link to="/HIT6"><Button style={{color:'white'}}className='button1'>HIT-6</Button></Link>
          <Link to="/NPHQ"><Button style={{color:'white'}}className='button1'>NPHQ</Button></Link>
          <Link to="/Login"><Button style={{color:'white'}}className='button1' variant='contained'>LOGIN</Button></Link>
          </Stack>
        </Toolbar>
      </AppBar>
      
    </div>
  )
}

export default Home



