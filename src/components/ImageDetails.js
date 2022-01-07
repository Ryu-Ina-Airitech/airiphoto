import {useParams} from 'react-router-dom';
import { API } from "aws-amplify";
import ImageCard from "../components/ImageCard";
import React, { useState, useEffect } from "react";

  const ImageDetails = props => {
    const { id } = useParams();
    const [ image, setImage ] = useState([]);
      
  
  useEffect(() => {
    const getData = async () => { 
      const response = await API.get(
                "photostockapi",
                "/image/" + id +"/get"
              );
              console.log(response.data);
              setImage(response.data);
             console.log(image);
     // this.setState({imgdetails: response.data.Item});
     // console.log(this.state.imgdetails);
    };
    getData();
  });
  // useEffect(() => {
  //   const getData = async () => { 
  //     const response = await API.get(
  //               "photostockapi",
  //               "/image/" + id +"/get"
  //             );
  //             setImgdetails(response.data.Item);
  //    console.log(this.state.imgdetails);
  //    // this.setState({imgdetails: response.data.Item});
  //    // console.log(this.state.imgdetails);
  //   };
  //   getData();
  //   });
   
    return (
        <div style={{display: 'flex', flexDirection: 'row', marginLeft: 30, marginTop: 20}}>
          {/* <h1>Profile – {id}</h1> */}
            <ImageCard key={image.img_id} image={image} />
        </div>
    )
  };
  export default ImageDetails;