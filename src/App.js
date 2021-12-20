import { useAuthenticator } from "@aws-amplify/ui-react";
import Amplify, { Storage } from 'aws-amplify';

import { Home } from "./Home";
import { Login } from "./Login";
import "./styles.css";

import awsExports from "./aws-exports";
Amplify.configure(awsExports);

export async function uploadPhoto(e) {
  const file = e.target.files[0];
  try {
    await Storage.put(file.name, file, {
      contentType: "image/png", // contentType is optional
    });
  } catch (error) {
    console.log("Error uploading file: ", error);
  }
}

export default function App() {
  const { user } = useAuthenticator();

  if (user) {
    return <Home />;
  }

  return <Login />;
}
