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
  },
  label: {
    color: '#767676'
  }
}


// @withStyles(styles)
class App extends React.Component {
  constructor () {
    super()
    
    this.state = {
      items : [],
      currentItemIndex: -1,
      currentItem: 
        {
          "id": -1,
          "name": "",
          "price": 0,
          "category": "",
          "images" : ["","",""]
        },
      quantity: 1,
      
    }
    this.handleAddToCart = this.handleAddToCart.bind(this);
    this.onChangeQuantity = this.onChangeQuantity.bind(this);
  }

  componentDidMount() {

    document.addEventListener('setCurrentItem', data => {
      this.updateCurrentItem(data.detail.id);
      console.log(`the current item was updated in item-view`)
    });

    this.getData()
    //after we get our data the first time, set the current item to the first one in the list
    .then( () => {this.updateCurrentItem(0)})
  }

  //populate our state with items from server
  getData() {
    return axios.get(`http://18.223.115.104:3000/api/items`)
    .then( results => {this.setState({items: results.data})})
  }

  //updates current item and it's corresponding index based on a given index
  updateCurrentItem(index){
    this.setState({currentItemIndex : index}, ()=>{
      this.setState({
        currentItem : this.state.items[this.state.currentItemIndex],
        quantity : 1
      })
    })
  }

  rngCurrentItemIndex(){
     this.updateCurrentItem(Math.floor(Math.random() * this.state.items.length))
  }

  handleAddToCart(){
	  const detail = { 
      detail: {
        id : this.state.currentItemIndex,
        quantity: this.state.quantity
      } 
    }
    const event = new CustomEvent('addToCart', detail);
    console.log('an item was added to the cart', event)
    document.dispatchEvent(event);
    
  }

  onChangeQuantity(newQuantity){
    this.setState({quantity : parseInt(newQuantity)})
  }
  
  render () {
    const {classes} = this.props;
    return (
      <Container className={classes.Container} maxWidth="lg">
        <Button onClick={()=>{this.rngCurrentItemIndex()}}variant="contained" color="primary">I'm Feeling Lucky</Button>


        <Grid container spacing={3}> 
          <Grid item sm={12} md={6}>
            <ImageView classes={classes} currentItem={this.state.currentItem}/>
          </Grid>
          <Grid item sm={12} md={6}>

            <ItemSummary 
              classes={classes} 
              currentItem={this.state.currentItem}
              onChangeQuantity={this.onChangeQuantity}
              quantity={this.state.quantity}
              />

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
              
              <AboutItem 
                classes={classes}
                currentItem={this.state.currentItem}/>
              <ShippingReturnsPayment 
                classes={classes}
                currentItem={this.state.currentItem}/>
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
