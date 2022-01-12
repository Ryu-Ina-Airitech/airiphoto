import { API } from "aws-amplify";
import { useEffect } from "react";

export function DBTest() {
  useEffect(() => {
    const getData = async () => {
      const data = await API.post("photostockdbapi", "/put", {
        body: {
          user_name: "eieimon",
          email: "eiei@airitech.com",
          password: "aX2b3Cyww",
          created_time: "2021-12-16",
          birthdate: "1995-12-25",
          profile_photo: "profile.jpg",
          biography: "Hello, My name is eieimon,Nice to meet you",
        },
      });
      console.log(data);
    };
    getData();
  });
  // useEffect(() => {
  //   const getData = async () => {
      //register data
      // const data = await API.post("photostockapi", "/user/register", {
      //   body: {
      //     user_name: "susu",
      //     email: "susu@airitech.com",
      //     password: "aX2b3Cyww",
      //     created_time: "2021-12-16",
      //     birthdate: "1995-12-25",
      //     profile_photo: "profile.jpg",
      //     biography: "Hello, My name is eieimon,Nice to meet you",
      //   },
      // });
      // output user list
      // const data = await API.get("photostockapi", "/user/userlist");
      // output user details
      // const data = await API.get(
      //   "photostockapi",
      //   "/user/50d05561-33a7-4ad9-bfc9-c5ffa54a401f/get"
      // );
      //delete user
      // const data = await API.del(
      //   "photostockapi",
      //   "/user/c19e529b-e72d-428f-8675-c3f1e8058656/delete"
      // );
      //update user
      // const data = await API.put(
      //   "photostockapi",
      //   "/user/50d05561-33a7-4ad9-bfc9-c5ffa54a401f/update",
      //   {
      //     body: {
      //       user_name: "aung aung",
      //       email: "aungaung@airitech.com",
      //       password: "123xcvtyr",
      //       created_time: "2021-12-16",
      //       birthdate: "1995-12-25",
      //       profile_photo: "profile.jpg",
      //       biography: "Hello, My name is aungaung,Nice to meet you",
      //     },
      //   }
      // );
      //register image
      // const data = await API.post("photostockapi", "/image/register", {
      //   body: {
      //     user_id: "9b20b3f6-1a18-43dc-a110-1cc901b8a788",
      //     img_key: "",
      //     bucket_name: "",
      //     img_name: "nature.png",
      //     img_path: "C:UsersEi Ei MonDesktopAiriPhoto\nature.png",
      //     img_size: "1026",
      //     img_type: "png",
      //     resolution: "1000",
      //     photographic_equipment: "camera",
      //     shoot_date: "2021-12-20",
      //     shoot_location: "Tokyo",
      //     number_of_downloads: "1",
      //     public: "public",
      //     private: "",
      //     upload_date: "2021-12-20",
      //   },
      // });
      // output image list
      // const data = await API.get("photostockapi", "/image/imagelist");

      // output image details
      // const data = await API.get(
      //   "photostockapi",
      //   "/image/d7c9d03f-eea9-4a85-8768-df3f6ece31aa/get"
      // );
      //delete image
      // const data = await API.del(
      //   "photostockapi",
      //   "/image/bd9aa85d-98b1-4b72-934f-da9ab6f76508/delete"
      // );
      //update image
      // const data = await API.put(
      //   "photostockapi",
      //   "/image/d7c9d03f-eea9-4a85-8768-df3f6ece31aa/update",
      //   {
      //     body: {
      //       user_id: "123-9b20b3f6-1a18-43dc-a110-1cc901b8a788",
      //       img_name: "sakura2.png",
      //       img_path: "C:UsersEi Ei MonDesktopAiriPhotosakura.png",
      //       img_size: "1024",
      //       img_type: "png",
      //       resolution: "1000",
      //       photographic_equipment: "iphone",
      //       shoot_date: "2021-12-20",
      //       shoot_location: "Nagoya",
      //       number_of_downloads: "1",
      //       public: "public",
      //       private: "",
      //       upload_date: "2021-12-20",
      //     },
      //   }
      // );

      // Tags Operatons
      // register tagsName
      // const data = await API.post("photostockapi", "/image/tag/register", {
      //   body: {
      //     tag_name: "Nature",
      //   },
      // });

      //update tagName
      // const data = await API.put(
      //   "photostockapi",
      //   "/image/tag/4a22d9e2-09d2-493d-bd86-46b160787d44/update",
      //   {
      //     body: {
      //       tag_name: "People",
      //     },
      //   }
      // );

      // output tagname list
      // const data = await API.get("photostockapi", "/image/tag/tagnamelist");

      // output tag details
      // const data = await API.get(
      //   "photostockapi",
      //   "/image/tag/4a22d9e2-09d2-493d-bd86-46b160787d44/get"
      // );
      //delete tag
      // const data = await API.del(
      //   "photostockapi",
      //   "/image/tag/4a22d9e2-09d2-493d-bd86-46b160787d44/delete"
      // );

      // ImageInfoTag Operation
      //register ImageInfoTag
      // const data = await API.post(
      //   "photostockapi",
      //   "/image/imageinfotag/register",
      //   {
      //     body: {
      //       img_id: "7a227ea2-bb72-4e8a-bf8a-2f1f4377f8a2",
      //       tag0_id: "c0649f9f-56d9-4c8f-b9aa-1a47b65ef908",
      //       tag1_id: "d86f030f-12a0-43df-82c2-43ed4ef6984a",
      //       tag2_id: "4a22d9e2-09d2-493d-bd86-46b160787d44",
      //       tag3_id: "5ea37384-4581-49da-8154-7c861dd55ccc",
      //       tag4_id: "",
      //       tag5_id: "",
      //       tag6_id: "",
      //       tag7_id: "",
      //       tag8_id: "",
      //       tag9_id: "",
      //     },
      //   }
      // );
      //update tagInfo
      // const data = await API.put(
      //   "photostockapi",
      //   "/image/imageinfotag/f7db4396-53e4-47c6-b41d-55b90e595225/update",
      //   {
      //     body: {
      //       img_id: "7a227ea2-bb72-4e8a-bf8a-2f1f4377f8a2",
      //       tag0_id: "c0649f9f-56d9-4c8f-b9aa-1a47b65ef908",
      //       tag1_id: "d86f030f-12a0-43df-82c2-43ed4ef6984a",
      //       tag2_id: "4a22d9e2-09d2-493d-bd86-46b160787d44",
      //       tag3_id: "tag001",
      //       tag4_id: "",
      //       tag5_id: "",
      //       tag6_id: "",
      //       tag7_id: "",
      //       tag8_id: "",
      //       tag9_id: "",
      //     },
      //   }
      // );

      // output tags list
      // const data = await API.get(
      //   "photostockapi",
      //   "/image/imageinfotag/taglist"
      // );
      // output tag details
      // const data = await API.get(
      //   "photostockapi",
      //   "/image/imageinfotag/f7db4396-53e4-47c6-b41d-55b90e595225/get"
      // );
      //delete tag
      // const data = await API.del(
      //   "photostockapi",
      //   "/image/imageinfotag/1d08ab2a-6134-46ce-a02c-5ddf97f68328/delete"
      // );

  //     console.log(data);
  //   };
  //   getData();
  // });
  return <div></div>;
}
