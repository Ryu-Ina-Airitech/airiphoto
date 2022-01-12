
import { useAuthenticator } from "@aws-amplify/ui-react";
import { Amplify } from "aws-amplify";

import Home from "./Home";
import { API } from "aws-amplify";
import { useEffect } from "react";
import { Login } from "./Login";
import "./styles.css";
import ImageDetails from "./components/ImageDetails";
import {
  BrowserRouter as Router,
  Route,
  Link,
  // useParams,
  Navigate,
  Routes,
} from 'react-router-dom';

import awsExports from "./aws-exports";
Amplify.configure(awsExports);
const PrivateRoute = () => {
  const {user} = useAuthenticator(); // determine if authorized, from context or however you're doing it

  // If authorized, return an outlet that will render child elements
  // If not, return element that will navigate to login page
  return user ? <Home /> :  <Home />;
};
export default function App() {
  // useEffect(() => {
  //   const getData = async () => {
  //     const data = await API.post("photostockapi", "/image/register", {
  //         body: {
  //           user_id: "eieimon",
  //           img_key: "k001",
  //           bucket_name:"s3_bucket",
  //           img_name: "human.jpg",
  //           img_path: "/human.jpg",
  //           img_size: "1026",
  //           img_type: "jpg",
  //           resolution: "1280",
  //           photographic_equipment: "Camera",
  //           shoot_date: "2021-12-20",
  //           shoot_location: "Tokyo",
  //           number_of_downloads: "0",
  //           public: "public",
  //           private: "",
  //           upload_date: "2021-01-07",
  //         },
  //       });
  //     console.log(data);
  //   };
  //   getData();
  // });
  // const { user } = useAuthenticator();

  // const isAuth = useAuthenticator() ? <Home /> :  <Login />;

  // if (user) {
  //   return <Home />;
  // }

  return (
    <Router>
        <Routes>
                {/* <Route exact path='/' element={<ImageDetails/>}/> */}
                
                <Route exact path='/' element={<PrivateRoute/>} />
                <Route exact path='/imagedetails/:id' element={<ImageDetails/>} />

                 {/* <Route exact path='/home' element={<Home/>} /> */}
                {/* <Route exact path="/" element={<Login/>}/> */}
                {/* <Route exact path="/home" element={<Home/>}/> */}

                  {/* <Route exact path="/imagedetails/:id" render={(routeProps) => {
                  // const id = routeProps.match.params.id;
                  // const exists = characters.find((char) => char.name === id);

              //if (exists) return <Detail name={exists.name} />;
              return <Navigate to="/imagedetails/:id" />;
            }} 
          />*/}
        </Routes>
    </Router>
  );

  // return <Login />;
}
