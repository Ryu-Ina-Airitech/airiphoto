import React from "react";
import { useAuthenticator } from "@aws-amplify/ui-react";
import Amplify from "aws-amplify";

import Home from "./Home";
import { Login } from "./Login";

import "./styles.css";

import awsExports from "./aws-exports";

Amplify.configure(awsExports);

export default function App() {
  const { user } = useAuthenticator();

  if (user) {
    return <Home />;
  }
  return <Login />;
}

// import { Navigate, Outlet } from "react-router-dom";
// const PrivateRoute = () => {
//   const auth = useAuthenticator(); // determine if authorized, from context or however you're doing it

//   // If authorized, return an outlet that will render child elements
//   // If not, return element that will navigate to login page
//   return auth ? <Outlet /> : <Navigate to="/" />;
// };

/* <BrowserRouter>
        <Fragment>
          <Home />
          <Routes>
            <Route path="/" element={<PrivateRoute />}>
            <Route path="/Home" element={<Home />} />
            <Route path="/UploadView" element={<UploadView />} />
            <Route path="/Login" element={<Login />} />
            <Route path="/Profile" element={<Profile />} />
            </Route>
          </Routes>
        </Fragment>
      </BrowserRouter> */
