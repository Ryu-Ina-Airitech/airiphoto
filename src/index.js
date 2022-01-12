import { AmplifyProvider, Authenticator } from "@aws-amplify/ui-react";
import { StrictMode } from "react";
import ReactDOM from "react-dom";
import App from "./App";
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import ImageDetails from "./components/ImageDetails";
import  Home from "./Home";
import { Login } from "./Login";


import Amplify from "aws-amplify";
import awsExports from "./aws-exports";

//awsExports.oauth.redirectSignIn = 'http://localhost:3000/home/';
// awsExports.oauth.redirectSignOut = 'http://localhost:3000/';
awsExports.oauth.redirectSignIn = `${window.location.origin}/`;
awsExports.oauth.redirectSignOut = `${window.location.origin}/`;

Amplify.configure(awsExports);

const rootElement = document.getElementById("root");
ReactDOM.render(
  <StrictMode>
    <AmplifyProvider>
      <Authenticator.Provider>
        <App />
      </Authenticator.Provider>
    </AmplifyProvider>
  </StrictMode>,
  rootElement

);
