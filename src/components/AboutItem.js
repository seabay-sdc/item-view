import React from "react";
import { Grid, TextField, Button, GridList, GridListTile, Typography, Paper, Card, CardContent, Divider, CardHeader } from "@material-ui/core";

function AboutItem (props) {

  return (

           <Paper className={props.classes.paper} square={true}>
              <Grid container>
              <Grid item sm={12} style={{padding: 5}}>
                <Typography variant="h6" gutterBottom align="left">Open-Box Excellent: Microsoft - Pro IntelliMouse Wired Optical Gaming Mouse</Typography>
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
                </Grid>
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

)
}

export default AboutItem;