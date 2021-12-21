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
  return <div></div>;
}
