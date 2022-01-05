// import React, { Fragment } from "react";
import { useAuthenticator, Grid, View } from "@aws-amplify/ui-react";
import { Header } from "./Header";
// import UploadView from "./uploadView";

export function Home() {
  const { signOut, user } = useAuthenticator();

  return (
    <Grid templateRows="1fr 1fr">
      <View>
        <Header />
      </View>
      <View>
        <main>
          <h1>Hello {user.attributes.email}</h1>
          <button onClick={signOut}>Sign out</button>
          {/* <a href="/UploadView">UploadView</a> */}
        </main>
      </View>
    </Grid>
  );
}
