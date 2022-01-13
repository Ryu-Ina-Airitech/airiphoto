import React, { useState, useEffect } from "react";
import S3 from "react-aws-s3";
import { FileUpload } from "./componets/file-upload/file-upload.component";
import { API } from "aws-amplify";
import { Header } from "./Header";
import SwipeableViews from 'react-swipeable-views';
import { View } from "@aws-amplify/ui-react";

const config = {
  bucketName: process.env.REACT_APP_BUCKET_NAME,
  region: process.env.REACT_APP_REGION,
  accessKeyId: process.env.REACT_APP_ACCESS_KEY_ID,
  secretAccessKey: process.env.REACT_APP_SECRET_ACCESS_KEY,
};
const ReactS3Client = new S3(config);

export function PhotoUpload() {
  const fileInput = React.useRef();
  const [newUserInfo, setNewUserInfo] = useState({
    profileImages: []
  });

  const updateUploadedFiles = (files) =>
    setNewUserInfo({ ...newUserInfo, profileImages: files });

  const handleSubmit = (event) => {
    event.preventDefault();
    let newArr = newUserInfo.profileImages;

    for (let i = 0; i < newArr.length; i++) {
      handleUpload(newArr[i]);
    }
  };

  const handleUpload = (file) => {
    let newFileName = file.name.replace(/\..+$/, "");

    console.log(file.size);
    const fsize = file.size;
    const files = Math.round((fsize / 1024));
    if (files >= 4096) {
      alert(
        "File too Big, please select a file less than 4mb");
    // } else if (files < 2048) {
    //   alert(
    //     "File too small, please select a file greater than 2mb");
    } else {
      ReactS3Client.uploadFile(file, newFileName).then((result) => {
        console.log("Upload Data →");
        console.log(result);
        console.log(result.location);
        console.log(result.bucket);

        if (result.status === 204) {
          console.log("success");
          const data = API.post("photostockapi", "/image/register", {
            body: {
              bucket_name: result.bucket,
              img_key: file.name,
              img_name: file.name,
              img_path: result.location,
              img_size: `${file.size}`,
              img_type: file.type,
              number_of_downloads: "1",
              photographic_equipment: "camera",
              private: "private",
              public: "",
              resolution: "1000",
              shoot_date: "2021-12-20",
              shoot_location: "tokyo",
              upload_date: file.lastModifiedDate,
              user_id: "user_hnin",
            },
          });
        } else {
          console.log("fail");
        }
      });
    };
  };

  return (
    <div>
      <View>
          <Header />
      </View>
      <form className="upload-steps" onSubmit={handleSubmit}>
        <FileUpload
          accept=".jpg,.png,.jpeg"
          label="Airitech Image(s)"
          multiple
          updateFilesCb={updateUploadedFiles}
        />
        <button type="submit">Upload to S3</button>
      </form>
    </div>
  );
}