import React from "react";
import { Grid, TextField, Button, GridList, GridListTile, Typography, Paper, Card, CardContent, Divider, CardHeader } from "@material-ui/core";

function ShippingReturnsPayment (props) {

  return (
           <Paper className={props.classes.paper} square={true}>
              <Grid container>
              <Grid item sm={12} style={{padding: 5}}>
                <Typography variant="h5" gutterBottom align="left">Shipping, Returns & Payment</Typography>
              </Grid>
    
              <Grid item xs={12}>
                <Divider style={{marginBottom: 20}}/>
              </Grid>

           <Grid item xs={10}>
              <Grid container>
              

{/* Row 1 */}
              <Grid item xs={6}>
                <Typography variant="body1" gutterBottom align="left">Condition</Typography>
              </Grid>
              <Grid item xs={6}>
                <Typography variant="body1" gutterBottom align="left">New</Typography>
              </Grid>
{/* Row 2 */}
              <Grid item xs={6}>
                <Typography variant="body1" gutterBottom align="left">Quantity</Typography>
              </Grid>
              <Grid item xs={6}>
                <Typography variant="body1" align="left">Almost Gone</Typography>
                <Typography variant="body1" gutterBottom align="left">7 Watching</Typography>
              </Grid>
{/* Row 1 */}
              <Grid item xs={6}>
                <Typography variant="body1" gutterBottom align="left">Category</Typography>
              </Grid>
              <Grid item xs={6}>
                <Typography variant="body1" gutterBottom align="left">{props.currentItem.category}</Typography>
              </Grid>

            </Grid>
          </Grid>
    
              <Grid container xs={12}>
              <Grid container xs={12} md={8}>
                  <Grid item xs={12} md={6} style={{padding: 5}}>
                    <Typography variant="subtitle1" gutterBottom>Price: $69</Typography>
                  </Grid>
    
                  <Grid item xs={12} md={6} style={{padding: 5}}>
                  <Typography variant="subtitle1" gutterBottom>Condition: New </Typography>
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

export default ShippingReturnsPayment;