import React from "react";
import { useAuthenticator } from "@aws-amplify/ui-react";
// import UploadView from "./uploadView";

export function Home() {
  const { signOut, user } = useAuthenticator();

  return (
    <main>
      <h1>Hello {user.attributes.email}</h1>
      <button onClick={signOut}>Sign out</button>
      <a href="/UploadView">UploadView</a>
    </main>
  );
}
