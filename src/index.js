import React from "react";
import ReactDOM from "react-dom";
import Button from '@material-ui/core/Button';
import Container from '@material-ui/core/Container';
import Box from '@material-ui/core/Box';
import blue from '@material-ui/core/colors/blue';
import { Grid, Typography, Paper, Card, CardContent } from "@material-ui/core";

import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles(theme => ({
  root: {
    // flexGrow: 1,
  },
  paper: {
    padding: theme.spacing(2),
    textAlign: 'center',
    color: theme.palette.text.secondary,
  },
}));


const App = () => {

  const classes = useStyles()
  
  return (
  <div> 

<Container>

<Grid container spacing={3}> 
        <Grid item xs={12}>
        <Paper className={classes.paper}>xs=12</Paper>
        </Grid>
        <Grid item xs={6}>
          <Paper className={classes.paper}>xs=6</Paper>
          <img src="https://images.unsplash.com/photo-1516247897763-0f4ad94c2668?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1299&q=80" alt="mouse" objectFit="cover" width="100%"></img>
        </Grid>
        <Grid item xs={6}>
          <Paper className={classes.paper}>xs=6</Paper>
            <Typography variant="h5" gutterBottom>Open-Box Excellent: Microsoft - Pro IntelliMouse Wired Optical Gaming Mouse</Typography>

          <Card>
          <CardContent>

          <Grid container spacing={3}>
            <Grid item xs={4}>
             <Button variant="contained" color="primary">
              Buy It Now
              </Button>
            </Grid>
            <Grid item xs={4}>
              <Button variant="contained" color="primary">
              Add to cart
              </Button>
            </Grid>



          </Grid>
          </CardContent>
        </Card>



        </Grid>
      </Grid>

</Container>

  </div>


  );
}
ReactDOM.render(<App />, document.getElementById("app"));


//TODO
//React Image Gallery: https://github.com/xiaolin/react-image-gallery

// const App = () => {
//   return (<div>I'm so lonely without anything to complete</div>
//   <Button variant="contained" color="primary">
//   Hello World
// </Button>);
// };