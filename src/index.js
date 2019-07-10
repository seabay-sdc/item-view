import React from "react";
import ReactDOM from "react-dom";
import Button from '@material-ui/core/Button';
import Container from '@material-ui/core/Container';
import Box from '@material-ui/core/Box';
import blue from '@material-ui/core/colors/blue';
import { IconButton, Grid, Typography, Paper, Card, CardContent, Divider, CardHeader, GridList, GridListTile, TextField, AppBar, Toolbar } from "@material-ui/core";
// import { MenuIcon} from '@material-ui/icons';
import ImageView from "./components/ImageView"
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles(theme => ({
  root: {
    // flexGrow: 1,
  },
  paper: {
    // padding: theme.spacing(2),
    textAlign: 'center',
    // color: theme.palette.text.secondary,
    padding: 10,
    marginTop: 10,
    marginBottom: 10,
  },
  Container: {
    backgroundColor: "#f5f5f5"
  }
  
  
}));



const App = () => {

  const classes = useStyles()
  
  return (
  <div> 

{/* <Container> */}
<Container className={classes.Container} maxWidth="lg">
  <AppBar position="static">
    <Toolbar>
      <IconButton edge="start" color="inherit" aria-label="Menu">
        {/* <MenuIcon /> */}
      </IconButton>
    </Toolbar>
  </AppBar>

  <Grid container spacing={3}> 
    <Grid item xs={12} sm={6}>

        <Grid container> 

          <Grid item xs={12}>
            <Paper className={classes.paper} square={true}>
            <img src="https://i.ebayimg.com/images/g/SeQAAOSw76lcQZVl/s-l500.png" alt="mouse" objectFit="cover" width="100%"></img>
            </Paper>
          </Grid>


          
          <GridList cols={3} spacing={6} cellHeight={120}>
            <GridListTile>
            <img src="https://i.ebayimg.com/images/g/SeQAAOSw76lcQZVl/s-l500.png" alt="mouse"></img>
            </GridListTile>
            <GridListTile>
            <img src="https://i.ebayimg.com/images/g/1TkAAOSwPXFcQZVm/s-l500.png" alt="mouse"></img>
            </GridListTile>

            <GridListTile>
              <img src="https://i.ebayimg.com/images/g/pJ4AAOSwc9VcQZVn/s-l500.png" alt="mouse"></img>
            </GridListTile>

          </GridList>
        </Grid>
    </Grid>

    
    <Grid item xs={12} sm={6}>
{/* BUY IT NOW COMPONENT */}
       <Paper className={classes.paper} square={true}>
          <Grid container>
          <Grid item sm={12}>
            <Typography variant="h6" gutterBottom>(BUY) Open-Box Excellent: Microsoft - Pro IntelliMouse Wired Optical Gaming Mouse</Typography>
          </Grid>

          <Grid item xs={12}>
            <Divider style={{marginBottom: 10}}/>
          </Grid>

          <Grid container xs={12}>
          <Grid container xs={12} md={8}>
              <Grid item xs={12} md={6} style={{padding: 5}}>
                <Typography variant="subtitle1" gutterBottom>Price: $69</Typography>
              </Grid>

              <Grid item xs={12} md={6} style={{padding: 5}}>
              <Typography variant="subtitle1" gutterBottom>Condition: New </Typography>
              </Grid>

              <Grid item xs={12} md={6} style={{padding: 5}}>
                <Typography variant="subtitle1" gutterBottom>Quantity</Typography>

              </Grid>

              <Grid item xs={12} md={6} style={{padding: 5}}>
                <TextField 
                    defaultValue={1}
                    type="number"
                    InputProps={{ inputProps: { min: 1, max: 10 } }}
                    variant="outlined"
                    margin="dense"
                    
                    />
                    
              </Grid>
            {/* </Grid> */}
            </Grid>
          </Grid>


{/* Buttons */}
          <Grid item xs={12} md={4} style={{padding: 5}}>
          <Button variant="contained" color="primary" fullWidth={true} >Buy It Now</Button>
          </Grid>
          <Grid item xs={12} md={4} style={{padding: 5}}>
          <Button variant="contained" color="secondary" fullWidth={true}>Add to cart</Button>
          </Grid>
          <Grid item xs={12} md={4} style={{padding: 5}}>
          <Button variant="outlined" color="primary" fullWidth={true}>watch list</Button>
          </Grid>

          <Grid item xs={12}>
            <Divider style={{marginBottom: 10, marginTop: 10}}/>
          </Grid>

{/* SHIPPING/DELIVERY/PAYMENTS/RETURNS           */}
        <Grid container xs={12}>

          <Grid item xs={3}>
            Shipping
          </Grid>
          <Grid item xs={9}>
            FREE Standard Shipping | See details
          </Grid>

          <Grid item xs={3}>
            Delivery
          </Grid>
          <Grid item xs={9}>  
            Estimated between Thu. Jul. 11 and Thu. Jul. 18
            Use One-day Shipping to get it by Jul. 11	 
          </Grid>

          <Grid item xs={3}>
            Payments
          </Grid>
          <Grid item xs={9}>
            Payment options here
          </Grid>

          <Grid item xs={3}>
            Returns
          </Grid>
          <Grid item xs={9}>
            14 day returns. Buyer pays for return shipping |  See details
          </Grid>
          
        </Grid>


          </Grid>
       </Paper>

    {/* BID COMPONENT */}
    {/* <Paper className={classes.paper} square={true}>
          <Grid container>
          <Grid item sm={12}>
            <Typography variant="h6" gutterBottom>(BID) Open-Box Excellent: Microsoft - Pro IntelliMouse Wired Optical Gaming Mouse</Typography>
          </Grid>


          <Grid item sm={12}>
            <Divider style={{marginBottom: 10}}/>
          </Grid>

    

          <Grid item xs={12} style={{padding: 5}} justify="flex-start">
            <Typography variant="subtitle1" gutterBottom>Condition: New </Typography>
          </Grid>
          <Grid item xs={6} style={{padding: 5}}>
            <Typography variant="subtitle1" gutterBottom>Quantity </Typography>
          </Grid>
          <Grid item xs={6} style={{padding: 5}}>
            <Typography variant="subtitle1" gutterBottom>Quantity </Typography>
          </Grid>

       

          <Grid item xs={12} style={{padding: 5}}>
            <Typography variant="subtitle1" gutterBottom>Price: $69</Typography>
          </Grid>
 
          <Grid item xs={12} md={4} style={{padding: 5}}>
            <Button variant="contained" color="primary" fullWidth={true} >Place Bid</Button>
          </Grid>

          <Grid item xs={12} md={4} style={{padding: 5}}>
            <Button variant="contained" color="primary" fullWidth={true} >Place Bid</Button>
          </Grid>

          <Grid item xs={12} md={4} style={{padding: 5}}>
            <Button variant="outlined" color="primary" fullWidth={true}>watch list</Button>
          </Grid>


          </Grid>
       </Paper> */}


    </Grid>


  </Grid>


</Container>


{/* </Container> */}

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

