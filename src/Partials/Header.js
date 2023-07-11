import React from 'react'
import { AppBar,
    Box,
    Toolbar,
    Typography,
    Button,
    IconButton
} from '@mui/material'

import MenuIcon from '@mui/icons-material/Menu'



const Header = () =>{
  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="fixed">
        <Toolbar>
          <IconButton
            size="large"
            edge="start"
            color="inherit"
            aria-label="menu"
            sx={{ mr: 2 }}
          >
            <MenuIcon />
          </IconButton>
          <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
            Pfuneka
          </Typography>
          <Button color="inherit">Login</Button>
        </Toolbar>
      </AppBar>
    </Box>
  );
}

export default Header