import React from "react";
import { useAuthenticator } from "@aws-amplify/ui-react";
import { Header } from "./Header";
// import UploadView from "./uploadView";

export function Home() {
  const { signOut, user } = useAuthenticator();

  return (
    <main>
      <Header />
      <h1>Hello {user.attributes.email}</h1>
      <button onClick={signOut}>Sign out</button>
      <a href="/UploadView">UploadView</a>
    </main>
  );
}
