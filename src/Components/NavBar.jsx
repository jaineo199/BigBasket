import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';
import CenterFocusWeakIcon from '@material-ui/icons/CenterFocusWeak';
import SearchIcon from '@material-ui/icons/Search';
import { CssBaseline } from '@material-ui/core';
import MicIcon from '@material-ui/icons/Mic';
import LocalMallIcon from '@material-ui/icons/LocalMall';
import Container from '@material-ui/core/Container';
import SearchBar from './Search';
import PermIdentityIcon from '@material-ui/icons/PermIdentity';
import LocationOnIcon from '@material-ui/icons/LocationOn';

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  
  
  },

  CenterFocusWeak:{
   marginLeft:'30px'
  },
  menuButton: {
    marginRight: theme.spacing(2),
  },
  title: {
    flexGrow: 1,
   
  },
}));

export default function ButtonAppBar() {
  const classes = useStyles();

  return (
      <React.Fragment className={classes.root}>
          <CssBaseline/>
    
      <AppBar position="static" style={{  backgroundColor:'#64a832'}} >
        <Toolbar>
          <IconButton edge="start" className={classes.menuButton} color="inherit" aria-label="menu">
            <MenuIcon style={{ color:'#282b2b'}}/>
          </IconButton>
         
          <Typography variant="h6" className={classes.title}>
          <b style={{ color:'#282b2b', marginRight:'50px' }} ><PermIdentityIcon/></b> <br/>
        
        
            
          </Typography>
          <MicIcon style={{ color:'#282b2b', marginRight:'50px' }} />
          <LocalMallIcon style={{ color:'#282b2b'}}/> 
         
        </Toolbar>
       <SearchBar/>
      </AppBar>
      
    </React.Fragment>
  );
}
