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
// import React from 'react';
import { API } from "aws-amplify";
import SearchBar from "./SearchBar"
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import Grid from '@material-ui/core/Grid';
import React from "react";
import SwipeableViews from 'react-swipeable-views';
import { View } from "@aws-amplify/ui-react";
import { Header } from "./Header";
import {
  BrowserRouter as Router,
  Route,
  Link,
  // useParams,
  Navigate,
  Routes,
} from 'react-router-dom';

// import ImageCard from "./components/ImageCard";
// import { useNavigate } from 'react-router-dom';

// const ImageDetails = props => {
//   const { id } = useParams();

//   return (
//       <h1>Profile – {id}</h1>
//   )
// }
class Home extends React.Component {
  state = {
    value: 0,
    images:[],
    pics:[]
  };
  constructor(props) {
    super(props);
    this.setState({images:null})
  }

   componentDidMount() {
        const getData = async () => { 
          const response = await API.get("photostockapi", "/image/imagelist");
         // console.log(response.data.Items);
          this.setState({images: response.data.Items});
        };
        getData();  
    
}
handleTabChange = (event, value) => {
  this.setState({ value });
};

handleTabChangeIndex = index => {
  this.setState({ value: index });
};
onSearch = (event) => {
  const target = event.target;
  const getData = async () => { 
    const res = await API.get("photostockapi","/image/" + target.value + "/search");
    console.log(res.data.Items);
    this.setState({ ...this.state, value: 1 });
    this.setState({pics: res.data.Items});
  };
  getData(); 

}
  render() {
    return (
      // <Router>
        <div>
        <View>
          <Header />
        </View>
        <SearchBar onSearch={this.onSearch} />
          <Tabs
            value={this.state.value}
            onChange={this.handleTabChange}
            indicatorColor="primary"
            textColor="primary"
            variant="fullWidth"
          >
            <Tab label="Photo" />
            <Tab label="Search" />
          </Tabs>
          <SwipeableViews
            axis={'x-reverse'}
            index={this.state.value}
            onChangeIndex={this.handleTabChangeIndex}
          >
            <Grid container spacing={10} style={{padding: '20px 0', maxWidth: 400}}>
                <div style={{display: 'flex', flexDirection: 'row', marginLeft: 30, marginTop: 20,maxWidth: 250}}>
                {this.state.images.map(image =>
                  //<ImageCard key={image.img_id} image={image} />
                  <Link to={`/imagedetails/${image.img_id}`}>
                  <p style={{marginLeft: 10}}><img src={image.img_path} key={image.img_id}　alt="images" style={{width: 200, height: 150}} key={image.img_id} align="center"/><br clear="left"></br>{image.img_name}</p>
                  </Link>
                ) }
                </div>
              
            </Grid>
            <Grid container spacing={10} style={{padding: '20px 0'}}>
              <div style={{display: 'flex', flexDirection: 'row', marginLeft: 30, marginTop: 20}}>
              {this.state.pics.map(image =>
              // <ImageCard key={image.img_id} image={image} />
              <Link to={`/imagedetails/${image.img_id}`}>
                <p style={{marginLeft: 10}}><img src={image.img_path} key={image.img_id}　alt="images" style={{width: 200, height: 150}} key={image.img_id} align="center"/><br clear="left"></br>{image.img_name}</p>
              </Link>
              ) }
              </div>
            </Grid>
          </SwipeableViews>
      </div>
    // </Router>
    )
  }
}

export default Home;
