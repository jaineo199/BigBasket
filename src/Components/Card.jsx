import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import CardContent from '@material-ui/core/CardContent';
import Button from '@material-ui/core/Button';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import Typography from '@material-ui/core/Typography';
import onion from './images/off1.webp';
import Paper from '@material-ui/core/Paper';
import orange from './images/off2.webp';
import palak from './images/off3.webp';
import potato from './images/off4.webp';

const useStyles = makeStyles((theme) => ({
    root: {
        flexGrow: 1,
       
    
      },
      paper: {
        padding: theme.spacing(2),
        textAlign: 'center',
        color: theme.palette.text.secondary,
        width:'100%'
      },
      cardsize :{
         
      },
      img: {
        margin: 'auto',
        // display: 'block',
        // maxWidth: '50%',
        // maxHeight: '50%',
        // backgroundColor:'#92dbe0',
        padding: '1px',
        borderRadius: '50%',
        
        maxWidth: '100%',
        maxHeight: '60%',
      },
}));

export default function AutoGrid() {
  const classes = useStyles();

  return (
    <div className={classes.root}>
         {/* <Container maxWidth="xl" component="div" style={{ backgroundColor: '#cfe8fc', height: '67vh' }}> */}
       
    <Grid container spacing={0} >
 
      <Grid item xs={4}  >
    
      <CardActionArea>

        <CardContent>
            <Paper>
        <img className={classes.img}  src={onion }/>
        </Paper>
          
        </CardContent>
        
      </CardActionArea>
    
      </Grid>
      <Grid item xs={4} >
     
      <CardActionArea>

        <CardContent>
            <Paper>   <img className={classes.img}  src={orange}/> </Paper>
      
      
        </CardContent>
       
      </CardActionArea>
 
      </Grid>
      <Grid item xs={4}  >
    
    <CardActionArea>

      <CardContent>
          <Paper>
      <img className={classes.img}  src={onion }/>
      </Paper>
        
      </CardContent>
      
    </CardActionArea>
  
    </Grid>
    <Grid item xs={4} >
     
     <CardActionArea>

       <CardContent>
           <Paper>   <img className={classes.img}  src={orange}/> </Paper>
     
     
       </CardContent>
      
     </CardActionArea>

     </Grid>
      <Grid item xs={4}>
     
      <CardActionArea>

        <CardContent>
            <Paper>      <img className={classes.img}  src={potato }/> </Paper>
   
      
        </CardContent>
       
      </CardActionArea>
    
      </Grid>
     
   
      <Grid item xs={4}>
      
      <CardActionArea>

        <CardContent>
            <Paper>    <img className={classes.img} src={palak}/> </Paper>
     
       
        </CardContent>
       
      </CardActionArea>
  
      </Grid>
      <Grid item xs={4}>
     
      <CardActionArea>

        <CardContent>
            <Paper>      <img className={classes.img}  src={potato }/> </Paper>
   
      
        </CardContent>
       
      </CardActionArea>
    
      </Grid>

      <Grid item xs={4}>
      
      <CardActionArea>

        <CardContent>
            <Paper>    <img className={classes.img} src={palak}/> </Paper>
     
       
        </CardContent>
       
      </CardActionArea>
  
      </Grid>

      <Grid item xs={4}>
      
      <CardActionArea>

        <CardContent>
            <Paper>    <img className={classes.img} src={palak}/> </Paper>
     
       
        </CardContent>
       
      </CardActionArea>
  
      </Grid>
  
   
    

      

     
   
  
      
   
    </Grid>
    {/* <BottomNav/> */}
    {/* </Container> */}
  </div>
  );
}