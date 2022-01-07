import React from "react";
import { API } from "aws-amplify";
import { useState, useEffect } from "react";
import Button from '@material-ui/core/Button';

const ImageCard = ({ image }) => {
  //const tags = image.tags.split(",");
  //const [ user, setUser ] = useState([]);
      
  
  // useEffect(() => {
  //   const getData = async () => { 
  //     const response = await API.get(
  //               "photostockapi",
  //               "/user/" + image.user_id +"/get"
  //             );
  //             console.log(response.data);
  //             setUser(response.data);
  //    // this.setState({imgdetails: response.data.Item});
  //    console.log(user);
  //   };
  //   getData();
  // });
  const download = () => {
    var element = document.createElement("a");
    var file = new Blob(
      [
        image.img_name
      ],
      { type: "image/*" }
    );
    element.href = URL.createObjectURL(file);
    element.download = "image.jpg";
    element.click();
  };

  return (
    <div className="max-w-sm rounded overflow-hidden shadow-lg mx-auto">
      <div style={{display: 'flex', flexDirection: 'row', marginLeft: 10, marginTop: 10}}>
      <img src={image.img_path} alt="" className="w-full" style={{width: 600, height: 250}}/>
      </div>
      <div className="px-6 py-4">
        <div className="font-bold text-purple-500 text-xl mb-2" style={{marginLeft: 10}}> 
           {image.img_name}
        </div>
        <br></br>
        <div className="font-bold text-purple-500 text-xl mb-4" style={{marginLeft: 10}}> 
        <strong> Photo By {image.user_id} </strong>
        </div>
        <ul>
        <li>
            <strong>Views: </strong>
            {image.number_of_downloads}
          </li>
          <li>
            <strong>Downloads: </strong>
            {image.number_of_downloads}
          </li>
          <li>
            <strong>Likes: </strong>
            {image.number_of_downloads}
          </li>
          <li>
            <strong>FileSize: </strong>
            {image.img_size}
          </li>
          <li>
            <strong>File Type: </strong>
            {image.img_type}
          </li>
          <li>
            <strong>Resoluton: </strong>
            {image.resolution}
          </li>
          <li>
            <strong>Photographic Equipment: </strong>
            {image.photographic_equipment}
          </li>
          <li>
            <strong>Shoot Date: </strong>
            {image.shoot_date}
          </li>
          <li>
            <strong>Shoot Location: </strong>
            {image.shoot_location}
          </li>
          <li>
            <strong>Upload Date: </strong>
            {image.upload_date}
          </li>
        </ul>
      </div>
      <a href={image.img_path} target="_blank" rel="noopener noreferrer" download>
        <Button style = {{color:'white',backgroundColor:'#0000FF'}}>
            <i className="fas fa-download"/>
            Download Photo
        </Button>
      </a>
      {/* <div className="App">
      <a
        href= {image.name}
        download
        onClick={() => download()}
      >
        <i className="fa fa-download" />
        download
      </a>
    </div> */}
      {/* <div className="px-6 py-4">
        {tags.map((tag, index) => (
          <span
            key={index}
            className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2"
          >
            #{tag}
          </span>
        ))}
      </div> */}
    </div>
  );
};

export default ImageCard;