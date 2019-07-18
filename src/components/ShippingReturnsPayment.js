import React from "react";
import { Grid, TextField, Button, GridList, GridListTile, Typography, Paper, Card, CardContent, Divider, CardHeader } from "@material-ui/core";

function ShippingReturnsPayment (props) {

  return (
           <Paper className={props.classes.paper} square={true}>
              <Grid container style={{padding: 5}}>

              <Typography variant="h5" gutterBottom align="left">Shipping, Returns & Payments</Typography>
              <Grid item xs={12}>
                <Divider style={{marginBottom: 20}}/>
              </Grid>

              <Grid item xs={10}>
                <Grid container>
                  

              {/* Row 1 */}
                  <Grid item xs={6}>
                    <Typography 
                      className={props.classes.label}
                      variant="body1" 
                      gutterBottom 
                      align="left">
                        Ships From
                    </Typography>
                  </Grid>
                  <Grid item xs={6}>
                    <Typography variant="body1" gutterBottom align="left">
                    Austin, Texas, United States
                    </Typography>
                  </Grid>
              {/* Row 2 */}
                  <Grid item xs={6}>
                    <Typography className={props.classes.label} variant="body1" gutterBottom align="left">Delivery to 78701</Typography>
                  </Grid>
                  <Grid item xs={6}>
                    <Typography variant="body1" gutterBottom align="left">Est. delivery Tue, Jul 23 - Mon, Aug 12</Typography>
                  </Grid>
              {/* Row 3 */}
                  <Grid item xs={6}>
                    <Typography className={props.classes.label} variant="body1" gutterBottom align="left">Returns</Typography>
                  </Grid>
                  <Grid item xs={6}>
                    <Typography variant="body1" align="left">Accepted within 14 days</Typography>
                    <Typography variant="body1" gutterBottom align="left">Buyer Pays Return Shipping</Typography>
                  </Grid>
                {/* Row 4 */}
                  <Grid item xs={6}>
                    <Typography className={props.classes.label} variant="body1" gutterBottom align="left">Payments</Typography>
                  </Grid>
                  <Grid item xs={6}>
                    
                    <div style={{height: 30, width: 247, overflow : 'hidden'}}>
                      <img style={{height: 30}} src="https://ir.ebaystatic.com/cr/v/c1/mwebpayments/mWeb_payment_sprite_placeholder.png"></img>
                    </div>
                  </Grid>

                </Grid>
              </Grid>


              </Grid>
           </Paper>

)
}

export default ShippingReturnsPayment;


