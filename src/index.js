import React from "react";
import ReactDOM from "react-dom";
import PropTypes from "prop-types";
import Container from '@material-ui/core/Container';
import { createMuiTheme, MuiThemeProvider, IconButton, Button, Grid, Typography, Paper, Divider, TextField, AppBar, Toolbar } from "@material-ui/core";
import { makeStyles } from '@material-ui/core/styles';
import { withStyles, withTheme } from '@material-ui/styles';
import blue from '@material-ui/core/colors/blue';
import axios from 'axios';


// require('dotenv').config()
// import dotenv from 'dotenv/config'
// dotenv.config()

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
      items : [],
      currentItemIndex: 31,
      currentItem: 
        {
          "id": 31,
          "name": "INDUSTRIAL SYLE deluxe mobile home (two colors available)",
          "price": 2399,
          "category": "Mobile Homes and RVs",
          "images" : ["https://bloximages.newyork1.vip.townnews.com/newsadvance.com/content/tncms/assets/v3/editorial/8/d6/8d640864-32b3-11e2-b0c5-0019bb30f31a/50aae008b6cc3.image.jpg", "http://www.jillmogersculptures.co.uk/_media/img/large/affordable-housing-canned-hermit-crab-semi-porcelain-tin-and-wire-18-x-14cms.jpg"]
        }
      
    }
    this.handleAddToCart = this.handleAddToCart.bind(this);
  }

  componentDidMount() {

    document.addEventListener('testEvent', data => {
      console.log('Item view received this id: ', data)
    });

    this.getData()
  }

  //populate our state with items from server
  getData() {
    axios.get(`${process.env.HOST}:3000/api/items`)
    .then( results => {this.setState({items: results.data})})
    .then( ()=>{
      console.log('items from state:')
      console.log(this.state.items)})
  }

  updateCurrentItem(){
    this.setState({currentItem : this.state.items[this.state.currentItemIndex]})
  }

  rngCurrentItemIndex(){
    this.setState({currentItemIndex : Math.floor(Math.random() * 40)}, this.updateCurrentItem)
  }

  handleAddToCart(){
	  const detail = { detail: this.state.currentItemIndex }
    const event = new CustomEvent('addToCart', detail);
    console.log('an item was added to the cart', event)
    document.dispatchEvent(event);
  }
  
  render () {
    const {classes} = this.props;
    return (
      <Container className={classes.Container} maxWidth="lg">
        <Button onClick={()=>{this.rngCurrentItemIndex()}}variant="contained" color="primary">RNG item</Button>
        <AppBar position="static">
          <Toolbar>
            <IconButton edge="start" color="inherit" aria-label="Menu">
              {/* <MenuIcon /> */}
            </IconButton>
          </Toolbar>
        </AppBar>

        <Grid container spacing={3}> 
          <Grid item sm={12} md={6}>
            <ImageView classes={classes} currentItem={this.state.currentItem}/>
          </Grid>
          <Grid item sm={12} md={6}>

            <ItemSummary classes={classes} currentItem={this.state.currentItem}/>

            {/* Buttons */}
            <Grid container>
                <Grid item xs={12} md={4} style={{padding: 5}}>
                  <Button onClick={this.handleAddToCart} variant="contained" color="secondary" fullWidth={true} style={{borderRadius: 2}} >Buy It Now</Button>
                </Grid>
                <Grid item xs={12} md={4} style={{padding: 5}}>
                  <Button onClick={this.handleAddToCart} variant="contained" color="secondary" fullWidth={true} style={{borderRadius: 2}}>Add to cart</Button>
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
