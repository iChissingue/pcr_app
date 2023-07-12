import {useState, useEffect} from 'react';
import { 
    AppBar,
    Box,
    Toolbar,
    Typography,
    Button,
    Drawer,
    List,
    ListItem,
    ListItemIcon,
    ListItemText,
    IconButton
} from '@mui/material'

import MenuIcon from '@mui/icons-material/Menu'
import  HomeIcon from '@mui/icons-material/Home'
import  PersonAddIcon from '@mui/icons-material/PersonAdd'



const Header = () =>{
  const [menuOpen, setMenuOpen] = useState(false)
  

  const handleToggleMenu = () =>{
    setMenuOpen(!menuOpen)
  }

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
            onClick={() => handleToggleMenu()}
          >
            <MenuIcon />
          </IconButton>
          <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
            Pfuneka
          </Typography>
          <Button color="inherit">Login</Button>
        </Toolbar>
      </AppBar>
     <Drawer open={menuOpen} onClose={() => handleToggleMenu()}>
        <List>
          <ListItem button>
            <ListItemIcon><HomeIcon color='primary'/></ListItemIcon>
            <ListItemText>Home</ListItemText>
          </ListItem>
          <ListItem button>
            <ListItemIcon><PersonAddIcon color='primary'/></ListItemIcon>
            <ListItemText>Cadastro de Membros</ListItemText>
          </ListItem>
        </List>
      </Drawer> 
    </Box>
    
  );
}

export default Header