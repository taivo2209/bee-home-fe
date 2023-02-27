import React from 'react'
import { AppBar, Toolbar, Typography, IconButton, Stack, Button } from '@mui/material'
import HouseIcon from '@mui/icons-material/House';
import './styles.css'
import { Link } from 'react-router-dom';

function Navbar() {
  return (
    <div style={{
      display: 'flex',
      justifyContent:'center'
    }}>
        <AppBar position="static" color="transparent" className='navbar'>
          <Toolbar>
            <IconButton size='large' edge='start' color='inherit' aria-label="logo" >
              <HouseIcon/>
            </IconButton>
            <Typography variant="h6" component={'h6'} sx={{flexGrow: 1}}>
              Bee Home
            </Typography>
            <Stack direction={'row'} spacing={2}>
                <Button color="inherit" className='button-1'>Aplus HOME</Button>
                <Button color="inherit" className='button-1'>Aplus SHARE</Button>
                <Button color="inherit" className='button-2'>
                  <Link to={'/login'}>LOGIN</Link>
                </Button>
                <Button color="inherit" className='button-2'>FOR HOUSE OWNER</Button>
            </Stack>
          </Toolbar>
        </AppBar>
    </div>
  )
}

export default Navbar