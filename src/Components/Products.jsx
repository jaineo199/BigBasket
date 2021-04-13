import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import Paper from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography';
import ButtonBase from '@material-ui/core/ButtonBase';
import onion from './images/onion.webp';
import ProductButton from './ProductButton';
import ProductGrid from './ProductGrid'


const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
    width: '50%'
  },
  paper: {
    
  },
  image: {
    width: 100,
    height: 100,
    padding: '15px'
  },
  img: {
    margin: 'auto',
    display: 'block',
    maxWidth: '100%',
    maxHeight: '100%',
  },
}));

export default function ComplexGrid() {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      
      <Paper className={classes.paper}>
          {/* <ProductGrid/> */}
        <Grid container spacing={1}>
          <Typography  style={{backgroundColor: '#11f555', fontSize: '1rem'}}>Get 35% off</Typography>
          <Grid item style={{marginLeft:'75px'}}>
            
            <ButtonBase className={classes.image}>
              <img className={classes.img} alt="complex" src={onion} />
              <Typography style={{float:'inline', padding:'5px', marginLeft:'15px'}}> Fresh onion <br/> <br/>
              1kg
              
              </Typography>
              
            </ButtonBase>
           
          </Grid>
          <Grid item xs={12} lg container style={{width: '100%'}}>
              <paper style={{backgroundColor:'#deddd9', width: '100%'}}>
            <Grid item xs container direction="column" spacing={1} style={{marginLeft:'15px'}}>
              <Grid item xs >
                <Typography gutterBottom variant="subtitle1">
                  MRP: 18.81$
                </Typography>
                <Typography variant="body2" gutterBottom>
                 Standard delivery tommorow
                </Typography>
                <Typography variant="body2" color="textSecondary">
                  5:00pm tp 7:00pm
                </Typography>
              </Grid>
            
            </Grid>
            <Grid item>
              <ProductButton/>
            </Grid>
            </paper>
            
          </Grid>
          
        </Grid>
      </Paper>
      
      
    </div>
  );
}
