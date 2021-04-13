import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import Paper from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography';
import ButtonBase from '@material-ui/core/ButtonBase';
import ProductButton from './ProductButton2';

import orange from './images/orange.webp';
const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  paper: {
    padding: theme.spacing(2),
    margin: 'auto',
    maxWidth: '180px',
    float: 'left'
  },
  image: {
    width: 128,
    height: 128,
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
        <Grid container spacing={2}>
          <Grid item>
              <Typography style={{  fontWeight:'bold' , float:'left', backgroundColor:'#148034'}}>Get 20% off</Typography>
            <ButtonBase className={classes.image}>
              <img className={classes.img} alt="complex" src={orange} />
            </ButtonBase>
          </Grid>
          <Grid item xs={12} sm container>
            <Grid item xs container direction="column" spacing={1}>
              <Grid item xs>
                <Typography >
                  Fresh-carrot
                </Typography>
                <Typography >
                  1 kg
                </Typography>

                <Typography >
                  $20
                </Typography>
               
              </Grid>
            </Grid>
            <Grid item>
              <Typography > <ProductButton /></Typography>
            </Grid>
          </Grid>
          
        </Grid>
        
      </Paper>
    </div>
  );
}
