import React from "react";
import ReactDOM from "react-dom";
import PropTypes from "prop-types";
import Container from '@material-ui/core/Container';
import { createMuiTheme, MuiThemeProvider, IconButton, Button, Grid, Typography, Paper, Divider, TextField, AppBar, Toolbar } from "@material-ui/core";
import { makeStyles } from '@material-ui/core/styles';
import { withStyles, withTheme } from '@material-ui/styles';
import blue from '@material-ui/core/colors/blue';


import ImageView from "./components/ImageView"
import ShippingReturnsPayment from "./components/ShippingReturnsPayment";
import AboutItem from "./components/AboutItem";
import ItemSummary from './components/ItemSummary'

const theme = createMuiTheme({
  palette: {
    primary: {
      main: "#0065D2"
    },
    secondary: {
      main: "#009AF7"
    }

  }

});
console.log(theme)

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
    backgroundColor: "#EEEEEE",
    padding: 0,
    marginTop: 0
  }
}


// @withStyles(styles)
class App extends React.Component {
  constructor () {
    super()
    
    this.state = {

    }
  }

  componentDidMount() {

    document.addEventListener('testEvent', data => {
      console.log('Item view received this id: ', data)
    });

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
            <ItemSummary classes={classes}/>
            <Grid container>
                <Grid item xs={12} md={4} style={{padding: 5}}>
                  <Button variant="contained" color="secondary" fullWidth={true} style={{borderRadius: 2}} >Buy It Now</Button>
                </Grid>
                <Grid item xs={12} md={4} style={{padding: 5}}>
                  <Button variant="contained" color="secondary" fullWidth={true} style={{borderRadius: 2}}>Add to cart</Button>
                </Grid>
                <Grid item xs={12} md={4} style={{padding: 5}}>
                  <Button variant="contained" color="secondary" fullWidth={true} style={{borderRadius: 2}}>watch list</Button>
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

ReactDOM.render(
<MuiThemeProvider theme={theme}>
  <App />
</MuiThemeProvider>
, document.getElementById("item-view"));
