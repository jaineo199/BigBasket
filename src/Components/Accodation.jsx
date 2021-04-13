import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Accordion from '@material-ui/core/Accordion';
import AccordionSummary from '@material-ui/core/AccordionSummary';
import AccordionDetails from '@material-ui/core/AccordionDetails';
import Checkbox from '@material-ui/core/Checkbox';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Typography from '@material-ui/core/Typography';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import FastfoodIcon from '@material-ui/icons/Fastfood';
import NavBar from './AccodationNav';

const useStyles = makeStyles({
  root: {
    width: '100%',
  },
});

export default function ActionsInAccordionSummary() {
  const classes = useStyles();

  return (
    <div className={classes.root}>
        <NavBar/>
      <Accordion>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-label="Expand"
          aria-controls="additional-actions1-content"
          id="additional-actions1-header"
        >
          <FormControlLabel
            aria-label="Acknowledge"
            onClick={(event) => event.stopPropagation()}
            onFocus={(event) => event.stopPropagation()}
            control={<FastfoodIcon style={{padding:'8px'}}/>} 
           
            label="Fruits & Vegitables"
          />
        </AccordionSummary>
        <AccordionDetails >
          <Typography  >
           All fruits & vegetables
          </Typography>
         
        </AccordionDetails>
        <AccordionDetails>
          <Typography >
            Fresh vegetables.
          </Typography>
         
        </AccordionDetails>
        <AccordionDetails>
          <Typography >
            Fresh Fruits.
          </Typography>
         
        </AccordionDetails>
        <AccordionDetails>
          <Typography >
            Exotic Fruits and veggies.
          </Typography>
         
        </AccordionDetails>
        <AccordionDetails>
          <Typography >
            Cuts & sprouts.
          </Typography>
         
        </AccordionDetails>
        <AccordionDetails>
          <Typography >
            Organic Fruits vegetables.
          </Typography>
         
        </AccordionDetails>
      </Accordion>
      <Accordion>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-label="Expand"
          aria-controls="additional-actions2-content"
          id="additional-actions2-header"
        >
          <FormControlLabel
            aria-label="Acknowledge"
            onClick={(event) => event.stopPropagation()}
            onFocus={(event) => event.stopPropagation()}
            control={<FastfoodIcon style={{padding:'8px'}}/>}
            label="FoodGrain Oil & Masala"
          />
        </AccordionSummary>
  
      </Accordion>
      <Accordion>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-label="Expand"
          aria-controls="additional-actions3-content"
          id="additional-actions3-header"
        >
          <FormControlLabel
            aria-label="Acknowledge"
            onClick={(event) => event.stopPropagation()}
            onFocus={(event) => event.stopPropagation()}
            control={<FastfoodIcon style={{padding:'8px'}}/>}
            label="Bakery Cakes & Dairy"
          />
        </AccordionSummary>
       
      </Accordion>
      <Accordion>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-label="Expand"
          aria-controls="additional-actions3-content"
          id="additional-actions3-header"
        >
          <FormControlLabel
            aria-label="Acknowledge"
            onClick={(event) => event.stopPropagation()}
            onFocus={(event) => event.stopPropagation()}
            control={<FastfoodIcon style={{padding:'8px'}}/>}
            label="Beverages"
          />
        </AccordionSummary>
     
      </Accordion>
      <Accordion>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-label="Expand"
          aria-controls="additional-actions1-content"
          id="additional-actions1-header"
        >
          <FormControlLabel
            aria-label="Acknowledge"
            onClick={(event) => event.stopPropagation()}
            onFocus={(event) => event.stopPropagation()}
            control={<FastfoodIcon style={{padding:'8px'}}/>}
            label="Fruits & Vegitables"
          />
        </AccordionSummary>
        <AccordionDetails>
          <Typography >
            All fruits & vegetables.
          </Typography>
         
        </AccordionDetails>
        <AccordionDetails>
          <Typography >
            Fresh vegetables.
          </Typography>
         
        </AccordionDetails>
        <AccordionDetails>
          <Typography >
            Fresh Fruits.
          </Typography>
         
        </AccordionDetails>
        <AccordionDetails>
          <Typography >
            Exotic Fruits and veggies.
          </Typography>
         
        </AccordionDetails>
        <AccordionDetails>
          <Typography >
            Cuts & sprouts.
          </Typography>
         
        </AccordionDetails>
        <AccordionDetails>
          <Typography >
            Organic Fruits vegetables.
          </Typography>
         
        </AccordionDetails>
      </Accordion>
      <Accordion>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-label="Expand"
          aria-controls="additional-actions2-content"
          id="additional-actions2-header"
        >
          <FormControlLabel
            aria-label="Acknowledge"
            onClick={(event) => event.stopPropagation()}
            onFocus={(event) => event.stopPropagation()}
            control={< FastfoodIcon style={{padding:'8px'}}/>}
            label="FoodGrain Oil & Masala"
          />
        </AccordionSummary>
  
      </Accordion>
      <Accordion>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-label="Expand"
          aria-controls="additional-actions3-content"
          id="additional-actions3-header"
        >
          <FormControlLabel
            aria-label="Acknowledge"
            onClick={(event) => event.stopPropagation()}
            onFocus={(event) => event.stopPropagation()}
            control={<FastfoodIcon style={{padding:'8px'}} />}
            label="Bakery Cakes & Dairy"
          />
        </AccordionSummary>
       
      </Accordion>
      <Accordion>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-label="Expand"
          aria-controls="additional-actions3-content"
          id="additional-actions3-header"
        >
          <FormControlLabel
            aria-label="Acknowledge"
            onClick={(event) => event.stopPropagation()}
            onFocus={(event) => event.stopPropagation()}
            control={<FastfoodIcon style={{padding:'8px'}} />}
            label="Beverages"
          />
        </AccordionSummary>
     
      </Accordion>
  
    </div>
  );
}
