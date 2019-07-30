import React from "react";
import ReactDOM from "react-dom";
import { createMuiTheme, MuiThemeProvider, Button, Grid } from "@material-ui/core";
import { withStyles } from '@material-ui/styles';
import axios from 'axios';
import { StylesProvider, createGenerateClassName } from '@material-ui/styles';


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
  // Container: {
  //   backgroundColor: "#EEEEEE",
  //   padding: 0,
  //   marginTop: 0,
  //   // Added to because bottom was overflowing into doriss
  //   marginBottom: 0,
  //   paddingBottom: 12
  // },
  label: {
    color: '#767676'
  },
  magnifySmall: {
    maxHeight: "100%",
    maxWidth: "100%"
  }
}

const generateClassName = createGenerateClassName({
  productionPrefix: 'c',
  seed: 'hadley'
});

// @withStyles(styles)
class ItemView extends React.Component {
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
          "images" : ["",""]
        },
      quantity: 1,
      
    }
    this.handleAddToCart = this.handleAddToCart.bind(this);
    this.onChangeQuantity = this.onChangeQuantity.bind(this);
  }

  componentDidMount() {
    document.addEventListener('setCurrentItem', data => {
      console.log(`the current item was updated in item-view`)
      this.updateCurrentItem(data.detail.id);
    });
    let currentItem = this.state.currentItem;
    axios.get(`/api/items`, {params: {id: 1}})
    .then( results => {
      currentItem.category = results.data.category;
      currentItem.id = results.data.id;
      currentItem.price = results.data.price;
      let images = results.data.images.split(',');
      images[0] = parseInt(images[0]) * (Math.floor(Math.random() * 2) + 1)
      images[1] = parseInt(images[1]) * (Math.floor(Math.random() * 2) + 1)
      currentItem.images[0] = `https://seabay2.s3.us-east-2.amazonaws.com/${images[0]}.jpg`
      currentItem.images[1] = `https://seabay2.s3.us-east-2.amazonaws.com/${images[1]}.jpg`
      this.setState({currentItem, quantity: results.data.quantity});
    })
  }

  //populate our state with items from server
  getData() {
    axios.get(`/api/items`, {params: {id: 1}})
    //populate currentItem with results
    // currentItem: {
    //       "id": -1,
    //       "name": "",
    //       "price": 0,
    //       "category": "",
    //       "images" : ["","",""]}
    .then( results => {console.log(results)})
  }

  //updates current item and it's corresponding index based on a given index
  updateCurrentItem(index){
    //api call for current id -- which is the index --
    axios.get(`/api/items`, {params: {id: index}})
    .then( results => {
      console.log(results)
      let currentItem = this.state.currentItem;
      currentItem.category = results.data.category;
      currentItem.id = results.data.id;
      currentItem.price = results.data.price;
      let images = results.data.images.split(',');
      images[0] = parseInt(images[0]) * (Math.floor(Math.random() * 2) + 1)
      images[1] = parseInt(images[1]) * (Math.floor(Math.random() * 2) + 1)
      currentItem.images[0] = `https://seabay2.s3.us-east-2.amazonaws.com/${images[0]}.jpg`
      currentItem.images[1] = `https://seabay2.s3.us-east-2.amazonaws.com/${images[1]}.jpg`
      this.setState({currentItem, quantity: results.data.quantity});
    })
    // this.setState({currentItemIndex : index}, ()=>{
    //   this.setState({
    //     currentItem : this.state.items[this.state.currentItemIndex],
    //     quantity : 1
    //   })
    // })
  }

  rngCurrentItemIndex(){
    //generate random item ID
    const randomId = Math.floor(Math.random() * 10000000);
    //Dispatch event so that everyone can update their component
    const detail = { 
      detail: {
        id : randomId
      } 
    }
    const event = new CustomEvent('setCurrentItem', detail);
    document.dispatchEvent(event);
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
    console.log(this.state.quantity, 'new', newQuantity)
    if (newQuantity <= this.state.quantity){
      //this.setState({quantity : parseInt(newQuantity)})
    } else {
      alert("There aren't that many available to purchase")
    }
  }
  
  render () {
    const {classes} = this.props;
    return (

       

<StylesProvider generateClassName={generateClassName}>
  <MuiThemeProvider theme={theme}>
        <Grid container spacing={3}> 
          <Grid item sm={12} md={6}>
            <ImageView 
              classes={classes} 
              currentItem={this.state.currentItem}
              
              />
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
          {/* Random button for testing */}
          
          <Grid item xs={12}>
            <Grid container justify="center" alignItems="center">
              <Button  onClick={()=>{this.rngCurrentItemIndex()}}variant="contained" color="primary">I'm Feeling Lucky (for testing)</Button>
            </Grid>
          </Grid>

        </Grid>
        </MuiThemeProvider>
        </StylesProvider>
      );
  }
}

ItemView = withStyles(styles)(ItemView);

ReactDOM.render(<ItemView />,document.getElementById("item-view"));
