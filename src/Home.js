// import React from "react";
// import { useAuthenticator } from "@aws-amplify/ui-react";
// import UploadView from "./uploadView";

// export function Home() {
//   const { signOut, user} = useAuthenticator();

//   return (
//     <main>
//       <h1>Hello {user.attributes.email}</h1>
//       <button onClick={signOut}>Sign out</button>
//       <a href="/UploadView">UploadView</a>
//     </main>
//   );
// }
import React from 'react';
import { API } from "aws-amplify";
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import SwipeableViews from 'react-swipeable-views';
import Typography from '@material-ui/core/Typography';
import Grid from '@material-ui/core/Grid';
import GitHubRepo from "./GitHubRepo"
import {Buffer} from 'buffer';
import CardActions from '@material-ui/core/CardActions';
import IconButton from '@material-ui/core/IconButton';
import FavoriteIcon from '@material-ui/icons/Favorite';
import SearchBar from "./SearchBar"
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import Gallery from "./Gallery";
// import { Text, View, StyleSheet,Image } from 'react-native';
//Buffer.from('anything','base64');


// const styles = theme => ({
//   actions: {
//     display: 'flex', 'flex-direction': 'row',
//   }
// });
const styles = theme =>({
  container: {
    flex: 1,
    justifyContent: 'space-between',
    backgroundColor: '#ecf0f1',
    padding: 8,
    flexDirection:'row',
    alignItems:'center'
  },
  actions:{
    display: 'flex',
    // flexDirection:'row',
  },
});

const urls = [
  "/images.jfif",
  "/images (2).jfif",
  "/images (3).jfif",
  "/images (4).jfif",
  "/images (5).jfif",
];
const urls2 = [
  "/images (4).jfif",
  "/images (5).jfif",
  "/images (2).jfif",
  "/images (5).jfif",
  "/images (4).jfif"
];
const urls3 = [
  "/images.jfif",
  "/images (2).jfif",
  "/images (3).jfif",
  "/images (4).jfif",
  "/images (5).jfif",
];


class Home extends React.Component {
  state1 = {users:[]};
  state = {
    images: [
    { id: 1, img_path: 'images.jfif' },
    { id: 2, img_path: 'images (1).jfif' },
    { id: 3, img_path: 'images (2).jfif' },
    { id: 4, img_path: 'images (3).jfif' },
    { id: 5, img_path: 'images (4).jfif' },
    { id: 6, img_path: 'images (5).jfif' },
    ]
    };
  //ReactDOM.render(<Gallery imageUrls={urls} />, document.getElementById("mount"));

   componentDidMount() {
      //const attr = require('dynamodb-data-types').AttributeValue;
      const getData = async () => {
        const data = await API.get("photostockapi", "/image/imagelist");
         //const wrapdata = attr.wrap(data);
        // const data = await API.get(
        //     "photostockapi",
        //     "/image/d7c9d03f-eea9-4a85-8768-df3f6ece31aa/get"
        // );
        //flatten(data)
        // dynamo-dt-attr-wrap(data)
        console.log(data);
        //this.setState({users: data.data.Item.img_path.S});
        console.log(this.state.users);
      };
      getData();
      
    }

    onSearch = (event) => {
      const target = event.target;
      if (!target.value || target.length < 3) { return }
      if (event.which !== 13) { return }
  
      // githubClient(target.value)
      //   .then((response) => {
      //     target.blur();
      //      this.setState({ ...this.state, value: 1 });
      //      this.resetRepos(data.items);
      //   })
    }
    handleClick = (event) =>  {
      this.props.onKudo(this.props.repo)
    }

    renderImages = (images) => {
     // const { classes } = this.props;
      // if (!images) { return [] }
        return this.state.images.map((image) => {
          return (
            <Grid item xs={12} md={3} key={image.id}>
              <GitHubRepo repo={image} />
            </Grid>
          );
        //  return (
          
        // //   <Card>
        // //     <CardContent>
        // //       <Typography component="p">
        // //         {<img
        // //   src={image.img_path}
        // //   width="300"
        // //   style={{ margin: "2px" }}
        // //   alt=""
        // // />}
        // //       </Typography>
        // //     </CardContent>
        // //   <CardActions className={classes.actions} disableActionSpacing>
        // //   <IconButton aria-label="Add to favorites" onClick={this.handleClick}>
        // //   <FavoriteIcon color={this.props.isKudo ? "secondary" : "primary"} />
        // //   </IconButton>
        // // </CardActions>
        // //   </Card>
        //  )
       });
    }
  
  render() {
    return (
      <div className={styles.root}>
        <SearchBar onSearch={this.onSearch} />
        <Tabs
          value={this.state.value}
          onChange={this.handleTabChange}
          indicatorColor="primary"
          textColor="primary"
          variant="fullWidth"
          style={{marginBottom:70 }}
        >
          <Tab label="Photo" />
          <Tab label="Search" />
        </Tabs>
        <Grid container spacing={10} style={{width: '100%'}}>
          <Gallery imageUrls={urls} />
        </Grid>
        <Grid container spacing={10} style={{width: '100%'}}>
          <Gallery imageUrls={urls2} />
        </Grid>
        <Grid container spacing={10} style={{width: '100%'}}>
          <Gallery imageUrls={urls3} />
        </Grid>
        
        )
        {/* <Grid container spacing={10} style={{padding: '20px 0'}}>
          <Gallery imageUrls={urls} />
        </Grid>  
        <Grid container spacing={10} style={{padding: '20px 0'}}>
          <Gallery imageUrls={urls2} />
        </Grid>   */}
      </div>
      //  <Card className={styles.card}>
      //       <CardContent>
      //         <Typography component="p">
      //         <Grid container spacing={10} style={{width: '100%'}}>
      //           <Gallery imageUrls={urls} />
      //        </Grid>
      //         </Typography>
      //       </CardContent>
      //      <CardActions className={styles.actions} disableActionSpacing>
      //     <IconButton aria-label="Add to favorites" onClick={this.handleClick}>
      //     <FavoriteIcon color={this.props.isKudo ? "secondary" : "primary"} />
      //     </IconButton>
      //   </CardActions>
      // </Card>
    )
  }
  // render() {
  //   return (
  //     <div>
  //     {/* <SearchBar onSearch={this.onSearch} />
  //     <Tabs
  //       value={this.state.value}
  //       onChange={this.handleTabChange}
  //       indicatorColor="primary"
  //       textColor="primary"
  //       variant="fullWidth"
  //     >
  //       <Tab label="Photo" />
  //       <Tab label="Search" />
  //     </Tabs>   */}
  //     <ul className='row' style={{display: 'flex' }}>
  //     {this.state.images.map(u =>
  //       <li key={u.id}>{
  //     <img
  //     src={u.img_path}
  //     width="300"
  //     style={{ margin: "2px" }}
  //     alt=""
  //   />}</li>)}
  //     </ul>

  // </div>
  //   )
  // }
   
   
   }

  export default Home;
