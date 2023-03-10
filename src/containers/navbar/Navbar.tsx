import React, {useState} from 'react';
import {
  AppBar,
  Toolbar,
  Typography,
  IconButton,
  Stack,
  Button,
} from '@mui/material';
import HouseIcon from '@mui/icons-material/House';
import './Navbar.css';
import { Link } from 'react-router-dom';

function Navbar() {
  const [isHouseOwner, setIsHouseOwner] = useState<boolean>()

  const handleButtonClick = (): void => {
    setIsHouseOwner(!isHouseOwner)
  }
  return (
    <div
      style={{
        display: 'flex',
        justifyContent: 'center',
      }}
    >
      <AppBar position="static" color="transparent" className="navbar">
        <Toolbar>
          <IconButton
            size="large"
            edge="start"
            color="inherit"
            aria-label="logo"
          >
            <HouseIcon />
          </IconButton>
          <Typography variant="h6" component={'h6'} sx={{ flexGrow: 1 }}>
            Bee Home
          </Typography>
          <Stack direction={'row'} spacing={2}>
            <Button color="inherit" className="button-2">
              {/* <Link to={'/login'}>LOGIN</Link> */}
              <Link to={isHouseOwner ? '/loginLessor' : '/login'}>LOGIN{isHouseOwner ? ' as Lessor' : ''}</Link>
            </Button>
            <Button
              color="inherit"
              className="button-2"
              onClick={handleButtonClick}
            >
              {isHouseOwner ? 'FOR CUSTOMER' : 'FOR HOUSE OWNER'}
            </Button>
          </Stack>
        </Toolbar>
      </AppBar>
    </div>
  );
}

export default Navbar;
