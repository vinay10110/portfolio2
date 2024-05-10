import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import CssBaseline from '@mui/material/CssBaseline';
import Divider from '@mui/material/Divider';
import Drawer from '@mui/material/Drawer';
import IconButton from '@mui/material/IconButton';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemText from '@mui/material/ListItemText';
import MenuIcon from "@mui/icons-material/Menu";
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import { Link } from 'react-scroll';

interface Props {
  /**
   * Injected by the documentation to work in an iframe.
   * You won't need it on your project.
   */
  window?: () => Window;
}

const drawerWidth = 240;
const navItems = ['About', 'Projects', 'Contact'];

export default function DrawerAppBar(props: Props) {
  const { window } = props;
  const [mobileOpen, setMobileOpen] = React.useState(false);

  const handleDrawerToggle = () => {
    setMobileOpen((prevState) => !prevState);
  };

  const drawer = (
    <Box onClick={handleDrawerToggle} sx={{ textAlign: 'center' }}>
        
      <Typography variant="h6" sx={{ my: 2 }}>
      <svg width="15" height="15" viewBox="0 0 15 15" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M12.8536 2.85355C13.0488 2.65829 13.0488 2.34171 12.8536 2.14645C12.6583 1.95118 12.3417 1.95118 12.1464 2.14645L7.5 6.79289L2.85355 2.14645C2.65829 1.95118 2.34171 1.95118 2.14645 2.14645C1.95118 2.34171 1.95118 2.65829 2.14645 2.85355L6.79289 7.5L2.14645 12.1464C1.95118 12.3417 1.95118 12.6583 2.14645 12.8536C2.34171 13.0488 2.65829 13.0488 2.85355 12.8536L7.5 8.20711L12.1464 12.8536C12.3417 13.0488 12.6583 13.0488 12.8536 12.8536C13.0488 12.6583 13.0488 12.3417 12.8536 12.1464L8.20711 7.5L12.8536 2.85355Z" fill="currentColor" fill-rule="evenodd" clip-rule="evenodd"></path></svg> Portfolio
      </Typography>
      <Divider />
      <List>
      <Link to="Home" smooth={true} duration={500} onClick={handleDrawerToggle}>
      <ListItem disablePadding>
        <ListItemButton sx={{ textAlign: 'center' }}>
          <ListItemText primary="Home" />
        </ListItemButton>
      </ListItem>
    </Link>
    <Link to="About" smooth={true} duration={500} onClick={handleDrawerToggle}>
      <ListItem disablePadding>
        <ListItemButton sx={{ textAlign: 'center' }}>
          <ListItemText primary="About" />
        </ListItemButton>
      </ListItem>
    </Link>
    <Link to="Projects" smooth={true} duration={500} onClick={handleDrawerToggle}>
      <ListItem disablePadding>
        <ListItemButton sx={{ textAlign: 'center' }}>
          <ListItemText primary="Projects" />
        </ListItemButton>
      </ListItem>
    </Link>
    <Link to="Contact" smooth={true} duration={500} onClick={handleDrawerToggle}>
      <ListItem disablePadding>
        <ListItemButton sx={{ textAlign: 'center' }}>
          <ListItemText primary="Contact" />
        </ListItemButton>
      </ListItem>
    </Link>
      </List>
    </Box>
  );

  const container = window !== undefined ? () => window().document.body : undefined;

  return (
    
    
    <Box sx={{ display: 'flex',height:'50px'}} >
      <CssBaseline />
      <AppBar component="nav" style={{height:'50px',backgroundColor:'white'}}>
        <Toolbar style={{paddingBottom:'10px', color:'black'}}>
          <IconButton
            color="inherit"
            aria-label="open drawer"
            edge="start"
            onClick={handleDrawerToggle}
            sx={{ mr: 2, display: { sm: 'none' } }}
          >
            <MenuIcon />
          </IconButton>
          <Typography
            variant="h6"
            component="div"
            sx={{ flexGrow: 1, display: { xs: 'none', sm: 'block' } }}
            
          >
           <Link to='Home' smooth={true} duration={500} style={{cursor:"pointer"}}>Portfolio</Link> 
          </Typography>
          <Box sx={{ display: { xs: 'none', sm: 'block' } }}>
            {navItems.map((item) => (
              <Button key={item} sx={{ color: 'black' }}>
               <Link to={item} smooth={true} duration={500}>{item}</Link> 
              </Button>
            ))}
          </Box>
        </Toolbar>
      </AppBar>
      <nav>
        <Drawer
          container={container}
          variant="temporary"
          open={mobileOpen}
          onClose={handleDrawerToggle}
          ModalProps={{
            keepMounted: true, // Better open performance on mobile.
          }}
          sx={{
            display: { xs: 'block', sm: 'none' },
            '& .MuiDrawer-paper': { boxSizing: 'border-box', width: drawerWidth },
          }}
        >
          {drawer}
        </Drawer>
      </nav>
      
    </Box>
   
    
  );
}