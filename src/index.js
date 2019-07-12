import React from "react";
import ReactDOM from "react-dom";
import PropTypes from "prop-types";
import Container from '@material-ui/core/Container';
import { IconButton, Button, Grid, Typography, Paper, Divider, TextField, AppBar, Toolbar } from "@material-ui/core";
import ImageView from "./components/ImageView"
import { makeStyles } from '@material-ui/core/styles';
import { withStyles } from '@material-ui/styles';
import AboutItem from "./components/AboutItem";
import ShippingReturnsPayment from "./components/ShippingReturnsPayment";




const styles = {
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
    backgroundColor: "#E5E5E5",
    padding: 0,
    marginTop: 0
  }
}


// @withStyles(styles)
class App extends React.Component {
  constructor () {
    super()
    
  }
  
  render () {
    const {classes} = this.props;
    return (
      <Container className={classes.Container} maxWidth="lg">
        <AppBar position="static">
          <Toolbar>
            <IconButton edge="start" color="inherit" aria-label="Menu">
              {/* <MenuIcon /> */}
            </IconButton>
          </Toolbar>
        </AppBar>

        <Grid container spacing={3}> 
          <Grid item sm={12} md={6}>
            <ImageView classes={classes}/>
          </Grid>
          <Grid item sm={12} md={6}>

            {/* Buttons */}
            <Grid container>
                <Grid item xs={12} md={4} style={{padding: 5}}>
                  <Button variant="contained" color="primary" fullWidth={true} >Buy It Now</Button>
                </Grid>
                <Grid item xs={12} md={4} style={{padding: 5}}>
                  <Button variant="contained" color="secondary" fullWidth={true}>Add to cart</Button>
                </Grid>
                <Grid item xs={12} md={4} style={{padding: 5}}>
                  <Button variant="outlined" color="primary" fullWidth={true}>watch list</Button>
                </Grid>
            </Grid>

            <AboutItem classes={classes}/>
            <ShippingReturnsPayment classes={classes}/>
          </Grid>
        </Grid>
      </Container>
      );
  }
}

App = withStyles(styles)(App);

ReactDOM.render(<App />, document.getElementById("app"));


// const useStyles = makeStyles(theme => ({
//   root: {
//     // flexGrow: 1,
//   },
//   paper: {
//     // padding: theme.spacing(2),
//     textAlign: 'center',
//     // color: theme.palette.text.secondary,
//     padding: 10,
//     marginTop: 10,
//     marginBottom: 10,
//   },
//   Container: {
//     backgroundColor: "#E5E5E5",
//     padding: 0,
//     marginTop: 0
//   }
// }));

// const classes = useStyles()



// const App = () => {

//   const classes = useStyles()
  
//   return (
// <Container className={classes.Container} maxWidth="lg">
//   <AppBar position="static">
//     <Toolbar>
//       <IconButton edge="start" color="inherit" aria-label="Menu">
//         {/* <MenuIcon /> */}
//       </IconButton>
//     </Toolbar>
//   </AppBar>

//   <Grid container spacing={3}> 
//     <Grid item sm={12} md={6}>
//       <ImageView classes={classes}/>
//     </Grid>
//     <Grid item sm={12} md={6}>

//       {/* Buttons */}
//       <Grid container>
//           <Grid item xs={12} md={4} style={{padding: 5}}>
//             <Button variant="contained" color="primary" fullWidth={true} >Buy It Now</Button>
//           </Grid>
//           <Grid item xs={12} md={4} style={{padding: 5}}>
//             <Button variant="contained" color="secondary" fullWidth={true}>Add to cart</Button>
//           </Grid>
//           <Grid item xs={12} md={4} style={{padding: 5}}>
//             <Button variant="outlined" color="primary" fullWidth={true}>watch list</Button>
//           </Grid>
//       </Grid>

//       <AboutItem classes={classes}/>
//       <ShippingReturnsPayment classes={classes}/>
//     </Grid>
//   </Grid>


// </Container>
//   );
// } 