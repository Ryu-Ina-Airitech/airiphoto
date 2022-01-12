import { AmplifyProvider, Authenticator } from "@aws-amplify/ui-react";
// import { StrictMode } from "react";
import ReactDOM from "react-dom";

import App from "./App";

import Amplify from "aws-amplify";
import awsExports from "./aws-exports";
import { BrowserRouter } from "react-router-dom";

Amplify.configure(awsExports);

const rootElement = document.getElementById("root");
ReactDOM.render(
  // <StrictMode>
  <AmplifyProvider>
    <Authenticator.Provider>
      <BrowserRouter>
        <App />
      </BrowserRouter>
    </Authenticator.Provider>
  </AmplifyProvider>,
  // </StrictMode>,
  rootElement
);
