import React from "react";
import { useAuthenticator, Grid, View } from "@aws-amplify/ui-react";

import { Header } from "./Header";

export default function Home() {
  const { signOut, user } = useAuthenticator();

  return (
    <div>
      <Grid templateRows="1fr 1fr">
        <View>
          <Header />
        </View>
        <View>
          <main>
            {/* Home画面はこの部分を変更する */}
            <h1>Hello {user.attributes.email}</h1>
            <button onClick={signOut}>Sign out</button>
          </main>
        </View>
      </Grid>
    </div>
  );
}
