import React from "react";
import ReactDOM from "react-dom";
import Button from '@material-ui/core/Button';
import Container from '@material-ui/core/Container';
import Box from '@material-ui/core/Box';
import blue from '@material-ui/core/colors/blue';
import { Grid, Typography, Paper, Card, CardContent, Divider, CardHeader } from "@material-ui/core";

function ImageView ({ name }) {
  return (
  <Paper className={classes.paper}>
  <img src="https://images.unsplash.com/photo-1516247897763-0f4ad94c2668?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1299&q=80" alt="mouse" objectFit="cover" width="100%"></img>
</Paper>
)
}

export default ImageView;