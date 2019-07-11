import React from "react";
import ReactDOM from "react-dom";
import Container from '@material-ui/core/Container';
import { IconButton, Grid, Typography, Paper, Divider, TextField, AppBar, Toolbar } from "@material-ui/core";
import ImageView from "./components/ImageView"
import { makeStyles } from '@material-ui/core/styles';
import ItemInfo from "./components/ItemInfo";

const useStyles = makeStyles(theme => ({
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
    backgroundColor: "#E5E5E5"
  }
}));

const App = () => {

  const classes = useStyles()
  
  return (
<Container className={classes.Container} maxWidth="lg">
  <AppBar position="static">
    <Toolbar>
      <IconButton edge="start" color="inherit" aria-label="Menu">
        {/* <MenuIcon /> */}
      </IconButton>
    </Toolbar>
  </AppBar>

  <Grid container spacing={3}> 
    <ImageView classes={classes}/>
    <ItemInfo classes={classes}/>
  </Grid>


</Container>
  );
}
ReactDOM.render(<App />, document.getElementById("app"));
