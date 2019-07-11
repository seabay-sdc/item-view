import React from "react";
import { Grid, TextField, Button, GridList, GridListTile, Typography, Paper, Card, CardContent, Divider, CardHeader } from "@material-ui/core";

function ItemInfo (props) {

  return (
    <Grid item xs={12} sm={6}>
    {/* BUY IT NOW COMPONENT */}
           <Paper className={props.classes.paper} square={true}>
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
        </Grid>
)
}

export default ItemInfo;