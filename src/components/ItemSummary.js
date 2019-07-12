import React from "react";
import { Grid, TextField, Button, GridList, GridListTile, Typography, Paper, Card, CardContent, Divider, CardHeader } from "@material-ui/core";
import Rating from 'material-ui-rating'

function ItemSummary (props) {

  return (

           <Paper className={props.classes.paper} square={true}>
              <Grid container>
              <Grid align="left" item sm={12} style={{padding: 5}}>
                <Typography variant="h6" gutterBottom >Microsoft Pro IntelliMouse gaming mouse (Pro IE mouse) dark silver</Typography>

                <Rating
                  value={4}
                  max={5}
                  readOnly={true} 
                />

                <Typography variant="h6" gutterBottom >$66.00</Typography>
                <Typography variant="subtitle1" gutterBottom >Est. delivery <b>Tue, Jul 23 - Mon, Aug 12</b></Typography>
              </Grid>
    
              <Grid item xs={12}>
                <Divider style={{marginBottom: 10}}/>
              </Grid>
    

    
    
              </Grid>
           </Paper>

)
}

export default ItemSummary;