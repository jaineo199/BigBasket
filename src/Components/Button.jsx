import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';

const useStyles = makeStyles((theme) => ({
  root: {
    '& > *': {
      margin: theme.spacing(1),
    },
  },
}));

export default function ContainedButtons() {
  const classes = useStyles();

  return (
    <div >
      <Button style={{height: '50px', padding: '5px', marginTop: '15px', marginBottom: '15px'}} variant="contained"><b>Home and Kitchen</b></Button>
      <Button style={{height: '50px', padding: '5px', marginLeft:"5px", marginBottom: '15px', marginTop: '15px'}} variant="contained"><b>Eggs Meat and fish</b></Button>
    </div>
  );
}
