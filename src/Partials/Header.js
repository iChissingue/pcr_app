import {useState} from 'react';
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
import  GroupsIcon from '@mui/icons-material/Groups'
import { useNavigate } from 'react-router-dom'
import LeaderboardIcon from '@mui/icons-material/Leaderboard'



const Header = () =>{
  const [menuOpen, setMenuOpen] = useState(false)
  const navigate = useNavigate()
  

  const handleToggleMenu = () =>{
    setMenuOpen(!menuOpen)
  }

  const handleMemberChick = () =>{
    navigate('/members')
    handleToggleMenu()
  }

  const handleHomeChick = () =>{
    navigate('/')
    handleToggleMenu()
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
          <Typography variant="h6" component="div" sx={{ flexGrow: 1 }} >
            Pfuneka
          </Typography>
          <Button color="inherit">Login</Button>
        </Toolbar>
      </AppBar>
     <Drawer open={menuOpen} onClose={() => handleToggleMenu()}>
        <List>
          <ListItem button onClick={() => handleHomeChick()}>
            <ListItemIcon><HomeIcon color='primary'/></ListItemIcon>
            <ListItemText>Home</ListItemText>
          </ListItem>
          <ListItem button onClick={()=> handleMemberChick()}>
            <ListItemIcon><GroupsIcon color='primary'/></ListItemIcon>
            <ListItemText>Membros</ListItemText>
          </ListItem>
          <hr/>
          <ListItem button onClick={()=> handleMemberChick()}>
            <ListItemIcon><LeaderboardIcon color='primary'/></ListItemIcon>
            <ListItemText>Relatorios</ListItemText>
          </ListItem>
        </List>
      </Drawer> 
    </Box>
    
  );
}

export default Header