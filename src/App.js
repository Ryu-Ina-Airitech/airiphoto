import React, { Fragment } from "react";
import { useAuthenticator } from "@aws-amplify/ui-react";
import Amplify from "aws-amplify";

import { Home } from "./Home";
import { Login } from "./Login";
import "./styles.css";
import { Navigate, Outlet } from "react-router-dom";
import awsExports from "./aws-exports";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { UploadView } from "./uploadView";

Amplify.configure(awsExports);

const PrivateRoute = () => {
  const auth = useAuthenticator(); // determine if authorized, from context or however you're doing it

  // If authorized, return an outlet that will render child elements
  // If not, return element that will navigate to login page
  return auth ? <Outlet /> : <Navigate to="/" />;
};

export default function App() {
  const { user } = useAuthenticator();

  if (user) {
    return (
      <BrowserRouter>
        <Fragment>
          <Routes>
            <Route path="/" element={<PrivateRoute />}>
              <Route path="/Home" element={<Home />} />
              <Route path="/UploadView" element={<UploadView />} />
            </Route>
          </Routes>
        </Fragment>
      </BrowserRouter>
    );
  }

  return <Login />;
}
