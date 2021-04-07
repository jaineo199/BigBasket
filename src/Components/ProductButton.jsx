import React from 'react';
import Button from '@material-ui/core/Button';
import ButtonGroup from '@material-ui/core/ButtonGroup';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
  root: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    '& > *': {
      margin: theme.spacing(1),
    },
  },
}));

export default function GroupSizesColors() {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <ButtonGroup size="small" aria-label="small outlined button group">
        <Button>Qty</Button>
        <Button style={{backgroundColor:'#f7f0d2'}}>1</Button>
        <Button style={{marginLeft:'5px', backgroundColor:'#2780f5'}}>Add</Button>
      </ButtonGroup>
   
    </div>
  );
}
