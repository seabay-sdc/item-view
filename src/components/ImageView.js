import React from "react";
import { Grid, GridList, GridListTile, Typography, Paper, Card, CardContent, Divider, CardHeader } from "@material-ui/core";


// function ImageView (props) {

//   return (


//         <Grid container> 

//           <Grid item xs={12}>
//             <Paper className={props.classes.paper} square={true}>
//               <div>
//                 <img src={props.currentItem.images[0]} alt="mouse" objectFit="cover" width="100%"></img>
//               </div>
//             </Paper>
//           </Grid>
          
//           <GridList cols={3} spacing={6} cellHeight={120}>

//             {props.currentItem.images.map( image => {
//               if (image.length != 0) {
//                 return (
//                 <GridListTile>
//                 <img src={image} alt="mouse"></img>
//                 </GridListTile>
//                 )           
//               }
              
//             })}
//           </GridList>
//         </Grid>

// )
// }

// export default ImageView;

class ImageView extends React.Component {
  constructor (props) {
    super(props);
    
    this.state = {

      //currentImage doesn't need to be aware of props. only for seed
      currentImage: ''
      // currentImage: props.currentItem.images[0]

    }
    

  }

// componentDidMount(){
//   this.setState({currentImage : this.props.currentItem.images[0]}, ()=>{console.log(this.state.currentImage)})
  
// }

componentDidUpdate(prevProps) {
  if (prevProps.currentItem.images[0] != this.props.currentItem.images[0]){
    this.setState({currentImage : this.props.currentItem.images[0]}, ()=>{console.log(this.state.currentImage)})
  }
}

handleImageClick(imgUrl) {
  this.setState({currentImage: imgUrl})
}

  
  render () {
    const {classes} = this.props;
    console.log(this.state.currentImage)
    return (
      <Grid container> 

      <Grid item xs={12}>
        <Paper className={classes.paper} square={true}>
          <div style={{height: 400}}>
            {/* <img src={this.props.currentItem.images[0]} alt="mouse" objectFit="cover" width="100%"></img> */}
            <img src={this.state.currentImage} alt="mouse" style={{maxHeight : "100%", maxWidth : "100%"}}></img>
            {/* objectFit="scale-down" width="100%" */}
          </div>
        </Paper>
      </Grid>

      {this.props.currentItem.images.map( image => {
        if (image.length != 0) {
          return (
           <Grid item xs={4} >
             <Paper className={classes.paper} square={true} style={{height: 200}}>
               <img style={{maxHeight : "100%", maxWidth : "100%"}} src={image} alt="mouse" onMouseOver={(e)=>{this.handleImageClick(e.target.src)}}></img>
             </Paper>
           </Grid>
          )           
        }   
      })}
    </Grid>
      );
  }
}

export default ImageView;
