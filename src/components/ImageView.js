import React from "react";
import { Grid, GridList, GridListTile, Typography, Paper, Card, CardContent, Divider, CardHeader } from "@material-ui/core";

function ImageView (props) {

  return (


        <Grid container> 

          <Grid item xs={12}>
            <Paper className={props.classes.paper} square={true}>
            <img src="https://i.ebayimg.com/images/g/SeQAAOSw76lcQZVl/s-l500.png" alt="mouse" objectFit="cover" width="100%"></img>
            </Paper>
          </Grid>
          
          <GridList cols={3} spacing={6} cellHeight={120}>
            <GridListTile>
            <img src="https://i.ebayimg.com/images/g/SeQAAOSw76lcQZVl/s-l500.png" alt="mouse"></img>
            </GridListTile>
            <GridListTile>
            <img src="https://i.ebayimg.com/images/g/1TkAAOSwPXFcQZVm/s-l500.png" alt="mouse"></img>
            </GridListTile>

            <GridListTile>
              <img src="https://i.ebayimg.com/images/g/pJ4AAOSwc9VcQZVn/s-l500.png" alt="mouse"></img>
            </GridListTile>

          </GridList>
        </Grid>

)
}

export default ImageView;