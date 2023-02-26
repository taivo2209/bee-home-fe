import React from 'react'
import { AppBar, Toolbar, Typography, IconButton, Stack, Button } from '@mui/material'
import HouseIcon from '@mui/icons-material/House';

function Navbar() {
  return (
    <div>
        <AppBar position="static" color="primary">
          <Toolbar>
            <IconButton size='large' edge='start' color='inherit' aria-label="logo" >
              <HouseIcon/>
            </IconButton>
            <Typography variant="h6" component={'h6'} sx={{flexGrow: 1}}>
              Bee Home
            </Typography>
            <Stack direction={'row'} spacing={5}>
                <Button color="inherit">Aplus HOME</Button>
                <Button color="inherit">Aplus SHARE</Button>
                <Button color="inherit">LOGIN</Button>
                <Button color="inherit">FOR HOUSE OWNER</Button>
            </Stack>
          </Toolbar>
        </AppBar>
    </div>
  )
}

export default Navbar