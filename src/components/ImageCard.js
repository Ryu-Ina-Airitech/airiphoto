import React from "react";
import { API } from "aws-amplify";
import { useState, useEffect } from "react";
import Button from '@material-ui/core/Button';
import fileSaver from 'file-saver';

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
  // const download = () => {
  //   var element = document.createElement("a");
  //   var file = new Blob(
  //     [
  //       image.img_name
  //     ],
  //     { type: "image/*" }
  //   );
  //   element.href = URL.createObjectURL(file);
  //   element.download = "image.jpg";
  //   element.click();
  // };
  // AWS.config.update({
  //   accessKeyId: process.env.REACT_APP_ACCESS_ID,
  //   secretAccessKey: process.env.REACT_APP_ACCESS_KEY,
  // });
  // const handleDownload = () => {
  //   const s3 = new AWS.S3();
  
  //   const params = {
  //     Bucket: process.env.REACT_APP_INTERNAL_BUCKET_NAME,
  //     Key: `templates/${template}`,
  //   };
  //   function downloadBlob(blob, name = `${template}.csv`) {
  //     // Convert your blob into a Blob URL (a special url that points to an object in the browser's memory)
  //     const blobUrl = URL.createObjectURL(blob);
  //     // Create a link element
  //     const link = document.createElement('a');
  //     // Set link's href to point to the Blob URL
  //     link.href = blobUrl;
  //     link.download = name;
  //     // Append link to the body
  //     document.body.appendChild(link);
  //     // Dispatch click event on the link
  //     // This is necessary as link.click() does not work on the latest firefox
  //     link.dispatchEvent(
  //       new MouseEvent('click', {
  //         bubbles: true,
  //         cancelable: true,
  //         view: window,
  //       })
  //     );

  //     // Remove link from body
  //     document.body.removeChild(link);
  //   }

  //   s3.getObject(params, (err, data) => {
  //     if (err) {
  //       console.log(err, err.stack);
  //     } else {
  //       let csvBlob = new Blob([data.Body.toString()], {
  //         type: 'text/csv;charset=utf-8;',
  //       });
  //       downloadBlob(csvBlob, `${template}`);
  //     }
  //   });
  // }
//   const saveFile = (img_path,img_name) => {
//     fileSaver.saveAs(img_path, img_name);
//     // fileSaver.saveAs(image.img_path,image.img_name);
//   //   fetch(image.img_path, {method: 'GET'})
//   // .then(res => {
//   //   return res.blob();
//   // })
//   // .then(blob => {
//   //   fileSaver.saveAs(blob, image.img_name);
//   // })
//   // .catch(err => {
//   //   console.error('err: ', err);
//   // })

//   // fetch(image.img_path, {method: 'GET'})
//   // .then(res => {
//   //   return res.blob();
//   // })
//   // .then(blob => {
//   //   var url = window.URL.createObjectURL(blob);
//   //   var a = document.createElement('a');
//   //   a.href = url;
//   //   a.download = image.img_name;
//   //   document.body.appendChild(a); 
//   //   a.click();  
//   //   setTimeout(
//   //     _ => { window.URL.revokeObjectURL(url); }, 
//   //     60000); 
//   //   a.remove(); 
//   // })
//   // .catch(err => {
//   //   console.error('err: ', err);
//   // })
//   // }
//   // const onDownload = () => {
//   //   const link = document.createElement("a");
//   //   link.download = image.img_name;
//   //   link.href = image.img_path;
//   //   link.click();
//   // };
// //   let downloadImage = (img_key) => {
// //     //let urlArray = url.split("/")
// //     // let url = image.img_path
// //     // let bucket = image.bucket_name
// //     // let key = image.img_key
// //     // let s3 = new AWS.S3({ params: { Bucket: bucket }})
// //     // let params = {Bucket: bucket, Key: key}
// //     // s3.getObject(params, (err, data) => {
// //     //   let blob=new Blob([data.Body], {type: data.ContentType});
// //     //   let link=document.createElement('a');
// //     //   link.href=window.URL.createObjectURL(blob);
// //     //   link.download=url;
// //     //   link.click();
    
// //     // })
// // console.log(image.img_path);
// // console.log(image.img_name);
// //     Storage.get(image.img_name, {expires: 60})
// // .then(result => console.log(result))
// // .catch(err => console.log(err));
// // fetch('img_path', {method: 'GET'})
// //   .then(res => {
// //     return res.blob();
// //   })
// //   .then(blob => {
// //     fileSaver.saveAs(blob, image.img_name).onwriteend = function() {
// //       setTimeout(function() { window.close(); }, 250);
// //   };
// //   })
// //   .catch(err => {
// //     console.error('err: ', err);
// //   })

//   }
  function downloadBlob(blob, filename) {
    const url = URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = filename || 'download';
    const clickHandler = () => {
      setTimeout(() => {
        URL.revokeObjectURL(url);
        a.removeEventListener('click', clickHandler);
      }, 150);
    };
    a.addEventListener('click', clickHandler, false);
    a.click();
    return a;
  }
  
  // usage
  async function download() {
    const result = await Storage.get(image.img_name, { download: true });
    downloadBlob(result.Body, image.img_name);
  }
  

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
      {/* <a href={download()} target="_blank">Download</a> */}
      {/* <a href={image.img_path}
   download={image.img_name}>Download!</a> */}
      {/* <Button onClick={saveFile(image.img_path,image.img_name)} variant="contained" color="primary">
      Download
    </Button> */}
      {/* <button className="img" onClick={saveFile}>
        Download PHOTO
      </button>
      <a href={image.img_path}
        download={image.img_name}>Download!</a> */}
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