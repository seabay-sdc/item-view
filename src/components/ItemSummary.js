import React from "react";
import {  FormControl, InputLabel, Select, MenuItem, Grid, TextField, Button, GridList, GridListTile, Typography, Paper, Card, CardContent, Divider, CardHeader } from "@material-ui/core";
import Rating from 'material-ui-rating'

function ItemSummary (props) {

  const formatter = new Intl.NumberFormat('en-US', {
    style: 'currency',
    currency: 'USD',
  });

  return (

           <Paper className={props.classes.paper} square={true}>
              <Grid container>
                <Typography variant="h5" gutterBottom align="left" >{props.currentItem.name}</Typography>
                <Grid item xs={12}>
                  <Divider style={{marginBottom: 20}}/>
                </Grid>
              <Grid align="left" item sm={12} style={{padding: 5}}>

                <Rating
                  value={4}
                  max={5}
                  readOnly={true} 
                />

                <Typography variant="h6" gutterBottom >{formatter.format(props.currentItem.price)}</Typography>
                <Typography variant="subtitle1" gutterBottom >Est. delivery <b>Tue, Jul 23 - Mon, Aug 12</b></Typography>
              </Grid>
    

              <Grid item xs={12}>
                <Divider style={{marginBottom: 10}}/>
              </Grid>

              <Grid item xs={2} style={{padding: 5, paddingTop: 18}}>
                <Typography variant="subtitle1" align="left" gutterBottom>Quantity:</Typography>
              </Grid>
    
              <Grid item xs={2} style={{padding: 5}}>
              <TextField 
                    defaultValue={props.quantity}
                    type="number"
                    InputProps={{ inputProps: { min: 1, max: props.currentItem.quantity } }}
                    variant="outlined"
                    margin="none"
                    fullWidth={true}    
                    onChange={(e)=>{props.onChangeQuantity(e.target.value)}}
                    
                    />
              </Grid>
    
              </Grid>
           </Paper>

)
}

export default ItemSummary;